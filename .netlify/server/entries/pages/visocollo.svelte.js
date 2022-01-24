var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
__export(exports, {
  default: () => Visocollo
});
var import_index_6f55eac1 = __toModule(require("../../chunks/index-6f55eac1.js"));
var import_Header_b264fdbe = __toModule(require("../../chunks/Header-b264fdbe.js"));
const GroupOneService = (0, import_index_6f55eac1.c)(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { price } = $$props;
  let { paragraphs } = $$props;
  let { duration } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.price === void 0 && $$bindings.price && price !== void 0)
    $$bindings.price(price);
  if ($$props.paragraphs === void 0 && $$bindings.paragraphs && paragraphs !== void 0)
    $$bindings.paragraphs(paragraphs);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  return `<div class="${"w-full sm:w-1/2 md:w-1/2 lg:w-1/3 flex flex-col "}"><div class="${"bg-white px-4 py-4 flex flex-col h-5/6 mx-4 my-4 mt-4 mb-4 ml-4 mr-4 justify-between background-gray-0"}"><h3 class="${"text-2xl sm:text-xl text-gray-500 border-b-2 py-2 upp"}">${(0, import_index_6f55eac1.e)(title)}</h3>
        ${paragraphs && paragraphs.length > 0 ? `${(0, import_index_6f55eac1.d)(paragraphs, (p) => {
    return `<p class="${"text-md text-gray-600 italic mt-4"}">${(0, import_index_6f55eac1.e)(p)}
                </p>`;
  })}` : ``}
        <p class="${"text-md text-gray-500 text-right pt-9"}">${price.min && price.max ? `<span class="${"text-sm text-gray-200"}">da</span>  
                <bold class="${"text-black font-bold text-md"}">${(0, import_index_6f55eac1.e)(price.min)}\u20AC
                </bold> 
                <span class="${"text-sm text-gray-400"}">a</span>
                <bold class="${"text-black font-bold text-md"}">${(0, import_index_6f55eac1.e)(price.max)}\u20AC
                </bold>` : `${duration ? `<span class="${"text-sm text-gray-400"}">${(0, import_index_6f55eac1.e)(duration)}</span>` : ``}    
                <bold class="${"text-black font-bold text-md pr-2"}">${(0, import_index_6f55eac1.e)(price)}\u20AC</bold>`}</p></div>
    
</div>`;
});
const GroupTwoService = (0, import_index_6f55eac1.c)(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { price } = $$props;
  let { paragraphs } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.price === void 0 && $$bindings.price && price !== void 0)
    $$bindings.price(price);
  if ($$props.paragraphs === void 0 && $$bindings.paragraphs && paragraphs !== void 0)
    $$bindings.paragraphs(paragraphs);
  return `<div class="${"w-full sm:w-1/2 md:w-1/2 lg:w-1/2 flex flex-col "}"><div class="${"bg-white px-4 py-4 flex flex-col h-5/6 mx-4 my-4 mt-4 mb-4 ml-4 mr-4 justify-between background-gray-0"}"><h3 class="${"text-2xl sm:text-xl text-gray-500 font-semibold pt-2 pb-1"}">${(0, import_index_6f55eac1.e)(title)}</h3>
        ${paragraphs && paragraphs.length > 0 ? `${(0, import_index_6f55eac1.d)(paragraphs, (p) => {
    return `<p class="${"text-md text-gray-600 italic"}"><!-- HTML_TAG_START -->${p}<!-- HTML_TAG_END -->
                </p>`;
  })}` : ``}
        
        <p class="${"text-sm text-gray-400 text-right"}">${price.min && price.max ? `da  <bold class="${"text-black font-bold text-md"}">${(0, import_index_6f55eac1.e)(price.min)}\u20AC
                    </bold> 
                a  <bold class="${"text-black font-bold text-md"}">${(0, import_index_6f55eac1.e)(price.max)}\u20AC
                    </bold>` : `<bold class="${"text-black font-bold text-md"}">${(0, import_index_6f55eac1.e)(price)}\u20AC</bold>`}</p></div>
    
</div>`;
});
var VisoCollo_svelte_svelte_type_style_lang = "";
const css = {
  code: ".grid-cont.svelte-1lk7p5g{height:calc(100vh - 64px)}.service-menu.svelte-1lk7p5g{padding-top:4.5rem}",
  map: null
};
const VisoCollo = (0, import_index_6f55eac1.c)(($$result, $$props, $$bindings, slots) => {
  let serviceGroups = {
    first: [
      {
        title: "Analisi computerizzata viso",
        paragraphs: [],
        duration: "",
        price: 50
      },
      {
        title: "Pulizia viso",
        paragraphs: ["con depilazione ciglia e baffetti"],
        duration: "1 ora e 30 min",
        price: 30
      },
      {
        title: "Trattamenti flash",
        paragraphs: [],
        duration: "1 ora ",
        price: 30
      },
      {
        title: "LPG viso",
        paragraphs: ["riposiziona i volumi del viso"],
        duration: "1 ora ",
        price: 70
      },
      {
        title: "K.R.F.",
        paragraphs: ["azione termica rassodante"],
        duration: "",
        price: { min: 35, max: 70 }
      },
      {
        title: "Dermopeeling",
        paragraphs: ["microdermoabrasione cosmetica"],
        duration: "1 ora ",
        price: 48
      }
    ],
    second: [
      {
        title: "The mini spa treatment",
        paragraphs: [
          `Offre alla pelle grandi vantaggi in pochissimo tempo
                            lasciando una sensazione di freschezza<br>
                            donando effetti rivitalizzanti con un accento sull'esfoliazione e l'idratazione`
        ],
        duration: "30 min",
        price: 49
      },
      {
        title: "High definition peel",
        paragraphs: [
          ` Intensivo trattamento peel mensile consente straordinari miglioramenti anti-aging con risultati visibili.<br>
                        Esfolia profondamente, riempie e volumizza l'aspetto della pelle lasciando la cute radiosa e levigata
                       `
        ],
        duration: "30 min",
        price: 150
      }
    ],
    third: []
  };
  $$result.css.add(css);
  return `<section class="${"flex grid-cont svelte-1lk7p5g"}"><nav class="${"w-1/4 bg-gray-400 service-menu px-4 svelte-1lk7p5g"}"><ul class="${"flex w-full flex-col"}"><li class="${"mb-2"}"><a class="${"fucsia-color-bg p-2 flex border border-gray-700"}" href="${"/visocollo"}"><span class="${"text-blacl"}">viso collo</span>
                    <span class="${"inline pl-2 text-white"}">d\xE9collet\xE9</span></a></li>
            <li class="${"mb-2"}"><a href="${"#a"}" class="${"bg-gray-300 flex p-2 border border-gray-100"}"><span class="${"text-black"}">trattamenti</span>
                    <span class="${"pl-2 fucsia-color "}">corpo</span></a></li>
            <li class="${"border mb-2"}"><a href="${"#a"}" class="${"bg-gray-300 flex p-2 border border-gray-100"}">epilazione
                </a></li>
            <li class="${"mb-2"}"><a href="${"#a"}" class="${"bg-gray-300 flex p-2 border border-gray-100"}"><span class="${""}">manicure</span>
                    <span class="${"fucsia-color pl-2"}">pedicure</span></a></li>
            <li class="${"mb-2"}"><a href="${"#a"}" class="${"bg-gray-300 flex p-2 border border-gray-100"}">massaggi
                </a></li>
            <li class="${"mb-2 "}"><a href="${"#a"}" class="${"bg-gray-300 flex p-2 border border-gray-100"}"><span class="${""}">make</span>
                        <span class="${"fucsia-color"}">up</span></a></li></ul></nav>
    <div class="${"flex flex-col w-3/4"}"><h1 class="${"text-gray-510 mr-8 mt-4 mb-4 text-4xl text-right"}"><span class="${"fucsia-color inline"}">viso collo</span>
            <span class="${"inline pl-2"}">d\xE9collet\xE9</span></h1>
        <div class="${"overflow-y-scroll fucsia-color-bg"}"><div class="${"flex flex-col"}"><div class="${"flex flex-wrap"}">${(0, import_index_6f55eac1.d)(serviceGroups.first, (service) => {
    return `${(0, import_index_6f55eac1.v)(GroupOneService, "GroupOneService").$$render($$result, {
      title: service.title,
      paragraphs: service.paragraphs,
      price: service.price,
      duration: service.duration
    }, {}, {})}`;
  })}</div></div>
            <div class="${"sm:flex flex-wrap px-4"}"><div class="${"text-md text-gray-500 pt-9 p-4 bg-white w-full flex justify-between"}"><p class="${"italic w-2/3 text-gray-500 flex flex-col justify-between"}"><span class="${"font-semibold block border-b-2"}">OLOS VISO</span>
                        <span>percorso estetico olistico e sensoriale fatto di trattamenti e principi attivi naturali ed efficaci per la bellezza del viso</span></p>
                    <img src="${"img/Logo_Olos Marrone con pay of_preview.png"}" alt="${"logo Olos"}" class="${"w-40 mb-6"}" loading="${"eager"}"></div></div>
            <div class="${"flex flex-wrap"}">${(0, import_index_6f55eac1.d)(serviceGroups.second, (service) => {
    return `${(0, import_index_6f55eac1.v)(GroupTwoService, "GroupTwoService").$$render($$result, {
      title: service.title,
      paragraphs: service.paragraphs,
      price: service.price,
      duration: service.duration
    }, {}, {})}`;
  })}</div></div></div></section>`;
});
const Visocollo = (0, import_index_6f55eac1.c)(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>servizi</title>`, ""}`, ""}
<div id="${"main-wrap"}">${(0, import_index_6f55eac1.v)(import_Header_b264fdbe.H, "Header").$$render($$result, {}, {}, {})}
	
	${(0, import_index_6f55eac1.v)(VisoCollo, "VisoCollo").$$render($$result, {}, {}, {})}
   
	 
	
	</div>`;
});
