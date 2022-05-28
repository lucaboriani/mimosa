import { c as create_ssr_component, a as add_attribute, v as validate_component } from "../../chunks/index-d67b9b49.js";
import { H as Header } from "../../chunks/Header-f6d0b3b9.js";
import { F as Footer } from "../../chunks/Footer-b44e23cc.js";
var HomeSplash_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".mimosa-color.svelte-12xxtsm.svelte-12xxtsm{color:#c6919b}.phone.svelte-12xxtsm.svelte-12xxtsm:hover{color:whitesmoke}.home-stripes.svelte-12xxtsm.svelte-12xxtsm{background:linear-gradient(90deg, #fff 25%, #c6919b 25% 50% , #efefef 50% 75%, #d4d4d4 75% 100%)}.home-mimosa.svelte-12xxtsm.svelte-12xxtsm{position:absolute;text-align:left;left:25%;transform:translate3d(-9.8rem,0, 0);padding:0;background-color:rgba(255,255,255, 0)}#home-image.svelte-12xxtsm.svelte-12xxtsm{left:55%;height:100%}@media screen and (max-width: 992px){.home-stripes.svelte-12xxtsm.svelte-12xxtsm{background:linear-gradient(90deg, #fff 33.333%, #c6919b 33.333% 66.666%, #d4d4d4 66.666% 100%)}#home-image.svelte-12xxtsm.svelte-12xxtsm{top:initial;bottom:0;left:55%;height:90%}.home-mimosa.svelte-12xxtsm.svelte-12xxtsm{padding:1em;background-color:rgba(255,255,255, .7);position:absolute;text-align:left;left:2em;transform:translate3d(0,0, 0)}}.home-logo.svelte-12xxtsm.svelte-12xxtsm{width:7em;height:auto;bottom:4em;left:87.5%;transform:translateX(-50%)}.scroll.svelte-12xxtsm.svelte-12xxtsm{width:34px;height:34px;border:2px solid #333;border-radius:34px;position:absolute;bottom:1em;margin:0;left:50%;transform:translateX(-50%);animation:svelte-12xxtsm-down 1.5s infinite;-webkit-animation:svelte-12xxtsm-down 1.5s infinite;cursor:pointer}.scroll.svelte-12xxtsm.svelte-12xxtsm::before{content:'';position:absolute;top:7px;left:8px;width:13px;height:13px;border-left:2px solid #333;border-bottom:2px solid #333;transform:rotate(-45deg)}@keyframes svelte-12xxtsm-down{0%{transform:translate(-50%,0)}20%{transform:translate(-50%,15px)}40%{transform:translate(-50%,0)}}.phone.svelte-12xxtsm.svelte-12xxtsm,.locator.svelte-12xxtsm.svelte-12xxtsm{width:3em;height:3em;object-fit:contain}.locator.svelte-12xxtsm.svelte-12xxtsm{height:2.5em;margin-bottom:.3em}.home-button.svelte-12xxtsm.svelte-12xxtsm{cursor:pointer}.home-button.svelte-12xxtsm a.svelte-12xxtsm{opacity:0;transition:all .3s ease-in-out;pointer-events:none;min-width:12em;left:-1em}.home-button.svelte-12xxtsm:hover a.svelte-12xxtsm{cursor:pointer;display:block;opacity:1;pointer-events:all}#orari.svelte-12xxtsm.svelte-12xxtsm{left:-4em}#location.svelte-12xxtsm.svelte-12xxtsm{left:-4.4em\n	}",
  map: null
};
const HomeSplash = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let splash;
  $$result.css.add(css$3);
  return `<div class="${"bg-white relative"}" id="${"splash"}"${add_attribute("this", splash, 0)}><img src="${"img/lei.png"}" alt="${"donna"}" class="${"absolute svelte-12xxtsm"}" loading="${"eager"}" id="${"home-image"}">
    
    <div class="${"h-screen flex flex-col text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-19 justify-center home-stripes svelte-12xxtsm"}"><div class="${"home-mimosa flex flex-col lg:flex-row svelte-12xxtsm"}"><div><h1 class="${"text-4xl lg:text-7xl text-black z-10 lg:pl-4-em"}"><span class="${"block text-3xl lg:text-5xl text-stone-600 lg:translate-x-1/2 relative lg:-left-1"}">estetica</span>
					<span class="${"flex lg:flex-col mimosa-color relative svelte-12xxtsm"}"><bold><span>la mi</span><span class="${"text-black"}">mosa</span></bold></span></h1>
				<div class="${"relative text-stone-700 text-sm lg:text-base lg:translate-x-1/2"}"><span class="${"z-10 block"}">Via G. Marconi 13
					</span>
					<span class="${"z-10 block"}">Garbagnate Milanese (MI)
					</span></div></div>
            
			<div class="${"flex w-32 justify-between items-end ml-4 pb-9 lg:relative lg:-top-4"}"><div class="${"relative home-button svelte-12xxtsm"}"><img src="${"img/phone-icons.svg"}" alt="${"phone"}" class="${"phone pr-1 svelte-12xxtsm"}">
					<a class="${"mt-2 bg-stone-200 flex flex-col items-center text-black-200 z-10 w-80 text-sm font-extrabold absolute p-4 text-center svelte-12xxtsm"}" href="${"#"}"><span class="${"w-full block uppercase mb-2"}">Per appuntamenti</span>
						<span class="${"block bg-stone-300 leading-8"}">Tel 02-99026325</span></a></div>
				<div class="${"relative home-button svelte-12xxtsm"}"><img src="${"img/locator-icon.png"}" alt="${"phone"}" class="${"locator pr-1 svelte-12xxtsm"}">
					<a class="${"mt-2 bg-stone-200 w-64 flex flex-col text-black-200 z-10 text-sm font-extrabold absolute p-4 text-center svelte-12xxtsm"}" href="${"#contacts"}" id="${"location"}"><span class="${"w-full pl-3 block mb-2 uppercase"}">Per raggiungerci</span>
						<span class="${"block bg-stone-300 py-1 leading-8 uppercase pt-2"}">mappa</span></a></div>
				<div class="${"relative home-button svelte-12xxtsm"}"><img src="${"img/clock-1.svg"}" alt="${"phone"}" class="${"phone pr-1 svelte-12xxtsm"}">
					<a class="${"mt-2 bg-stone-200 flex flex-col text-black-200 z-10 text-sm font-extrabold absolute w-80 p-4 svelte-12xxtsm"}" href="${"#"}" id="${"orari"}"><span class="${"block text-stone-800 z-10 uppercase text-sm mb-2"}">orari 
						</span>
						<p class="${"flex justify-between border-b border-b-stone-200 py-2"}"><span class="${"block text-stone-800 z-10 text-sm "}">marted\xEC - venerd\xEC 
							</span>
							<span class="${"block text-black-200 z-10 text-sm"}">09.00 - 19.00
							</span></p>
						<p class="${"flex justify-between border-b py-2"}"><span class="${"block text-stone-800 z-10 text-sm"}">sabato
							</span>
							<span class="${"block text-black-200 z-10 text-sm"}">09.00 - 17.00
							</span></p>
						<span class="${"block text-black-200 z-10 font-semibold text-sm text-right uppercase pt-4"}">solo su appuntamento
						</span></a></div></div></div></div>
	<div class="${"scroll bg-stone-100 svelte-12xxtsm"}"></div>
    <img src="${"img/logo-dibi-center.png"}" alt="${"logo dibi"}" class="${"absolute home-logo svelte-12xxtsm"}" loading="${"eager"}"></div>`;
});
var HomeSpecialties_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".fucsia-color-bg.svelte-gcvoei{background-color:#c6919b}",
  map: null
};
const HomeSpecialties = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<div class="${"w-full lg:w-1/2 p-8 py-20 bg-stone-200 flex justify-center"}" id="${"specialties"}"><div class="${"mb-12 lg:mb-0 pb-12 lg:pb-0 border-b lg:border-b-0"}"><p class="${"mb-4 text-stone-500 p-2 pt-10"}"><span class="${"text-xl lg:text-2xl text-stone-700"}">Specializzate</span> nell&#39; epilazione con <br>  laser diodo 
            <span class="${"text-xl text-stone-700"}">Epildream</span>  
            ed 
            <span class="${"text-xl text-stone-700"}">elettrocoagulazione</span>.
            
        </p>
        <p class="${"mb-4 text-stone-500 p-2"}"><span class="${"text-xl text-stone-700"}">Trattamenti viso</span> 
            correttivi <br>
            AHA, DNA Enzyme Complex antiossidanti.
        </p>
        <p class="${"mb-4 p-2 text-stone-500"}"><span class="${"text-xl text-stone-700"}">LPG</span> 
            viso e corpo, 
            <span class="${"text-xl text-stone-700"}">elettropermeazione</span> 
            e 
            <span class="${"text-xl text-stone-700"}">dermopeeling</span></p>
       
        <p class="${"mb-2 text-stone-500 p-2"}"><span class="${"text-xl text-stone-700"}">Massaggi</span> funzionali e sensoriali    
        </p>

        <p class="${"mb-2 text-stone-500 p-2"}"><span class="${"text-xl text-stone-700"}">Manicure e pedicure</span> estetico e curativo
        </p>

        <p class="${"mb-2 text-stone-500 p-2"}"><span class="${"text-xl text-stone-700"}">Smalti Zoya</span> adatto anche in gravidanza, <br> trattamento <span class="${"text-xl text-stone-700"}">callus peel</span>, <span class="${"text-xl text-stone-700"}">smalto semi permanente</span> in gel. 
        </p>
        
        <p class="${"mb-2 text-stone-500 p-2"}"><span class="${"text-xl text-stone-700"}">Make up</span> personalizzato e minicorsi individuali di trucco,<br>
            trucco semipermanente effettuato da personale altamente specializzato.
        </p>
        <div class="${"w-full mt-16"}"><a href="${"/trattamenti"}" class="${"w-full text-2xl mt-4 lg:mt-0 lg:ml-2 flex justify-center p-4 fucsia-color-bg hover:bg-black text-white uppercase transition ease-in-out delay-150 svelte-gcvoei"}">trattamenti
            </a></div></div></div>
