export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["android-chrome-192x192.png","android-chrome-512x512.png","css/tabulator.css","favicon.ico","manifest-dark.webmanifest","sveltepress.svg","sveltepress@3x.png"]),
	mimeTypes: {".png":"image/png",".css":"text/css",".webmanifest":"application/manifest+json",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.1O3ZsgRq.js","app":"_app/immutable/entry/app.maKCm9T_.js","imports":["_app/immutable/entry/start.1O3ZsgRq.js","_app/immutable/chunks/entry.vn0xJr9z.js","_app/immutable/chunks/scheduler.hLwqlzEk.js","_app/immutable/entry/app.maKCm9T_.js","_app/immutable/chunks/preload-helper.0HuHagjb.js","_app/immutable/chunks/scheduler.hLwqlzEk.js","_app/immutable/chunks/index.jQBLQ83-.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/pengantar/guide",
				pattern: /^\/pengantar\/guide\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
