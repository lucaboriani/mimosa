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
  default: () => Routes
});
var import_index_6f55eac1 = __toModule(require("../../chunks/index-6f55eac1.js"));
var import_Header_b264fdbe = __toModule(require("../../chunks/Header-b264fdbe.js"));
var HomeSplash_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".mimosa-color.svelte-14sm2hm{color:#c6919b}.phone.svelte-14sm2hm:hover{color:whitesmoke}.home-stripes.svelte-14sm2hm{background:linear-gradient(90deg, #fff 25%, #c6919b 25% 50% , #efefef 50% 75%, #d4d4d4 75% 100%)}.home-mimosa.svelte-14sm2hm{position:absolute;text-align:left;left:25%;transform:translate3d(-9.7rem,0, 0)}#home-image.svelte-14sm2hm{left:55%}.home-address.svelte-14sm2hm{margin-left:10em}.home-logo.svelte-14sm2hm{width:20%;height:auto;bottom:6em;left:75%;transform:translateX(10%)}",
  map: null
};
const HomeSplash = (0, import_index_6f55eac1.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<div class="${"bg-white relative"}"><div class="${"h-screen flex flex-col text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-19 justify-center home-stripes svelte-14sm2hm"}"><div class="${"home-mimosa svelte-14sm2hm"}"><h1 class="${"text-7xl text-black z-10 pl-4-em"}"><span class="${"block mimosa-color svelte-14sm2hm"}"><bold><span>la mi</span><span class="${"text-black"}">mosa</span></bold></span></h1>
            <div class="${"home-address svelte-14sm2hm"}"><span class="${"block text-black-200 z-10 pl-14-em text-sm"}">Via G. Marconi, 13 - Garbagnate Milanese (MI)
                </span>
                <a class="${"block text-black-200 z-10 pl-14-em text-sm font-extrabold phone svelte-14sm2hm"}" href="${"#"}">Tel 02-99026325
                </a>
                <div class="${"lg:mt-0 lg:flex-shrink-0 z-10 pl-11-em"}"><div class="${"mt-4 ml-6 inline-flex rounded-md shadow"}"><button type="${"button"}" class="${"py-4 px-6 bg-black hover:fucsia-color-bg hover:text-white focus:ring-black text-gray-100 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg "}">Scopri di pi\xF9
                        </button></div></div></div></div></div>
    <img src="${"img/home-donna.png"}" alt="${"donna"}" class="${"absolute inset-y-0 h-screen svelte-14sm2hm"}" loading="${"eager"}" id="${"home-image"}">
    <img src="${"img/logo-dibi-center.png"}" alt="${"logo dibi"}" class="${"absolute home-logo svelte-14sm2hm"}" loading="${"eager"}"> 
</div>`;
});
var HomeAboutCards_svelte_svelte_type_style_lang = "";
var HomeSpecialties_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".fucsia-color-bg.svelte-gcvoei{background-color:#c6919b}",
  map: null
};
const HomeSpecialties = (0, import_index_6f55eac1.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<div class="${"w-full lg:w-1/2 p-8 py-20 bg-gray-200 flex justify-center"}"><div class="${"mb-12 lg:mb-0 pb-12 lg:pb-0 border-b lg:border-b-0"}"><p class="${"mb-4 text-gray-500 pt-10"}"><span class="${"text-2xl text-gray-700"}">Specializzate</span> nell&#39; epilazione con <br>  laser diodo 
            <span class="${"text-xl text-gray-700"}">Epildream</span>,  
            luce pulsata <span class="${"text-xl text-gray-700"}">Quantum IPL</span> 
            ed 
            <span class="${"text-xl text-gray-700"}">elettrocoagulazione</span>.
            
        </p>
        <p class="${"mb-4 text-gray-500 p-2"}"><span class="${"text-xl text-gray-700"}">Trattamenti viso</span> 
            correttivi <br>
            AHA, DNA Enzyme Complex antiossidanti, Idebenone e COFFEBERRY.
        </p>
        <p class="${"mb-4 p-2 text-gray-500"}"><span class="${"text-xl text-gray-700"}">LPG</span> 
            viso e corpo, 
            <span class="${"text-xl text-gray-700"}">elettropermeazione</span> 
            e 
            <span class="${"text-xl text-gray-700"}">dermopeeling</span></p>
       
        <p class="${"mb-2 text-gray-500 p-2"}"><span class="${"text-xl text-gray-700"}">Massaggi</span> funzionali e sensoriali    
        </p>

        <p class="${"mb-2 text-gray-500 p-2"}"><span class="${"text-xl text-gray-700"}">Manicure e pedicure</span> estetico e curativo
        </p>

        <p class="${"mb-2 text-gray-500 p-2"}"><span class="${"text-xl text-gray-700"}">Smalti Zoya</span> adatto anche in gravidanza, <br> trattamento <span class="${"text-xl text-gray-700"}">callus peel</span>, <span class="${"text-xl text-gray-700"}">smalto semi permanente</span> in gel. 
        </p>
        
        <p class="${"mb-2 text-gray-500 p-2"}"><span class="${"text-xl text-gray-700"}">Make up</span> personalizzato e minicorsi individuali di trucco,<br>
            trucco semipermanente effettuato da personale altamente specializzato.
        </p>
        <div class="${"w-full"}"><button type="${"button"}" class="${"py-2 px-4 fucsia-color-bg hover:bg-yellow-200 hover:text-black focus:ring-yellow-200 focus:ring-offset-yellow-200 text-white w-full transition ease-in duration-200 text-center text-base uppercase focus:outline-none focus:ring-2 focus:ring-offset-2  svelte-gcvoei"}">Scopri i nostri servizi
            </button></div></div></div>
<div class="${"w-full lg:w-1/2 flex"}"><img class="${"h-7/10 w-auto"}" src="${"img/griglia.png"}" alt="${"griglia loghi e prodotti"}" loading="${"lazy"}"></div>`;
});
var HomeChiSiamo_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".mimosa-color.svelte-1ostt29{color:#c6919b}.about-title.svelte-1ostt29{transform:translateX(-4.7em)}",
  map: null
};
const HomeChiSiamo = (0, import_index_6f55eac1.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="${"w-3/4 ml-1/4"}"><div class="${"my-12 px-8 lg:mb-0 pb-12 lg:pb-0 border-b lg:border-b-0"}"><h1 class="${"mb-2 text-gray-500 text-6xl font-heading pt-10 about-title svelte-1ostt29"}"><span class="${"text-3xl pr-4"}">estetica</span><span class="${"mimosa-color svelte-1ostt29"}"><bold><span>la mi</span><span class="${"text-black"}">mosa</span></bold></span></h1>
        <h2 class="${"mb-4 text-gray-500 italic font-light text-xl lg:text-2xl mt-8 pl-4"}">Insieme a te da 25 anni 
        </h2>
        <p class="${"mb-6 leading-loose text-gray-400 pl-4"}">Senza mai tralasciare la <span class="${"font-bold text-black"}">costante formazione</span> tecnico scientifica<br>
            che ci ha permesso di offrirti <span class="${"font-bold text-black"}">splendidi risultati.</span></p>

        <h2 class="${"my-4 text-gray-500 italic font-light text-xl lg:text-2xl font-heading pl-4"}">Al nostro fianco i pi\xF9 prestigiosi partner nel mondo dell&#39; estetica:
        </h2>
        <ul class="${"p-4 mt-8 flex my-8 py-12 fucsia-color-bg"}"><li class="${"w-1/3 p-4 fucsia-color-bg"}"><div class="${"flex flex-col bg-white h-full pb-4"}"><div class="${"p-4 pt-8 bg-gray-200"}"><img src="${"img/dibi.png"}" alt="${"logo Dibi"}" loading="${"lazy"}" class="${"flex w-28 h-28 mx-auto items-center justify-center object-contain"}"></div>
                    <div class="${"px-4"}"><h3 class="${"mt-4 text-xl text-gray-700 border-b border-gray-700 pb-4"}">DIBI Milano
                        </h3>
                        <p class="${"text-gray-500 pt-8 italic"}">risposte mirate ai reali bisogni della tua pelle
                        </p></div></div></li>
            <li class="${"w-1/3 p-4 fucsia-color-bg"}"><div class="${"flex flex-col bg-white h-full pb-4"}"><div class="${"p-4 pt-8 bg-gray-200"}"><img src="${"img/lpg.png"}" alt="${"logo LPG"}" loading="${"lazy"}" class="${"flex w-28 h-28 mx-auto items-center justify-center object-contain"}"></div>
                    <div class="${"px-4"}"><h3 class="${"mt-4 text-xl text-gray-700 border-b border-gray-700 pb-4"}">LPG Endermologie
                        </h3>
                        <p class="${"text-gray-500 pt-8 italic"}">stimola delicatamente la pelle per riattivare l&#39;attivit\xE0 cellulare assopita
                        </p></div></div></li>
            <li class="${"flex flex-col w-1/3 p-4 fucsia-color-bg"}"><div class="${"flex flex-col bg-white h-full pb-4"}"><div class="${"p-4 pt-8 bg-gray-200"}"><img src="${"img/Elizabeth-Arden-Simbolo.jpg"}" alt="${"logo Elizabeth Arden"}" loading="${"lazy"}" class="${"flex w-28 h-28 mx-auto items-center justify-center object-contain"}"></div>
                    <div class="${"px-4"}"><h3 class="${"mt-4 text-xl text-gray-700 border-b border-gray-700 pb-4"}">Elizabeth Arden PRO
                        </h3>
                        <p class="${"text-gray-500 pt-8 italic"}">la linea di trattamento della pelle progettata per conquistare un livello superiore di ringiovanimento cutaneo
                        </p></div></div></li></ul>

        <a class="${"w-full text-2xl flex justify-center p-4 fucsia-color-bg hover:bg-black text-white uppercase transition ease-in-out delay-150"}" href="${"/servizi"}">Tutti i nostri servizi
        </a></div></div>`;
});
var HomeAbout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".about-stripes.svelte-1y3d7x9{background:linear-gradient(90deg, #d4d4d4 25%, #ffffff 25% 100%)}",
  map: null
};
const HomeAbout = (0, import_index_6f55eac1.c)(($$result, $$props, $$bindings, slots) => {
  let about;
  $$result.css.add(css);
  return `<div class="${"about-stripes min-h-screen pb-8 border-b svelte-1y3d7x9"}" id="${"about"}"${(0, import_index_6f55eac1.a)("this", about, 0)}><div class="${"flex flex-wrap justify-end"}">${(0, import_index_6f55eac1.v)(HomeChiSiamo, "HomeChiSiamo").$$render($$result, {}, {}, {})}</div></div>
<div class="${""}" id="${"about-specialties"}"><div class="${"flex"}">${(0, import_index_6f55eac1.v)(HomeSpecialties, "HomeSpecialties").$$render($$result, {}, {}, {})}</div></div>`;
});
const Routes = (0, import_index_6f55eac1.c)(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Home</title>`, ""}`, ""}



       

	
	${(0, import_index_6f55eac1.v)(HomeSplash, "HomeSplash").$$render($$result, {}, {}, {})}
	
	     
	${(0, import_index_6f55eac1.v)(import_Header_b264fdbe.H, "Header").$$render($$result, {}, {}, {})}
	  
   
	<section>
		${(0, import_index_6f55eac1.v)(HomeAbout, "HomeAbout").$$render($$result, {}, {}, {})}
		 </section>
	
	`;
});
