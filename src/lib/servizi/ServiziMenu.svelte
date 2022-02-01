<style>
    .service-menu{
        padding-top: 4.5rem;
    }
</style>
<script>
	import { page } from '$app/stores';

</script>
<nav class="w-1/4 bg-gray-400 service-menu px-4">
    <ul class="flex w-full flex-col">
        <li class="mb-2">
            <a class="{$page.url.pathname === '/visocollo' ? 'fucsia-color-bg ' : 'bg-gray-300 '} p-2 flex  border border-gray-700" href="/visocollo">
                <span class="text-blacl">viso collo</span>
                <span class=" inline pl-2 text-white">décolleté</span>
                
            </a>
        </li>
        <li class="mb-2">
            <a href="/trattamenticorpo" class="{$page.url.pathname === '/trattamenticorpo' ? 'fucsia-color-bg ' : 'bg-gray-300 '}  flex p-2 border border-gray-100">
                <span class=" text-black">trattamenti</span>
                <span class=" pl-2 text-white">corpo</span>
            </a>
        </li>
        <li class="mb-2">
            <a href="/epilazione" class="{$page.url.pathname === '/epilazione' ? 'fucsia-color-bg ' : 'bg-gray-300 '} border flex p-2 border border-gray-100">
                <span class="text-black ">epilazione</span>
            </a>
        </li>
        <li class="mb-2">
            <a href="/manicurepedicure" class="{$page.url.pathname === '/manicurepedicure' ? 'fucsia-color-bg ' : 'bg-gray-300 '} flex p-2 border border-gray-100">
                <span class="">manicure</span>
                <span class="fucsia-color pl-2">pedicure</span>
                  
            </a>
        </li>
        <li class="mb-2">
            <a href="/massaggi" class="{$page.url.pathname === '/massaggi' ? 'fucsia-color-bg ' : 'bg-gray-300 '}  flex p-2 border border-gray-100">
                massaggi
            </a>
        </li>
        <li class=" mb-2 ">
            <a href="/makeup" class="{$page.url.pathname === '/makeup' ? 'fucsia-color-bg ' : 'bg-gray-300 '} flex p-2 border border-gray-100">
                
                    <span class="">make</span>
                    <span class=" text-white">up</span>
                
                    
                
             </a>
        </li>
        
    </ul>    
</nav>