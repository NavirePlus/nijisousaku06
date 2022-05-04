import { createApp } from 'vue'
import App from './App.vue'
import VueScrollTo from 'vue-scrollto'
import './index.css'

createApp(App)
  .use(VueScrollTo, {
    container: 'body',
    duration: 500,
    offset: 0,
    easing: 'ease-in-out'
  })
  .mount('#app')
