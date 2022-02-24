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
<div class="flex flex-col w-3/4">
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
            </div>
            <div class="w-full    flex flex-col">
                <div class="px-4 py-4 flex flex-col h-full justify-between bg-gray-300">
                    <h3 class="text-2xl sm:text-xl  text-gray-500  border-b-2 py-2">
                        {giftCard.title}
                    </h3>
                    <p class="text-md text-gray-600 italic mt-4">
                        { giftCard.text }
                    </p>
                    <bold class="block text-black font-bold text-md pr-2 text-right">{giftCard.price}</bold>
                   
                </div>
            </div>
        </div>
    </TreatmentContent>
</div>


