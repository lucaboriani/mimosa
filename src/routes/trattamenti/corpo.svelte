<script context="module">


	let urls = [
		'/static/json/trattamenticorpo.json',
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
    export let lpg = data.filter(el => el.section === "LPG ENDERMOLOGIE CORPO")
    export let dibi = data.filter(el => el.section === "dibi body")
</script>
<div class="flex flex-col w-3/4">
    <TreatmentTitle>
        <span class=" fucsia-color inline">trattamenti</span>
        <span class=" inline pl-2">corpo</span>
    </TreatmentTitle>
    <TreatmentContent>
        <div class="flex flex-col">
            <div class="flex flex-wrap bg-gray-300 p-4 pt-8">
                {#each lpg as service}
                <ServiceCard 
                    data={service}
                    uiData={{imageBg:'fucsia-color-bg', titleColor:'text-gray-500', bgColor: 'bg-gray-100', titleBgColor:'fucsia-color-bg', width:'lg:w-1/3'}}
                />
                {/each}
                <span class="text-xl w-1/3 ml-auto text-gray-600 mt-4 px-4 font-semibold">LPG ENDERMOLOGIE CORPO</span>
            </div>
            <div class="flex pt-4 bg-white">
                <span class="text-xl text-gray-600  mt-4 px-4 font-semibold w-1/6">DIBI BODY</span>
                <div class="flex flex-wrap w-full">
                    {#each dibi as service}
                        <ServiceCard 
                            data={service}
                            uiData={{imageBg:'fucsia-color-bg', titleColor:'text-gray-500', bgColor: 'bg-gray-100', titleBgColor:'fucsia-color-bg', width:'lg:w-1/3'}}
                        />
                        
                    {/each}
                </div>
            </div>
            
        </div>
    </TreatmentContent>
</div>