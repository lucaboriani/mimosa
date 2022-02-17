<script context="module">
	let urls = [
		'json/depilazione.json',
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
    import Header from '$lib/header/Header.svelte';
    import Depilazione from '$lib/servizi/Depilazione.svelte';
	import ServiziMenu from '$lib/servizi/ServiziMenu.svelte';
	// document.body.classList.add('no-scroll')
	export let data
	console.log(data)
</script>
<svelte:head>
	<title>Depilazione</title>
</svelte:head>
<style>
	
    .grid-cont{
        height: calc(100vh - 64px);
    }
    :global(.no-scroll) {
        overflow: hidden;
    }
</style>
<div id="main-wrap">    
	<Header/>
	<section class="flex grid-cont">
		<ServiziMenu />
		<div class="flex flex-col w-3/4">
			<h1 class="text-gray-510 mr-8 mt-4 mb-4 text-4xl text-right">
				<span class=" fucsia-color inline">depilazione</span>
			</h1>
			<div class="overflow-y-scroll">
				<Depilazione data={data} />
			</div>
		   
		</div>
	</section>
</div>