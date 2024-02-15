export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["android-chrome-192x192.png","android-chrome-512x512.png","css/tabulator.css","favicon.ico","manifest-dark.webmanifest","sveltepress.svg","sveltepress@3x.png","service-worker.js"]),
	mimeTypes: {".png":"image/png",".css":"text/css",".webmanifest":"application/manifest+json",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.3xDrAPJD.js","app":"_app/immutable/entry/app.iKd2azA7.js","imports":["_app/immutable/entry/start.3xDrAPJD.js","_app/immutable/chunks/entry.pNqdRus1.js","_app/immutable/chunks/scheduler.hLwqlzEk.js","_app/immutable/entry/app.iKd2azA7.js","_app/immutable/chunks/preload-helper.0HuHagjb.js","_app/immutable/chunks/scheduler.hLwqlzEk.js","_app/immutable/chunks/index.jQBLQ83-.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
