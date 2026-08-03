import './assets/main.css' //Base styling for the entire app goes in main.css
import { router } from '@/router/router.js'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).use(router).mount('#app')
