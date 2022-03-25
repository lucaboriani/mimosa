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
	export let data
    const giftCard = data.pop()
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
    <TreatmentContent>
        <div class="flex flex-col fucsia-color-bg">
            <div class="flex flex-wrap pt-8">
                {#each data[0] as service}
                <ServiceCard 
                    data={service}
                    uiData={{titleColor:'text-gray-500', bgColor: 'bg-white', titleBgColor:'fucsia-color-bg', width:'lg:w-1/3'}}
                />
                {/each}
            </div>
        </div>
        <div class="flex flex-col relative bg-gray-100">
            <div class="text-md  px-4  py-4 my-4  w-full flex justify-between">
                <p class="italic w-2/3 text-gray-600 flex flex-col justify-between">
                    <span class="text-2xl text-gray-500">DIBI MILANO</span>
                    <span>
                        offre risposte mirate ai reali bisogni della tua pelle per proporti la soluzione che cercavi<br>
                        e offrirti un momento speciale da dedicare a te stessa
                    </span>
             </p>
             </div>
            <div class="flex flex-wrap">
                {#each data[1] as service}
                <ServiceCard 
                    data={service}
                    uiData={{titleColor:'text-gray-500', bgColor: 'bg-white', titleBgColor:'fucsia-color-bg', width:'lg:w-1/3'}}
                />
                {/each}
                <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 flex flex-col items-center justify-center ">
                    <img src="../img/logo-dibi-center.png" alt="logo dibi" class="w-4/6 visocollo-dibi-logo" loading="eager" />
                </div>
                
            </div>
             
        </div>
        <div class="sm:flex flex-wrap px-4 ">
            <div class="text-md  text-gray-400 pt-9 p-0 lg:p-4 bg-white w-full flex flex-col lg:flex-row items-start">
                <img src="../img/Olos_LOGO@2x.png" alt="logo Olos" class="w-64 mb-6" loading="eager" />
                <div class="flex flex-col w-full">
                    <div class=" w-full flex flex-col justify-between items-center bg-gray-300 lg:px-4 lg:m-4 mt-4 lg:mt-0 p-4">
                        <div class="flex flex-col w-full lg:w-1/2 border border-gray-500">
                            <div class="flex fucsia-color-bg justify-center">
                                <img src="../img/Olos-1.png" loading="lazy" alt="olos" />
                            </div>
                            <div class="flex flex-col py-8 bg-white">
                                <h3 class="text-right font-bold text-xl mr-4">cosmetici in armonia con la Natura</h3>
                                <p class="text-right font-bold text-xl mr-4">ETICI, EFFICACI, SICURI</p>
                            </div>
                        </div>
                    </div>
                    <div class=" w-full flex flex-col justify-between items-center bg-gray-300 lg:px-4 lg:m-4 mt-4 lg:mt-0 p-4">
                        <div class="flex flex-col w-full lg:w-1/2 border border-gray-500">
                            
                            <div class="flex flex-col py-16 bg-white">
                                <h3 class="text-right font-bold text-xl mr-4">packaging sostenibile </h3>
                                <p class="text-right font-bold text-xl mr-4 uppercase">impatto zero</p>
                            </div>
                            <div class=" justify-center  relative">
                                <img class="absolute bottom-0 left-0 w-48 lg:w-64" src="../img/GROUPAGE-OLOS-PRODOTTI.png" loading="lazy" alt="olos" />
                                <div class="flex flex-col flex fucsia-color-bg text-gray-500 py-8">
                                    <h3 class="text-right font-bold text-xl mr-4">vegan friendly</h3>
                                     <p class="text-right font-bold text-xl mr-4">free from</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        {#if data[2]}
            <div class="flex flex-wrap bg-gray-100">
                {#each data[2] as service}
                <ServiceCard 
                    data={service}
                    uiData={{titleColor:'text-gray-500', bgColor: 'bg-white', titleBgColor:'fucsia-color-bg', width:'lg:w-1/2'}}
                />
                {/each}
            </div>
        {/if}
         
    </TreatmentContent>
</div>


