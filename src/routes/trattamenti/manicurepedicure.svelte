<script context="module">
	let urls = [
		'../json/manicurepedicure.json',
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
	import Footer from '$lib/Footer.svelte';
	export let data
</script>
<svelte:head>
	<title>Manicure e pedicure</title>
</svelte:head>
<style>
	
    .cont{
        height: calc(100vh - 64px);
    }
    :global(.no-scroll) {
        overflow: hidden;
    }
</style>
<div class="flex flex-col w-full md:w-3/4">
	<TreatmentTitle>
		<span class=" fucsia-color inline">manicure</span>
		<span class=" inline pl-2">pedicure</span>
	</TreatmentTitle>
	<TreatmentContent>
		<div class="flex flex-col cont">
			<div class="flex flex-wrap  pt-4">
				{#each data as service}
					<ServiceCard 
						data={service}
						uiData={{
							imageBg:'fucsia-color-bg', 
							titleColor:'text-gray-500', 
							bgColor: 'bg-gray-100', 
							titleBgColor:'fucsia-color-bg', 
							width:'lg:w-1/3'
						}}
					/>
					
				{/each}
			</div>
		</div>
		<Footer/>
	</TreatmentContent>
	
</div>