import { g as getContext, c as create_ssr_component, b as subscribe } from "./index-6f55eac1.js";
const getStores = () => {
  const stores = getContext("__svelte__");
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
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  console.log($page.url);
  let servicePaths = [
    "/servizi",
    "/visocollo",
    "/epilazione",
    "/makeup",
    "/manicurepedicure",
    "/trattamenticorpo",
    "/massaggi"
  ];
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<div class="${"w-full svelte-1d5ykln"}" id="${"menu-container"}"><nav class="${"bg-white shadow "}"><div class="${"px-8"}"><div class="${"flex items-center justify-between h-16"}"><div class="${"w-full justify-between flex items-center"}"><a class="${"flex-shrink-0"}" href="${"/"}"><span class="${"block mimosa-color text-3xl svelte-1d5ykln"}"><bold><span>la mi</span><span class="${"text-black"}">mosa</span></bold></span></a>
					<div class="${"hidden md:block"}"><div class="${"ml-10 flex items-baseline space-x-4"}"><a class="${[
    "text-gray-400 hover:text-gray-800 px-3 py-2 rounded-md text-xl font-medium svelte-1d5ykln",
    $page.url.pathname === "/" ? "active" : ""
  ].join(" ").trim()}" sveltekit:prefetch href="${"/"}">Home
							</a>
							
							<a class="${[
    "text-gray-400 hover:text-gray-800 px-3 py-2 rounded-md text-xl font-medium svelte-1d5ykln",
    servicePaths.indexOf($page.url.pathname) !== -1 ? "active" : ""
  ].join(" ").trim()}" href="${"/servizi"}">servizi
							</a>
							<a class="${"text-gray-400 hover:text-gray-800 px-3 py-2 rounded-md text-xl font-medium"}" href="${"/#"}">contatti
							</a></div></div></div>
				<div class="${"block"}"><div class="${"ml-4 flex items-center md:ml-6"}"></div></div>
				<div class="${"-mr-2 flex md:hidden"}"><button class="${"text-gray-800 hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"}"><svg width="${"20"}" height="${"20"}" fill="${"currentColor"}" class="${"h-8 w-8"}" viewBox="${"0 0 1792 1792"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"}"></path></svg></button></div></div></div></nav>
</div>`;
});
export { Header as H, page as p };
