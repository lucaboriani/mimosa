<style>
    .fucsia-color-bg{
        background-color:#c6919b;
    }
    .fucsia-color{
        color:#c6919b;
    }
    .splash-list{
        height: calc(100vh - 131px);
    }
    .splash-list li {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transition: all .3s ease;
    }
    .splash-list li:hover {
        filter: brightness(115%);
        border: solid 1px whitesmoke;
    }
    .splash-list li  a{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 1em;
        width: 80%;
        height: 60%;
    }
    .mimosa-color{
		color:#c6919b;
	}
    .mosa{
        word-spacing: -.3em;
    }
</style>
<h1 class="text-gray-500 text-right mr-8 mt-4 mb-4 text-4xl">I nostri servizi</h1>
<div class="bg-white relative">
    <div class="w-full mx-auto z-19 justify-center">
        
        <ul class="flex w-full flex-wrap splash-list">
            <li class="w-1/4 fucsia-color-bg">
                <a class="bg-white flex" href="/trattamenti/visocollo">
                    <div class="flex">
                        <span class="text-2xl fucsia-color inline">viso collo</span>
                        <span class="text-2xl inline pl-2">décolleté</span>
                    </div>
                    
                </a>
            </li>
            <li class="w-1/4  ">
                <a href="#a">
                    <span class="block text-3xl">estetica</span>
                    <span class="text-center text-5xl">
                       
                        <span class="mimosa-color">la</span>
                        <span class="mosa">
                            <span class="mimosa-color">mi</span>
                            <span class="text-black mosa">mosa</span>
                        </span>
                    </span>
                    
                </a>
            </li>
            <li class="w-1/4 bg-gray-100">
                <a href="/trattamenti/corpo" class="bg-white text-2xl fucsia-color">
                    corpo
                </a>
            </li>
            <li class="w-1/4">
                <a href="/trattamenti/epilazione" class="fucsia-color-bg text-2xl text-gray-700">
                    <div class="flex">
                        epilazione  
                        <span class="text-white pl-4">depilazione</span>  
                    </div>
                    
                </a>
            </li>
            <li class="w-1/4 bg-gray-400">
                <a href="/trattamenti/manicurepedicure" class="bg-white text-2xl">
                    <div class="flex">
                        <span class="text-2xl">manicure</span>
                        <span class="text-2xl fucsia-color pl-2">pedicure</span>
                    </div>
                      
                </a>
            </li>
            <li class="w-1/4 bg-gray-100">
                <a href="/trattamenti/massaggi" class="fucsia-color-bg text-2xl text-white">
                    massaggi
                </a>
            </li>
            <li class="w-1/4 fucsia-color-bg">
                <a href="/trattamenti/makeup" class="bg-gray-300 text-2xl">
                    <div class="flex">
                        <span class="text-2xl">make</span>
                        <span class="text-2xl fucsia-color">up</span>
                    </div>
                    
                 </a>
            </li>
            <li class="w-1/4 bg-gray-200">
                <span class="fucsia-color">Chiama per un appuntamento</span>
                    <span class="font-semibold text-gray-500 text-3xl">Tel 02 99026325</span>
                
            </li>
        </ul>    
    
    </div>
    
    
</div>
