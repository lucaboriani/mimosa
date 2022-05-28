import { c as create_ssr_component } from "./index-d67b9b49.js";
var Splash_svelte_svelte_type_style_lang = "";
const css = {
  code: ".fucsia-color-bg.svelte-xexdv1.svelte-xexdv1{background-color:#c6919b}.fucsia-color.svelte-xexdv1.svelte-xexdv1{color:#c6919b}.splash-list.svelte-xexdv1.svelte-xexdv1{height:calc(100vh - 131px)}.splash-list.svelte-xexdv1 li.svelte-xexdv1{display:flex;flex-direction:column;justify-content:center;align-items:center;transition:all .3s ease}.splash-list.svelte-xexdv1 li.svelte-xexdv1:hover{filter:brightness(115%);border:solid 1px whitesmoke}.splash-list.svelte-xexdv1 li a.svelte-xexdv1{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:1em;width:80%;height:60%}",
  map: null
};
const Splash = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"bg-white relative"}"><div class="${"w-full mx-auto z-19 justify-center"}"><ul class="${"flex w-full flex-wrap splash-list svelte-xexdv1"}"><li class="${"w-full lg:w-1/4 fucsia-color-bg order-1 lg:order-0 py-8 lg:py-0 svelte-xexdv1"}"><a class="${"bg-white flex svelte-xexdv1"}" href="${"/trattamenti/visocollo"}"><div class="${"flex"}"><span class="${"text-2xl fucsia-color inline svelte-xexdv1"}">viso collo</span>
                        <span class="${"text-2xl inline pl-2"}">d\xE9collet\xE9</span></div></a></li>
            <li class="${"w-full lg:w-1/4 order-0 lg:order-1 py-8 lg:py-0 svelte-xexdv1"}"><a href="${"/"}" class="${"svelte-xexdv1"}"><img src="${"../img/logo-mimosa.svg"}" loading="${"eager"}" alt="${"logo la mimosa "}" class="${"w-48"}"></a></li>
            <li class="${"w-full lg:w-1/4 bg-stone-100 order-2 py-8 lg:py-0 svelte-xexdv1"}"><a href="${"/trattamenti/corpo"}" class="${"bg-white text-2xl fucsia-color svelte-xexdv1"}">corpo
                </a></li>
            <li class="${"w-full lg:w-1/4 order-2 py-8 lg:py-0 svelte-xexdv1"}"><a href="${"/trattamenti/depilazione-epilazione"}" class="${"fucsia-color-bg text-2xl text-stone-700 svelte-xexdv1"}"><div class="${"flex"}">depilazione 
                        <span class="${"text-white pl-4"}">epilazione </span></div></a></li>
            <li class="${"w-full lg:w-1/4 bg-stone-400 order-2 py-8 lg:py-0 svelte-xexdv1"}"><a href="${"/trattamenti/manicurepedicure"}" class="${"bg-white text-2xl svelte-xexdv1"}"><div class="${"flex"}"><span class="${"text-2xl"}">manicure</span>
                        <span class="${"text-2xl fucsia-color pl-2 svelte-xexdv1"}">pedicure</span></div></a></li>
            <li class="${"w-full lg:w-1/4 bg-stone-100 order-2 py-8 lg:py-0 svelte-xexdv1"}"><a href="${"/trattamenti/massaggi"}" class="${"fucsia-color-bg text-2xl text-white svelte-xexdv1"}">massaggi
                </a></li>
            <li class="${"w-full lg:w-1/4 fucsia-color-bg order-2 py-8 lg:py-0 svelte-xexdv1"}"><a href="${"/trattamenti/makeup"}" class="${"bg-stone-300 text-2xl svelte-xexdv1"}"><div class="${"flex"}"><span class="${"text-2xl"}">make</span>
                        <span class="${"text-2xl fucsia-color svelte-xexdv1"}">up</span></div></a></li>
            <li class="${"w-full lg:w-1/4 bg-stone-200 order-2 py-8 lg:py-0 svelte-xexdv1"}"><span class="${"fucsia-color svelte-xexdv1"}">Chiama per un appuntamento</span>
                    <span class="${"font-semibold text-stone-500 text-3xl"}">Tel 02 99026325</span></li></ul></div></div>`;
});
export { Splash as S };
