<script context="module">
	let urls = [
		'../json/visocollo/first.json',
		'../json/visocollo/trattamentiviso.json',
		'../json/visocollo/second.json'
	]
	export async function load({ fetch }) {
		const fetchUrl = async (url) => {
           
			const response = await fetch(url);
			const data = await response.json() 
            
			return data
		}
        
		try {
			const multiple = await Promise.all(urls.map(url => fetchUrl(url)))
			return {
					props: { 
					data: multiple
				}
			} 
		} catch (error) {
			return {
				status: '400',
				error: new Error('error loading data')
			}
		}
        
	}
</script>
<script>
    import ServiceCard from '$lib/servizi/ServiceCard.svelte';
    import TreatmentTitle from '$lib/trattamenti/TreatmentTitle.svelte';
    import TreatmentContent from '$lib/trattamenti/TreatmentContent.svelte';
    import Footer from '$lib/Footer.svelte';
	export let data
    
</script>
<svelte:head>
	<title>Visocollo e Décolleté</title>
</svelte:head>
<style>
    .visocollo-dibi-logo{
        width: 10rem;
        bottom: 5rem;
        right: 3rem;
    }
</style>
<div class="flex flex-col w-full md:w-3/4">
    <TreatmentTitle>
        <span class=" fucsia-color inline">viso collo</span>
		<span class=" inline pl-2">décolleté</span>
    </TreatmentTitle>
    <TreatmentContent classes="">
        <div class="flex flex-col fucsia-color-bg">
            <div class="flex flex-wrap pt-8">
                {#each data[0] as service}
                <ServiceCard 
                    data={service}
                    uiData={{titleColor:'text-stone-500', bgColor: 'bg-white', titleBgColor:'fucsia-color-bg', width:'lg:w-1/3'}}
                />
                {/each}
            </div>
        </div>
        <div class="flex flex-col relative bg-stone-100">
            <div class="text-md  px-4  py-4 my-4  w-full flex flex-col lg:flex-row justify-between">
                <p class="italic lg:w-2/3 text-stone-600 flex flex-col order-1 lg:order-0">
                    <span class="text-2xl text-stone-500">DIBI MILANO</span>
                    <span class="pt-4">
                        offre risposte mirate ai reali bisogni della tua pelle per proporti la soluzione che cercavi<br>
                        e offrirti un momento speciale da dedicare a te stessa
                    </span>
                 </p>
                <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 flex flex-col items-center justify-center order-0 lg:order-1 mb-4">
                    <img src="../img/dibi.png" alt="logo dibi" class="w-4/6 visocollo-dibi-logo" loading="eager" />
                </div>
             </div>
            <div class="flex flex-wrap">
                {#each data[1] as service}
                <ServiceCard 
                    data={service}
                    uiData={{titleColor:'text-stone-500', bgColor: 'bg-white', titleBgColor:'fucsia-color-bg', width:'lg:w-1/3'}}
                />
                {/each}
                
                
            </div>
             
        </div>
        <div class="sm:flex flex-wrap px-4 bg-stone-100">
            <div class="text-md  text-stone-400 pt-9 p-0 lg:p-4  w-full flex flex-col lg:flex-row items-start">
                <img src="../img/Logo_Olos Marrone con pay of_preview.png" alt="logo Olos" class="w-64 mb-6" loading="eager" />
                <div class="flex flex-col w-full">
                    <div class=" w-full flex flex-col justify-between items-center bg-stone-300 lg:px-4 lg:m-4 mt-4 lg:mt-0 p-4">
                        <div class="flex flex-col w-full lg:w-1/2 border border-stone-500">
                            <div class="flex fucsia-color-bg justify-center">
                                <img src="../img/Olos-1.png" loading="lazy" alt="olos" />
                            </div>
                            <div class="flex flex-col py-8 bg-white">
                                <h3 class="text-right font-bold text-xl mr-4">cosmetici in armonia con la Natura</h3>
                                <p class="text-right font-bold text-xl mr-4">ETICI, EFFICACI, SICURI</p>
                            </div>
                        </div>
                    </div>
                    <div class=" w-full flex flex-col justify-between items-center bg-stone-300 lg:px-4 lg:m-4 mt-4 lg:mt-0 p-4">
                        <div class="flex flex-col w-full lg:w-1/2 border border-stone-500">
                            
                            <div class="flex flex-col py-16 bg-white">
                                <h3 class="text-right font-bold text-xl mr-4">packaging sostenibile </h3>
                                <p class="text-right font-bold text-xl mr-4 uppercase">impatto zero</p>
                            </div>
                            <div class=" justify-center  relative">
                                <img class="absolute bottom-0 left-0 w-48 lg:w-64" src="../img/GROUPAGE-OLOS-PRODOTTI.png" loading="lazy" alt="olos" />
                                <div class="flex flex-col flex fucsia-color-bg text-stone-100 py-8">
                                    <h3 class="text-right font-bold text-xl mr-4">vegan friendly</h3>
                                     <p class="text-right font-bold text-xl mr-4">free from</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
        <div class="sm:flex flex-wrap lg:pr-4 bg-stone-400">
            <div class="text-md  text-stone-400 py-8 p-0   w-full flex flex-col lg:flex-row justify-between items-center lg:items-start">
                <div class="flex flex-col w-5/6 lg:w-full bg-stone-200 order-1 lg:order-0 ">
                    <div class=" w-full flex flex-col justify-between items-center  p-4">
                        <div class="flex flex-col w-full lg:w-1/2 border border-stone-500">
                            <div class="flex justify-center">
                                <img src="../img/priori-1.jpg" loading="lazy" alt="priori" />
                            </div>
                            <div class="flex flex-col py-4 px-4 bg-white">
                                <ul>
                                    <li class="p-x font-bold text-xl mr-4">LCA Complex</li>
                                    <li class="p-x font-bold text-xl mr-4"> DNA</li>
                                    <li class="p-x font-bold text-xl mr-4">Q+SOD.</li>
                                </ul>
                               
                                
                                <p class="italic p-x">
                                    una linea di ricca di principi attivi esfolianti dedicata a chi vuole rigenerare la pelle in maniera profonda<br>
                                    riduce la pigmentazione in eccesso.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="../img/priori.png" alt="priori logo" class="w-48 order-0 lg:order-1 border lg:ml-4 mb-8 lg:mb-0 block" loading="eager" />
                
            </div>
            
        </div>
        <Footer></Footer>
    </TreatmentContent>
</div>


