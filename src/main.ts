import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import AnotherPage from './pages/AnotherPage.vue'
import Products from './pages/Products.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/another', component: AnotherPage },
  { path: '/products', component: Products },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

createApp(App)
  .use(router)
  .mount('#app')
