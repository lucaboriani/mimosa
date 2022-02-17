import { c as create_ssr_component, e as escape, d as each, v as validate_component } from "../../chunks/index-6f55eac1.js";
import { H as Header } from "../../chunks/Header-9306c643.js";
import { O as OneThirdCard } from "../../chunks/OneThirdCard-4fdc4399.js";
import { S as ServiziMenu } from "../../chunks/ServiziMenu-da0a1911.js";
const OneFourthCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { price } = $$props;
  let { paragraphs } = $$props;
  let { duration } = $$props;
  let { image } = $$props;
  let { bgColor } = $$props;
  if (price.indexOf && price.indexOf("|") != -1) {
    const split = price.split("|");
    price = { min: split[0], max: split[1] };
  }
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.price === void 0 && $$bindings.price && price !== void 0)
    $$bindings.price(price);
  if ($$props.paragraphs === void 0 && $$bindings.paragraphs && paragraphs !== void 0)
    $$bindings.paragraphs(paragraphs);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.bgColor === void 0 && $$bindings.bgColor && bgColor !== void 0)
    $$bindings.bgColor(bgColor);
  return `<div class="${"w-full sm:w-1/2 md:w-1/2 lg:w-1/4 flex flex-col "}">${image ? `<div class="${"flex items-center bg-gray-300 mx-4"}"><img src="${"img/" + escape(image)}" class="${"px-4 w-full h-40 object-contain bg-gray-300"}" alt="${"title"}" loading="${"lazy"}"></div>` : ``}
    <div class="${"px-4 pb-4 flex flex-col h-full mx-4 mb-4 ml-4 mr-4 justify-between " + escape(bgColor ? bgColor : "bg-gray-0")}"><h3 class="${"text-gray-500 border-b-2 py-4 upp"}">${escape(title)}</h3>
        ${paragraphs && paragraphs.length > 0 ? `${each(paragraphs, (p) => {
    return `<p class="${"text-md text-gray-600 italic mt-4"}">${escape(p)}
                </p>`;
  })}` : ``}
        <p class="${"text-md text-gray-500 text-right"}">${price.min && price.max ? `<span class="${"text-sm text-gray-200"}">da</span>  
                <bold class="${"text-black font-bold text-md"}">${escape(price.min)}</bold> 
                <span class="${"text-sm text-gray-400"}">a</span>
                <bold class="${"text-black font-bold text-md"}">${escape(price.max)}</bold>` : `${duration ? `<span class="${"text-sm text-gray-400 block"}">${escape(duration)}</span>` : ``}    
                <bold class="${"text-black font-bold text-md pr-2 block"}">${escape(price)}</bold>`}</p></div>
    
</div>`;
});
const HalfWidthCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { price } = $$props;
  let { paragraphs } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.price === void 0 && $$bindings.price && price !== void 0)
    $$bindings.price(price);
  if ($$props.paragraphs === void 0 && $$bindings.paragraphs && paragraphs !== void 0)
    $$bindings.paragraphs(paragraphs);
  return `<div class="${"w-full sm:w-1/2 md:w-1/2 lg:w-1/2 flex flex-col "}"><div class="${"bg-white px-4 py-4 flex flex-col h-5/6 mx-4 my-4 mt-4 mb-4 ml-4 mr-4 justify-between background-gray-0"}"><h3 class="${"text-2xl sm:text-xl text-gray-500 font-semibold pt-2 pb-1"}">${escape(title)}</h3>
        ${paragraphs && paragraphs.length > 0 ? `${each(paragraphs, (p) => {
    return `<p class="${"text-md text-gray-600 italic"}"><!-- HTML_TAG_START -->${p}<!-- HTML_TAG_END -->
                </p>`;
  })}` : ``}
        
        <p class="${"text-sm text-gray-400 text-right"}">${price.min && price.max ? `da  <bold class="${"text-black font-bold text-md"}">${escape(price.min)}</bold> 
                a  <bold class="${"text-black font-bold text-md"}">${escape(price.max)}</bold>` : `<bold class="${"text-black font-bold text-md"}">${escape(price)}</bold>`}</p></div>
    
</div>`;
});
var VisoCollo_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".visocollo-dibi-logo.svelte-vvmjx7{width:10rem;bottom:5rem;right:3rem}",
  map: null
};
const VisoCollo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css$1);
  return `<div class="${"flex flex-col"}"><div class="${"flex flex-wrap pt-8"}">${each(data[0], (service) => {
    return `${validate_component(OneThirdCard, "OneThirdCard").$$render($$result, {
      title: service.title,
      paragraphs: [service.text],
      price: service.price,
      duration: service.duration,
      bgColor: "bg-white"
    }, {}, {})}`;
  })}</div></div>
<div class="${"flex flex-col relative"}"><div class="${"text-md px-4 py-4 my-4 w-full flex justify-between"}"><p class="${"italic w-2/3 text-gray-600 flex flex-col justify-between"}"><span class="${"text-2xl text-gray-500"}">DIBI MILANO</span>
            <span>offre risposte mirate ai reali bisogni della tua pelle per proporti la soluzione che cercavi<br>
                e offrirti un momento speciale da dedicare a te stessa
            </span></p></div>
    <div class="${"flex flex-wrap"}">${each(data[1], (service) => {
    return `${validate_component(OneFourthCard, "OneFourthCard").$$render($$result, {
      image: service.image,
      title: service.title,
      paragraphs: [service.text],
      price: service.price,
      duration: service.duration,
      bgColor: "bg-white"
    }, {}, {})}`;
  })}</div>
    <img src="${"img/logo-dibi-center.png"}" alt="${"logo dibi"}" class="${"absolute visocollo-dibi-logo svelte-vvmjx7"}" loading="${"eager"}"></div>
<div class="${"sm:flex flex-wrap px-4"}"><div class="${"text-md text-gray-500 pt-9 p-4 bg-white w-full flex justify-between"}"><p class="${"italic w-2/3 text-gray-500 flex flex-col justify-between"}"><span class="${"font-semibold block border-b-2"}">OLOS VISO</span>
            <span>percorso estetico olistico e sensoriale fatto di trattamenti e principi attivi naturali ed efficaci per la bellezza del viso</span></p>
        <img src="${"img/Logo_Olos Marrone con pay of_preview.png"}" alt="${"logo Olos"}" class="${"w-40 mb-6"}" loading="${"eager"}"></div></div>
${data[2] ? `<div class="${"flex flex-wrap"}">${each(data[2], (service) => {
    return `${validate_component(HalfWidthCard, "HalfWidthCard").$$render($$result, {
      title: service.title,
      paragraphs: [service.text],
      price: service.price,
      duration: service.duration
    }, {}, {})}`;
  })}</div>` : ``}`;
});
var visocollo_svelte_svelte_type_style_lang = "";
const css = {
  code: ".grid-cont.svelte-jkpbjj{height:calc(100vh - 64px)}.no-scroll{overflow:hidden}",
  map: null
};
let urls = [
  "json/visocollo/first.json",
  "json/visocollo/trattamentiviso.json",
  "json/visocollo/second.json"
];
async function load({ fetch }) {
  const fetchUrl = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };
  try {
    const multiple = await Promise.all(urls.map((url) => fetchUrl(url)));
    return { props: { data: multiple } };
  } catch (error) {
    return {
      status: "400",
      error: new Error("error loading data")
    };
  }
}
const Visocollo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Viso collo e d\xE9collet\xE9</title>`, ""}`, ""}

<div id="${"main-wrap"}">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
	<section class="${"flex grid-cont svelte-jkpbjj"}">${validate_component(ServiziMenu, "ServiziMenu").$$render($$result, {}, {}, {})}
		<div class="${"flex flex-col w-3/4"}"><h1 class="${"text-gray-510 mr-8 mt-4 mb-4 text-4xl text-right"}"><span class="${"fucsia-color inline"}">viso collo</span>
				<span class="${"inline pl-2"}">d\xE9collet\xE9</span></h1>
			<div class="${"overflow-y-scroll fucsia-color-bg"}">${validate_component(VisoCollo, "VisoCollo").$$render($$result, { data }, {}, {})}</div></div></section></div>`;
});
export { Visocollo as default, load };
