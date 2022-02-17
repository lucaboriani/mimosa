import { init } from '../handler.js';

export const handler = init({
	appDir: "_app",
	assets: new Set([".DS_Store","csv/test.csv","csv/visocollo/first.csv","csv/visocollo/second.csv","favicon.png","img/645Z7468+copy.jpg","img/APG-Epildream.jpg","img/Apg-SHAPEINPULSE_LogoRGB_preview.png","img/Cuccio.jpg","img/DECOLOGO.jpg","img/DSC02334.jpg","img/DibiHydra.png","img/Elizabeth-Arden-Simbolo.jpg","img/Img-Scrub-Corpo.jpg","img/KRF-banner.jpg","img/KRF.jpg","img/Logo_Olos Marrone con pay of_preview.png","img/SMALTO-SICURO.jpg","img/TRUCCO.jpg","img/_Dibimilano.jpg","img/banner_DIBI.jpg","img/clock-1.svg","img/dibi-tonic-lifter.jpg","img/dibi.png","img/dibi_age_method_doppia.jpg","img/dibi_calm_perfection.jpg","img/dibi_filler_code_adv.jpg","img/dibi_hydra_erfection_cartolina_15x15_ ita.jpg","img/dibi_kfr.jpg","img/dibi_lift_creator_adv.jpg","img/dibi_olos_thalasence.jpg","img/dibi_prodigio_c40_pp015852.jpg","img/dibi_pure_equalizer_adv_doppia_dibi_milano_ita.jpg","img/dibi_time_of_ritual.jpg","img/dibi_tonic_lifter.jpg","img/griglia.png","img/home-donna.png","img/home.jpg","img/istockphoto-1314528208-1024x1024.jpg","img/istockphoto-961520902-1024x1024.jpg","img/lamimosa.svg","img/lei.png","img/logo-dibi-center.png","img/logotest.jpg","img/lpg-endermologie.jpg","img/lpg.png","img/per-una-bellezza-senza-eta.jpeg","img/phone-icons.svg","img/priori-1.jpg","img/source.jpg","img/stock-photo-makeup-artist-applies-applies-powder-and-blush-beautiful-woman-face-hand-of-make-up-master-1805797540.jpg","img/thalasence.jpg","img/time-of-ritual.jpg","img/trattamento-viso.png","img/trattamentoviso.jpg","img/unnamed (1).png","img/zoya-SMALTI.jpg","json/.DS_Store","json/epilazione.json","json/makeup.json","json/manicurepedicure.json","json/massaggi.json","json/trattamenticorpo.json","json/visocollo/first.json","json/visocollo/second.json","json/visocollo/trattamentiviso.json","robots.txt","svelte-welcome.png","svelte-welcome.webp"]),
	_: {
		mime: {".csv":"text/csv",".png":"image/png",".jpg":"image/jpeg",".svg":"image/svg+xml",".jpeg":"image/jpeg",".json":"application/json",".txt":"text/plain",".webp":"image/webp"},
		entry: {"file":"start-cbb634f5.js","js":["start-cbb634f5.js","chunks/vendor-1ccedf9c.js"],"css":[]},
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
			() => import('../server/nodes/10.js')
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
				pattern: /^\/manicurepedicure\/?$/,
				params: null,
				path: "/manicurepedicure",
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/trattamenticorpo\/?$/,
				params: null,
				path: "/trattamenticorpo",
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/epilazione\/?$/,
				params: null,
				path: "/epilazione",
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/visocollo\/?$/,
				params: null,
				path: "/visocollo",
				a: [0,6],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/massaggi\/?$/,
				params: null,
				path: "/massaggi",
				a: [0,7],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/servizi\/?$/,
				params: null,
				path: "/servizi",
				a: [0,8],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/makeup\/?$/,
				params: null,
				path: "/makeup",
				a: [0,9],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/about\/?$/,
				params: null,
				path: "/about",
				a: [0,10],
				b: [1]
			}
		]
	}
});
