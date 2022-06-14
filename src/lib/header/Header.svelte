<script>
	import { page } from '$app/stores';
	import {bgWhiteMenu} from '$lib/states'
	import { goto } from '$app/navigation';
	let servicePaths = [
		'/trattamenti', 
		'/trattamenti/visocollo',
		'/trattamenti/epilazione',
		'/trattamenti/makeup',
		'/trattamenti/manicurepedicure',
		'/trattamenti/corpo',
		'/trattamenti/massaggi'
	]
	let showWiteBg 
	bgWhiteMenu.subscribe(value => {
		showWiteBg = value;
	});

	let mobileMenuInput
	const onLinkClick = e => {
		mobileMenuInput.checked = false
		goto(e.currentTarget.href)
	}
</script>

<div class="w-full {$page.url.pathname === '/' ? 'fixed ' : ' sticky ' } {showWiteBg || $page.url.pathname !== '/' ? ' shadow' : ' ' } " id="menu-container">
	<nav class="bg-white {showWiteBg ? 'bg-white ' : 'bg-transparent' }    ">
		<div class="pl-2">
			<div class="flex items-center justify-between h-16 w-full">
				<div class="w-full justify-between flex items-center">
					<a class="flex-shrink-0 w-20" href="/">
						<img src="../img/logo-mimosa.svg" loading="eager" alt="logo la mimosa " class="w-full h-full py-4 px-2 object-contain" />
					</a>
					<div class="hidden md:block">
						<div class="ml-10 flex items-center space-x-2">
							<a class="text-stone-400  hover:text-stone-800  px-2 py-2 rounded-md text-xl font-medium" class:active={$page.url.pathname === '/'}  sveltekit:prefetch href="/">
								Home
							</a>
							
							<a class="text-stone-500  hover:text-stone-800  px-2 py-2 rounded-md text-xl font-medium" class:active={servicePaths.indexOf($page.url.pathname) !== -1} href="/trattamenti">
								trattamenti
							</a>
							<a class="text-stone-500  hover:text-stone-800  px-2 py-2 rounded-md text-xl font-medium" href="/#contacts">
								contatti
							</a>
							
						</div>
					</div>
				</div>
				<div class="block">
					<div class="ml-4 flex items-center md:ml-6">
					</div>
				</div>
				<div class="flex md:hidden relative">
					<input class="mobile-menu-btn" type="checkbox" id="mobile-menu-btn" bind:this={mobileMenuInput}>
               		<label class="mobile-menu-icon" for="mobile-menu-btn"><span class="navicon"></span></label>

					<div class="mobile-menu w-full bg-stone-200">
						<nav class="w-full block  bg-stone-100 service-menu px-4">
							<ul class="flex w-full flex-col">
								<li class="mb-2">
									<a class="
										text-stone-600  
										hover:text-stone-800  
										px-2 py-1 rounded-md text-xl 
										font-medium" 
										class:active={$page.url.pathname === '/'}  
										sveltekit:prefetch 
										href="/"
										on:click|preventDefault="{onLinkClick}"
									>
										Home
									</a>
								</li>
								<li class="mb-2">
									<a 
										class="text-stone-600  hover:text-stone-800  px-2 py-1 rounded-md text-xl font-medium" 
										class:active={servicePaths.indexOf($page.url.pathname) !== -1} 
										href="/trattamenti"
										on:click|preventDefault="{onLinkClick}"
									>
										trattamenti
									</a>
								</li>
								<li class="mb-2">
									<a 
										class="text-stone-600  hover:text-stone-800  px-2 py-1 rounded-md text-xl font-medium" 
										href="/#contacts"
										on:click|preventDefault="{onLinkClick}"
									>
										contatti
									</a>
								</li>
							</ul>
						</nav>
						<nav class="w-full block  bg-stone-400 service-menu p-4">
							<ul class="flex w-full flex-col">
								<li class="mb-4">
									<a 
										class="{$page.url.pathname === '/trattamenti/visocollo' ? 'fucsia-color-bg ' : 'bg-stone-300 '} p-2 flex  border border-stone-700" 
										href="/trattamenti/visocollo"
										on:click|preventDefault="{onLinkClick}"
									>
										<span class="text-blacl">viso collo</span>
										<span class=" inline pl-2 text-white">décolleté</span>
										
									</a>
								</li>
								<li class="mb-4">
									<a href="/trattamenti/corpo" 
										class="{$page.url.pathname === '/trattamenti/corpo' ? 'fucsia-color-bg ' : 'bg-stone-300 '}  flex p-2 border border-stone-100"
										on:click|preventDefault="{onLinkClick}"
									>
										<span class=" text-black">trattamenti</span>
										<span class=" pl-2 text-white">corpo</span>
									</a>
								</li>
								<li class="mb-4">
									<a 
										href="/trattamenti/depilazione-epilazione" 
										class="{$page.url.pathname === '/trattamenti/depilazione-epilazione' ? 'fucsia-color-bg ' : 'bg-stone-300 '} border flex p-2 border border-stone-100"
										on:click|preventDefault="{onLinkClick}"
									>
										<span class=" pl-2 text-white">depilazione</span>
										<span class="text-black pl-2 ">epilazione</span>
									</a>
								</li>
								
								<li class="mb-4">
									<a 
										href="/trattamenti/manicurepedicure" 
										class="{$page.url.pathname === '/trattamenti/manicurepedicure' ? 'fucsia-color-bg ' : 'bg-stone-300 '} flex p-2 border border-stone-100"
										on:click|preventDefault="{onLinkClick}"
									>
										<span class="">manicure</span>
										<span class="text-white pl-2">pedicure</span>
										  
									</a>
								</li>
								<li class="mb-4">
									<a 
										href="/trattamenti/massaggi" 
										class="{$page.url.pathname === '/trattamenti/massaggi' ? 'fucsia-color-bg ' : 'bg-stone-300 '}  flex p-2 border border-stone-100"
										on:click|preventDefault="{onLinkClick}"
									>
										massaggi
									</a>
								</li>
								<li class=" mb-4 ">
									<a 
										href="/trattamenti/makeup" 
										class="{$page.url.pathname === '/trattamenti/makeup' ? 'fucsia-color-bg ' : 'bg-stone-300 '} flex p-2 border border-stone-100"
										on:click|preventDefault="{onLinkClick}"
									>
										<span class="">make</span>
										<span class=" text-white">up</span>
									 </a>
								</li>
								
							</ul>    
						</nav>
					</div>
				</div>
			</div>
		</div>
	</nav>
