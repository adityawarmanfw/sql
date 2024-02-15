import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
import { P as PageLayout } from "../../chunks/CopyCode.svelte_svelte_type_style_lang.js";
import "../../chunks/Link.svelte_svelte_type_style_lang.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const fm = {
    "pageType": "md",
    "lastUpdate": "2024/02/15 11:01:50",
    "title": "SQL Tingkat Lanjut",
    "heroImage": "/sveltepress@3x.png",
    "tagline": "A simple, easy to use content centered site build tool with the full power of Sveltekit.",
    "features": [
      {
        "title": "Jauh dari data bisnis",
        "description": "Tak ada lagi tabel orders, departments, atau products yang membosankan. Biarkan mereka bersemayam di kantor.",
        "icon": {
          "type": "iconify",
          "collection": "noto",
          "name": "kissing-cat-face-with-closed-eyes"
        },
        "link": "/#"
      },
      {
        "title": "Memperlakukan SQL laiknya bahasa pemrograman",
        "description": "Tak sekadar perkara SELECT FROM WHERE.",
        "link": "/#"
      },
      {
        "title": "Svelte in Markdown",
        "description": "Feel free to use svelte in markdown. Explore infinite possibilities.",
        "link": "/#"
      },
      {
        "title": "Svelte in Markdown",
        "description": "Feel free to use svelte in markdown. Explore infinite possibilities.",
        "icon": {
          "type": "iconify",
          "collection": "carbon",
          "name": "tree-view-alt"
        },
        "link": "/#"
      }
    ],
    "anchors": []
  };
  return `${validate_component(PageLayout, "PageLayout").$$render($$result, { fm }, {}, {})}`;
});
export {
  Page as default
};
