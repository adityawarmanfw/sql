<script>
	import { CodeMirror, sql, DuckDBDialect } from '$lib/playground/codemirror.js';
	import { TabulatorFull as Tabulator } from 'tabulator-tables';

	function uint32ArrayToNumber(uint32Array, decimal) {
		const combinedValue = uint32Array.reduce((acc, val, index) => {
			return acc + val * Math.pow(2, 32 * index);
		}, 0);
		return combinedValue / Math.pow(10, decimal);
	}

	function transformRows(schema, rows) {
		return rows.map((row) => {
			const transformedRow = {};
			schema.forEach((column) => {
				const columnName = column.field;
				const value = row[columnName];

				if (value === null || value === undefined) {
					// Leave the value as null if it's null or undefined
					transformedRow[columnName] = null;
				} else if (column.type === 'Date') {
					transformedRow[columnName] = new Date(value).toISOString().split('T')[0];
				} else if (column.type === 'Timestamp') {
					const timestampDate = new Date(value);
					transformedRow[columnName] = timestampDate.toISOString();
				} else if (column.type === 'Interval') {
					transformedRow[columnName] = new String(value);
				} else if (column.type === 'Decimal') {
					transformedRow[columnName] =  new String(uint32ArrayToNumber(value, column.type2.scale));
				} else {
					transformedRow[columnName] = value;
				}
			});
			return transformedRow;
		});
	}

	async function execute(query) {
		status = 'Mengeksekusi kueri...';
		const conn = await connProm;
		const urlPattern = /(https?:\/\/[^\s\/$.?#].[^\s]*\.json)/i;
		const match = query.match(urlPattern);
		if (match) {
			const url = match[1];
			// Check if URL is already registered, if not fetch and register
			if (!registeredJsonUrls.includes(url)) {
				console.log('JSON URL:', url);
				try {
					let response = await fetch(url);
					let json = await response.json();
					const db = await dbInit;
					await db.registerFileText(url, JSON.stringify(json));
					await conn.insertJSONFromPath(url, { schema: 'main', name: url });

					// Add the registered URL to the list
					registeredJsonUrls.push(url);
				} catch (error) {
					results = new Promise((resolve, reject) => reject(error));
					status = 'Galat';
				}
			}
		}

		try {
			let startTime = Date.now();
			const res = await conn.query(query);
			const rows = res.toArray().map((r) => Object.fromEntries(r));
			const schema = res.schema.fields.map((r) => ({
				title: r.name,
				field: r.name,
				type: r.type.constructor[Symbol.toStringTag],
				type2: r.type
			}));

			const transformedRows = transformRows(schema, rows);
			results = {
				rows: transformedRows,
				columns: res.schema.fields.map((r) => ({
					title: r.name,
					field: r.name,
					headerSort: false,
					formatter: 'plaintext'
				}))
			};

			if (results) {
				let endTime = Date.now();
				let executionTime = endTime - startTime;
				status = `Kueri selesai dalam ${executionTime} milidetik.`;
			} else {
				status = '';
			}
		} catch (error) {
			results = new Promise((resolve, reject) => reject(error));
			status = 'Error';
		}
	}

	function tableAction(node, { data, columns }) {
		let table = new Tabulator(node, {
			height: data.length < 10 ? 'auto' : '30rem',
			data,
			columns,
			nestedFieldSeparator: false,
			clipboard: true,
			clipboardCopyStyled: false,
			nestedFieldSeparator: false, //disable nested data parsing
		});

		return {
			update: ({ data, columns }) => {
				if (data.length > 10) {
					table.setHeight('30rem');
				}
				table.setColumns(columns);
				table.setData(data);
			}
		};
	}

	const cmStyle = {
		'&': {
			maxWidth: '100%',
			marginBottom: '10px'
		},
		'.cm-scroller': {
			overflow: 'auto'
		},
		'.cm-content, .cm-gutter': {
			minHeight: '2rem',
			fontFamily: 'Iosevka Term SS08 Web',
			fontSize: '0.95em'
		}
	};

	let sqlConfig = { upperCaseKeywords: false, dialect: DuckDBDialect };

	let value = '';
	let status = '';
	let connProm;
	let dbInit;
	let results = new Promise(() => ({}));
	let renderedValue = value.split('\n').slice(1, -1).join('\n')

	export { value, connProm, dbInit };
</script>

<div class="svp-code-block-wrapper">
	<div class="svp-code-block--title">DuckDB Playground</div>
	<div class="svp-code-block">
		<div class="my-4-mx-2">
			<CodeMirror bind:value={renderedValue} styles={cmStyle} lang={sql(sqlConfig)} />
		</div>
		<div class="my-4-mx-2">
			<button
				on:click={() => {
					execute(renderedValue);
				}}
				title="Execute Query"
				style=""
			>
				Eksekusi
			</button>
			<span class="my-4-mx-2">{status}</span>
		</div>

		{#await results then r}
			<div class="my-4-mx-2">
				<div class="tabulator" use:tableAction={{ data: r.rows, columns: r.columns }} />
			</div>
		{:catch error}
			<div class="my-4-mx-2">
				<p style="color: red">{error.message}</p>
			</div>
		{/await}
	</div>
</div>

<style lang="css">
	.tabulator {
		margin-top: 1rem;
		margin-bottom: 1rem;
		margin-left: 0.5rem;
		margin-right: 0.5rem;
		font-family: 'Iosevka Term SS08 Web', Consolas, 'Lucida Console', Courier, monospace;
		font-size: 0.8em;
	}

	.my-4-mx-2 {
		margin-top: 1rem;
		margin-bottom: 1rem;
		margin-left: 0.5rem;
		margin-right: 0.5rem;
	}

	.cb {
		color: #7B30D0;
	}
</style>

<svelte:head>
	<link
		href="/css/tabulator.css"
		rel="stylesheet"
	/>
</svelte:head>