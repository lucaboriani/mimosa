<script>
	import { page } from '$app/stores';
	import {bgWhiteMenu} from '$lib/states'
	let servicePaths = ['/trattamenti', '/visocollo','/epilazione','/makeup','/manicurepedicure','/trattamenticorpo','/massaggi']
	let showWiteBg 
	bgWhiteMenu.subscribe(value => {
		showWiteBg = value;
	});
</script>

<div class="w-full {$page.url.pathname === '/' ? 'fixed ' : ' sticky' } " id="menu-container">
	<nav class="bg-white {showWiteBg ? 'lg:bg-white' : 'lg:bg-transparent' }   shadow ">
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
							
							<a class="text-gray-400  hover:text-gray-800  px-2 py-2 rounded-md text-xl font-medium" class:active={servicePaths.indexOf($page.url.pathname) !== -1} href="/trattamenti">
								trattamenti
							</a>
							<a class="text-gray-400  hover:text-gray-800  px-2 py-2 rounded-md text-xl font-medium" href="/#contacts">
								contatti
							</a>
							<a class="text-gray-400  hover:text-gray-800   py-2 rounded-md text-xl font-medium" href="/#">
								<img src="/img/phone-icons.svg" alt="phone" class="menu-phone"/>
							</a>
							<a class="text-gray-400  hover:text-gray-800   py-2 rounded-md text-xl font-medium" href="/#">
								<img src="/img/locator-icon.png" alt="phone" class="menu-phone pr-1"/>
							</a>
						</div>
					</div>
				</div>
				<div class="block">
					<div class="ml-4 flex items-center md:ml-6">
					</div>
				</div>
				<div class="flex md:hidden relative">
					<input class="mobile-menu-btn" type="checkbox" id="mobile-menu-btn">
               		<label class="mobile-menu-icon" for="mobile-menu-btn"><span class="navicon"></span></label>

					<div class="mobile-menu w-screen ">
						<nav class="w-full block  bg-gray-200 service-menu p-4">
							<ul class="flex w-full flex-col">
								<li class="mb-2">
									<a class="text-gray-400  hover:text-gray-800  px-2 py-2 rounded-md text-xl font-medium" class:active={$page.url.pathname === '/'}  sveltekit:prefetch href="/">
										Home
									</a>
								</li>
								<li class="mb-2">
									<a class="text-gray-400  hover:text-gray-800  px-2 py-2 rounded-md text-xl font-medium" class:active={servicePaths.indexOf($page.url.pathname) !== -1} href="/trattamenti">
										trattamenti
									</a>
								</li>
								<li class="mb-2">
									<a class="text-gray-400  hover:text-gray-800  px-2 py-2 rounded-md text-xl font-medium" href="/#contacts">
										contatti
									</a>
								</li>
								<li class="mb-2">
									<a class="flex items-center text-gray-400  hover:text-gray-800   py-2 rounded-md text-xl font-medium" href="/#">
										<img src="/img/phone-icons.svg" alt="phone" class="menu-phone"/>
										<span class="ml-2">chiama ora</span>
									</a>
								</li>
								<li class="mb-2">
									<a class="flex items-center text-gray-400  hover:text-gray-800   py-2 rounded-md text-xl font-medium" href="/#">
										<img src="/img/locator-icon.png" alt="phone" class="menu-phone pr-1"/>
										<span class="ml-2">mappa</span>
									</a>
								</li>
							</ul>
						</nav>
						<nav class="w-full block  bg-gray-400 service-menu p-4">
							<ul class="flex w-full flex-col">
								<li class="mb-2">
									<a class="{$page.url.pathname === '/trattamenti/visocollo' ? 'fucsia-color-bg ' : 'bg-gray-300 '} p-2 flex  border border-gray-700" 
										href="/trattamenti/visocollo">
										<span class="text-blacl">viso collo</span>
										<span class=" inline pl-2 text-white">décolleté</span>
										
									</a>
								</li>
								<li class="mb-2">
									<a href="/trattamenti/corpo" 
										class="{$page.url.pathname === '/trattamenti/corpo' ? 'fucsia-color-bg ' : 'bg-gray-300 '}  flex p-2 border border-gray-100"
									>
										<span class=" text-black">trattamenti</span>
										<span class=" pl-2 text-white">corpo</span>
									</a>
								</li>
								<li class="mb-2">
									<a 
										href="/trattamenti/depilazione-epilazione" 
										class="{$page.url.pathname === '/trattamenti/depilazione-epilazione' ? 'fucsia-color-bg ' : 'bg-gray-300 '} border flex p-2 border border-gray-100"
									>
										<span class=" pl-2 text-white">depilazione</span>
										<span class="text-black pl-2 ">epilazione</span>
									</a>
								</li>
								
								<li class="mb-2">
									<a href="/trattamenti/manicurepedicure" class="{$page.url.pathname === '/trattamenti/manicurepedicure' ? 'fucsia-color-bg ' : 'bg-gray-300 '} flex p-2 border border-gray-100">
										<span class="">manicure</span>
										<span class="text-white pl-2">pedicure</span>
										  
									</a>
								</li>
								<li class="mb-2">
									<a href="/trattamenti/massaggi" class="{$page.url.pathname === '/trattamenti/massaggi' ? 'fucsia-color-bg ' : 'bg-gray-300 '}  flex p-2 border border-gray-100">
										massaggi
									</a>
								</li>
								<li class=" mb-2 ">
									<a href="/trattamenti/makeup" class="{$page.url.pathname === '/trattamenti/makeup' ? 'fucsia-color-bg ' : 'bg-gray-300 '} flex p-2 border border-gray-100">
										
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

	.mimosa-color{
		color:#c6919b;
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
    position: absolute;
    clear: both;
    transform: translateX(100%);
    transition: all .2s ease-out;
    top: 60px;
    left: 0;
    background-color: white;
    min-height: calc(100vh - 60px);
    padding: 0;
	
}
.mobile-menu-btn:checked ~ .mobile-menu {
    transform: translateX(-74vw);
    z-index: 1;
}
	
</style>
