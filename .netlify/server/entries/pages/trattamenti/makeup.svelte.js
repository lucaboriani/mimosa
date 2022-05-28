import { c as create_ssr_component, v as validate_component, f as each, e as escape } from "../../../chunks/index-d67b9b49.js";
import { S as ServiceCard } from "../../../chunks/ServiceCard-709c4712.js";
import { T as TreatmentTitle } from "../../../chunks/TreatmentTitle-e4fd1973.js";
import { T as TreatmentContent } from "../../../chunks/TreatmentContent-dea6a9ea.js";
import { F as Footer } from "../../../chunks/Footer-b44e23cc.js";
let urls = ["../json/makeup.json"];
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
const Makeup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const giftCard = data.pop();
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `${$$result.title = `<title>Makeup</title>`, ""}`, ""}
<div class="${"flex flex-col w-full md:w-3/4"}">${validate_component(TreatmentTitle, "TreatmentTitle").$$render($$result, {}, {}, {
    default: () => {
      return `<span class="${""}">make</span>
        <span class="${"fucsia-color"}">up</span>`;
    }
  })}
    ${validate_component(TreatmentContent, "TreatmentContent").$$render($$result, { classes: "" }, {}, {
    default: () => {
      return `<div class="${"flex flex-col makeup-cont"}"><div class="${"flex flex-wrap bg-stone-500 pt-4"}">${each(data, (service) => {
        return `${validate_component(ServiceCard, "ServiceCard").$$render($$result, {
          data: service,
          uiData: {
            imageBg: "fucsia-color-bg",
            titleColor: "text-stone-600",
            bgColor: "bg-stone-300",
            titleBgColor: "fucsia-color-bg",
            width: "lg:w-1/3"
          }
        }, {}, {})}`;
      })}
               
                <div class="${"w-full lg:w-1/3 flex flex-col"}"><div class="${"px-4 py-4 flex h-full justify-center items-center bg-stone-300 mt-0 m-4"}"><h3 class="${"lg:text-xl text-stone-800 py-2"}">${escape(giftCard.text)}</h3>   
                        <img src="${"../img/regalo_icona.png"}" alt="${"icona pacco"}" loading="${"lazy"}" class="${"h-16 pl-4"}"></div></div>
                
                <div class="${"w-full lg:w-1/3 flex flex-col"}"><div class="${"px-4 py-4 flex h-full justify-center items-center bg-white mt-0 m-4"}"><h3 class="${"lg:text-xl text-stone-800 py-2"}">${escape(giftCard.title)}</h3>   
                        <img src="${"../img/pacco_regalo.png"}" alt="${"icona pacco"}" loading="${"lazy"}" class="${"h-24"}"></div></div></div></div>
        ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
    }
  })}</div>`;
});
export { Makeup as default, load };
