import { init } from '../handler.js';

export const handler = init({
	appDir: "_app",
	assets: new Set([".DS_Store","csv/test.csv","csv/visocollo/first.csv","csv/visocollo/second.csv","favicon.png","img/1561355919.jpg","img/645Z7468+copy.jpg","img/APG Epildream High Power_ADV Donna Doppia con Gorilla_Library_preview.jpg","img/APG Tech Epildream One_AFFISSIONE 6x3 Donna-ITA_Library_preview.jpg","img/APG Tech Epildream_PP025069 SCHEDA-CHECKUP ITA_Library_preview.jpg","img/APG Tech Shapeinpulse_PP023031_ROLL UP Donna 85x220 ENG_Library_preview.jpg","img/APG-Epildream.jpg","img/APG-Tech-Epildream-One_AFFISSIONE-6x3-Donna-ITA_Library_preview.jpg","img/APG-Tech-Epildream_PP025069-SCHEDA-CHECKUP-ITA.jpg","img/APG-Tech-Epildream_PP025069-SCHEDA-CHECKUP-ITA_Library_preview.jpg","img/APPLICAZIONE-_CIGLIA2.jpg","img/APP_CIGLIA.jpg","img/Apg-SHAPEINPULSE_LogoRGB_preview.png","img/CELL-CONTOUR.jpg","img/CIGLIA.jpg","img/Cell_Rewind_ADV.jpg","img/Cuccio.jpg","img/DECOLOGO.jpg","img/DSC02334.jpg","img/DibiHydra.png","img/Elizabeth-Arden-Simbolo.jpg","img/Estetica_pulizia_viso-e24de9e1.webp","img/EyebrowAndLashTinting.jpg","img/GROUPAGE-OLOS-PRODOTTI.png","img/Img-Scrub-Corpo.jpg","img/KRF-banner.jpg","img/KRF.jpg","img/LASER.jpg","img/LPG1.gif","img/Logo_Olos Marrone con pay of_preview.png","img/Olos-1.png","img/Olos.jpg","img/Olos_LOGO@2x.png","img/SMALTO-SICURO.jpg","img/TRUCCO.jpg","img/Trucco_completo.jpg","img/_Dibimilano.jpg","img/antistress_400.jpg","img/banner_DIBI.jpg","img/bendaggi_400.jpg","img/brasiliana.png","img/brow-tint.jpg","img/callus.jpg","img/calluspeeling.jpg","img/ceretta_rullo.png","img/classico_400.jpg","img/clock-1.svg","img/connettivale_400.jpg","img/cuccio_cut.jpg","img/dermopeeling.jpg","img/dibi-tonic-lifter.jpg","img/dibi.png","img/dibi_age_method_doppia.jpg","img/dibi_calm_perfection.jpg","img/dibi_filler_code_adv.jpg","img/dibi_hydra_erfection_cartolina_15x15_ ita.jpg","img/dibi_kfr.jpg","img/dibi_lift_creator_adv.jpg","img/dibi_olos_thalasence.jpg","img/dibi_prodigio_c40_pp015852.jpg","img/dibi_pure_equalizer_adv_doppia_dibi_milano_ita.jpg","img/dibi_time_of_ritual.jpg","img/dibi_tonic_lifter.jpg","img/emolinfatico_400.jpg","img/energia_vitale_400.jpg","img/gel.jpg","img/griglia.png","img/home-donna.png","img/home.jpg","img/img_scrub_corpo.jpg","img/istockphoto-1314528208-1024x1024.jpg","img/istockphoto-961520902-1024x1024.jpg","img/kfr.jpg","img/la-boutique-dell-estetica-pordenone-pulizia-viso.jpg","img/lamimosa.svg","img/learn-makeup.jpg","img/lei.png","img/linea_av_lipo-e487899e.jpg","img/locator-icon.png","img/logo-dibi-center.png","img/logo-mimosa.svg","img/logo-stackedok.png","img/logotest.jpg","img/lpg-endermologie.jpg","img/lpg.png","img/lpgviso.jpg","img/manicure.jpg","img/mascheraviso.jpg","img/microdermoabrasione.jpg","img/mimosalogo.svg","img/pacco_regalo.png","img/pedicure.jpg","img/per-una-bellezza-senza-eta.jpeg","img/phone-icons.svg","img/priori-1.jpg","img/priori.png","img/regalo_icona.png","img/smalto-semipermanente_NG5.jpg","img/smalto.jpg","img/source.jpg","img/stock-photo-makeup-artist-applies-applies-powder-and-blush-beautiful-woman-face-hand-of-make-up-master-1805797540.jpg","img/stock-vector-abstract-background-technology-concept-in-blue-light-1415153159.jpg","img/thalasence.jpg","img/time-of-ritual.jpg","img/tintura_sopracciglia.jpg","img/trattamento-viso.png","img/trattamentoviso.jpg","img/trucco-semipermanente.jpg","img/trucco-sposa-768x461.jpg","img/trucco_veloce.jpg","img/unnamed (1).png","img/zoya-SMALTI.jpg","json/.DS_Store","json/depilazione.json","json/epilazione.json","json/makeup.json","json/manicurepedicure.json","json/massaggi.json","json/trattamenticorpo.json","json/visocollo/first.json","json/visocollo/second.json","json/visocollo/trattamentiviso.json","json 2.zip","json.zip","robots.txt","svelte-welcome.png","svelte-welcome.webp"]),
	_: {
		mime: {".csv":"text/csv",".png":"image/png",".jpg":"image/jpeg",".webp":"image/webp",".gif":"image/gif",".svg":"image/svg+xml",".jpeg":"image/jpeg",".json":"application/json",".zip":"application/zip",".txt":"text/plain"},
		entry: {"file":"start-ab182df9.js","js":["start-ab182df9.js","chunks/vendor-adcc5950.js","chunks/preload-helper-ec9aa979.js"],"css":[]},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js'),
			() => import('../server/nodes/3.js'),
			() => import('../server/nodes/4.js'),
			() => import('../server/nodes/5.js'),
			() => import('../server/nodes/6.js'),
			() => import('../server/nodes/7.js'),
			() => import('../server/nodes/8.js'),
			() => import('../server/nodes/9.js'),
			() => import('../server/nodes/10.js'),
			() => import('../server/nodes/11.js'),
			() => import('../server/nodes/12.js'),
			() => import('../server/nodes/13.js')
		],
		routes: [
			{
				type: 'page',
				pattern: /^\/$/,
				params: null,
				path: "/",
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/trattamenti\/depilazione-epilazione\/?$/,
				params: null,
				path: "/trattamenti/depilazione-epilazione",
				a: [0,3,4],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/trattamenti\/manicurepedicure\/?$/,
				params: null,
				path: "/trattamenti/manicurepedicure",
				a: [0,3,5],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/trattamenti\/depilazione\/?$/,
				params: null,
				path: "/trattamenti/depilazione",
				a: [0,3,6],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/trattamenti\/epilazione\/?$/,
				params: null,
				path: "/trattamenti/epilazione",
				a: [0,3,7],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/trattamenti\/visocollo\/?$/,
				params: null,
				path: "/trattamenti/visocollo",
				a: [0,3,8],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/trattamenti\/massaggi\/?$/,
				params: null,
				path: "/trattamenti/massaggi",
				a: [0,3,9],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/trattamenti\/makeup\/?$/,
				params: null,
				path: "/trattamenti/makeup",
				a: [0,3,10],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/trattamenti\/corpo\/?$/,
				params: null,
				path: "/trattamenti/corpo",
				a: [0,3,11],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/trattamenti\/?$/,
				params: null,
				path: "/trattamenti",
				a: [0,12],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/servizi\/?$/,
				params: null,
				path: "/servizi",
				a: [0,13],
				b: [1]
			}
		]
	}
});
