/* eslint-disable */
import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import App from './App.vue'

import 'primevue/resources/themes/lara-light-pink/theme.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

import Button from "primevue/button";
import InputText from 'primevue/inputtext';
import Card from 'primevue/card';
import Breadcrumb from 'primevue/breadcrumb';
import Image from 'primevue/image';
import Carousel  from 'primevue/carousel';



const app = createApp(App)
app.use(PrimeVue)

app.component('Carousel', Carousel)
app.component('Button ', Button)
app.component('InputText', InputText)
app.component('Card', Card)
app.component('Breadcrumb', Breadcrumb)
app.component('Image', Image)


app.mount('#app')
