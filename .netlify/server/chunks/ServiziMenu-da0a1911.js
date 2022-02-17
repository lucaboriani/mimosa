import { c as create_ssr_component, b as subscribe, e as escape } from "./index-6f55eac1.js";
import { p as page } from "./Header-9306c643.js";
var ServiziMenu_svelte_svelte_type_style_lang = "";
const css = {
  code: ".service-menu.svelte-4rvarj{padding-top:4.5rem}",
  map: null
};
const ServiziMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<nav class="${"w-1/4 bg-gray-400 service-menu px-4 svelte-4rvarj"}"><ul class="${"flex w-full flex-col"}"><li class="${"mb-2"}"><a class="${escape($page.url.pathname === "/visocollo" ? "fucsia-color-bg " : "bg-gray-300 ") + " p-2 flex border border-gray-700"}" href="${"/visocollo"}"><span class="${"text-blacl"}">viso collo</span>
                <span class="${"inline pl-2 text-white"}">d\xE9collet\xE9</span></a></li>
        <li class="${"mb-2"}"><a href="${"/trattamenticorpo"}" class="${escape($page.url.pathname === "/trattamenticorpo" ? "fucsia-color-bg " : "bg-gray-300 ") + " flex p-2 border border-gray-100"}"><span class="${"text-black"}">trattamenti</span>
                <span class="${"pl-2 text-white"}">corpo</span></a></li>
        <li class="${"mb-2"}"><a href="${"/epilazione"}" class="${escape($page.url.pathname === "/epilazione" ? "fucsia-color-bg " : "bg-gray-300 ") + " border flex p-2 border border-gray-100"}"><span class="${"text-black "}">epilazione</span>
                <span class="${"text-white pl-2"}">depilazione</span></a></li>
        <li class="${"mb-2"}"><a href="${"/manicurepedicure"}" class="${escape($page.url.pathname === "/manicurepedicure" ? "fucsia-color-bg " : "bg-gray-300 ") + " flex p-2 border border-gray-100"}"><span class="${""}">manicure</span>
                <span class="${"text-white pl-2"}">pedicure</span></a></li>
        <li class="${"mb-2"}"><a href="${"/massaggi"}" class="${escape($page.url.pathname === "/massaggi" ? "fucsia-color-bg " : "bg-gray-300 ") + " flex p-2 border border-gray-100"}">massaggi
            </a></li>
        <li class="${"mb-2 "}"><a href="${"/makeup"}" class="${escape($page.url.pathname === "/makeup" ? "fucsia-color-bg " : "bg-gray-300 ") + " flex p-2 border border-gray-100"}"><span class="${""}">make</span>
                    <span class="${"text-white"}">up</span></a></li></ul></nav>`;
});
export { ServiziMenu as S };
