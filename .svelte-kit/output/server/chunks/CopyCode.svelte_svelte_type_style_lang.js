import { c as create_ssr_component, a as add_attribute, e as escape, n as null_to_empty, v as validate_component, b as compute_rest_props, m as missing_component, d as each, f as spread, h as escape_object, i as subscribe } from "./ssr.js";
import { E as External, t as themeOptions, s as siteConfig, p as pages, f as anchors } from "./Link.svelte_svelte_type_style_lang.js";
import { b as base } from "./paths.js";
import { p as page } from "./stores.js";
const globals = typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : (
  // @ts-ignore Node typings have this
  global
);
const css$6 = {
  code: ".svp-action.svelte-1qjt7e2{--at-apply:'inline-flex items-center h-12 leading-12 rounded-6 px-6 bg-white dark:bg-zinc-8 transition-300 transition-shadow hover:shadow dark:hover:shadow-gray-6'}.svp-action--primary.svelte-1qjt7e2{--at-apply:'svp-gradient-bg text-white dark:text-warm-gray-8'}.external-icon.svelte-1qjt7e2{--at-apply:text-6 ml-2 flex items-center}.label.svelte-1qjt7e2{--at-apply:flex-grow text-center}",
  map: null
};
const ActionButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { label } = $$props;
  let { type = "" } = $$props;
  let { to } = $$props;
  let { external = false } = $$props;
  const toWithBase = base + to;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.to === void 0 && $$bindings.to && to !== void 0)
    $$bindings.to(to);
  if ($$props.external === void 0 && $$bindings.external && external !== void 0)
    $$bindings.external(external);
  $$result.css.add(css$6);
  return `<a role="button"${add_attribute("href", toWithBase, 0)} class="${escape(null_to_empty(`svp-action ${type ? `svp-action--${type}` : ""}`), true) + " svelte-1qjt7e2"}"${add_attribute("target", external ? "_blank" : "", 0)}><span class="label svelte-1qjt7e2">${escape(label)}</span> ${external ? `<div class="external-icon svelte-1qjt7e2">${validate_component(External, "External").$$render($$result, {}, {}, {})}</div>` : ``} </a>`;
});
const IconifyIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  compute_rest_props($$props, ["collection", "name"]);
  let { collection } = $$props;
  let { name } = $$props;
  if ($$props.collection === void 0 && $$bindings.collection && collection !== void 0)
    $$bindings.collection(collection);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  return `<div class="${"icon--" + escape(collection, true) + " icon--" + escape(collection, true) + "--" + escape(name, true)}"></div>`;
});
const Apple = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="1em" height="1em" viewBox="0 0 72 72"><path fill="#ea5a47" d="M53.88 21.51a11.417 11.417 0 0 0-10.737.504a2.156 2.156 0 0 0-.109.052a22.914 22.914 0 0 1-7.567 1.877a15.907 15.907 0 0 1-6.638-1.85l-.141-.076a11.41 11.41 0 0 0-10.764-.506C10.7 25.14 8.1 36.69 12.129 47.254c2.373 6.232 6.685 11.08 11.535 12.966a10.983 10.983 0 0 0 9.134-.266a11.377 11.377 0 0 0 1.532-.931a2.726 2.726 0 0 1 3.158 0a11.173 11.173 0 0 0 1.532.932a10.465 10.465 0 0 0 4.735 1.127a12.078 12.078 0 0 0 4.383-.86c4.851-1.885 9.165-6.733 11.539-12.967c4.03-10.57 1.43-22.12-5.797-25.745Z"></path><path fill="#f4aa41" d="M48.999 21.405a1.074 1.074 0 0 0-.246.01l.038-.227c.076.075.142.141.208.217Z"></path><path fill="#d22f27" d="M53.883 21.511a10.367 10.367 0 0 0-4.902-1.106a1 1 0 0 0-.696 1.7c9.444 9.624 6.388 19.16 3.727 23.988c-3.892 7.058-10.844 11.465-14.457 10.68a1 1 0 0 0-.672 1.865a15.513 15.513 0 0 0 7.169 1.898a12.895 12.895 0 0 0 4.629-.863c4.66-1.776 8.668-6.304 10.995-12.422c4.035-10.568 1.438-22.115-5.793-25.74Z"></path><path fill="#b1cc33" d="M48.044 17.395c3.957 1.329 6.845 5.819 6.845 5.819s-5.014 1.835-8.97.506c-3.95-1.327-6.844-5.82-6.844-5.82s5.019-1.833 8.97-.505Z"></path><path fill="none" stroke="#000" strokelinecap="round" strokelinejoin="round" strokewidth="2" d="M35.046 20.733v-5.461l-4.344-4.343m26.632 14.837c3.648 4.949 4.396 13.296 1.409 21.133c-3.857 10.128-12.488 15.573-19.274 12.163a10.24 10.24 0 0 1-1.394-.85a3.713 3.713 0 0 0-4.331 0a10.27 10.27 0 0 1-1.396.85c-6.797 3.41-15.428-2.035-19.285-12.163c-3.856-10.118-1.475-21.085 5.31-24.494a10.42 10.42 0 0 1 9.838.491s.056.034.168.09a16.863 16.863 0 0 0 7.088 1.957a13.271 13.271 0 0 0 2.249-.215a18.634 18.634 0 0 0 2.126-.463m8.202-6.87c3.957 1.329 6.845 5.819 6.845 5.819s-5.014 1.835-8.97.506c-3.95-1.327-6.844-5.82-6.844-5.82s5.019-1.833 8.97-.505Z"></path></svg>`;
});
const Banana = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="1em" height="1em" viewBox="0 0 72 72"><g strokelinecap="round" strokelinejoin="round" strokemiterlimit="10" strokewidth=".75"><path fill="#fcea2b" stroke="#fcea2b" d="M50.46 50.44c-11.2 13.24-28.24 12.54-35.31 6.547l-.413-1.901c12.72-3.783 15.02-2.284 25.01-11.49c5.776-6.855 10.6-16.93 10.32-24.26c6.04-.188 0 0 4.682-.188c3.885 9.76 2.355 22.91-4.282 31.29z"></path><path fill="#f1b31c" stroke="#f1b31c" d="M53.21 19.66c4.526-.424 5.228 22.66-1.408 31.04c-11.8 11.01-24.25 12.1-36.84 5.362c25.96 5.489 39.47-15.38 38.25-36.4z"></path></g><g fill="none" stroke="#000" strokelinecap="round" strokelinejoin="round" strokemiterlimit="10" strokewidth="2"><path d="m52.09 15.49l-.57-4.29M25.79 56.55c16.7-2.905 24.45-11.14 26.67-27.09"></path><path d="M47.54 54.03c-8.106 7.212-23.05 9.45-32.43 2.757l-.413-1.901c18.42-2.206 32.78-13.96 35.36-35.55c1.105-.004 4.645-.396 4.645-.396c5.599 15.1 1.754 27.15-7.164 35.08z"></path></g></svg>`;
});
const Grapes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="1em" height="1em" viewBox="0 0 72 72"><path fill="#b399c8" d="M32.33 37.54a6.688 6.688 0 0 1-6.688 6.688a6.688 6.688 0 0 1-6.688-6.688a6.688 6.688 0 0 1 6.688-6.688a6.688 6.688 0 0 1 6.688 6.688"></path><path fill="#b399c8" d="M27.88 27.51a6.688 6.688 0 0 1-6.688 6.688a6.688 6.688 0 0 1-6.688-6.688a6.688 6.688 0 0 1 6.688-6.688a6.688 6.688 0 0 1 6.688 6.688"></path><path fill="#b399c8" d="M31.22 34.2a6.684 6.684 0 1 0-5.897-3.531M49.05 47.58a6.688 6.688 0 0 1-6.688 6.688a6.688 6.688 0 0 1-6.688-6.688a6.688 6.688 0 0 1 6.688-6.688a6.688 6.688 0 0 1 6.688 6.688"></path><path fill="#b399c8" d="M37.91 47.58a6.688 6.688 0 0 1-6.688 6.688a6.688 6.688 0 0 1-6.688-6.688a6.688 6.688 0 0 1 6.688-6.688a6.688 6.688 0 0 1 6.688 6.688m17.83-10.04a6.688 6.688 0 0 1-6.688 6.688a6.688 6.688 0 0 1-6.688-6.688a6.688 6.688 0 0 1 6.688-6.688a6.688 6.688 0 0 1 6.688 6.688"></path><path fill="#b399c8" d="M43.48 36.43a6.688 6.688 0 0 1-6.688 6.688a6.688 6.688 0 0 1-6.688-6.688a6.688 6.688 0 0 1 6.688-6.688a6.688 6.688 0 0 1 6.688 6.688"></path><path fill="#8967aa" d="M36.57 29.13a6.688 6.688 0 0 1 0 13.38m21.25-15.33c0 3.693-1.239 5.486-4.762 4.377c-4.713-1.483-8.869.091-8.613-4.377c.212-3.687 2.994-6.688 6.688-6.688s6.688 2.994 6.688 6.688"></path><path fill="#b399c8" d="M47.22 30.54a6.678 6.678 0 1 0-4.165 3.415m.425 23.655a6.688 6.688 0 0 1-6.688 6.688a6.688 6.688 0 0 1-6.688-6.688a6.688 6.688 0 0 1 6.688-6.688a6.688 6.688 0 0 1 6.688 6.688"></path><path fill="#8967aa" d="M36.57 50.92a6.688 6.688 0 0 1 0 13.38"></path><path fill="#8967aa" d="M42.16 40.89a6.688 6.688 0 0 1 0 13.38m6.81-23.48a6.688 6.688 0 0 1 0 13.38m-7.89-23.29a6.688 6.688 0 0 1 0 13.38"></path><g fill="none" stroke="#000"><path strokelinecap="round" strokelinejoin="round" strokewidth="2" d="M37.01 21.82c-1.343-7.331-6.229-22.43-22.85-7.574"></path><path strokemiterlimit="10" d="M54.34 32.9a6.679 6.672 0 1 0-8.112-10.32"></path><path strokemiterlimit="10" strokewidth="2" d="M30.48 40.42a6.625 6.619 0 0 1-.949-3.418a6.706 6.699 0 0 1 5.462-6.562"></path><ellipse cx="36.57" cy="57.34" strokemiterlimit="10" strokewidth="2" rx="6.721" ry="6.715"></ellipse><path strokemiterlimit="10" strokewidth="2" d="M36.57 50.62a6.721 6.715 0 0 0 0 13.43m5.6-10.07q.255 0 .506-.019m-.006-.001a6.718 6.711 0 1 0-6.551-3.756"></path><path strokemiterlimit="10" strokewidth="2" d="M36.37 43.28a6.721 6.715 0 1 0-6.042 10.67M43.13 33.73a6.732 6.725 0 0 0-.28 6.416"></path><path strokemiterlimit="10" strokewidth="2" d="M47.91 43.84a6.721 6.715 0 1 0-4.783-10.11m-12.717-.98a6.721 6.715 0 1 0-6.157 11.06m-.003 0a6.775 6.768 0 0 0 1.112.091"></path><path strokemiterlimit="10" strokewidth="2" d="M54.5 32.93a6.721 6.715 0 1 0-8.322-10.35"></path><path strokemiterlimit="10" strokewidth="2" d="M46.68 30.78a6.708 6.701 0 1 0-3.669 2.765"></path><path strokemiterlimit="10" strokewidth="2" d="M35.83 22.48a6.723 6.716 0 0 0-10.9 7.582"></path><path strokemiterlimit="10" strokewidth="2" d="M25.64 22.37a6.721 6.715 0 1 0-6.216 11.3"></path><path strokelinecap="round" strokelinejoin="round" strokewidth="2" d="M50.57 9.212s-3.357 7.635-15.68 5.496"></path></g></svg>`;
});
const Peach = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="1em" height="1em" viewBox="0 0 72 72"><g strokelinejoin="round" strokemiterlimit="10" strokewidth="2"><path fill="#b1cc33" stroke="#b1cc33" d="M58.613 14.83s-3.721 6.953-9.376 9.376c-4.44 1.905-10.081 1.007-12.297.545c-2.224.417-7.882 1.2-12.282-.796c-5.605-2.537-9.183-9.564-9.183-9.564s7.63-1.942 13.234.595c1.205.542 2.307 1.284 3.309 2.124c3.786 3.185 4.813 3.56 10 .102c1.018-.82 2.135-1.538 3.35-2.056c5.656-2.423 13.245-.325 13.245-.325z"></path><path fill="#FFA7C0" stroke="#FFA7C0" strokelinecap="round" d="M60.72 39.78c-.31 12.69-11.44 22.65-24.01 24.2c-.05.01-.1.01-.15.02h-.11c-.21 0-.41-.01-.63-.02c-11.34-2.56-22.28-12.53-23.42-24.2c0-1.76.19-3.49.55-5.15c.64-2.99 1.85-5.78 3.49-8.25c2.64-2.89 6.55-4.71 10.92-4.71c2.27 0 4.4.48 6.31 1.35c1.29.59 2.73.74 4.09.44c.45-.09.9-.24 1.33-.44c1.9-.87 4.04-1.35 6.3-1.35c4.88 0 9.2 2.27 11.8 5.76c.29.37.54.75.78 1.14c.49.93.91 1.89 1.28 2.88c.01.02.02.03.02.05c.12.32.23.65.33.98c.09.29.18.58.26.87c.07.26.14.51.2.77c.37 1.56.59 3.18.65 4.83c.01.28.01.55.01.83z"></path><path fill="#E67A94" stroke="#E67A94" d="M37.76 23.46c1.05-.2 2.05-.36 2.99-.46c-1.72.3-3.29.57-3.63.6c.22-.05.43-.1.64-.14zm22.96 16.32c-.31 12.69-11.44 22.65-24.01 24.2C56.924 59.261 68.125 20.056 40.75 23c2.16-.37 4.57-.77 5.09-.77c4.61 0 8.72 2.03 11.35 5.2c.29.37.54.75.78 1.14c.49.93.91 1.89 1.28 2.88c.01.02.02.03.02.05c.12.32.23.65.33.98c.09.29.18.58.26.87c.07.26.14.51.2.77c.39 1.56.62 3.17.65 4.83c.01.28.01.55.01.83z"></path><path fill="none" stroke="#E67A94" strokelinecap="round" d="M37.72 36.595c-.719-3.444-3.407-5.532-3.407-5.532"></path></g><g fill="none" stroke="#000" strokelinecap="round" strokelinejoin="round" strokemiterlimit="10" strokewidth="2"><path d="M41.961 17.325c1.006-.828 2.118-1.563 3.32-2.092c5.633-2.48 13.249-.452 13.249-.452"></path><path d="M58.53 14.78s-1.1 2.105-3.023 4.413M31.64 16.83c-1.005-.828-2.118-1.563-3.32-2.092c-5.633-2.479-13.248-.452-13.248-.452m0 0s1.024 1.961 2.825 4.174m18.548-3.094c-.32-2.33-1.153-5.64-3.308-7.904M60.72 39.78c-.31 12.69-11.44 22.65-24.01 24.2c-.05.01-.1.01-.15.02h-.11c-.21 0-.42.03-.63-.02c-11.34-2.56-22.28-12.53-23.42-24.2c-.17-1.75.19-3.49.55-5.15c.64-2.99 1.85-5.78 3.49-8.25c2.64-2.89 6.55-4.71 10.92-4.71c2.27 0 4.4.48 6.31 1.35c1.29.59 2.73.74 4.09.44c.45-.09.9-.24 1.33-.44c1.9-.87 4.04-1.35 6.3-1.35c4.88 0 9.2 2.27 11.8 5.76c.29.37.54.75.78 1.14c.49.93.91 1.89 1.28 2.88c.01.02.02.03.02.05c.12.32.23.65.33.98c.09.29.18.58.26.87c.07.26.14.51.2.77c.39 1.56.62 3.17.65 4.83c.01.28.01.55.01.83z"></path><path d="M40.987 52.864c2.042-7.167 3.244-17.616-3.737-24.614"></path></g></svg>`;
});
const Tomato = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="1em" height="1em" viewBox="0 0 72 72"><g strokelinejoin="round" strokemiterlimit="10"><ellipse cx="35.825" cy="37.597" fill="#EA5A47" stroke="#EA5A47" strokelinecap="round" strokewidth="1.8" rx="25.015" ry="22.382"></ellipse><path fill="#D22F27" stroke="#D22F27" strokewidth="1.8" d="M60.528 37.597c0 12.365-10.89 22.382-24.703 22.382c17.4-4.104 31.96-32.932 0-44.763c5.085 0 9.816 1.357 13.765 3.69c6.777 4.003 10.938 10.879 10.938 18.691z"></path><path fill="#B1CC33" d="M46.325 15.849c-.385 1.382-.994 3.031-2.436 4.235C38 25 30.25 23.288 26.817 20.084c-1.36-1.284-2.04-2.853-2.424-4.235c-.637-2.282-.362-4.17-.362-4.17s2.282-.328 4.838.582a9.71 9.71 0 0 1 2.622 1.405c.483-3.369 2.732-5.618 3.555-6.342l.307-.252l.307.252c.823.724 3.072 2.973 3.555 6.342a9.716 9.716 0 0 1 2.622-1.405c2.557-.91 4.839-.581 4.839-.581s.285 1.887-.352 4.169z"></path></g><g fill="none" stroke="#000" strokelinejoin="round" strokemiterlimit="10" strokewidth="2"><path strokelinecap="round" d="M50.307 19.346c6.375 4.057 10.533 10.72 10.533 18.252c0 12.36-11.2 22.381-25.015 22.381S10.81 49.96 10.81 37.597c0-7.374 3.986-13.915 10.136-17.993"></path><path d="M46.325 15.849c-.385 1.382-.994 3.031-2.436 4.235C38 25 30.25 23.288 26.817 20.084c-1.36-1.284-2.04-2.853-2.424-4.235c-.637-2.282-.362-4.17-.362-4.17s2.282-.328 4.838.582a9.71 9.71 0 0 1 2.622 1.405c.483-3.369 2.732-5.618 3.555-6.342l.307-.252l.307.252c.823.724 3.072 2.973 3.555 6.342a9.716 9.716 0 0 1 2.622-1.405c2.557-.91 4.839-.581 4.839-.581s.285 1.887-.352 4.169z"></path></g></svg>`;
});
const Watermelon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="1em" height="1em" viewBox="0 0 72 72"><g strokelinejoin="round" strokemiterlimit="10" strokewidth="2"><path fill="#B1CC33" d="M55.226 56.78c-10.988 10.977-28.78 10.977-39.768 0c-10.976-10.987-10.976-28.779 0-39.767l2.654 2.654c-9.525 9.515-9.525 24.945 0 34.46c9.515 9.525 24.945 9.525 34.46 0l2.654 2.654z"></path><path fill="#EA5A47" stroke="#EA5A47" strokelinecap="round" d="M52.572 54.127c-9.515 9.525-24.945 9.525-34.46 0c-9.526-9.515-9.526-24.945 0-34.46l34.46 34.46"></path><path fill="#EA5A47" d="M49.524 56.718c-9.52 6.837-22.857 5.973-31.412-2.592c-8.62-8.61-9.44-22.063-2.46-31.594"></path></g><path fill="none" stroke="#000" strokelinejoin="round" strokemiterlimit="10" strokewidth="2" d="M55.226 56.78c-10.988 10.977-28.78 10.977-39.768 0c-10.976-10.987-10.976-28.779 0-39.767l2.654 2.654c-9.525 9.515-9.525 24.945 0 34.46c9.515 9.525 24.945 9.525 34.46 0l2.654 2.654z"></path><path fill="none" stroke="#000" strokelinecap="round" strokelinejoin="round" strokemiterlimit="10" strokewidth="2" d="m17.516 19.071l36.206 36.206m-4.198 1.441c-9.52 6.837-22.857 5.973-31.412-2.592c-8.62-8.61-9.44-22.063-2.46-31.594"></path><ellipse cx="31.83" cy="46.907" rx="1.687" ry=".844" transform="rotate(-45.001 31.83 46.908)"></ellipse><ellipse cx="44.554" cy="53.269" rx="1.687" ry=".844" transform="rotate(-45.001 44.554 53.27)"></ellipse><ellipse cx="31.83" cy="54.86" rx="1.687" ry=".844" transform="rotate(-45.001 31.83 54.86)"></ellipse><ellipse cx="25.817" cy="40.894" rx="1.687" ry=".844" transform="rotate(-45.001 25.816 40.894)"></ellipse><ellipse cx="19.455" cy="28.17" rx="1.687" ry=".844" transform="rotate(-45.001 19.454 28.17)"></ellipse><ellipse cx="17.864" cy="40.894" rx="1.687" ry=".844" transform="rotate(-45.001 17.864 40.894)"></ellipse><ellipse cx="22.281" cy="50.086" rx="1.687" ry=".844" transform="rotate(-45.001 22.28 50.087)"></ellipse></svg>`;
});
const { Object: Object_1 } = globals;
const css$5 = {
  code: ".clickable.svelte-170kjot.svelte-170kjot{--uno:'cursor-pointer'}.clickable.svelte-170kjot:hover .feature-title.svelte-170kjot{--uno:'underline'}.feature-title.svelte-170kjot.svelte-170kjot{--at-apply:font-600 mt-3}.feature-desc.svelte-170kjot.svelte-170kjot{--at-apply:text-slate-5 mt-3 text-[14px]}.feature-item.svelte-170kjot.svelte-170kjot{--at-apply:'bg-white dark:bg-gray-9 p-4 rounded-lg hover:shadow-md transition-shadow transition-300'}.icon.svelte-170kjot.svelte-170kjot{--at-apply:'text-10 inline-flex items-center p-1 bg-[#e5e5e5] dark:bg-[#252525] rounded-md'}",
  map: null
};
const Feature = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let external;
  let { i } = $$props;
  let { title } = $$props;
  let { description } = $$props;
  let { link = void 0 } = $$props;
  let { icon = void 0 } = $$props;
  const icons = {
    Apple,
    Banana,
    Grapes,
    Peach,
    Tomato,
    Watermelon
  };
  const iconsArray = Object.values(icons);
  if ($$props.i === void 0 && $$bindings.i && i !== void 0)
    $$bindings.i(i);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  $$result.css.add(css$5);
  external = /^https?/.test(link);
  return `<div class="${["feature-item svelte-170kjot", link ? "clickable" : ""].join(" ").trim()}" role="link" tabindex="0"><div class="flex justify-between items-start"><div class="icon svelte-170kjot">${icon === void 0 ? `${validate_component(iconsArray[i % iconsArray.length] || missing_component, "svelte:component").$$render($$result, {}, {}, {})}` : `${icon.type === "svg" ? `<!-- HTML_TAG_START -->${icon.value}<!-- HTML_TAG_END -->` : `${icon.type === "iconify" ? `${validate_component(IconifyIcon, "IconifyIcon").$$render($$result, Object_1.assign({}, icon), {}, {})}` : ``}`}`}</div> ${external ? `${validate_component(External, "External").$$render($$result, {}, {}, {})}` : ``}</div> <div class="feature-title svelte-170kjot">${escape(title)}</div> <div class="feature-desc svelte-170kjot">${escape(description)}</div> </div>`;
});
const css$4 = {
  code: ".home-page.svelte-12zwlem{--at-apply:'sm:w-[70vw] max-w-[1152px] mx-auto sm:px-0 px-4 pt-4'}.title.svelte-12zwlem{--at-apply:'sm:text-16 text-10 grid grid-cols-12 font-700 leading-24'}.description.svelte-12zwlem{--at-apply:'text-8 leading-10 sm:text-inherit'}.intro.svelte-12zwlem{--at-apply:'col-start-1 sm:col-span-7 col-span-12 row-start-2 sm:row-start-1 text-center sm:text-left'}.gradient-title.svelte-12zwlem{--at-apply:svp-gradient-text}.tagline.svelte-12zwlem{--at-apply:'text-slate-5 dark:text-slate-4 text-6 mt-4 font-500 leading-9 font-normal'}.actions.svelte-12zwlem{--at-apply:'grid-cols-1 px-10 sm:px-0 grid sm:flex gap-4 mt-4 justify-center sm:justify-start max-w-[320px] mx-auto sm:max-w-none'}.features.svelte-12zwlem{--at-apply:'grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6 grid-cols-1 mb-4'}",
  map: null
};
const Home = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  compute_rest_props($$props, ["features", "actions", "tagline", "siteConfig"]);
  let { features = [] } = $$props;
  let { actions = [] } = $$props;
  let { tagline = "" } = $$props;
  let { siteConfig: siteConfig2 } = $$props;
  if ($$props.features === void 0 && $$bindings.features && features !== void 0)
    $$bindings.features(features);
  if ($$props.actions === void 0 && $$bindings.actions && actions !== void 0)
    $$bindings.actions(actions);
  if ($$props.tagline === void 0 && $$bindings.tagline && tagline !== void 0)
    $$bindings.tagline(tagline);
  if ($$props.siteConfig === void 0 && $$bindings.siteConfig && siteConfig2 !== void 0)
    $$bindings.siteConfig(siteConfig2);
  $$result.css.add(css$4);
  return `<div class="home-page svelte-12zwlem"><div class="title svelte-12zwlem"><div class="intro svelte-12zwlem"><div class="gradient-title svelte-12zwlem">${escape(siteConfig2.title)}</div> <div class="description svelte-12zwlem">${escape(siteConfig2.description)}</div> ${tagline ? `<div class="tagline svelte-12zwlem">${escape(tagline)}</div>` : ``}</div> ${slots["hero-image"] ? slots["hero-image"]({}) : ``}</div> <div class="actions svelte-12zwlem">${each(actions, (action) => {
    return `${validate_component(ActionButton, "ActionButton").$$render($$result, Object.assign({}, action), {}, {})}`;
  })}</div> <div class="features svelte-12zwlem">${each(features, (fe, i) => {
    return `${validate_component(Feature, "Feature").$$render($$result, Object.assign({}, fe, { i }), {}, {})}`;
  })}</div> </div>`;
});
const Edit = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "1em" },
      { height: "1em" },
      { viewBox: "0 0 24 24" },
      escape_object($$restProps)
    ],
    {}
  )}><g fill="none" stroke="currentColor" strokelinecap="round" strokelinejoin="round" strokewidth="2"><path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5"></path><path d="M14 2v6h6m-9.58 4.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21L4 22l.99-3.95l5.43-5.44Z"></path></g></svg>`;
});
const css$3 = {
  code: ".edit-link.svelte-nhi9gp{--at-apply:'flex items-center text-svp-primary hover:text-svp-hover cursor-pointer'}.edit-icon.svelte-nhi9gp{--at-apply:text-5 flex items-center}.edit-text.svelte-nhi9gp{--at-apply:ml-1}",
  map: null
};
const DEFAULT_TEXT = "Suggest changes to this page";
const EditPage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $page.route.id;
  let { pageType = "md" } = $$props;
  if ($$props.pageType === void 0 && $$bindings.pageType && pageType !== void 0)
    $$bindings.pageType(pageType);
  $$result.css.add(css$3);
  $$unsubscribe_page();
  return `<div class="edit-link svelte-nhi9gp" role="link" tabindex="0"><div class="edit-icon svelte-nhi9gp">${validate_component(Edit, "Edit").$$render($$result, {}, {}, {})}</div> <div class="edit-text svelte-nhi9gp">${escape(themeOptions.i18n?.suggestChangesToThisPage || DEFAULT_TEXT)}</div> </div>`;
});
const css$2 = {
  code: ".last-update.svelte-1mlgib2{--at-apply:'mt-4 sm:mt-0 text-gray-5 dark:text-gray-4 text-[14px]'}",
  map: null
};
const LastUpdate = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { lastUpdate = "" } = $$props;
  if ($$props.lastUpdate === void 0 && $$bindings.lastUpdate && lastUpdate !== void 0)
    $$bindings.lastUpdate(lastUpdate);
  $$result.css.add(css$2);
  return `${lastUpdate ? `<div class="last-update svelte-1mlgib2">${escape(themeOptions.i18n?.lastUpdateAt)} ${escape(lastUpdate)}</div>` : ``}`;
});
const css$1 = {
  code: ".hero-image.svelte-w21zdv.svelte-w21zdv{--at-apply:'flex items-center justify-center col-start sm:col-span-5 col-span-6 col-start-4 sm:col-start-8'}.hero-image.svelte-w21zdv img.svelte-w21zdv{--at-apply:'sm:w-60 w-full max-w-[220px]'}",
  map: null
};
const HeroImage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { heroImage } = $$props;
  if ($$props.heroImage === void 0 && $$bindings.heroImage && heroImage !== void 0)
    $$bindings.heroImage(heroImage);
  $$result.css.add(css$1);
  return `<div class="hero-image svelte-w21zdv"><img${add_attribute("src", heroImage, 0)}${add_attribute("alt", siteConfig.title, 0)} width="192" class="svelte-w21zdv"> </div>`;
});
const css = {
  code: ".theme-default--page-layout h2 .svp-title-anchor,.theme-default--page-layout h3 .svp-title-anchor,.theme-default--page-layout h4 .svp-title-anchor,.theme-default--page-layout h5 .svp-title-anchor,.theme-default--page-layout h6 .svp-title-anchor{--at-apply:'absolute left-0 top-[50%] flex items-center opacity-0 pointer-events-none hover:text-svp-hover transition-all transition-200';transform:translate(-100%, -50%)}.theme-default--page-layout h2 .svp-title-anchor{transform:translate(-100%, calc((-100% + 1rem) / 2))}.theme-default--page-layout h2,.theme-default--page-layout h3,.theme-default--page-layout h4,.theme-default--page-layout h5,.theme-default--page-layout h6{--at-apply:relative}.theme-default--page-layout h2{--at-apply:'border-t-solid border-t border-light-7 dark:border-gray-7 pt-4 mt-8 mb-4'}.theme-default--page-layout h2:hover .svp-title-anchor,.theme-default--page-layout h3:hover .svp-title-anchor,.theme-default--page-layout h4:hover .svp-title-anchor,.theme-default--page-layout h5:hover .svp-title-anchor,.theme-default--page-layout h6:hover .svp-title-anchor{--at-apply:pointer-events-auto opacity-100}.content.svelte-1jx2zng{--at-apply:'sm:w-[45vw] mx-auto pb-8 sm:pb-28 w-[90vw]'}.page-title.svelte-1jx2zng{--at-apply:mt-none}.meta.svelte-1jx2zng{--at-apply:'sm:flex justify-between mt-20 column'}.without-edit-link.svelte-1jx2zng{--at-apply:'justify-end'}",
  map: null
};
const PageLayout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $$unsubscribe_pages;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_pages = subscribe(pages, (value) => value);
  const routeId = $page.route.id;
  let { fm = {} } = $$props;
  const { title, description, pageType, lastUpdate, anchors: fmAnchors = [], home } = fm;
  const isHome = routeId === "/";
  anchors.set(fmAnchors);
  if ($$props.fm === void 0 && $$bindings.fm && fm !== void 0)
    $$bindings.fm(fm);
  $$result.css.add(css);
  $$unsubscribe_page();
  $$unsubscribe_pages();
  return `${$$result.head += `<!-- HEAD_svelte-yuwj80_START -->${$$result.title = `<title>${escape(title ? `${title} - ${siteConfig.title}` : siteConfig.title)}</title>`, ""}<meta name="description"${add_attribute("content", description || siteConfig.description, 0)}><!-- HEAD_svelte-yuwj80_END -->`, ""} ${!isHome ? `<div pb-4 class="theme-default--page-layout"><div class="content svelte-1jx2zng">${title ? `<h1 class="page-title svelte-1jx2zng">${escape(title)}</h1>` : ``} ${slots.default ? slots.default({}) : ``} <div class="${["meta svelte-1jx2zng", !themeOptions.editLink ? "without-edit-link" : ""].join(" ").trim()}">${themeOptions.editLink ? `${validate_component(EditPage, "EditPage").$$render($$result, { pageType }, {}, {})}` : ``} ${validate_component(LastUpdate, "LastUpdate").$$render($$result, { lastUpdate }, {}, {})}</div> ${``}</div></div>` : `${home !== false ? `${validate_component(Home, "Home").$$render($$result, Object.assign({}, fm, { siteConfig }), {}, {
    "hero-image": () => {
      return `${slots["hero-image"] ? slots["hero-image"]({ slot: "hero-image" }) : ` ${validate_component(HeroImage, "HeroImage").$$render($$result, { heroImage: fm.heroImage }, {}, {})} `}`;
    }
  })}` : ``} ${slots.default ? slots.default({}) : ``}`}`;
});
export {
  PageLayout as P
};
