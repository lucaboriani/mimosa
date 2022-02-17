import { c as create_ssr_component, v as validate_component } from "../../chunks/index-6f55eac1.js";
import { H as Header } from "../../chunks/Header-9306c643.js";
var Splash_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".fucsia-color-bg.svelte-zsoycn.svelte-zsoycn{background-color:#c6919b}.fucsia-color.svelte-zsoycn.svelte-zsoycn{color:#c6919b}.splash-list.svelte-zsoycn.svelte-zsoycn{height:calc(100vh - 131px)}.splash-list.svelte-zsoycn li.svelte-zsoycn{display:flex;flex-direction:column;justify-content:center;align-items:center}.splash-list.svelte-zsoycn li a.svelte-zsoycn{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:1em;width:80%;height:60%}.mimosa-color.svelte-zsoycn.svelte-zsoycn{color:#c6919b}.mosa.svelte-zsoycn.svelte-zsoycn{word-spacing:-.3em}",
  map: null
};
const Splash = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<h1 class="${"text-gray-500 text-right mr-8 mt-4 mb-4 text-4xl"}">I nostri servizi</h1>
<div class="${"bg-white relative"}"><div class="${"w-full mx-auto z-19 justify-center"}"><ul class="${"flex w-full flex-wrap splash-list svelte-zsoycn"}"><li class="${"w-1/4 fucsia-color-bg svelte-zsoycn"}"><a class="${"bg-white flex svelte-zsoycn"}" href="${"/visocollo"}"><div class="${"flex"}"><span class="${"text-2xl fucsia-color inline svelte-zsoycn"}">viso collo</span>
                        <span class="${"text-2xl inline pl-2"}">d\xE9collet\xE9</span></div></a></li>
            <li class="${"w-1/4 min-h-10 text-5xl svelte-zsoycn"}"><span class="${"text-center"}"><span class="${"mimosa-color svelte-zsoycn"}">la</span>
                    <span class="${"mosa svelte-zsoycn"}"><span class="${"mimosa-color svelte-zsoycn"}">mi</span>
                        <span class="${"text-black mosa svelte-zsoycn"}">mosa</span></span></span></li>
            <li class="${"w-1/4 bg-gray-100 svelte-zsoycn"}"><a href="${"/trattamenticorpo"}" class="${"bg-white text-2xl fucsia-color svelte-zsoycn"}">corpo
                </a></li>
            <li class="${"w-1/4 svelte-zsoycn"}"><a href="${"/epilazione"}" class="${"fucsia-color-bg text-2xl text-gray-700 svelte-zsoycn"}">epilazione
                </a></li>
            <li class="${"w-1/4 bg-gray-400 svelte-zsoycn"}"><a href="${"/manicurepedicure"}" class="${"bg-white text-2xl svelte-zsoycn"}"><div class="${"flex"}"><span class="${"text-2xl"}">manicure</span>
                        <span class="${"text-2xl fucsia-color pl-2 svelte-zsoycn"}">pedicure</span></div></a></li>
            <li class="${"w-1/4 bg-gray-100 svelte-zsoycn"}"><a href="${"/massaggi"}" class="${"fucsia-color-bg text-2xl text-white svelte-zsoycn"}">massaggi
                </a></li>
            <li class="${"w-1/4 fucsia-color-bg svelte-zsoycn"}"><a href="${"/makeup"}" class="${"bg-gray-300 text-2xl svelte-zsoycn"}"><div class="${"flex"}"><span class="${"text-2xl"}">make</span>
                        <span class="${"text-2xl fucsia-color svelte-zsoycn"}">up</span></div></a></li>
            <li class="${"w-1/4  svelte-zsoycn"}"><a href="${"#a"}" class="${"svelte-zsoycn"}"><span class="${"fucsia-color svelte-zsoycn"}">Chiama per un appuntamento</span>
                    <span class="${"font-semibold text-gray-500 text-3xl"}">Tel 02 99026325</span></a></li></ul></div></div>`;
});
var servizi_svelte_svelte_type_style_lang = "";
const css = {
  code: ".no-scroll{overflow:hidden}",
  map: null
};
const Servizi = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>I nostri servizi</title>`, ""}`, ""}
<div id="${"main-wrap"}">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
	${validate_component(Splash, "Splash").$$render($$result, {}, {}, {})}
	</div>`;
});
export { Servizi as default };
