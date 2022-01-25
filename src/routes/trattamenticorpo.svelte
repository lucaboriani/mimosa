<script context="module">
	//export const prerender = true;
</script>
<script>
    import Header from '$lib/header/Header.svelte';
   // import VisoCollo from '$lib/servizi/VisoCollo.svelte';
	import ServiziMenu from '$lib/servizi/ServiziMenu.svelte';
	// document.body.classList.add('no-scroll')
</script>
<svelte:head>
	<title>Trattamenti Corpo</title>
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
				<span class=" fucsia-color inline">trattamenti</span>
				<span class=" inline pl-2">corpo</span>
			</h1>
			<div class="overflow-y-scroll fucsia-color-bg">
				
			</div>
		   
		</div>
	</section>
</div>