<script>
	import { page } from '$app/stores';
	


	let servicePaths = ['/servizi', '/visocollo','/epilazione','/makeup','/manicurepedicure','/trattamenticorpo','/massaggi']
</script>

<div class="w-full" id="menu-container">
	<nav class="bg-white   shadow ">
		<div class="pl-8 pr-4">
			<div class="flex items-center justify-between h-16 w-full">
				<div class="w-full justify-between flex items-center">
					<a class="flex-shrink-0" href="/">
						<span class="block mimosa-color text-3xl">
							<bold><span>la mi</span><span class="text-black">mosa</span></bold>
						</span>
					</a>
					<div class="hidden md:block">
						<div class="ml-10 flex items-center space-x-2">
							<a class="text-gray-400  hover:text-gray-800  px-2 py-2 rounded-md text-xl font-medium" class:active={$page.url.pathname === '/'}  sveltekit:prefetch href="/">
								Home
							</a>
							
							<a class="text-gray-400  hover:text-gray-800  px-2 py-2 rounded-md text-xl font-medium" class:active={servicePaths.indexOf($page.url.pathname) !== -1} href="/servizi">
								servizi
							</a>
							<a class="text-gray-400  hover:text-gray-800  px-2 py-2 rounded-md text-xl font-medium" href="/#">
								contatti
							</a>
							<a class="text-gray-400  hover:text-gray-800   py-2 rounded-md text-xl font-medium" href="/#">
								<img src="img/phone-icons.svg" alt="phone" class="menu-phone"/>
							</a>
							<a class="text-gray-400  hover:text-gray-800   py-2 rounded-md text-xl font-medium" href="/#">
								<img src="img/locator-icon.png" alt="phone" class="menu-phone pr-1"/>
							</a>
						</div>
					</div>
				</div>
				<div class="block">
					<div class="ml-4 flex items-center md:ml-6">
					</div>
				</div>
				<div class="-mr-2 flex md:hidden">
					<button class="text-gray-800 hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
						<svg width="20" height="20" fill="currentColor" class="h-8 w-8" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
							<path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
							</path>
						</svg>
					</button>
				</div>
			</div>
		</div>
	</nav>
</div>

<style>

	.active {
		color:black;
	}
	#menu-container{
		position: sticky;
		top:0;
		z-index: 100;
	}
	.menu-phone {
		width: 1em;
		height: 1em;
		object-fit: contain;
	}

	.mimosa-color{
		color:#c6919b;
	}
	
</style>
