<script context="module">
	let urls = [
		'../json/makeup.json',
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
					data: multiple[0]
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
	<title>Makeup</title>
</svelte:head>
<div class="flex flex-col w-full md:w-3/4">
    <TreatmentTitle>
        <span class="">make</span>
        <span class=" fucsia-color">up</span>
    </TreatmentTitle>
    <TreatmentContent>
        <div class="flex flex-col makeup-cont">
            <div class="flex flex-wrap bg-gray-500 pt-4">
                {#each data as service}
                    <ServiceCard 
                        data={service}
                        uiData={{titleColor:'text-gray-500', bgColor: 'bg-white', titleBgColor:'fucsia-color-bg', width:'lg:w-1/3'}}
                    />
                {/each}
                <div class="w-1/3    flex flex-col">
                    <div class="px-4 py-4 flex  h-full justify-center items-center bg-white mt-0 m-4">
                        <h3 class="sm:text-xl lg:text-3xl   text-gray-800  py-2">
                            {giftCard.title}
                        </h3>   
                        <img src="../img/pacco_regalo.png" alt="icona pacco" loading="lazy" class="h-24" />                    
                    </div>
                </div> 
                <div class="w-1/3    flex flex-col">
                    <div class="px-4 py-4 flex  h-full justify-center items-center bg-gray-300 mt-0 m-4">
                        <h3 class="sm:text-xl lg:text-3xl   text-gray-800  py-2">
                            { giftCard.text }
                        </h3>   
                        <img src="../img/regalo_icona.png" alt="icona pacco" loading="lazy" class="h-16 pl-4" />                    
                    </div>
                </div>
                
               
            </div>
            
        </div>
    </TreatmentContent>
</div>


