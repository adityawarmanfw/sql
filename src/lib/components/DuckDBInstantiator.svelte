<script>
	import { onMount } from 'svelte';
	import { initDB } from '$lib/playground/duckdb';

	let connProm;
	let dbInit;

	onMount(async () => {
		return {connProm, dbInit} = load_db();
	});

	async function load_db() {
		try {
			console.log('Instantiating DuckDB...');
			dbInit = await initDB();
			connProm = await dbInit.connect(':memory:');
			if (connProm) {
				console.log('DuckDB Instantiated!'); // Update the new status
			}
			return {connProm, dbInit};
		} catch (error) {
			results = new Promise((resolve, reject) => reject(error));
			
		}
	}

	export {connProm, dbInit}

</script>