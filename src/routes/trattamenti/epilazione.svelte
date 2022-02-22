<script context="module">
	let urls = import.meta.env.MODE === "production" ? 
        [
            'json/epilazione.json',
        ]
    : 
        [
            '/json/epilazione.json',
        ] 
        
	export async function load({ fetch }) {
		
		const fetchUrl = async (url) => {
            console.log(url)
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
    let packages = data.pop()
    let electro = data.pop()
    let female = data.filter(s => s.section === 'donna')
    let male = data.filter(s => s.section === 'uomo')
</script>
<div class="flex flex-col w-3/4">
    <TreatmentTitle>
        <span class="">make</span>
        <span class=" fucsia-color">up</span>
    </TreatmentTitle>
    <TreatmentContent>
        <div class="flex flex-col cont">
            <h3 class="text-right font-semibold text-gray-500 pr-4">EPILDREAM</h3>
            <p class="text-right text-gray-500 pr-4 border-b pb-4">il laser diodo di ultima generazione a alta potenza, veloce, efficace, affidabile e tecnologico</p>
            <h3 class="px-4 py-2  text-gray-500 text-xl">Donna</h3>
            <div class="flex flex-wrap bg-gray-200 py-4">
                {#each female as service}
                    <ImageLessCard 
                        data={service}
                        uiData={{titleColor:'text-gray-500', bgColor: 'bg-white', titleBgColor:'fucsia-color-bg', width:'lg:w-1/3'}}
                    />
                {/each}
            </div>
            <h3 class="px-4 py-2 text-gray-500 text-xl">Uomo</h3>
            <div class="flex flex-wrap bg-gray-200 py-4">
                {#each male as service}
                    <ImageLessCard 
                        data={service}
                        uiData={{titleColor:'text-gray-500', bgColor: 'bg-white', titleBgColor:'fucsia-color-bg', width:'lg:w-1/3'}}
                    />
                {/each}
            </div>
            <div class="w-full flex ">
                <div class=" px-4 py-4 flex flex-col w-1/3 justify-between bg-gray-300">
                    <h3 class="text-2xl sm:text-xl  text-gray-500  border-b-2 py-2">
                        {electro.title}
                    </h3>
                    <p class="text-md text-gray-600 italic mt-4">
                        {@html electro.text }
                    </p>
                    <bold class="block text-black font-bold text-md pr-2 text-right">{electro.price}</bold>
                   
                </div>
                <div class=" px-4 py-4 flex flex-col w-2/3 h-full justify-between bg-gray-300">
                    <h3 class="text-2xl sm:text-xl  text-gray-500  border-b-2 py-2">
                        {packages.title}
                    </h3>
                    <p class="text-md text-gray-600 italic mt-4">
                        {@html packages.text }
                    </p>
                    <bold class="block text-black font-bold text-md pr-2 text-right">{packages.price}</bold>
                   
                </div>
                
                
            </div>
        </div>
    </TreatmentContent>
</div>