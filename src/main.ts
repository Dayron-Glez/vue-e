import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import { createPinia } from 'pinia'

import HomePage from './pages/HomePage.vue'
import Products from './pages/Products.vue'
import { createPinia } from 'pinia'
import AboutPage from './pages/AnotherPage.vue'


const routes = [
  { path: '/', component: HomePage },
  { path: '/another', component: AnotherPage },
  { path: '/products', component: Products },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

const pinia = createPinia()

createApp(App)
  .use(router)
  .use(pinia)
  .mount('#app')
