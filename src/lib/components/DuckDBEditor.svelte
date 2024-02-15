<script>
	import { CodeMirror, sql, DuckDBDialect } from '$lib/playground/codemirror';
	import { TabulatorFull as Tabulator } from 'tabulator-tables';

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
				type: r.type.constructor[Symbol.toStringTag]
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
				status = `Kueri selesai dieksekusi dalam ${executionTime} milidetik.`;
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

	let sqlConfig = { upperCaseKeywords: true, dialect: DuckDBDialect };

	let value = '';
	let status = '';
	let connProm;
	let dbInit;
	let results = new Promise(() => ({}));

	export { value, connProm, dbInit };
</script>

<div class="border border-primary-300 rounded-lg py-2 px-4 block my-4">
	<div class="my-4">
		<CodeMirror bind:value styles={cmStyle} lang={sql(sqlConfig)} />
	</div>
	<div class="my-4">
		<button
			on:click={() => {
				execute(value);
			}}
			title="Execute Query"
			style=""
		>
			Eksekusi
		</button>
		<span class="my-2">{status}</span>
	</div>

	{#await results then r}
		<div class="my-4">
			<div class="tabulator" use:tableAction={{ data: r.rows, columns: r.columns }} />
		</div>
	{:catch error}
		<div class="my-4">
			<p style="color: red">{error.message}</p>
		</div>
	{/await}
</div>

<style lang="css">
	.tabulator {
		margin-top: 10px;
		font-family: 'Iosevka Term SS08 Web', Consolas, 'Lucida Console', Courier, monospace;
		font-size: 0.8em;
	}
</style>

<svelte:head>
	<link
		href="/css/tabulator.css"
		rel="stylesheet"
	/>
</svelte:head>