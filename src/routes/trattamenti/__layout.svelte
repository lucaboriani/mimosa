<script>
	import '../../app.css';
	import Header from '$lib/header/Header.svelte';
	import ServiziMenu from '$lib/servizi/ServiziMenu.svelte';
</script>
<style>
    .grid-cont{
        height: calc(100vh - 64px);
    }
    :global(.no-scroll) {
        overflow: hidden;
    }
</style>
<main>
	<div id="main-wrap">    
		<Header/>
		<section class="flex grid-cont">
			<ServiziMenu />
			<slot></slot>
		</section>
	</div>
	
</main>