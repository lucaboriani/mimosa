<style>
    .service-menu{
        padding-top: 4.5rem;
    }
</style>
<script>
	import { page } from '$app/stores';
</script>
<nav class="hidden md:block w-1/4 bg-gray-400 service-menu px-4">
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
                href="/trattamenti/epilazione" 
                class="{$page.url.pathname === '/trattamenti/epilazione' ? 'fucsia-color-bg ' : 'bg-gray-300 '} border flex p-2 border border-gray-100"
            >
                <span class="text-black ">epilazione</span>
            </a>
        </li>
        <li class="mb-2">
            <a
                href="/trattamenti/depilazione" 
                class="{$page.url.pathname === '/trattamenti/depilazione' ? 'fucsia-color-bg ' : 'bg-gray-300 '} border flex p-2 border border-gray-100"
            >
                <span class="text-black ">depilazione</span>
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