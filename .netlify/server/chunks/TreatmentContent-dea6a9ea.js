import { c as create_ssr_component, e as escape } from "./index-d67b9b49.js";
const TreatmentContent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { classes } = $$props;
  if ($$props.classes === void 0 && $$bindings.classes && classes !== void 0)
    $$bindings.classes(classes);
  return `<div class="${"overflow-y-scroll " + escape(classes ? classes : "")}">${slots.default ? slots.default({}) : ``}</div>`;
});
export { TreatmentContent as T };
