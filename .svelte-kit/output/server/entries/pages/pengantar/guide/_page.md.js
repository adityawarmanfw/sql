import { c as create_ssr_component, a as add_attribute, v as validate_component, j as createEventDispatcher, o as onDestroy, e as escape, l as is_promise, p as noop } from "../../../../chunks/ssr.js";
import { P as PageLayout } from "../../../../chunks/CopyCode.svelte_svelte_type_style_lang.js";
import "../../../../chunks/Link.svelte_svelte_type_style_lang.js";
import { SQLDialect, sql } from "@codemirror/lang-sql";
import { basicSetup } from "codemirror";
import { EditorView, keymap, placeholder } from "@codemirror/view";
import { EditorState } from "@codemirror/state";
import { indentWithTab } from "@codemirror/commands";
import { indentUnit } from "@codemirror/language";
const Copy = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M7.024 3.75c0-.966.784-1.75 1.75-1.75H20.25c.966 0 1.75.784 1.75 1.75v11.498a1.75 1.75 0 0 1-1.75 1.75H8.774a1.75 1.75 0 0 1-1.75-1.75Zm1.75-.25a.25.25 0 0 0-.25.25v11.498c0 .139.112.25.25.25H20.25a.25.25 0 0 0 .25-.25V3.75a.25.25 0 0 0-.25-.25Z"></path><path fill="currentColor" d="M1.995 10.749a1.75 1.75 0 0 1 1.75-1.751H5.25a.75.75 0 1 1 0 1.5H3.745a.25.25 0 0 0-.25.25L3.5 20.25c0 .138.111.25.25.25h9.5a.25.25 0 0 0 .25-.25v-1.51a.75.75 0 1 1 1.5 0v1.51A1.75 1.75 0 0 1 13.25 22h-9.5A1.75 1.75 0 0 1 2 20.25l-.005-9.501Z"></path></svg>`;
});
const css$2 = {
  code: ".svp-code-bock--copy-code{--at-apply:'opacity-0 events-none absolute top-[6px] right-[12px] cursor-pointer z-200 w-[28px] h-[28px] text-4 rounded-lg border-solid border-2 border-gray-3 hover:border-svp-primary hover:text-svp-primary flex items-center justify-center transition-all transition-300'}.svp-code-block:hover .svp-code-bock--copy-code{--at-apply:opacity-100 events-all}",
  map: null
};
const CopyCode = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let container;
  $$result.css.add(css$2);
  return `${`<div class="svp-code-bock--copy-code" role="button" tabindex="0" aria-label="Copy code"${add_attribute("this", container, 0)}>${validate_component(Copy, "Copy").$$render($$result, {}, {}, {})}</div>`}`;
});
const DuckDBInstantiator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { connProm } = $$props;
  let { dbInit } = $$props;
  if ($$props.connProm === void 0 && $$bindings.connProm && connProm !== void 0)
    $$bindings.connProm(connProm);
  if ($$props.dbInit === void 0 && $$bindings.dbInit && dbInit !== void 0)
    $$bindings.dbInit(dbInit);
  return ``;
});
const css$1 = {
  code: ".codemirror-wrapper.svelte-kcx0g9 .cm-focused{outline:none}.scm-waiting.svelte-kcx0g9{position:relative}.scm-waiting__loading.svelte-kcx0g9{position:absolute;top:0;left:0;bottom:0;right:0;background-color:rgba(255, 255, 255, 0.5)}.scm-loading.svelte-kcx0g9{display:flex;align-items:center;justify-content:center}.scm-loading__spinner.svelte-kcx0g9{width:1rem;height:1rem;border-radius:100%;border:solid 2px #000;border-top-color:transparent;margin-right:0.75rem;animation:svelte-kcx0g9-spin 1s linear infinite}.scm-loading__text.svelte-kcx0g9{font-family:sans-serif}.scm-pre.svelte-kcx0g9{font-size:0.85rem;font-family:monospace;tab-size:2;-moz-tab-size:2;resize:none;pointer-events:none;user-select:none;overflow:auto}@keyframes svelte-kcx0g9-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}",
  map: null
};
const CodeMirror = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: classes = "" } = $$props;
  let { value = "" } = $$props;
  let { basic = true } = $$props;
  let { lang = void 0 } = $$props;
  let { theme = void 0 } = $$props;
  let { extensions = [] } = $$props;
  let { useTab = true } = $$props;
  let { tabSize = 2 } = $$props;
  let { styles = void 0 } = $$props;
  let { lineWrapping = false } = $$props;
  let { editable = true } = $$props;
  let { readonly = false } = $$props;
  let { placeholder: placeholder$1 = void 0 } = $$props;
  let { nodebounce = false } = $$props;
  const is_browser = typeof window !== "undefined";
  createEventDispatcher();
  let element;
  let view;
  onDestroy(() => view?.destroy());
  function get_base_extensions(basic2, useTab2, tabSize2, lineWrapping2, placeholder2, editable2, readonly2, lang2) {
    const extensions2 = [
      indentUnit.of(" ".repeat(tabSize2)),
      EditorView.editable.of(editable2),
      EditorState.readOnly.of(readonly2)
    ];
    if (basic2)
      extensions2.push(basicSetup);
    if (useTab2)
      extensions2.push(keymap.of([indentWithTab]));
    if (placeholder2)
      extensions2.push(placeholder(placeholder2));
    if (lang2)
      extensions2.push(lang2);
    if (lineWrapping2)
      extensions2.push(EditorView.lineWrapping);
    return extensions2;
  }
  function get_theme(theme2, styles2) {
    const extensions2 = [];
    if (styles2)
      extensions2.push(EditorView.theme(styles2));
    if (theme2)
      extensions2.push(theme2);
    return extensions2;
  }
  if ($$props.class === void 0 && $$bindings.class && classes !== void 0)
    $$bindings.class(classes);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.basic === void 0 && $$bindings.basic && basic !== void 0)
    $$bindings.basic(basic);
  if ($$props.lang === void 0 && $$bindings.lang && lang !== void 0)
    $$bindings.lang(lang);
  if ($$props.theme === void 0 && $$bindings.theme && theme !== void 0)
    $$bindings.theme(theme);
  if ($$props.extensions === void 0 && $$bindings.extensions && extensions !== void 0)
    $$bindings.extensions(extensions);
  if ($$props.useTab === void 0 && $$bindings.useTab && useTab !== void 0)
    $$bindings.useTab(useTab);
  if ($$props.tabSize === void 0 && $$bindings.tabSize && tabSize !== void 0)
    $$bindings.tabSize(tabSize);
  if ($$props.styles === void 0 && $$bindings.styles && styles !== void 0)
    $$bindings.styles(styles);
  if ($$props.lineWrapping === void 0 && $$bindings.lineWrapping && lineWrapping !== void 0)
    $$bindings.lineWrapping(lineWrapping);
  if ($$props.editable === void 0 && $$bindings.editable && editable !== void 0)
    $$bindings.editable(editable);
  if ($$props.readonly === void 0 && $$bindings.readonly && readonly !== void 0)
    $$bindings.readonly(readonly);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder$1 !== void 0)
    $$bindings.placeholder(placeholder$1);
  if ($$props.nodebounce === void 0 && $$bindings.nodebounce && nodebounce !== void 0)
    $$bindings.nodebounce(nodebounce);
  $$result.css.add(css$1);
  [
    ...get_base_extensions(basic, useTab, tabSize, lineWrapping, placeholder$1, editable, readonly, lang),
    ...get_theme(theme, styles),
    ...extensions
  ];
  return `${is_browser ? `<div class="${"codemirror-wrapper " + escape(classes, true) + " svelte-kcx0g9"}"${add_attribute("this", element, 0)}></div>` : `<div class="${"scm-waiting " + escape(classes, true) + " svelte-kcx0g9"}"><div class="scm-waiting__loading scm-loading svelte-kcx0g9" data-svelte-h="svelte-1pxusly"><div class="scm-loading__spinner svelte-kcx0g9"></div> <p class="scm-loading__text svelte-kcx0g9">Loading editor...</p></div> <pre class="scm-pre cm-editor svelte-kcx0g9">${escape(value)}</pre></div>`}`;
});
const otherFunctions = "percentile_cont row_number rank dense_rank rank_dense percent_rank cume_dist ntile lag lead first_value last_value nth_value first last";
const DuckDBDialectSpec = {
  operatorChars: "*+-%<>!=&|^",
  charSetCasts: true,
  doubleQuotedStrings: false,
  unquotedBitLiterals: true,
  hashComments: false,
  spaceAfterDashes: false,
  specialVar: "@?",
  identifierQuotes: "`",
  keywords: otherFunctions + " !__postfix !~~ !~~* % & * ** + - / // << >> @ ^ ^@ abort abs absolute access access_mode acos action add admin after age aggregate alias all all_profiling_output allow_unsigned_extensions also alter always analyse analyze and anti any any_value apply approx_count_distinct approx_quantile arbitrary arg_max arg_min argmax argmin array array_agg array_aggr array_aggregate array_append array_apply array_cat array_concat array_contains array_distinct array_extract array_filter array_has array_indexof array_length array_pop_back array_pop_front array_position array_prepend array_push_back array_push_front array_reverse_sort array_slice array_sort array_to_string array_transform array_unique arrow_large_buffer_size arrow_scan arrow_scan_dumb as asc ascii asin asof assertion assignment asymmetric at atan atan2 attach attribute authorization avg backward bar base64 before begin between bigint bin binary binary_as_string bit bit_and bit_count bit_length bit_or bit_xor bitstring_agg blob bool bool_and bool_or boolean both bpchar by bytea cache call called cardinality cascade cascaded case cast catalog cbrt ceil ceiling century chain char character characteristics check checkpoint checkpoint_threshold chr class close cluster coalesce col_description collate collation collations column columns combine comment comments commit committed compression concat_ws concurrently configuration conflict connection constant_or_null constraint constraints content continue conversion copy corr cos cost count count_if count_star covar_pop covar_samp create create_fts_index cross csv cube current current_catalog current_database current_date current_query current_role current_schema current_schemas current_setting current_user currval custom_extension_repository cycle damerau_levenshtein data database database_list database_size date date_add date_diff date_part date_sub date_trunc datediff datepart datesub datetime datetrunc day dayname dayofmonth dayofweek dayofyear days deallocate debug_asof_iejoin debug_checkpoint_abort debug_force_external debug_force_no_cross_product dec decade declare decode default default_collation default_null_order default_order defaults deferrable definer degrees delimiters depends desc describe detach dictionary disable disable_checkpoint_on_shutdown disable_object_cache disable_optimizer disable_print_progress_bar disable_profile disable_profiling disable_progress_bar disable_verification disable_verify_external disable_verify_parallelism disable_verify_serializer disabled_optimizers discard distinct divide do document domain double drop drop_fts_index duckdb_columns duckdb_constraints duckdb_databases duckdb_dependencies duckdb_extensions duckdb_functions duckdb_indexes duckdb_keywords duckdb_schemas duckdb_sequences duckdb_settings duckdb_tables duckdb_temporary_files duckdb_views each editdist3 element_at else enable enable_checkpoint_on_shutdown enable_external_access enable_fsst_vectors enable_object_cache enable_optimizer enable_print_progress_bar enable_profile enable_progress_bar enable_progress_bar_print enable_verification encode encoding encrypted end entropy enum enum_code enum_first enum_last enum_range enum_range_boundary epoch epoch_ms era error escape even event except exclude excluding exclusive execute exists exp experimental_parallel_csv explain explain_output export export_state extension extension_directory external external_threads extract false family fdiv fetch file_search_path filter finalize flatten float float4 float8 floor fmod following for force force_bitpacking_mode force_checkpoint force_compression force_index_join foreign format formatReadableDecimalSize format_bytes format_pg_type format_type forward freeze from from_base64 from_binary from_hex full function functions gamma gcd gen_random_uuid generate_series generate_subscripts generated get_bit get_current_time get_current_timestamp glob global grant granted greatest greatest_common_divisor group grouping grouping_id guid hamming handler has_any_column_privilege has_column_privilege has_database_privilege has_foreign_data_wrapper_privilege has_function_privilege has_language_privilege has_schema_privilege has_sequence_privilege has_server_privilege has_table_privilege hash having header hex histogram hold home_directory hour hugeint identity if ignore ilike ilike_escape immediate immediate_transaction_mode implicit import in include including increment index index_scan indexes inet_client_addr inet_client_port inet_server_addr inherits initially inline inner inout input insensitive insert install instr int int1 int128 int16 int2 int32 int4 int64 int8 integer integer_division integral intersect interval into invoker is isinf isnull isodow isolation isoyear jaccard jaro_similarity jaro_winkler_similarity join json kahan_sum key kurtosis label language large last last_day lateral lcase lcm leading leakproof least least_common_multiple left len length_grapheme level levenshtein lgamma like like_escape limit list list_any_value list_append list_approx_count_distinct list_avg list_bit_or list_bit_xor list_bool_and list_bool_or list_concat list_contains list_count list_distinct list_entropy list_extract list_filter list_has list_histogram list_indexof list_kurtosis list_last list_mad list_max list_median list_min list_mode list_pack list_position list_prepend list_product list_reverse_sort list_skewness list_slice list_sort list_stddev_pop list_stddev_samp list_string_agg list_sum list_transform list_unique list_value list_var_pop list_var_samp listen ln load local location lock lock_configuration locked log log2 log_query_path logged logical long lower lpad macro mad make_date make_time make_timestamp map map_concat map_entries map_from_entries map_keys mapping materialized max max_by max_expression_depth max_memory maxvalue md5 md5_number md5_number_lower md5_number_upper mean median memory_limit microseconds millennium millisecond milliseconds min_by minute minutes minvalue mismatches mod mode month monthname months move name names natural new nextafter no none not not_ilike_escape not_like_escape notify notnull now nowait null null_order nullif numeric object octet_length of off offset oid oids old only operator option options or order ordinality outer over overlaps overlay overriding owned owner parallel parquet_metadata parquet_scan parquet_schema parser partial partition password percent perfect_ht_threshold pg_conversion_is_visible pg_function_is_visible pg_get_constraintdef pg_get_expr pg_has_role pg_is_other_temp_schema pg_my_temp_schema pg_opclass_is_visible pg_operator_is_visible pg_postmaster_start_time pg_size_pretty pg_table_is_visible pg_ts_config_is_visible pg_ts_dict_is_visible pg_ts_parser_is_visible pg_ts_template_is_visible pg_type_is_visible pg_typeof pivot pivot_longer pivot_wider placing plans policy position pow power pragma_collations pragma_database_size pragma_detailed_profiling_output pragma_last_profiling_output pragma_storage_info pragma_table_info pragma_version preceding precision prepare preserve preserve_insertion_order primary printf prior privileges procedure product profiler_history_size profiling_mode profiling_output program publication qualify quantile_cont quote radians random range read read_csv_auto read_parquet real reassign recheck recursive ref references referencing refresh regexp_extract_all regexp_full_match regexp_replace regexp_split_to_array regr_avgx regr_count regr_intercept regr_r2 regr_slope regr_sxx reindex relative release rename repeat repeat_row repeatable replica reservoir_quantile reset restart restrict returning returns reverse revoke rollback rollup round round_even roundbankers row rows rpad rtrim rule s3_endpoint s3_region s3_secret_access_key s3_session_token sample savepoint schema scroll search second seconds security semi seq_scan sequence sequences serializable server session session_user set_bit setof sets shobj_description show show_databases show_tables show_tables_expanded sign signbit signed sin skip smallint snapshot split split_part stable standalone start starts_with statement statistics stddev stddev_pop stdin stdout storage storage_info str_split strict string string_agg string_split string_split_regex string_to_array strip strip_accents strpos strptime struct struct_extract struct_insert struct_pack subscription substr subtract suffix sum sum_no_overflow sumkahan summarize summary symmetric sysid system table table_info tables tablesample tablespace tan temp template temporary test_all_types test_vector_types text then time_bucket timestamp timestamp_ms timetz timezone timezone_hour tinyint to to_base64 to_days to_hex to_hours to_microseconds to_milliseconds to_minutes to_months to_seconds to_timestamp to_years today trailing transaction transaction_timestamp transform treat trim true trunc trusted try_cast try_strptime txid_current type typeof types ubigint ucase uint16 uint32 uint64 uint8 uinteger unbounded uncommitted unencrypted unhex unicode union_extract union_tag union_value unknown unlisten unlogged unnest unpivot update upper use user using usmallint utinyint uuid vacuum validate validator value values var_pop var_samp varchar variadic varying verbose verify_external verify_parallelism views virtual volatile wal_autocheckpoint week weekday weekofyear when where whitespace window within without work worker_threads write xml xmlconcat xmlelement xmlexists xmlforest xmlnamespaces xmlparse xmlpi xmlroot year years yearweek yes | || ~ ~~ ~~* bit_position contains cot cursor debug_window_mode decimal deferred duckdb_types enable_http_metadata_cache first fsum group_concat has_tablespace_privilege hours immutable in_search_path inet_server_port instead isfinite isnan left_grapheme length list_aggr list_aggregate list_apply list_bit_and list_cat list_element list_first list_sem log10 ltrim map_extract match microsecond min multiply national nchar next nextval nfc_normalize nothing nulls nvarchar obj_description on ord out passing pg_collation_is_visible pg_conf_load_time pi pivot_limit positional pragma preserve_identifier_case procedural progress_bar_time quantile_disc read_csv regexp_matches regr_avgy regr_sxy regr_syy s3_access_key_id schemas select sem setseed short similar some sql stats stored str_split_regex strftime strlen substring substring_grapheme temp_directory timestamp_ns to_binary translate trigger truncate unbin union unique until username valid variance verify_serializer view with wrapper xmlattributes xmltable xor zone ~~~ delete delimiter enable_profiling favg import_database inherit map_values pg_get_viewdef pg_opfamily_is_visible prefix prepared quantile regexp_extract right_grapheme role search_path share skewness sqrt threads timestamp_s timezone_minute version bitstring concat factorial quarter replace right stddev_samp stem timestamp_us method respect simple time varbinary xmlserialize profile_output set timestamptz ordered_aggregate_threshold",
  // builtin: "abort absolute access access_mode action add admin after aggregate all allow_unsigned_extensions also alter always analyse analyze and anti any array arrow_large_buffer_size as asc asof assertion assignment asymmetric at attach attribute authorization backward before begin between bigint binary binary_as_string bit boolean both by cache call called cascade cascaded case cast catalog chain char character characteristics check checkpoint checkpoint_threshold class close cluster coalesce collate collation column columns comment comments commit committed compression concurrently configuration conflict connection constraint constraints content continue conversion copy cost create cross csv cube current cursor custom_extension_repository cycle data database day days deallocate debug_asof_iejoin debug_checkpoint_abort debug_force_external debug_force_no_cross_product dec declare default default_collation default_null_order default_order defaults deferrable definer delimiter delimiters depends desc describe detach dictionary disable disabled_optimizers discard distinct do document domain double drop each else enable enable_external_access enable_fsst_vectors enable_http_metadata_cache enable_object_cache enable_progress_bar enable_progress_bar_print encoding encrypted end enum escape event except exclude excluding exclusive execute exists experimental_parallel_csv explain explain_output export export_state extension extension_directory external external_threads extract false family fetch file_search_path filter float following for force force_bitpacking_mode force_compression foreign forward freeze from full function functions generated glob global grant granted group grouping grouping_id handler having header hold home_directory hour hours identity if ignore ilike immediate immediate_transaction_mode implicit import in include including increment index indexes inherits initially inline inner inout input insensitive insert install int integer integer_division intersect interval into invoker is isnull isolation join json key label language large last lateral leading leakproof left level like limit listen load local location lock lock_configuration locked log_query_path logged macro map mapping match materialized max_expression_depth max_memory maxvalue memory_limit microsecond microseconds millisecond milliseconds minute minutes minvalue mode month months move name names national natural new next no none not nothing notify notnull nowait null null_order nullif nulls numeric object of off offset oids old on only operator option options or order ordered_aggregate_threshold ordinality outer over overlaps overlay overriding owned owner parallel parser partial partition passing password percent perfect_ht_threshold pivot pivot_longer pivot_wider placing plans policy position positional pragma preceding precision prepare prepared preserve preserve_insertion_order primary prior privileges procedure profiler_history_size profiling_mode profiling_output program publication qualify quote range read real reassign recheck recursive ref references referencing refresh reindex relative release rename repeatable replace replica reset restart restrict returning returns revoke rollback rollup row rows rule s3_endpoint s3_region s3_secret_access_key s3_session_token sample savepoint schema schemas scroll search second seconds security select semi sequence sequences serializable server session set setof sets share show similar simple skip smallint snapshot stable standalone start statement statistics stdin stdout storage strict strip struct subscription substring summarize symmetric sysid system table tables tablesample tablespace temp template temporary text then threads timestamp to trailing transaction transform treat trim true truncate trusted try_cast type types unbounded uncommitted unencrypted unknown unlisten unlogged unpivot until update use user using vacuum validate validator value values varchar variadic varying verbose version views virtual volatile wal_autocheckpoint when where whitespace window within without work worker_threads write xml xmlattributes xmlconcat xmlelement xmlexists xmlforest xmlnamespaces xmlparse xmlpi xmlroot xmlserialize year years yes zone debug_window_mode decimal deferred delete first immutable instead method nchar out pivot_limit preserve_identifier_case procedural profile_output progress_bar_time respect s3_access_key_id search_path some sql stored temp_directory time trigger union unique username valid view with wrapper xmltable enable_profiling inherit role right",
  types: "double float null guid bitstring bit union map boolean list bool struct uint8 int1 tinyint short timestamp_us int32 integral signed string int timestamptz int4 integer logical nvarchar uint64 uint32 ubigint timestamp int64 text oid row date int16 bigint float8 int128 smallint hugeint binary dec bpchar real varbinary uinteger uint16 interval varchar decimal timetz uuid char timestamp_ns timestamp_s time utinyint blob datetime int8 enum usmallint numeric float4 bytea int2 long timestamp_ms"
};
const DuckDBDialect = SQLDialect.define(DuckDBDialectSpec);
const css = {
  code: ".tabulator.svelte-1laoiqp{margin-top:10px;font-family:'Iosevka Term SS08 Web', Consolas, 'Lucida Console', Courier, monospace;font-size:0.8em}",
  map: null
};
const DuckDBEditor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const cmStyle = {
    "&": { maxWidth: "100%", marginBottom: "10px" },
    ".cm-scroller": { overflow: "auto" },
    ".cm-content, .cm-gutter": {
      minHeight: "2rem",
      fontFamily: "Iosevka Term SS08 Web",
      fontSize: "0.95em"
    }
  };
  let sqlConfig = {
    upperCaseKeywords: true,
    dialect: DuckDBDialect
  };
  let { value = "" } = $$props;
  let status = "";
  let { connProm } = $$props;
  let { dbInit } = $$props;
  let results = new Promise(() => ({}));
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.connProm === void 0 && $$bindings.connProm && connProm !== void 0)
    $$bindings.connProm(connProm);
  if ($$props.dbInit === void 0 && $$bindings.dbInit && dbInit !== void 0)
    $$bindings.dbInit(dbInit);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="border border-primary-300 rounded-lg py-2 px-4 block my-4"><div class="my-4">${validate_component(CodeMirror, "CodeMirror").$$render(
      $$result,
      {
        styles: cmStyle,
        lang: sql(sqlConfig),
        value
      },
      {
        value: ($$value) => {
          value = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> <div class="my-4"><button title="Execute Query" style="" data-svelte-h="svelte-1hij4l">Eksekusi</button> <span class="my-2">${escape(status)}</span></div> ${function(__value) {
      if (is_promise(__value)) {
        __value.then(null, noop);
        return ``;
      }
      return /* @__PURE__ */ function(r) {
        return ` <div class="my-4"><div class="tabulator svelte-1laoiqp"></div></div> `;
      }();
    }(results)}</div>  ${$$result.head += `<!-- HEAD_svelte-n5sc7l_START --><link href="/css/tabulator.css" rel="stylesheet"><!-- HEAD_svelte-n5sc7l_END -->`, ""}`;
  } while (!$$settled);
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const fm = {
    "pageType": "md",
    "lastUpdate": "2023-10-12",
    "title": "guide",
    "anchors": []
  };
  let connProm;
  let dbInit;
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(PageLayout, "PageLayout").$$render($$result, { fm }, {}, {
      default: () => {
        return `${validate_component(DuckDBInstantiator, "DuckDbInstantiator").$$render(
          $$result,
          { connProm, dbInit },
          {
            connProm: ($$value) => {
              connProm = $$value;
              $$settled = false;
            },
            dbInit: ($$value) => {
              dbInit = $$value;
              $$settled = false;
            }
          },
          {}
        )} <p data-svelte-h="svelte-9ajzqu">Pengantar</p> <div class="svp-code-block-wrapper"><div class="svp-code-block--title" data-svelte-h="svelte-14ojqoc">Test.sql</div> <div class="svp-code-block"> <pre class="shiki vitesse-light" style="background-color:#ffffff;color:#393a34" tabindex="0" data-svelte-h="svelte-yfzd34"><code><span class="line"><span style="color:#1E754F">SELECT</span><span style="color:#AB5959"> *</span><span style="color:#1E754F"> FROM</span><span style="color:#1E754F"> BETWEEN</span><span style="color:#1E754F"> AND</span><span style="color:#1E754F"> WHERE</span><span style="color:#1E754F"> IN</span><span style="color:#1E754F"> ORDER BY</span><span style="color:#1E754F"> OVER</span><span style="color:#1E754F"> PARTITION</span><span style="color:#1E754F"> BY</span></span>
<span class="line"><span style="color:#1E754F">ROWS</span><span style="color:#1E754F"> UNBOUNDED</span><span style="color:#393A34"> PRECEEDING </span><span style="color:#1E754F">TABLE</span><span style="color:#1E754F"> VALUES</span><span style="color:#1E754F"> CREATE</span><span style="color:#1E754F"> OR</span><span style="color:#1E754F"> REPLACE</span><span style="color:#393A34"> MACRO </span><span style="color:#1E754F">TABLE</span></span></code></pre>  <pre class="shiki night-owl" style="background-color:#011627;color:#d6deeb" tabindex="0" data-svelte-h="svelte-1vr6lbh"><code><span class="line"><span style="color:#C792EA">SELECT</span><span style="color:#7FDBCA"> *</span><span style="color:#C792EA"> FROM</span><span style="color:#C792EA"> BETWEEN</span><span style="color:#C792EA"> AND</span><span style="color:#C792EA"> WHERE</span><span style="color:#C792EA"> IN</span><span style="color:#C792EA"> ORDER BY</span><span style="color:#C792EA"> OVER</span><span style="color:#C792EA"> PARTITION</span><span style="color:#C792EA"> BY</span></span>
<span class="line"><span style="color:#C792EA">ROWS</span><span style="color:#C792EA"> UNBOUNDED</span><span style="color:#D6DEEB"> PRECEEDING </span><span style="color:#C792EA">TABLE</span><span style="color:#C792EA"> VALUES</span><span style="color:#C792EA"> CREATE</span><span style="color:#C792EA"> OR</span><span style="color:#C792EA"> REPLACE</span><span style="color:#D6DEEB"> MACRO </span><span style="color:#C792EA">TABLE</span></span></code></pre> <div class="svp-code-block--lang" data-svelte-h="svelte-1ggdy3o">sql</div> ${validate_component(CopyCode, "CopyCode").$$render($$result, {}, {}, {})}</div></div> ${validate_component(DuckDBEditor, "DuckDBEditor").$$render(
          $$result,
          {
            value: "SELECT 1,2,3,4;",
            connProm,
            dbInit
          },
          {
            connProm: ($$value) => {
              connProm = $$value;
              $$settled = false;
            },
            dbInit: ($$value) => {
              dbInit = $$value;
              $$settled = false;
            }
          },
          {}
        )}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
