import { c as create_ssr_component, e as escape, f as each } from "./index-d67b9b49.js";
const ServiceCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { uiData } = $$props;
  let { data } = $$props;
  let { title, price, text, duration, image } = data;
  let paragraphs = Array.isArray(text) ? text : [text];
  let { titleColor, bgColor, width, imageBg, pTextColor } = uiData;
  if (price.indexOf && price.indexOf("|") != -1) {
    const split = price.split("|");
    price = { min: split[0], max: split[1] };
  }
  if ($$props.uiData === void 0 && $$bindings.uiData && uiData !== void 0)
    $$bindings.uiData(uiData);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="${"w-full sm:w-1/2 md:w-1/2 " + escape(width ? width : " lg:w-1/3") + " flex flex-col card"}"><div class="${"flex items-center mx-4"}">${image ? `<img src="${"../img/" + escape(image)}" class="${"px-4 w-full h-40 object-contain " + escape(imageBg ? imageBg : " bg-stone-300")}" alt="${"title"}" loading="${"lazy"}">` : ``}</div>
    
    <div class="${"px-4 py-4 flex flex-col h-full mx-4 mb-4 ml-4 mr-4 " + escape(bgColor ? bgColor : "bg-stone-0") + " card-content"}"><h3 class="${"text-2xl sm:text-xl " + escape(titleColor ? titleColor : " text-stone-500 ") + " border-b-2 py-2"}">${escape(title)}</h3>
        ${paragraphs && paragraphs.length > 0 ? `${each(paragraphs, (p) => {
    return `<p class="${"text-md text-stone-600 italic mt-4"}"><!-- HTML_TAG_START -->${p}<!-- HTML_TAG_END -->
                </p>`;
  })}` : ``}
        <p class="${"text-md " + escape(pTextColor ? pTextColor : " text-stone-500") + " text-right pt-9 mt-auto"}">${price.min && price.max ? `<span class="${"text-sm text-stone-200"}">da</span>  
                <bold class="${"text-black font-bold text-md"}">${escape(price.min)}</bold> 
                <span class="${"text-sm text-stone-400"}">a</span>
                <bold class="${"text-black font-bold text-md"}">${escape(price.max)}</bold>` : `${duration ? `<div class="${"flex justify-end items-end"}"><img src="${"../img/clock-1.svg"}" alt="${"time icon"}" loading="${"lazy"}" class="${"w-5"}">
                        <span class="${"text-stone-400 pl-1"}">${escape(duration)}</span></div>` : ``}    
                ${price ? `<bold class="${"text-black font-bold text-md pr-2"}">${escape(price)}</bold>` : ``}`}</p></div>
    
</div>`;
});
export { ServiceCard as S };
