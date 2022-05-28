import { c as create_ssr_component, v as validate_component, f as each, e as escape } from "../../../chunks/index-d67b9b49.js";
import { I as ImageLessCard } from "../../../chunks/ImageLessCard-5b6fc2d8.js";
import { T as TreatmentTitle } from "../../../chunks/TreatmentTitle-e4fd1973.js";
import { T as TreatmentContent } from "../../../chunks/TreatmentContent-dea6a9ea.js";
var epilazione_svelte_svelte_type_style_lang = "";
const css = {
  code: ".cont.svelte-1lrtb9u{height:calc(100vh - 8.5em)}",
  map: null
};
let urls = ["../json/epilazione.json"];
async function load({ fetch }) {
  const fetchUrl = async (url) => {
    console.log(url);
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
const Epilazione = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let packages = data.pop();
  let electro = data.pop();
  let female = data.filter((s) => s.section === "donna");
  let male = data.filter((s) => s.section === "uomo");
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="${"flex flex-col w-full md:w-3/4"}">${validate_component(TreatmentTitle, "TreatmentTitle").$$render($$result, {}, {}, {
    default: () => {
      return `<span class="${""}">Epilazione</span>`;
    }
  })}
    ${validate_component(TreatmentContent, "TreatmentContent").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="${"flex flex-col cont svelte-1lrtb9u"}"><h3 class="${"text-right font-semibold text-stone-500 pr-4"}">EPILDREAM</h3>
            <p class="${"text-right text-stone-500 pr-4 border-b pb-4"}">il laser diodo di ultima generazione a alta potenza, veloce, efficace, affidabile e tecnologico</p>
            <h3 class="${"px-4 py-2 text-stone-500 text-xl"}">Donna</h3>
            <div class="${"flex flex-wrap bg-stone-200 py-4"}">${each(female, (service) => {
        return `${validate_component(ImageLessCard, "ImageLessCard").$$render($$result, {
          data: service,
          uiData: {
            titleColor: "text-stone-500",
            bgColor: "bg-white",
            titleBgColor: "fucsia-color-bg",
            width: "lg:w-1/3"
          }
        }, {}, {})}`;
      })}</div>
            <h3 class="${"px-4 py-2 text-stone-500 text-xl"}">Uomo</h3>
            <div class="${"flex flex-wrap bg-stone-200 py-4"}">${each(male, (service) => {
        return `${validate_component(ImageLessCard, "ImageLessCard").$$render($$result, {
          data: service,
          uiData: {
            titleColor: "text-stone-500",
            bgColor: "bg-white",
            titleBgColor: "fucsia-color-bg",
            width: "lg:w-1/3"
          }
        }, {}, {})}`;
      })}</div>
            <div class="${"w-full flex "}"><div class="${"px-4 py-4 flex flex-col w-1/3 justify-between bg-stone-300"}"><h3 class="${"text-2xl sm:text-xl text-stone-500 border-b-2 py-2"}">${escape(electro.title)}</h3>
                    <p class="${"text-md text-stone-600 italic mt-4"}"><!-- HTML_TAG_START -->${electro.text}<!-- HTML_TAG_END --></p>
                    <bold class="${"block text-black font-bold text-md pr-2 text-right"}">${escape(electro.price)}</bold></div>
                <div class="${"px-4 py-4 flex flex-col w-2/3 h-full justify-between bg-stone-300"}"><h3 class="${"text-2xl sm:text-xl text-stone-500 border-b-2 py-2"}">${escape(packages.title)}</h3>
                    <p class="${"text-md text-stone-600 italic mt-4"}"><!-- HTML_TAG_START -->${packages.text}<!-- HTML_TAG_END --></p>
                    <bold class="${"block text-black font-bold text-md pr-2 text-right"}">${escape(packages.price)}</bold></div></div></div>`;
    }
  })}</div>`;
});
export { Epilazione as default, load };
