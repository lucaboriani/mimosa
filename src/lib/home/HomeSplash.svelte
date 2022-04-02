<style>
	.mimosa-color{
		color:#c6919b;
	}
	.phone:hover{
		color:whitesmoke;
	}

	.home-stripes {
		background: linear-gradient(90deg, #fff 25%, #c6919b 25% 50% , #efefef 50% 75%, #d4d4d4 75% 100%);
	}
	.home-mimosa{
		position: absolute;
		text-align: left;
		left: 25%;
		transform: translate3d(-9.8rem,0, 0);
	}
	#home-image {
		left:55%;   
	}
	.home-address{
		position: absolute;
		left:0;
		bottom: 6em;
		width: 50%;
	}
	.home-logo {
		width: 7em;
		height: auto;
		bottom: 4em;
		left: 87.5%;
		transform: translateX(-50%);
	}
	
	
	
	.scroll {
		width: 34px;
		height: 34px;
		border: 2px solid #333;
		border-radius: 34px;
		position: absolute;
		bottom: 1em;
		margin: 0;
		left: 50%;
		transform:translateX(-50%);
		animation: down 1.5s infinite;
		-webkit-animation: down 1.5s infinite;
		cursor: pointer;
	}
	.scroll::before {
		content: '';
		position: absolute;
		top: 7px;
		left: 8px;
		width: 13px;
		height: 13px;
		border-left: 2px solid #333;
		border-bottom: 2px solid #333;
		transform: rotate(-45deg);
	}

	@keyframes down {
		0% {
			transform: translate(-50%,0);
		}
		20% {
			transform: translate(-50%,15px);
		}
		40% {
			transform: translate(-50%,0);
		}
	}
	.phone , .locator{
		width: 3em;
		height: 3em;
		object-fit: contain;
	}
	.locator{
		height: 2.5em;
		margin-bottom: .3em;
	}

	
	.home-button {
		cursor: pointer;

	}
	.home-button a {
		/* display: none; */
		opacity: 0;
		transition: all .3s ease-in-out;
		pointer-events: none;
		min-width: 12em;
    	left: -1em;
	}
	.home-button:hover a {
		cursor: pointer;
		display: block;
		opacity: 1;
		pointer-events: all;
	}
	#orari{
		
    	left: -4em;
	}
	#location {
    	left: -4.4em
	}
	
</style>
<script>
	import { onMount } from 'svelte';
	import {bgWhiteMenu} from '$lib/states'
	let splash 
	onMount(() => {
		if (typeof IntersectionObserver !== 'undefined') {
			const rootMargin = `0px`;
			
			const observer = new IntersectionObserver(entries => {
				let intersecting = entries[0].isIntersecting;
				
				bgWhiteMenu.set(!intersecting)
				
			}, {
				rootMargin
			});

			observer.observe(splash);
			return () => observer.unobserve(splash);
		}
	});

	function goToAbout() {
		let about = document.getElementById('about')
		about.scrollIntoView({behavior: "smooth"})
	}

	
</script>
<div class="bg-white relative" bind:this={splash} id="splash">
	<img src="img/lei.png" alt="donna"  class="absolute inset-y-0 h-screen" loading="eager" id="home-image" />
    
    <div class="h-screen flex flex-col text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-19 justify-center home-stripes">
        <div class="home-mimosa flex">
			<div>
				<h1 class="text-7xl text-black z-10 pl-4-em">
					<span class="block text-5xl text-stone-600 translate-x-1/2 relative -left-1">estetica</span>
					<span class="block mimosa-color">
						<bold><span>la mi</span><span class="text-black">mosa</span></bold>
					</span>
				</h1>
				<div class=" relative text-stone-700 text-base translate-x-1/2"  >
					<span class=" z-10   block">
						Via G. Marconi 13
					</span>
					<span class="  z-10   block">
						Garbagnate Milanese (MI)
					</span>
				</div>
			</div>
            
			<div class="flex mt-1 w-32 justify-between items-end ml-4 mb-11">
				<div class="relative home-button">
					<img src="img/phone-icons.svg" alt="phone" class="phone pr-1"/>
					<a class="mt-2 bg-stone-200 flex flex-col items-center text-black-200 z-10 w-80 text-sm font-extrabold absolute p-4 text-center" href="#" >
						<span class="w-full  block uppercase mb-2">Per appuntamenti</span>
						<span class="block bg-stone-300    leading-8">Tel 02-99026325</span>
						
					</a>
				</div>
				<div class="relative home-button">
					<img src="img/locator-icon.png" alt="phone" class="locator pr-1"/>
					<a class="mt-2 bg-stone-200 w-64 flex flex-col text-black-200 z-10  text-sm font-extrabold absolute p-4 text-center" href="#contacts" id="location" >
						<span class="w-full pl-3 block mb-2 uppercase">Per raggiungerci</span>
						<span class="block bg-stone-300  py-1  leading-8 uppercase pt-2"> mappa</span>
					</a>
					
				</div>
				<div class="relative home-button">
					<img src="img/clock-1.svg" alt="phone" class="phone pr-1"/>
					<a class="mt-2 bg-stone-200  flex flex-col text-black-200 z-10  text-sm font-extrabold absolute w-80 p-4" href="#" id="orari" >
						<span class="block text-stone-800 z-10 uppercase text-sm mb-2">
							orari 
						</span>
						<p class="flex justify-between border-b border-b-stone-200 py-2">
							
							<span class="block text-stone-800 z-10  text-sm ">
								martedì - venerdì 
							</span>
							<span class="block text-black-200 z-10  text-sm">
								09.00 - 19.00
							</span>
						</p>
						<p class="flex justify-between border-b py-2">
							<span class="block text-stone-800 z-10  text-sm">
								sabato
							</span>
							<span class="block text-black-200 z-10  text-sm">
								09.00 - 17.00
							</span>
						</p>
						<span class="block text-black-200 z-10 font-semibold text-sm text-right  uppercase pt-4">
							solo su appuntamento
						</span>
						
					</a>
				</div>
				
				
			</div>
        </div>
		
    </div>
	<div class="scroll bg-stone-100"  on:click="{goToAbout}"></div>
    <img src="img/logo-dibi-center.png" alt="logo dibi" class="absolute home-logo" loading="eager" /> 
</div>

