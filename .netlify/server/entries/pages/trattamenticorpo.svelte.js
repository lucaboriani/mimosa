import { c as create_ssr_component, d as each, v as validate_component } from "../../chunks/index-6f55eac1.js";
import { H as Header } from "../../chunks/Header-9306c643.js";
import { S as ServiziMenu } from "../../chunks/ServiziMenu-da0a1911.js";
import { O as OneThirdCard } from "../../chunks/OneThirdCard-4fdc4399.js";
const TrattamentiCorpo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { lpg = data.filter((el) => el.section === "LPG ENDERMOLOGIE CORPO") } = $$props;
  let { dibi = data.filter((el) => el.section === "dibi body") } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.lpg === void 0 && $$bindings.lpg && lpg !== void 0)
    $$bindings.lpg(lpg);
  if ($$props.dibi === void 0 && $$bindings.dibi && dibi !== void 0)
    $$bindings.dibi(dibi);
  return `<div class="${"flex flex-col"}"><div class="${"flex flex-wrap bg-gray-300 p-4 pt-8"}">${each(lpg, (service) => {
    return `${validate_component(OneThirdCard, "OneThirdCard").$$render($$result, {
      title: service.title,
      paragraphs: [service.text],
      price: service.price,
      duration: service.duration,
      titleColor: "fucsia-color",
      image: service.image,
      bgColor: "bg-gray-200"
    }, {}, {})}`;
  })}
        <span class="${"text-xl w-1/3 ml-auto text-gray-600 mt-4 px-4 font-semibold"}">LPG ENDERMOLOGIE CORPO</span></div>
    <div class="${"flex pt-4"}"><span class="${"text-xl text-gray-600 mt-4 px-4 font-semibold w-1/6"}">DIBI BODY</span>
        <div class="${"flex flex-wrap w-full"}">${each(dibi, (service) => {
    return `${validate_component(OneThirdCard, "OneThirdCard").$$render($$result, {
      title: service.title,
      paragraphs: [service.text],
      price: service.price,
      duration: service.duration,
      titleColor: "fucsia-color",
      image: service.image,
      bgColor: "bg-gray-200"
    }, {}, {})}`;
  })}</div></div></div>`;
});
var trattamenticorpo_svelte_svelte_type_style_lang = "";
const css = {
  code: ".grid-cont.svelte-jkpbjj{height:calc(100vh - 64px)}.no-scroll{overflow:hidden}",
  map: null
};
let urls = ["json/trattamenticorpo.json"];
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
const Trattamenticorpo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Trattamenti Corpo</title>`, ""}`, ""}

<div id="${"main-wrap"}">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
	<section class="${"flex grid-cont svelte-jkpbjj"}">${validate_component(ServiziMenu, "ServiziMenu").$$render($$result, {}, {}, {})}
		<div class="${"flex flex-col w-3/4"}"><h1 class="${"text-gray-510 mr-8 mt-4 mb-4 text-4xl text-right"}"><span class="${"fucsia-color inline"}">trattamenti</span>
				<span class="${"inline pl-2"}">corpo</span></h1>
			<div class="${"overflow-y-scroll bg-gray-100"}">${validate_component(TrattamentiCorpo, "TrattamentiCorpo").$$render($$result, { data }, {}, {})}</div></div></section></div>`;
});
export { Trattamenticorpo as default, load };
