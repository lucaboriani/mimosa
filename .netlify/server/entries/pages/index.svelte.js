import { c as create_ssr_component, a as add_attribute, v as validate_component } from "../../chunks/index-6f55eac1.js";
import { H as Header } from "../../chunks/Header-9306c643.js";
var HomeSplash_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".mimosa-color.svelte-1h68knx{color:#c6919b}.phone.svelte-1h68knx:hover{color:whitesmoke}.home-stripes.svelte-1h68knx{background:linear-gradient(90deg, #fff 25%, #c6919b 25% 50% , #efefef 50% 75%, #d4d4d4 75% 100%)}.home-mimosa.svelte-1h68knx{position:absolute;text-align:left;left:25%;transform:translate3d(-9.7rem,0, 0)}#home-image.svelte-1h68knx{left:55%}.home-address.svelte-1h68knx{position:absolute;left:0;bottom:6em;width:50%}.home-logo.svelte-1h68knx{width:15%;height:auto;bottom:4em;left:80%;transform:translateX(10%)}.scroll.svelte-1h68knx{width:34px;height:34px;border:2px solid #333;border-radius:34px;position:absolute;bottom:1em;margin:0;left:50%;transform:translateX(-50%);animation:svelte-1h68knx-down 1.5s infinite;-webkit-animation:svelte-1h68knx-down 1.5s infinite;cursor:pointer}.scroll.svelte-1h68knx::before{content:'';position:absolute;top:7px;left:8px;width:13px;height:13px;border-left:2px solid #333;border-bottom:2px solid #333;transform:rotate(-45deg)}@keyframes svelte-1h68knx-down{0%{transform:translate(-50%,0)}20%{transform:translate(-50%,15px)}40%{transform:translate(-50%,0)}}.phone.svelte-1h68knx{width:2em}",
  map: null
};
const HomeSplash = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<div class="${"bg-white relative"}"><div class="${"h-screen flex flex-col text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-19 justify-center home-stripes svelte-1h68knx"}"><div class="${"home-mimosa svelte-1h68knx"}"><h1 class="${"text-7xl text-black z-10 pl-4-em"}"><span class="${"block mimosa-color svelte-1h68knx"}"><bold><span>la mi</span><span class="${"text-black"}">mosa</span></bold></span></h1></div>
		<div class="${"home-address flex flex-col text-left svelte-1h68knx"}"><div class="${"pl-4 pb-4"}"><span class="${"block text-gray-500 z-10 pl-14-em text-sm"}">Via G. Marconi 13
				</span>
				<span class="${"block text-black-200 z-10 pl-14-em text-sm"}">Garbagnate Milanese (MI)
				</span></div>
			<div class="${"w-full flex"}"><div class="${"w-1/2 p-4 fucsia-color-bg"}"><p class="${"flex justify-between"}"><span class="${"block text-gray-800 z-10 text-sm "}">marted\xEC - venerd\xEC 
						</span>
						<span class="${"block text-black-200 z-10 text-sm"}">09.00 - 19.00
						</span></p>
					<p class="${"flex justify-between"}"><span class="${"block text-gray-800 z-10 text-sm"}">sabato
						</span>
						<span class="${"block text-black-200 z-10 text-sm"}">09.00 - 17.00
						</span></p>
					<span class="${"block text-black-200 z-10 font-semibold text-sm text-right pt-2 "}">solo su appuntamento
					</span></div>
				<div class="${"w-1/2 p-8 bg-white"}"><a class="${"flex flex-col text-black-200 z-10 text-sm font-extrabold "}" href="${"#"}"><span class="${"w-full pl-3 block"}">fissa un appuntamento</span>
						<div class="${"flex mt-1"}"><img src="${"img/phone-icons.svg"}" alt="${"phone"}" class="${"phone pr-1 svelte-1h68knx"}">
							<span class="${"ml-2 block bg-gray-300 px-3 py-1 text-center leading-8"}">Tel 02-99026325</span></div></a></div></div></div></div>
	<div class="${"scroll bg-gray-100 svelte-1h68knx"}"></div>
    <img src="${"img/lei.png"}" alt="${"donna"}" class="${"absolute inset-y-0 h-screen svelte-1h68knx"}" loading="${"eager"}" id="${"home-image"}">
    <img src="${"img/logo-dibi-center.png"}" alt="${"logo dibi"}" class="${"absolute home-logo svelte-1h68knx"}" loading="${"eager"}"> 
