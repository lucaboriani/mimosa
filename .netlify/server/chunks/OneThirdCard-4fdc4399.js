import { c as create_ssr_component, e as escape, d as each } from "./index-6f55eac1.js";
const OneThirdCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { price } = $$props;
  let { paragraphs } = $$props;
  let { duration } = $$props;
  let { image } = $$props;
  let { titleColor } = $$props;
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
  if ($$props.titleColor === void 0 && $$bindings.titleColor && titleColor !== void 0)
    $$bindings.titleColor(titleColor);
  if ($$props.bgColor === void 0 && $$bindings.bgColor && bgColor !== void 0)
    $$bindings.bgColor(bgColor);
  return `<div class="${"w-full sm:w-1/2 md:w-1/2 lg:w-1/3 flex flex-col "}"><div class="${"flex items-center bg-gray-300 mx-4"}">${image ? `<img src="${"img/" + escape(image)}" class="${"px-4 w-full h-40 object-contain bg-gray-300"}" alt="${"title"}" loading="${"lazy"}">` : ``}</div>
    
    <div class="${"px-4 py-4 flex flex-col h-full mx-4 mb-4 ml-4 mr-4 justify-between " + escape(bgColor ? bgColor : "bg-gray-0")}"><h3 class="${"text-2xl sm:text-xl " + escape(titleColor ? titleColor : " text-gray-500 ") + " border-b-2 py-2"}">${escape(title)}</h3>
        ${paragraphs && paragraphs.length > 0 ? `${each(paragraphs, (p) => {
    return `<p class="${"text-md text-gray-600 italic mt-4"}">${escape(p)}
                </p>`;
  })}` : ``}
        <p class="${"text-md text-gray-500 text-right pt-9"}">${price.min && price.max ? `<span class="${"text-sm text-gray-200"}">da</span>  
                <bold class="${"text-black font-bold text-md"}">${escape(price.min)}</bold> 
                <span class="${"text-sm text-gray-400"}">a</span>
                <bold class="${"text-black font-bold text-md"}">${escape(price.max)}</bold>` : `${duration ? `<span class="${"text-sm text-gray-400"}">${escape(duration)}</span>` : ``}    
                ${price ? `<bold class="${"text-black font-bold text-md pr-2"}">${escape(price)}</bold>` : ``}`}</p></div>
    
</div>`;
});
export { OneThirdCard as O };
