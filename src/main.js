import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router/index,js'
import './style.css'

import App from './App.vue'

const app = createApp(App)
const pinia = createPinia()

// createApp(App).mount('#app')

app.use(router)
app.use(pinia)
app.mount('#app')