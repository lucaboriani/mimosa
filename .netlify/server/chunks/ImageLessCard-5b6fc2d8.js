import { c as create_ssr_component, e as escape, f as each } from "./index-d67b9b49.js";
const ImageLessCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { uiData } = $$props;
  let { data } = $$props;
  let { title, price, text, duration, subscription } = data;
  let paragraphs = [text];
  let { titleColor, bgColor, width, titleBgColor, pTextColor } = uiData;
  if (price.indexOf && price.indexOf("|") != -1) {
    const split = price.split("|");
    price = { min: split[0], max: split[1] };
  }
  if ($$props.uiData === void 0 && $$bindings.uiData && uiData !== void 0)
    $$bindings.uiData(uiData);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="${"w-full sm:w-1/2 md:w-1/2 " + escape(width ? width : " lg:w-1/3") + " flex flex-col"}"><div class="${"flex flex-col h-full mx-4 mt-2 mb-2 ml-4 mr-4 " + escape(bgColor ? bgColor : "bg-stone-0") + " justify-between"}"><div class="${"h-full " + escape(titleBgColor ? titleBgColor : " bg-white ") + " pb-4"}"><h3 class="${"text-xl sm:text-xl " + escape(titleColor ? titleColor : " text-stone-500 ") + " p-4"}">${escape(title)}</h3>
            ${paragraphs && paragraphs.length > 0 ? `${each(paragraphs, (p) => {
    return `<p class="${"text-md text-stone-600 italic mt-auto ml-4 mb-2"}"><!-- HTML_TAG_START -->${p}<!-- HTML_TAG_END -->
                    </p>`;
  })}` : ``}</div>
        <div class="${"flex flex-col pt-2"}">${price ? `<p class="${"text-md text-stone-500 text-right uppercase mt-auto "}">${price.min && price.max ? `<span class="${"text-sm text-stone-200"}">da</span>  
                        <bold class="${"text-black font-bold text-md"}">${escape(price.min)}</bold> 
                        <span class="${"text-sm text-stone-400"}">a</span>
                        <bold class="${"text-black font-bold text-md"}">${escape(price.max)}</bold>` : `${duration ? `<span class="${"text-sm text-stone-400"}">${escape(duration)}</span>` : ``}    
                        ${price ? `<bold class="${"text-stone-600 text-md pr-2"}">${escape(price)}</bold>` : ``}`}</p>` : ``}
            ${subscription ? `<p class="${"text-md text-stone-500 text-right mt-auto uppercase mb-2"}"><bold class="${"text-stone-600 text-md pr-2"}">${escape(subscription)}</bold></p>` : ``}</div></div>
    
</div>`;
});
export { ImageLessCard as I };