</div>

<style>

	.active {
		color:black;
		font-weight: 600;
	}
	#menu-container{
		top:0;
		z-index: 100;
	}
	.menu-phone {
		width: 1em;
		height: 1em;
		object-fit: contain;
	}

	
input#mobile-menu-btn {
    display: none;
}
 .mobile-menu-icon {
    cursor: pointer;
    display: inline-block;
    padding: 28px 20px;
    position: relative;
    user-select: none;
    z-index: 999999;
}
.mobile-menu-icon .navicon {
    background: #333;
    display: block;
    height: 3px;
    position: relative;
    transition: background .2s ease-out;
    width: 40px;
}
.mobile-menu-icon .navicon:before {
    top: 10px;
}
.mobile-menu-icon .navicon:before, .mobile-menu-icon .navicon:after {
    background: #333;
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    transition: transform .2s ease-out;
    width: 100%;
}
 .mobile-menu-icon .navicon:after {
    top: -10px;
}
.mobile-menu-btn:checked ~ .mobile-menu-icon:not(.steps) .navicon:before, .mobile-menu-btn:checked ~ .mobile-menu-icon:not(.steps) .navicon:after {
    top: 0;
}
.mobile-menu-btn:checked ~ .mobile-menu-icon .navicon:before {
    transform: rotate(-45deg);
}
 .mobile-menu-btn:checked ~ .mobile-menu-icon:not(.steps) .navicon:after {
    top: 0;
}
.mobile-menu-btn:checked ~ .mobile-menu-icon .navicon:after {
    transform: rotate(45deg);
}
.mobile-menu-btn:checked ~ .mobile-menu-icon .navicon {
    background: transparent;
}
.mobile-menu {
    position: fixed;
    clear: both;
    transform: translateX(100vw);
    transition: all .2s ease-out;
    top: 0px;
    left: 0;
    min-height: 100vh;
    padding-top: 4em;
}
.mobile-menu-btn:checked ~ .mobile-menu {
    transform: translateX(0);
    z-index: 1;
}
	
</style>
