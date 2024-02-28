---
title: FROM
lastUpdate: 2023-10-12
---

<script>
    import DuckDbInstantiator from "$lib/components/DuckDBInstantiator.svelte";
    import DuckDBEditor from "$lib/components/DuckDBEditor.svelte";

    let connProm;
    let dbInit;
    let query =
`
SELECT 1,2,3,4
`;

let query2 =
`
SELECT 1,2,3
`;

</script>

<DuckDbInstantiator bind:connProm bind:dbInit />

FROM

<DuckDBEditor value={query2} bind:connProm bind:dbInit />

<DuckDBEditor value='SELECT 1' bind:connProm bind:dbInit />
