<script context="module">
	//export const prerender = true;
</script>
<script>
    
	import Header from '$lib/header/Header.svelte';
	import HomeSplash from '$lib/home/HomeSplash.svelte';
	import HomeAbout from '$lib/home/HomeAbout.svelte';
</script>
<svelte:head>
	<title>Home</title>
</svelte:head>
<style>
	
</style>


       
	<!-- start menu -->     
	<Header />
	<!-- end menu menu -->  
	<!-- start home -->
	<HomeSplash />
	<!-- end home -->
	
   
	<section>
		 <!-- start about -->
		<HomeAbout />
		 <!-- end about -->
	</section>
	<!-- start footer -->
<footer class="bg-white w-full py-8">
    <div class="max-w-screen-xl mx-auto px-4">
		<p class="pt-8 text-gray-400 text-center text-xs">
			<span class="text-gray-700 pr-2 font-semibold text-base">la mimosa snc</span> <span class="text-xs">di Basilico - Mariani</span> <br>
			p.iva 11701180157
		</p>
       
    </div>
</footer>
<!-- end footer -->