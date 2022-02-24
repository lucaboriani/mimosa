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
        <div class="sm:flex flex-wrap px-4 bg-gray-100">
            <div class="text-md  text-gray-500 pt-9 p-4 bg-white w-full flex justify-between">
                <p class="italic w-2/3 text-gray-500 flex flex-col justify-between">
                    <span class="font-semibold block border-b-2">OLOS VISO</span>
                    <span>percorso estetico olistico e sensoriale fatto di trattamenti e principi attivi naturali ed efficaci per la bellezza del viso</span>
                </p>
                <img src="../img/Logo_Olos Marrone con pay of_preview.png" alt="logo Olos" class="w-40 mb-6" loading="eager" />
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


