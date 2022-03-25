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

<div class="bg-white relative">
    <div class="w-full mx-auto z-19 justify-center">
        
        <ul class="flex w-full flex-wrap splash-list">
            <li class="w-full lg:w-1/4 fucsia-color-bg order-1 lg:order-0  py-8 lg:py-0">
                <a class="bg-white flex" href="/trattamenti/visocollo">
                    <div class="flex">
                        <span class="text-2xl fucsia-color inline">viso collo</span>
                        <span class="text-2xl inline pl-2">décolleté</span>
                    </div>
                    
                </a>
            </li>
            <li class="w-full lg:w-1/4 order-0 lg:order-1  py-8 lg:py-0">
                <a href="#a">
                    
                    <img src="../img/mimosalogo.svg" loading="eager" alt="logo la mimosa " class="w-48" />
                    
                </a>
            </li>
            <li class="w-full lg:w-1/4 bg-gray-100 order-2  py-8 lg:py-0">
                <a href="/trattamenti/corpo" class="bg-white text-2xl fucsia-color">
                    corpo
                </a>
            </li>
            <li class="w-full lg:w-1/4 order-2 py-8 lg:py-0">
                <a href="/trattamenti/depilazione-epilazione" class="fucsia-color-bg text-2xl text-gray-700">
                    <div class="flex">
                        depilazione 
                        <span class="text-white pl-4">epilazione </span>  
                    </div>
                    
                </a>
            </li>
            <li class="w-full lg:w-1/4 bg-gray-400 order-2 py-8 lg:py-0">
                <a href="/trattamenti/manicurepedicure" class="bg-white text-2xl">
                    <div class="flex">
                        <span class="text-2xl">manicure</span>
                        <span class="text-2xl fucsia-color pl-2">pedicure</span>
                    </div>
                      
                </a>
            </li>
            <li class="w-full lg:w-1/4 bg-gray-100 order-2 py-8 lg:py-0">
                <a href="/trattamenti/massaggi" class="fucsia-color-bg text-2xl text-white">
                    massaggi
                </a>
            </li>
            <li class="w-full lg:w-1/4 fucsia-color-bg order-2 py-8 lg:py-0">
                <a href="/trattamenti/makeup" class="bg-gray-300 text-2xl">
                    <div class="flex">
                        <span class="text-2xl">make</span>
                        <span class="text-2xl fucsia-color">up</span>
                    </div>
                    
                 </a>
            </li>
            <li class="w-full lg:w-1/4 bg-gray-200 order-2 py-8 lg:py-0">
                <span class="fucsia-color">Chiama per un appuntamento</span>
                    <span class="font-semibold text-gray-500 text-3xl">Tel 02 99026325</span>
                
            </li>
        </ul>    
    
    </div>
    
    
</div>
