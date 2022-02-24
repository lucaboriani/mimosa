<script context="module">
	let urls = [
		'../json/depilazione.json',
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
<style>
    .cont{
       height: calc(100vh - 8.5em);
   }
</style>
<script>
    import ImageLessCard from '$lib/servizi/ImageLessCard.svelte';
    import TreatmentTitle from '$lib/trattamenti/TreatmentTitle.svelte';
    import TreatmentContent from '$lib/trattamenti/TreatmentContent.svelte';
	export let data
</script>
<div class="flex flex-col w-full md:w-3/4">
    <TreatmentTitle>
        <span class="">make</span>
        <span class=" fucsia-color">up</span>
    </TreatmentTitle>
    <TreatmentContent>
        <div class="flex flex-col cont">
    
            <div class="flex flex-wrap bg-gray-200 pt-4">
                {#each data as service}
                    <ImageLessCard 
                        data={service}
                        uiData={{titleColor:'text-gray-300', bgColor: 'bg-white', titleBgColor:'bg-gray-600', width:'lg:w-1/3'}}
                    />
                {/each}
            </div>
            
        </div>
    </TreatmentContent>
</div>