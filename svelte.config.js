import adapter from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
// import { SERVICE_WORKER_PATH } from '@sveltepress/theme-default'

/**
 * @type {import('@sveltejs/kit').Config}
 */
const config = {
  extensions: ['.svelte', '.md'],
  preprocess: [vitePreprocess()],
  kit: {
    adapter: adapter({
      pages: 'dist',
      fallback: '404.html',
    }),
    // files: {
    //   serviceWorker: SERVICE_WORKER_PATH,
    // },
    // serviceWorker: {
    //   register: false,
    // },
    prerender: {
      handleHttpError: ({ path, message }) => {
        if (excludePaths.includes(path))
          return
        throw new Error(message)
      },
      handleMissingId: 'ignore',
    },
  },
}

export default config
