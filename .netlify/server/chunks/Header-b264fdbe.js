var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
__export(exports, {
  H: () => Header
});
var import_index_6f55eac1 = __toModule(require("./index-6f55eac1.js"));
const getStores = () => {
  const stores = (0, import_index_6f55eac1.g)("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
var Header_svelte_svelte_type_style_lang = "";
const css = {
  code: ".active.svelte-1d5ykln{color:black}#menu-container.svelte-1d5ykln{position:sticky;top:0;z-index:100}.mimosa-color.svelte-1d5ykln{color:#c6919b}",
  map: null
};
const Header = (0, import_index_6f55eac1.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_6f55eac1.b)(page, (value) => $page = value);
  console.log($page.url);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<div class="${"w-full svelte-1d5ykln"}" id="${"menu-container"}"><nav class="${"bg-white shadow "}"><div class="${"max-w-7xl mx-auto px-8"}"><div class="${"flex items-center justify-between h-16"}"><div class="${"w-full justify-between flex items-center"}"><a class="${"flex-shrink-0"}" href="${"/"}"><span class="${"block mimosa-color text-xl svelte-1d5ykln"}"><bold><span>la mi</span><span class="${"text-black"}">mosa</span></bold></span></a>
					<div class="${"hidden md:block"}"><div class="${"ml-10 flex items-baseline space-x-4"}"><a class="${[
    "text-gray-400 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium svelte-1d5ykln",
    $page.url.pathname === "/" ? "active" : ""
  ].join(" ").trim()}" sveltekit:prefetch href="${"/"}">Home
							</a>
							
							<a class="${[
    "text-gray-400 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium svelte-1d5ykln",
    $page.url.pathname === "/servizi" || $page.url.pathname === "/visocollo" ? "active" : ""
  ].join(" ").trim()}" href="${"/servizi"}">servizi
							</a>
							<a class="${"text-gray-400 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"}" href="${"/#"}">contatti
							</a></div></div></div>
				<div class="${"block"}"><div class="${"ml-4 flex items-center md:ml-6"}"></div></div>
				<div class="${"-mr-2 flex md:hidden"}"><button class="${"text-gray-800 hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"}"><svg width="${"20"}" height="${"20"}" fill="${"currentColor"}" class="${"h-8 w-8"}" viewBox="${"0 0 1792 1792"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"}"></path></svg></button></div></div></div></nav>
</div>`;
});
