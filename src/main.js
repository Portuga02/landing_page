import './assets/config_general.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faHouseChimneyMedical,
  faPeopleGroup,
  faUserDoctor,
  faAward,
  faCircleCheck,
  faClipboardList,
  faHospital,
  faTooth,
  faHeartPulse,
  faTablets,
  faDna,
  faTruckMedical,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faInstagramSquare,
  faLinkedin,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faPhone,
  faEnvelope,
  faLocationDot,
  faFacebookSquare,
  faTwitterSquare,
  faLinkedin,
  faInstagramSquare,
  faHouseChimneyMedical,
  faPeopleGroup,
  faUserDoctor,
  faAward,
  faCircleCheck,
  faClipboardList,
  faHospital,
  faTooth,
  faHeartPulse,
  faTablets,
  faDna,
  faTruckMedical
);

const app = createApp(App).component("font-awesome-icon", FontAwesomeIcon);

app.use(router);

app.mount("#app");
