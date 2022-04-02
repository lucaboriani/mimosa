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
	<script type="application/ld+json">
		{
		  "@context": "https://schema.org",
		  "@type": "BeautySalon",
		  "image": [
			"https://lamimosa.netlify.app/img/logo-mimosa.svg"
		   ],
		  "currenciesAccepted": "EUR" 
		  "name": "Estetica la mimosa",
		  "brand" : "dibi"
		  "address": {
			"@type": "PostalAddress",
			"streetAddress": "Via G. Marconi 13",
			"addressLocality": "Garbagnate Milanese",
			"addressRegion": "MI",
			"postalCode": "20024",
			"addressCountry": "IT"
		  },
		  "geo": {
			"@type": "GeoCoordinates",
			"latitude": 45.57632858619434,
			"longitude":  9.072801121421676
		  },
		  "url": "https://lamimosa.netlify.app/",
		  "telephone": "+390299026325",
		  "openingHoursSpecification": [
			{
			  "@type": "OpeningHoursSpecification",
			  "dayOfWeek": [
				"Tuesday",
				"Wednesday",
				"Thursday",
				"Friday"
			  ],
			  "opens": "09:00",
			  "closes": "19:00"
			},
			{
			  "@type": "OpeningHoursSpecification",
			  "dayOfWeek": [
				"Saturday"
			  ],
			  "opens": "09:00",
			  "closes": "17:00"
			}
			
		  ],
		  "acceptsReservations": "True"
		}
	</script>
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