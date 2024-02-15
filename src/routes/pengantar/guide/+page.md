---
title: Guide
lastUpdate: 2023-10-12
---

<script>
    import DuckDbInstantiator from "$lib/components/DuckDBInstantiator.svelte";
    import DuckDBEditor from "$lib/components/DuckDBEditor.svelte";

    let connProm;
    let dbInit;
    let query = `
SELECT 1,2,3,4
`;
</script>

<DuckDbInstantiator bind:connProm bind:dbInit />

Pengantar

```sql title="Test.sql"
SELECT * FROM BETWEEN AND WHERE IN ORDER BY OVER PARTITION BY
ROWS UNBOUNDED PRECEEDING TABLE VALUES CREATE OR REPLACE MACRO TABLE
```


<DuckDBEditor value={query} bind:connProm bind:dbInit />
