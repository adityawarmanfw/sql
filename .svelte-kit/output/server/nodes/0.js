import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.mEcNV_Bx.js","_app/immutable/chunks/0.PdO-JR6T.js","_app/immutable/chunks/scheduler.hLwqlzEk.js","_app/immutable/chunks/index.jQBLQ83-.js","_app/immutable/chunks/preload-helper.0HuHagjb.js","_app/immutable/chunks/Link.svelte_svelte_type_style_lang.Efb03xWi.js","_app/immutable/chunks/entry.vn0xJr9z.js","_app/immutable/chunks/stores.131a3VXe.js"];
export const stylesheets = ["_app/immutable/assets/0.tTvVsG1X.css","_app/immutable/assets/Link.CHxVas6e.css","_app/immutable/assets/ReloadPrompt._yD8MAB1.css"];
export const fonts = ["_app/immutable/assets/Dank Mono Regular.nzdE7a-D.otf","_app/immutable/assets/Dank Mono Italic.3b040MCj.otf","_app/immutable/assets/atkinson-hyperlegible-v11-latin-regular.Sk4ATZiK.woff2","_app/immutable/assets/atkinson-hyperlegible-v11-latin-italic.xIzUTwuz.woff2","_app/immutable/assets/atkinson-hyperlegible-v11-latin-700.a4i5sTNp.woff2","_app/immutable/assets/atkinson-hyperlegible-v11-latin-700italic.KjtkRlBq.woff2","_app/immutable/assets/fira-code-v22-latin-regular.c8qScSZH.woff2","_app/immutable/assets/hanken-grotesk-v8-latin-900.MlLxrVsL.woff2","_app/immutable/assets/IosevkaTermSS08-Regular.nY0HnJ04.woff2","_app/immutable/assets/IosevkaTermSS08-Regular.fPFUP2BA.ttf"];
