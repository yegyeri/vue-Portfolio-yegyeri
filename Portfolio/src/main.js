import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueTheMask from 'vue-the-mask'

const app = createApp(App)

app.use(router)

app.mount('#app')

app.use(VueTheMask);
