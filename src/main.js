/* eslint-disable */
import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import App from './App.vue'
import {store} from './store';

import './styles/main.css'
import 'primevue/resources/themes/lara-light-pink/theme.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

import MeterGroup from "primevue/metergroup";
import InputText from 'primevue/inputtext';
import Card from 'primevue/card';
import Breadcrumb from 'primevue/breadcrumb';
import Image from 'primevue/image';
import Carousel  from 'primevue/carousel';
import RadioButton from 'primevue/radiobutton';
import Button from 'primevue/button';
import Tooltip from 'primevue/tooltip';



const app = createApp(App)
app.use(PrimeVue)

app.component('Carousel', Carousel)
app.component('MeterGroup', MeterGroup)
app.component('InputText', InputText)
app.component('Card', Card)
app.component('Breadcrumb', Breadcrumb)
app.component('Image', Image)
app.component('RadioButton', RadioButton)
app.component('Button', Button)
app.directive('tooltip', Tooltip);
app.use(store)


app.mount('#app')
