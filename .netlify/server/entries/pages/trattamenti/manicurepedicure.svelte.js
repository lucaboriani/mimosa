import { c as create_ssr_component, v as validate_component, f as each } from "../../../chunks/index-d67b9b49.js";
import { S as ServiceCard } from "../../../chunks/ServiceCard-709c4712.js";
import { T as TreatmentTitle } from "../../../chunks/TreatmentTitle-e4fd1973.js";
import { T as TreatmentContent } from "../../../chunks/TreatmentContent-dea6a9ea.js";
import { F as Footer } from "../../../chunks/Footer-b44e23cc.js";
var manicurepedicure_svelte_svelte_type_style_lang = "";
const css = {
  code: ".cont.svelte-7yt1q8{height:calc(100vh - 64px)}.no-scroll{overflow:hidden}",
  map: null
};
let urls = ["../json/manicurepedicure.json"];
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
const Manicurepedicure = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Manicure e pedicure</title>`, ""}`, ""}

<div class="${"flex flex-col w-full md:w-3/4"}">${validate_component(TreatmentTitle, "TreatmentTitle").$$render($$result, {}, {}, {
    default: () => {
      return `<span class="${"fucsia-color inline"}">manicure</span>
		<span class="${"inline pl-2"}">pedicure</span>`;
    }
  })}
	${validate_component(TreatmentContent, "TreatmentContent").$$render($$result, { classes: "fucsia-color-bg" }, {}, {
    default: () => {
      return `<div class="${"flex flex-col cont svelte-7yt1q8"}"><div class="${"flex flex-wrap pt-4"}">${each(data, (service) => {
        return `${validate_component(ServiceCard, "ServiceCard").$$render($$result, {
          data: service,
          uiData: {
            imageBg: "bg-white",
            titleColor: "text-stone-500",
            bgColor: "bg-stone-300",
            titleBgColor: "fucsia-color-bg",
            width: "lg:w-1/3"
          }
        }, {}, {})}`;
      })}</div>
			${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>`;
    }
  })}</div>`;
});
export { Manicurepedicure as default, load };
