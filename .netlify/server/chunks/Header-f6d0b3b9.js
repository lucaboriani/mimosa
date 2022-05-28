import { g as getContext, n as noop, b as safe_not_equal, c as create_ssr_component, d as subscribe, e as escape } from "./index-d67b9b49.js";
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const subscriber_queue = [];
function writable(value, start = noop) {
  let stop;
  const subscribers = new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run, invalidate = noop) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
const bgWhiteMenu = writable(false);
var Header_svelte_svelte_type_style_lang = "";
const css = {
  code: ".active.svelte-1uf927s.svelte-1uf927s{color:black;font-weight:600}#menu-container.svelte-1uf927s.svelte-1uf927s{top:0;z-index:100}.menu-phone.svelte-1uf927s.svelte-1uf927s{width:1em;height:1em;object-fit:contain}input#mobile-menu-btn.svelte-1uf927s.svelte-1uf927s{display:none}.mobile-menu-icon.svelte-1uf927s.svelte-1uf927s{cursor:pointer;display:inline-block;padding:28px 20px;position:relative;user-select:none;z-index:999999}.mobile-menu-icon.svelte-1uf927s .navicon.svelte-1uf927s{background:#333;display:block;height:3px;position:relative;transition:background .2s ease-out;width:40px}.mobile-menu-icon.svelte-1uf927s .navicon.svelte-1uf927s:before{top:10px}.mobile-menu-icon.svelte-1uf927s .navicon.svelte-1uf927s:before,.mobile-menu-icon.svelte-1uf927s .navicon.svelte-1uf927s:after{background:#333;content:'';display:block;height:100%;position:absolute;transition:transform .2s ease-out;width:100%}.mobile-menu-icon.svelte-1uf927s .navicon.svelte-1uf927s:after{top:-10px}.mobile-menu-btn:checked~.mobile-menu-icon.svelte-1uf927s:not(.steps) .navicon.svelte-1uf927s:before,.mobile-menu-btn:checked~.mobile-menu-icon.svelte-1uf927s:not(.steps) .navicon.svelte-1uf927s:after{top:0}.mobile-menu-btn:checked~.mobile-menu-icon.svelte-1uf927s .navicon.svelte-1uf927s:before{transform:rotate(-45deg)}.mobile-menu-btn:checked~.mobile-menu-icon.svelte-1uf927s:not(.steps) .navicon.svelte-1uf927s:after{top:0}.mobile-menu-btn:checked~.mobile-menu-icon.svelte-1uf927s .navicon.svelte-1uf927s:after{transform:rotate(45deg)}.mobile-menu-btn:checked~.mobile-menu-icon.svelte-1uf927s .navicon.svelte-1uf927s{background:transparent}.mobile-menu.svelte-1uf927s.svelte-1uf927s{position:fixed;clear:both;transform:translateX(100vw);transition:all .2s ease-out;top:0px;left:0;min-height:100vh;padding-top:4em}.mobile-menu-btn.svelte-1uf927s:checked~.mobile-menu.svelte-1uf927s{transform:translateX(0);z-index:1}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let servicePaths = [
    "/trattamenti",
    "/trattamenti/visocollo",
    "/trattamenti/epilazione",
    "/trattamenti/makeup",
    "/trattamenti/manicurepedicure",
    "/trattamenti/corpo",
    "/trattamenti/massaggi"
  ];
  let showWiteBg;
  bgWhiteMenu.subscribe((value) => {
    showWiteBg = value;
  });
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<div class="${"w-full " + escape($page.url.pathname === "/" ? "fixed " : " sticky ") + " " + escape(showWiteBg || $page.url.pathname !== "/" ? " shadow" : " ") + " svelte-1uf927s"}" id="${"menu-container"}"><nav class="${"bg-white " + escape(showWiteBg ? "bg-white " : "bg-transparent") + ""}"><div class="${"pl-4 pr-4"}"><div class="${"flex items-center justify-between h-16 w-full"}"><div class="${"w-full justify-between flex items-center"}"><a class="${"flex-shrink-0 w-20"}" href="${"/"}"><img src="${"../img/logo-mimosa.svg"}" loading="${"eager"}" alt="${"logo la mimosa "}" class="${"w-full h-full p-2 object-contain"}"></a>
					<div class="${"hidden md:block"}"><div class="${"ml-10 flex items-center space-x-2"}"><a class="${[
    "text-stone-400 hover:text-stone-800 px-2 py-2 rounded-md text-xl font-medium svelte-1uf927s",
    $page.url.pathname === "/" ? "active" : ""
  ].join(" ").trim()}" sveltekit:prefetch href="${"/"}">Home
							</a>
							
							<a class="${[
    "text-stone-500 hover:text-stone-800 px-2 py-2 rounded-md text-xl font-medium svelte-1uf927s",
    servicePaths.indexOf($page.url.pathname) !== -1 ? "active" : ""
  ].join(" ").trim()}" href="${"/trattamenti"}">trattamenti
							</a>
							<a class="${"text-stone-500 hover:text-stone-800 px-2 py-2 rounded-md text-xl font-medium"}" href="${"/#contacts"}">contatti
							</a></div></div></div>
				<div class="${"block"}"><div class="${"ml-4 flex items-center md:ml-6"}"></div></div>
				<div class="${"flex md:hidden relative"}"><input class="${"mobile-menu-btn svelte-1uf927s"}" type="${"checkbox"}" id="${"mobile-menu-btn"}">
               		<label class="${"mobile-menu-icon svelte-1uf927s"}" for="${"mobile-menu-btn"}"><span class="${"navicon svelte-1uf927s"}"></span></label>

					<div class="${"mobile-menu w-screen bg-stone-200 svelte-1uf927s"}"><nav class="${"w-full block bg-stone-100 service-menu p-4"}"><ul class="${"flex w-full flex-col"}"><li class="${"mb-2"}"><a class="${[
    "text-stone-600 hover:text-stone-800 px-2 py-2 rounded-md text-xl font-medium svelte-1uf927s",
    $page.url.pathname === "/" ? "active" : ""
  ].join(" ").trim()}" sveltekit:prefetch href="${"/"}">Home
									</a></li>
								<li class="${"mb-2"}"><a class="${[
    "text-stone-600 hover:text-stone-800 px-2 py-2 rounded-md text-xl font-medium svelte-1uf927s",
    servicePaths.indexOf($page.url.pathname) !== -1 ? "active" : ""
  ].join(" ").trim()}" href="${"/trattamenti"}">trattamenti
									</a></li>
								<li class="${"mb-2"}"><a class="${"text-stone-600 hover:text-stone-800 px-2 py-2 rounded-md text-xl font-medium"}" href="${"/#contacts"}">contatti
									</a></li>
								<li class="${"mb-2"}"><a class="${"flex items-center text-stone-600 hover:text-stone-800 py-2 rounded-md text-xl font-medium"}" href="${"/#"}"><img src="${"/img/phone-icons.svg"}" alt="${"phone"}" class="${"menu-phone svelte-1uf927s"}">
										<span class="${"ml-2"}">chiama ora</span></a></li>
								<li class="${"mb-2"}"><a class="${"flex items-center text-stone-600 hover:text-stone-800 py-2 rounded-md text-xl font-medium"}" href="${"/#"}"><img src="${"/img/locator-icon.png"}" alt="${"phone"}" class="${"menu-phone pr-1 svelte-1uf927s"}">
										<span class="${"ml-2"}">mappa</span></a></li></ul></nav>
						<nav class="${"w-full block bg-stone-400 service-menu p-4"}"><ul class="${"flex w-full flex-col"}"><li class="${"mb-4"}"><a class="${escape($page.url.pathname === "/trattamenti/visocollo" ? "fucsia-color-bg " : "bg-stone-300 ") + " p-2 flex border border-stone-700"}" href="${"/trattamenti/visocollo"}"><span class="${"text-blacl"}">viso collo</span>
										<span class="${"inline pl-2 text-white"}">d\xE9collet\xE9</span></a></li>
								<li class="${"mb-4"}"><a href="${"/trattamenti/corpo"}" class="${escape($page.url.pathname === "/trattamenti/corpo" ? "fucsia-color-bg " : "bg-stone-300 ") + " flex p-2 border border-stone-100"}"><span class="${"text-black"}">trattamenti</span>
										<span class="${"pl-2 text-white"}">corpo</span></a></li>
								<li class="${"mb-4"}"><a href="${"/trattamenti/depilazione-epilazione"}" class="${escape($page.url.pathname === "/trattamenti/depilazione-epilazione" ? "fucsia-color-bg " : "bg-stone-300 ") + " border flex p-2 border border-stone-100"}"><span class="${"pl-2 text-white"}">depilazione</span>
										<span class="${"text-black pl-2 "}">epilazione</span></a></li>
								
								<li class="${"mb-4"}"><a href="${"/trattamenti/manicurepedicure"}" class="${escape($page.url.pathname === "/trattamenti/manicurepedicure" ? "fucsia-color-bg " : "bg-stone-300 ") + " flex p-2 border border-stone-100"}"><span class="${""}">manicure</span>
										<span class="${"text-white pl-2"}">pedicure</span></a></li>
								<li class="${"mb-4"}"><a href="${"/trattamenti/massaggi"}" class="${escape($page.url.pathname === "/trattamenti/massaggi" ? "fucsia-color-bg " : "bg-stone-300 ") + " flex p-2 border border-stone-100"}">massaggi
									</a></li>
								<li class="${"mb-4 "}"><a href="${"/trattamenti/makeup"}" class="${escape($page.url.pathname === "/trattamenti/makeup" ? "fucsia-color-bg " : "bg-stone-300 ") + " flex p-2 border border-stone-100"}"><span class="${""}">make</span>
											<span class="${"text-white"}">up</span></a></li></ul></nav></div></div></div></div></nav>
</div>`;
});
export { Header as H, page as p };
