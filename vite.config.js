import { defineConfig } from 'vite'
import { sveltepress } from '@sveltepress/vite'
import { defaultTheme } from '@sveltepress/theme-default'
import sql from 'shiki/langs/sql.mjs'
// import pwa from './config/pwa'

const DEFAULT_SUPPORT_LANGUAGES = ['sql', 'svelte', 'sh', 'js', 'html', 'ts', 'md', 'css', 'scss']

const config = defineConfig({
  plugins: [
    sveltepress({
      theme: defaultTheme({
        toggle: false,
        logo: '/sveltepress.svg',
        navbar: [
          // Add your navbar configs here
          {
            title: 'Pengantar',
            to: '/pengantar/guide/'
          },
        ],
        sidebar: {
          '/pengantar/': [
            {
              title: 'Pengantar',
              collapsible: true,
              items: [
                {
                  title: 'Quick start',
                  to: '#',
                },
                {
                  title: 'Guide',
                  to: '/pengantar/guide/',
                },
              ],
            }]
        },
        preBuildIconifyIcons: {
          'vscode-icons': ['file-type-svelte', 'file-type-markdown', 'file-type-vite'],
          'logos': ['typescript-icon', 'svelte-kit'],
          'emojione': ['artist-palette', 'kissing-cat-face-with-closed-eyes'],
          'ph': ['smiley', 'layout-duotone'],
          'noto': ['package', 'kissing-cat-face-with-closed-eyes'],
          'solar': ['chat-square-code-outline', 'reorder-outline'],
          'carbon': ['tree-view-alt', 'import-export'],
          'ic': ['sharp-rocket-launch'],
          'tabler': ['icons'],
          'mdi': ['theme-light-dark', 'bricks'],
          'bi': ['list-nested'],
        },
        highlighter: {
          'languages': [sql],
          'themeLight': 'slack-ochin'
        },
        i18n: {
          onThisPage: 'Di laman ini',
          lastUpdateAt: 'Terakhir diperbarui',
          previousPage: 'Sebelumnya',
          nextPage: 'Selanjutnya',
          footnoteLabel: 'Catatan kaki'
        },
        themeColor: {
          light: '#ffffff'
        },
      }),
      siteConfig: {
        title: 'Membuat Bata tanpa Lempung',
        description: 'SQL Tingkat Lanjut',
      }
  }),
  ], optimizeDeps: {
    exclude: [
      "@codemirror/state",
      "@codemirror/view",
      "@codemirror/lang-sql",
      "codemirror",
      "tabulator-tables"
    ]
  }
})

export default config