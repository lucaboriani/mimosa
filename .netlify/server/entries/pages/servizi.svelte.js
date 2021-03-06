import { c as create_ssr_component, v as validate_component } from "../../chunks/index-d67b9b49.js";
import { H as Header } from "../../chunks/Header-f6d0b3b9.js";
import { S as Splash } from "../../chunks/Splash-880b2e05.js";
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
