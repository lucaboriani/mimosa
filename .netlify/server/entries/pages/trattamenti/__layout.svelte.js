import { c as create_ssr_component, d as subscribe, e as escape, v as validate_component } from "../../../chunks/index-d67b9b49.js";
/* empty css                            */import { p as page, H as Header } from "../../../chunks/Header-f6d0b3b9.js";
var ServiziMenu_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".service-menu.svelte-4rvarj{padding-top:4.5rem}",
  map: null
};
const ServiziMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css$1);
  $$unsubscribe_page();
  return `<nav class="${"hidden md:block w-1/4 bg-stone-400 service-menu px-4 svelte-4rvarj"}"><ul class="${"flex w-full flex-col"}"><li class="${"mb-2"}"><a class="${escape($page.url.pathname === "/trattamenti/visocollo" ? "fucsia-color-bg " : "bg-stone-300 ") + " p-2 flex border border-stone-700"}" href="${"/trattamenti/visocollo"}"><span class="${"text-blacl"}">viso collo</span>
                <span class="${"inline pl-2 text-white"}">d\xE9collet\xE9</span></a></li>
        <li class="${"mb-2"}"><a href="${"/trattamenti/corpo"}" class="${escape($page.url.pathname === "/trattamenti/corpo" ? "fucsia-color-bg " : "bg-stone-300 ") + " flex p-2 border border-stone-100"}"><span class="${"text-black"}">trattamenti</span>
                <span class="${"pl-2 text-white"}">corpo</span></a></li>
        <li class="${"mb-2"}"><a href="${"/trattamenti/depilazione-epilazione"}" class="${escape($page.url.pathname === "/trattamenti/depilazione-epilazione" ? "fucsia-color-bg " : "bg-stone-300 ") + " border flex p-2 border border-stone-100"}"><span class="${"pl-2 text-white"}">depilazione</span>
                <span class="${"text-black pl-2 "}">epilazione</span></a></li>
        
        <li class="${"mb-2"}"><a href="${"/trattamenti/manicurepedicure"}" class="${escape($page.url.pathname === "/trattamenti/manicurepedicure" ? "fucsia-color-bg " : "bg-stone-300 ") + " flex p-2 border border-stone-100"}"><span class="${""}">manicure</span>
                <span class="${"text-white pl-2"}">pedicure</span></a></li>
        <li class="${"mb-2"}"><a href="${"/trattamenti/massaggi"}" class="${escape($page.url.pathname === "/trattamenti/massaggi" ? "fucsia-color-bg " : "bg-stone-300 ") + " flex p-2 border border-stone-100"}">massaggi
            </a></li>
        <li class="${"mb-2 "}"><a href="${"/trattamenti/makeup"}" class="${escape($page.url.pathname === "/trattamenti/makeup" ? "fucsia-color-bg " : "bg-stone-300 ") + " flex p-2 border border-stone-100"}"><span class="${""}">make</span>
                    <span class="${"text-white"}">up</span></a></li></ul></nav>`;
});
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".grid-cont.svelte-1va52by{height:calc(100vh - 64px)}.no-scroll{overflow:hidden}",
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main><div id="${"main-wrap"}">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
		<section class="${"flex grid-cont svelte-1va52by"}">${validate_component(ServiziMenu, "ServiziMenu").$$render($$result, {}, {}, {})}
			${slots.default ? slots.default({}) : ``}</section></div></main>`;
});
export { _layout as default };