</div>`;
});
var HomeAboutCards_svelte_svelte_type_style_lang = "";
var HomeSpecialties_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".fucsia-color-bg.svelte-gcvoei{background-color:#c6919b}",
  map: null
};
const HomeSpecialties = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
        <div class="${"w-full"}"><a href="${"/servizi"}" class="${"py-2 px-4 fucsia-color-bg hover:bg-yellow-200 hover:text-black focus:ring-yellow-200 focus:ring-offset-yellow-200 text-white w-full transition ease-in duration-200 text-center text-base uppercase focus:outline-none focus:ring-2 focus:ring-offset-2  svelte-gcvoei"}">Scopri i nostri servizi
            </a></div></div></div>
<div class="${"w-full lg:w-1/2 flex"}"><img class="${"h-7/10 w-auto"}" src="${"img/griglia.png"}" alt="${"griglia loghi e prodotti"}" loading="${"lazy"}"></div>`;
});
var HomeChiSiamo_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".mimosa-color.svelte-1ostt29{color:#c6919b}.about-title.svelte-1ostt29{transform:translateX(-4.7em)}",
  map: null
};
const HomeChiSiamo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="${"w-3/4 ml-1/4"}"><div class="${"my-12 px-8 lg:mb-0 pb-12 lg:pb-0 border-b lg:border-b-0"}"><h1 class="${"mb-2 text-gray-500 text-6xl font-heading pt-10 about-title svelte-1ostt29"}"><span class="${"text-3xl pr-4"}">estetica</span><span class="${"mimosa-color svelte-1ostt29"}"><bold><span>la mi</span><span class="${"text-black"}">mosa</span></bold></span></h1>
        <h2 class="${"mb-4 text-gray-500 italic font-light text-xl lg:text-2xl mt-8 pl-4"}">Da pi\xF9 di 30 anni
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
        <div class="${"flex"}"><a class="${"w-1/2 text-2xl mr-2 flex justify-center p-4 fucsia-color-bg hover:bg-black text-white uppercase transition ease-in-out delay-150"}" href="${"/servizi"}">Scopri di pi\xF9
            </a>
            <a class="${"w-1/2 text-2xl ml-2 flex justify-center p-4 fucsia-color-bg hover:bg-black text-white uppercase transition ease-in-out delay-150"}" href="${"/servizi"}">Tutti i nostri servizi
            </a></div></div></div>`;
});
var HomeAbout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".about-stripes.svelte-1y3d7x9{background:linear-gradient(90deg, #d4d4d4 25%, #ffffff 25% 100%)}",
  map: null
};
const HomeAbout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let about;
  $$result.css.add(css);
  return `<div class="${"about-stripes min-h-screen pb-8 border-b svelte-1y3d7x9"}" id="${"about"}"${add_attribute("this", about, 0)}><div class="${"flex flex-wrap justify-end"}">${validate_component(HomeChiSiamo, "HomeChiSiamo").$$render($$result, {}, {}, {})}</div></div>
<div class="${""}" id="${"about-specialties"}"><div class="${"flex"}">${validate_component(HomeSpecialties, "HomeSpecialties").$$render($$result, {}, {}, {})}</div></div>`;
});
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Home</title>`, ""}`, ""}



       

	
	${validate_component(HomeSplash, "HomeSplash").$$render($$result, {}, {}, {})}
	
	     
	${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
	  
   
	<section>
		${validate_component(HomeAbout, "HomeAbout").$$render($$result, {}, {}, {})}
		 </section>
	
<footer class="${"bg-white w-full py-8"}"><div class="${"max-w-screen-xl mx-auto px-4"}"><div class="${"pt-8 flex max-w-xs mx-auto items-center justify-center"}"><a href="${"#"}" class="${"text-gray-400 hover:text-gray-800 transition-colors duration-200"}"><svg width="${"20"}" height="${"20"}" fill="${"currentColor"}" class="${"text-xl hover:text-gray-800 transition-colors duration-200"}" viewBox="${"0 0 1792 1792"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"}"></path></svg></a>
            <a href="${"#"}" class="${"text-gray-400 hover:text-gray-800 transition-colors duration-200"}"><svg width="${"20"}" height="${"20"}" fill="${"currentColor"}" class="${"text-xl hover:text-gray-800 transition-colors duration-200"}" viewBox="${"0 0 1792 1792"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z"}"></path></svg></a></div></div></footer>
`;
});
export { Routes as default };
