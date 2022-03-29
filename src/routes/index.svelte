<script context="module">
	//export const prerender = true;
</script>
<script>
    
	import Header from '$lib/header/Header.svelte';
	import HomeSplash from '$lib/home/HomeSplash.svelte';
	import HomeAbout from '$lib/home/HomeAbout.svelte';
	import Footer from '$lib/Footer.svelte';
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
<Footer />
<!-- end footer -->