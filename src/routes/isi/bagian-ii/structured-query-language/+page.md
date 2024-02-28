---
title: SQL: Structured Query Language
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

Pengantar

```sql title="Test.sql" ln
abort absolute access action add admin after aggregate all also alter always analyse analyze and anti any array as asc asof assertion assignment asymmetric at attach attribute authorization
backward before begin between bigint binary bit boolean both by
cache call called cascade cascaded case cast catalog centuries century chain char character characteristics check checkpoint class close cluster coalesce collate collation column columns comment comments commit committed compression concurrently configuration conflict connection constraint constraints content continue conversion copy cost create cross csv cube current cursor cycle
data database day days deallocate dec decade decades decimal declare default defaults deferrable deferred definer delete delimiter delimiters depends desc describe detach dictionary disable discard distinct do document domain double drop
each else enable encoding encrypted end enum escape event except exclude excluding exclusive execute exists explain export export_state extension external extract
false family fetch filter first float following for force foreign forward freeze from full function functions
generated glob global grant granted group grouping grouping_id groups
handler having header hold hour hours
identity if ignore ilike immediate immutable implicit import in include including increment index indexes inherit inherits initially inline inner inout input insensitive insert install instead int integer intersect interval into invoker is isnull isolation
join json
key
label language large last lateral leading leakproof left level like limit listen load local location lock locked logged
macro map mapping match materialized maxvalue method microsecond microseconds millennia millennium millisecond milliseconds minute minutes minvalue mode month months move
name names national natural nchar new next no none not nothing notify notnull nowait null nullif nulls numeric
object of off offset oids old on only operator option options or order ordinality others out outer over overlaps overlay overriding owned owner
parallel parser partial partition passing password percent persistent pivot pivot_longer pivot_wider placing plans policy position positional pragma preceding precision prepare prepared preserve primary prior privileges procedural procedure program publication
qualify quote
range read real reassign recheck recursive ref references referencing refresh reindex relative release rename repeatable replace replica reset respect restart restrict returning returns revoke right role rollback rollup row rows rule
sample savepoint schema schemas scope scroll search second seconds secret security select semi sequence sequences serializable server session set setof sets share show similar simple skip smallint snapshot some sql stable standalone start statement statistics stdin stdout storage stored strict strip struct subscription substring summarize symmetric sysid system
table tables tablesample tablespace temp template temporary text then ties time timestamp to trailing transaction transform treat trigger trim true truncate trusted try_cast type types
unbounded uncommitted unencrypted union unique unknown unlisten unlogged unpivot until update use user using
vacuum valid validate validator value values varchar variadic varying verbose version view views virtual volatile
week weeks when where whitespace window with within without work wrapper write
xml xmlattributes xmlconcat xmlelement xmlexists xmlforest xmlnamespaces xmlparse xmlpi xmlroot xmlserialize xmltable
year years yes
zone
```


<DuckDBEditor value={query2} bind:connProm bind:dbInit />

<DuckDBEditor value='SELECT 1' bind:connProm bind:dbInit />
