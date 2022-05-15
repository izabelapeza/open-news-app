import { createApp } from 'vue'
import App from './App.vue'

import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass, faImage, faWindowRestore, faExclamation, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faMagnifyingGlass, faImage, faWindowRestore, faExclamation, faXmark);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount('#app')
