import { defineConfig } from "vite";
import { sveltepress } from "@sveltepress/vite";
import { defaultTheme } from "@sveltepress/theme-default";
import sql from "shiki/langs/sql.mjs";
import navbar from "./config/navbar";
import sidebar from "./config/sidebar";

const config = defineConfig({
  plugins: [
    sveltepress({
      theme: defaultTheme({
        toggle: false,
        logo: "/Rectangle.png",
        navbar,
        sidebar,
        preBuildIconifyIcons: {
          "vscode-icons": [
            "file-type-svelte",
            "file-type-markdown",
            "file-type-vite",
          ],
          "simple-icons": ["duckdb"],
          logos: ["typescript-icon", "svelte-kit"],
          emojione: ["artist-palette", "kissing-cat-face-with-closed-eyes"],
          ph: ["smiley", "layout-duotone"],
          noto: ["package", "kissing-cat-face-with-closed-eyes"],
          solar: ["chat-square-code-outline", "reorder-outline"],
          carbon: ["tree-view-alt", "import-export", "sql"],
          ic: ["sharp-rocket-launch"],
          tabler: ["icons"],
          mdi: ["theme-light-dark", "bricks"],
          bi: ["list-nested"],
        },
        highlighter: {
          languages: [sql],
          themeLight: "slack-ochin",
        },
        i18n: {
          onThisPage: "Di laman ini",
          lastUpdateAt: "Terakhir diperbarui",
          previousPage: "Sebelumnya",
          nextPage: "Selanjutnya",
          footnoteLabel: "Catatan kaki",
        },
        themeColor: {
          light: "#69ccff",
          gradient: {
            start: "#69ccff",
            end: "#3266cb",
          },
          hover: "#3266cb",
          primary: "#3266cb",
        },
      }),
      siteConfig: {
        title: "Membuat Bata tanpa Lempung",
        description: "Antologi kueri SQL sonder data bisnis",
      },
    }),
  ],
  optimizeDeps: {
    exclude: [
      "@codemirror/state",
      "@codemirror/view",
      "@codemirror/lang-sql",
      "codemirror",
    ],
  },
});

export default config;
