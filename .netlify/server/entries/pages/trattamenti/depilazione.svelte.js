import { c as create_ssr_component, v as validate_component, f as each } from "../../../chunks/index-d67b9b49.js";
import { I as ImageLessCard } from "../../../chunks/ImageLessCard-5b6fc2d8.js";
import { T as TreatmentTitle } from "../../../chunks/TreatmentTitle-e4fd1973.js";
import { T as TreatmentContent } from "../../../chunks/TreatmentContent-dea6a9ea.js";
var depilazione_svelte_svelte_type_style_lang = "";
const css = {
  code: ".cont.svelte-1lrtb9u{height:calc(100vh - 8.5em)}",
  map: null
};
let urls = ["../json/depilazione.json"];
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
const Depilazione = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="${"flex flex-col w-full md:w-3/4"}">${validate_component(TreatmentTitle, "TreatmentTitle").$$render($$result, {}, {}, {
    default: () => {
      return `<span class="${""}">make</span>
        <span class="${"fucsia-color"}">up</span>`;
    }
  })}
    ${validate_component(TreatmentContent, "TreatmentContent").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="${"flex flex-col cont svelte-1lrtb9u"}"><div class="${"flex flex-wrap bg-stone-200 pt-4"}">${each(data, (service) => {
        return `${validate_component(ImageLessCard, "ImageLessCard").$$render($$result, {
          data: service,
          uiData: {
            titleColor: "text-stone-300",
            bgColor: "bg-white",
            titleBgColor: "bg-stone-600",
            width: "lg:w-1/3"
          }
        }, {}, {})}`;
      })}</div></div>`;
    }
  })}</div>`;
});
export { Depilazione as default, load };
