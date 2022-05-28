import { c as create_ssr_component, e as escape, f as each, v as validate_component } from "../../../chunks/index-d67b9b49.js";
import { S as ServiceCard } from "../../../chunks/ServiceCard-709c4712.js";
import { T as TreatmentTitle } from "../../../chunks/TreatmentTitle-e4fd1973.js";
import { T as TreatmentContent } from "../../../chunks/TreatmentContent-dea6a9ea.js";
import { F as Footer } from "../../../chunks/Footer-b44e23cc.js";
const HorizontalCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { uiData } = $$props;
  let { data } = $$props;
  let { title, price, text, duration, image } = data;
  let paragraphs = Array.isArray(text) ? text : [text];
  console.log(paragraphs);
  let { titleColor, bgColor, width, imageBg, pTextColor } = uiData;
  if (price.indexOf && price.indexOf("|") != -1) {
    const split = price.split("|");
    price = { min: split[0], max: split[1] };
  }
  if ($$props.uiData === void 0 && $$bindings.uiData && uiData !== void 0)
    $$bindings.uiData(uiData);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="${"w-full " + escape(width ? width : " lg:w-1/3") + " flex flex-col lg:flex-row card"}"><div class="${"flex items-center "}">${image ? `<img src="${"../img/" + escape(image)}" class="${"px-4 w-full h-40 object-contain " + escape(imageBg ? imageBg : " bg-stone-300")}" alt="${"title"}" loading="${"lazy"}">` : ``}</div>  
    <div class="${"px-4 py-4 flex flex-col h-full lg:mx-4 mb-4 ml-4 mr-4 " + escape(bgColor ? bgColor : "bg-stone-0") + " card-content justify-center"}"><h3 class="${"text-2xl sm:text-xl " + escape(titleColor ? titleColor : " text-stone-500 ") + " border-b-2 py-2"}">${escape(title)}</h3>
        ${paragraphs && paragraphs.length > 0 ? `${each(paragraphs, (p) => {
    return `<p class="${"text-md text-stone-600 italic mt-4"}"><!-- HTML_TAG_START -->${p}<!-- HTML_TAG_END -->
                </p>`;
  })}` : ``}
        ${price ? `<p class="${"text-md " + escape(pTextColor ? pTextColor : " text-stone-500") + " text-right pt-9 mt-auto"}">${price.min && price.max ? `<span class="${"text-sm text-stone-200"}">da</span>  
                <bold class="${"text-black font-bold text-md"}">${escape(price.min)}</bold> 
                <span class="${"text-sm text-stone-400"}">a</span>
                <bold class="${"text-black font-bold text-md"}">${escape(price.max)}</bold>` : `${duration ? `<div class="${"flex justify-end items-end"}"><img src="${"../img/clock-1.svg"}" alt="${"time icon"}" loading="${"lazy"}" class="${"w-5"}">
                        <span class="${"text-stone-400 pl-1"}">${escape(duration)}</span></div>` : ``}    
                ${price ? `<bold class="${"text-black font-bold text-md pr-2"}">${escape(price)}</bold>` : ``}`}</p>` : ``}</div>
    
</div>`;
});
let urls = ["../json/trattamenticorpo.json"];
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
const Corpo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { lpg = data.filter((el) => el.section === "LPG ENDERMOLOGIE CORPO") } = $$props;
  let { dibi = data.filter((el) => el.section === "dibi body") } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.lpg === void 0 && $$bindings.lpg && lpg !== void 0)
    $$bindings.lpg(lpg);
  if ($$props.dibi === void 0 && $$bindings.dibi && dibi !== void 0)
    $$bindings.dibi(dibi);
  return `<div class="${"flex flex-col w-full md:w-3/4"}">${validate_component(TreatmentTitle, "TreatmentTitle").$$render($$result, {}, {}, {
    default: () => {
      return `<span class="${"fucsia-color inline"}">trattamenti</span>
        <span class="${"inline pl-2"}">corpo</span>`;
    }
  })}
    ${validate_component(TreatmentContent, "TreatmentContent").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="${"flex flex-col"}"><p class="${"text-stone-500 text-left lg:text-right pl-4 pr-4 pb-4 text-xl"}">Per una bellezza speciale un trattamento completo, mirato e selettivo<br>
                in base al tuo profilo, alle tue caratteristiche ed al tuo stile di vita
            </p>
            <div class="${"flex flex-wrap bg-stone-100 p-4 m-4 lg:items-center lg:justify-center"}">${each(lpg, (service) => {
        return `${validate_component(HorizontalCard, "HorizontalCard").$$render($$result, {
          data: service,
          uiData: {
            imageBg: "fucsia-color-bg",
            titleColor: "text-stone-800 font-bold",
            bgColor: "bg-stone-100",
            titleBgColor: "fucsia-color-bg",
            width: "lg:w-2/3"
          }
        }, {}, {})}`;
      })}</div>
            <div class="${"flex flex-col pt-4 bg-white lg:items-center text-left"}"><span class="${"text-xl text-stone-600 relative left-1/4 mb-4 px-4 font-semibold self-start -translate-x-2/3"}">DIBI BODY</span>
                <div class="${"flex flex-wrap lg:w-2/3"}">${each(dibi, (service) => {
        return `${validate_component(ServiceCard, "ServiceCard").$$render($$result, {
          data: service,
          uiData: {
            imageBg: "fucsia-color-bg",
            titleColor: "text-stone-500",
            bgColor: "bg-stone-100",
            titleBgColor: "fucsia-color-bg",
            width: "lg:w-1/2"
          }
        }, {}, {})}`;
      })}</div></div></div>
        ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
    }
  })}</div>`;
});
export { Corpo as default, load };
