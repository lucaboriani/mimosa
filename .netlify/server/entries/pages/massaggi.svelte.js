import { c as create_ssr_component, d as each, v as validate_component } from "../../chunks/index-6f55eac1.js";
import { H as Header } from "../../chunks/Header-9306c643.js";
import { O as OneThirdCard } from "../../chunks/OneThirdCard-4fdc4399.js";
import { S as ServiziMenu } from "../../chunks/ServiziMenu-da0a1911.js";
var Massaggi_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".makeup-cont.svelte-19jwada{height:calc(100vh - 8.5em)}",
  map: null
};
const Massaggi = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css$1);
  return `<div class="${"flex flex-col makeup-cont svelte-19jwada"}"><div class="${"flex flex-wrap pt-4"}">${each(data, (service) => {
    return `${validate_component(OneThirdCard, "OneThirdCard").$$render($$result, {
      image: service.image,
      title: service.title,
      paragraphs: [service.text],
      price: service.price,
      duration: service.duration,
      titleColor: "text-gray-500",
      bgColor: "bg-white",
      titleBgColor: "fucsia-color-bg"
    }, {}, {})}`;
  })}</div></div>`;
});
var massaggi_svelte_svelte_type_style_lang = "";
const css = {
  code: ".grid-cont.svelte-jkpbjj{height:calc(100vh - 64px)}.no-scroll{overflow:hidden}",
  map: null
};
let urls = ["json/massaggi.json"];
async function load({ fetch }) {
  const fetchUrl = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };
  try {
    const multiple = await Promise.all(urls.map((url) => fetchUrl(url)));
    return { props: { data: multiple[0] } };
  } catch (error) {
    return {
      status: "400",
      error: new Error("error loading data")
    };
  }
}
const Massaggi_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  console.log(data);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Massaggi</title>`, ""}`, ""}

<div id="${"main-wrap"}">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
	<section class="${"flex grid-cont svelte-jkpbjj"}">${validate_component(ServiziMenu, "ServiziMenu").$$render($$result, {}, {}, {})}
		<div class="${"flex flex-col w-3/4"}"><h1 class="${"text-gray-510 mr-8 mt-4 mb-4 text-4xl text-right"}"><span class="${"fucsia-color inline"}">massaggi</span></h1>
			<div class="${"overflow-y-scroll bg-gray-200"}">${validate_component(Massaggi, "Massaggi").$$render($$result, { data }, {}, {})}</div></div></section></div>`;
});
export { Massaggi_1 as default, load };