<div class="${"w-full lg:w-1/2 flex justify-center"}"><img class="${"h-7/10 w-auto mt-8 lg:mt-0"}" src="${"img/griglia.png"}" alt="${"griglia loghi e prodotti"}" loading="${"lazy"}">
</div>`;
});
var HomeChiSiamo_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".mimosa-color.svelte-rx45dl{color:#c6919b}@media screen and (max-width: 768px){}",
  map: null
};
const HomeChiSiamo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="${"w-full md:w-3/4 ml-1/4"}"><div class="${"my-12 px-8 lg:mb-0 pb-12 lg:pb-0 border-b lg:border-b-0"}"><h1 class="${"pl-4 text-5xl text-black z-10 pl-4-em flex flex-col lg:flex-row items-baseline"}"><span class="${"text-stone-600"}">estetica</span>
            <span class="${"mimosa-color lg:pl-4 text-6xl svelte-rx45dl"}"><bold><span>la mi</span><span class="${"text-black"}">mosa</span></bold></span></h1>
        <h2 class="${"mb-4 text-stone-600 italic font-semibold text-xl lg:text-4xl mt-4 pl-4"}">Insieme a voi da pi\xF9 di 30 anni
        </h2>
        <p class="${"mb-6 leading-loose text-stone-600 pl-4 text-base font-light"}">Senza mai tralasciare la <span class="${"font-bold text-stone-800"}">costante formazione</span> tecnico scientifica<br>
            che ci ha permesso di offrirti <span class="${"font-bold text-stone-800"}">splendidi risultati.</span></p>

        <h2 class="${"my-4 text-stone-600 italic text-xl lg:text-2xl font-heading pl-4"}">Al nostro fianco i pi\xF9 prestigiosi partner nel mondo dell&#39; estetica:
        </h2>
        <ul class="${"p-4 mt-8 flex flex-col lg:flex-row my-8 py-12 fucsia-color-bg"}"><li class="${"w-full lg:w-1/3 p-4 fucsia-color-bg"}"><div class="${"flex flex-col bg-white h-full pb-4"}"><div class="${"p-4 pt-8 bg-stone-200"}"><img src="${"img/dibi.png"}" alt="${"logo Dibi"}" loading="${"lazy"}" class="${"flex w-28 h-28 mx-auto items-center justify-center object-contain"}"></div>
                    <div class="${"px-4"}"><h3 class="${"mt-4 text-xl text-stone-700 border-b border-stone-700 pb-4"}">DIBI Milano
                        </h3>
                        <p class="${"text-stone-600 pt-8 italic"}">Risposte mirate ai reali bisogni della tua pelle.
                        </p></div></div></li>
            <li class="${"w-full lg:w-1/3 p-4 fucsia-color-bg"}"><div class="${"flex flex-col bg-white h-full pb-4"}"><div class="${"p-4 pt-8 bg-stone-200"}"><img src="${"img/lpg.png"}" alt="${"logo LPG"}" loading="${"lazy"}" class="${"flex w-28 h-28 mx-auto items-center justify-center object-contain"}"></div>
                    <div class="${"px-4"}"><h3 class="${"mt-4 text-xl text-stone-700 border-b border-stone-700 pb-4"}">LPG Endermologie
                        </h3>
                        <p class="${"text-stone-600 pt-8 italic"}">Riattiva l\u2019attivit\xE0 cellulare assopita della pelle, combattendo ogni inestetismo (elimina le adiposit\xE0, leviga la cellulite, rassoda la pelle...)
                            in modo <bold class="${"font-semibold"}">naturale e senza dolore</bold>.
                        </p></div></div></li>
            <li class="${"w-full lg:w-1/3 flex flex-col p-4 fucsia-color-bg"}"><div class="${"flex flex-col bg-white h-full pb-4"}"><div class="${"p-4 pt-8 bg-stone-200"}"><img src="${"img/logo-stackedok.png"}" alt="${"logo priori stacked"}" loading="${"lazy"}" class="${"flex w-28 h-28 mx-auto items-center justify-center object-contain"}"></div>
                    <div class="${"px-4"}"><h3 class="${"mt-4 text-xl text-stone-700 border-b border-stone-700 pb-4"}">Priori
                        </h3>
                        <p class="${"text-stone-600 pt-8 italic"}">Arricchita di principi attivi della biotecnologia pi\xF9 avanzata, le formule Priori Adaptive Superceutical agiscono per offrirti, in tempo reale, i benefici correttivi visibili di cui hai bisogno.
                            La tua pelle sfrutter\xE0 di ogni formula solo i complessi necessari, quando necessario, per rivelare una pelle pi\xF9 luminosa e idratata. 
                        </p></div></div></li></ul>
        <div class="${"flex flex-col lg:flex-row"}"><a class="${"w-full lg:w-1/2 text-2xl mr-2 flex justify-center p-4 fucsia-color-bg hover:bg-black text-white uppercase transition ease-in-out delay-150"}" href="${""}">Scopri di pi\xF9
            </a>
            <a class="${"w-full lg:w-1/2 text-2xl mt-4 lg:mt-0 lg:ml-2 flex justify-center p-4 fucsia-color-bg hover:bg-black text-white uppercase transition ease-in-out delay-150"}" href="${"/trattamenti"}">trattamenti
            </a></div></div>
</div>`;
});
const Contacts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let map;
  let contact;
  return `<div class="${"min-h-screen flex flex-col lg:flex-row w-full pt-16"}"><div class="${"w-full lg:w-1/2 flex flex-col items-center justify-center"}" id="${"contact-content"}"${add_attribute("this", contact, 0)}><h1 class="${"text-5xl text-black z-10 pb-4 justify-start lg:justify-end w-5/6 flex "}"><span class="${"block mimosa-color "}"><bold><span>la mi</span><span class="${"text-black"}">mosa</span></bold></span></h1>
        <div class="${"flex flex-col lg:flex-row w-5/6 border-b pb-3 uppercase justify-end"}"><span class="${"block text-stone-600 z-10 pl-14-em text-xl"}">Via G. Marconi 13,
            </span>
            <span class="${"block text-stone-600 z-10 lg:pl-2 text-xl"}">Garbagnate Milanese (MI)
            </span></div>
        <div class="${"flex flex-col w-5/6 items-center pb-3 mt-3"}"><div class="${"flex items-center justify-between w-full"}"><img src="${"img/phone-icons.svg"}" alt="${"phone"}" class="${"phone w-10 pr-1"}">
                <span class="${"pl-3 block uppercase text-xl font-semibold text-stone-600"}">Per appuntamenti</span></div>
           
            <div class="${"flex items-center text-black-200 z-10 text-xl font-extrabold text-center w-full pt-3"}"><span class="${"block bg-stone-200 py-2 px-4 leading-8 w-full text-stone-600"}">Tel 02-99026325</span></div></div>
        <div class="${"flex flex-col w-5/6 border-b justify-between items-center pb-3 mt-3"}"><div class="${"flex w-full items-center justify-between border-b pb-3"}"><img src="${"img/clock-1.svg"}" alt="${"phone"}" class="${"phone pr-1 w-10"}">
                <h3 class="${"text-xl text-stone-600 uppercase font-semibold"}">orari</h3></div>
            
            <div class="${"flex flex-col text-black-200 z-10 text-xl font-extrabold w-full pt-4"}"><p class="${"flex justify-between border-b py-2"}"><span class="${"block text-stone-600 z-10 "}">marted\xEC - venerd\xEC 
                    </span>
                    <span class="${"block text-stone-600 z-10 "}">09.00 - 19.00
                    </span></p>
                <p class="${"flex justify-between border-b py-2"}"><span class="${"block text-stone-600 z-10 "}">sabato
                    </span>
                    <span class="${"block text-stone-600 z-10 "}">09.00 - 17.00
                    </span></p>
                <span class="${"block text-stone-100 bg-stone-600 z-10 font-semibold text-xl text-center uppercase p-4 mt-4"}">riceviamo solo su appuntamento
                </span></div></div></div>
    <div class="${"w-full lg:w-1/2 h-60 lg:h-screen flex flex-col overflow-hidden"}" id="${"contact-map"}"${add_attribute("this", map, 0)}></div>
    
</div>`;
});
var HomeAbout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".about-stripes.svelte-me6mmf{background:linear-gradient(90deg, #d4d4d4 25%, #ffffff 25% 100%)}@media screen and (max-width: 768px){.about-stripes.svelte-me6mmf{background:white}}",
  map: null
};
const HomeAbout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let about, contacts, specialties;
  $$result.css.add(css);
  return `<div class="${"about-stripes min-h-screen pb-8 border-b svelte-me6mmf"}" id="${"about"}"${add_attribute("this", about, 0)}><div class="${"flex flex-wrap justify-end"}">${validate_component(HomeChiSiamo, "HomeChiSiamo").$$render($$result, {}, {}, {})}</div></div>
<div class="${""}" id="${"specialties"}"${add_attribute("this", specialties, 0)}><div class="${"flex flex-col lg:flex-row"}">${validate_component(HomeSpecialties, "HomeSpecialties").$$render($$result, {}, {}, {})}</div></div>
<div class="${""}" id="${"contacts"}"${add_attribute("this", contacts, 0)}><div class="${"flex"}">${validate_component(Contacts, "Contacts").$$render($$result, {}, {}, {})}</div></div>`;
});
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Home</title>`, ""}<script type="${"application/ld+json"}" data-svelte="svelte-syxd8i">{
		  "@context": "https://schema.org",
		  "@type": "BeautySalon",
		  "image": [
			"https://lamimosa.netlify.app/img/logo-mimosa.svg"
		   ],
		  "currenciesAccepted": "EUR", 
		  "name": "Estetica la mimosa",
		  "brand" : "dibi",
		  "address": {
			"@type": "PostalAddress",
			"streetAddress": "Via G. Marconi 13",
			"addressLocality": "Garbagnate Milanese",
			"addressRegion": "MI",
			"postalCode": "20024",
			"addressCountry": "IT"
		  },
		  "geo": {
			"@type": "GeoCoordinates",
			"latitude": 45.57632858619434,
			"longitude":  9.072801121421676
		  },
		  "url": "https://lamimosa.netlify.app/",
		  "telephone": "+390299026325",
		  "openingHoursSpecification": [
			{
			  "@type": "OpeningHoursSpecification",
			  "dayOfWeek": [
				"Tuesday",
				"Wednesday",
				"Thursday",
				"Friday"
			  ],
			  "opens": "09:00",
			  "closes": "19:00"
			},
			{
			  "@type": "OpeningHoursSpecification",
			  "dayOfWeek": [
				"Saturday"
			  ],
			  "opens": "09:00",
			  "closes": "17:00"
			}
			
		  ]
		}
	<\/script>`, ""}



       
	     
	${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
	  
	
	${validate_component(HomeSplash, "HomeSplash").$$render($$result, {}, {}, {})}
	
	
   
	<section>
		${validate_component(HomeAbout, "HomeAbout").$$render($$result, {}, {}, {})}
		 </section>
	
${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}
`;
});
export { Routes as default };
