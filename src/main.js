// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCode, faLink } from "@fortawesome/free-solid-svg-icons";

// Globaly add these icons for use
library.add(faCode, faLink);

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import "~/assets/global.scss";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  Vue.component("font-awesome-icon", FontAwesomeIcon);
}
