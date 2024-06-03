import {createMemoryHistory, createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import Products from '../pages/Products.vue'
import AboutPage from '../pages/AboutPage.vue'
import BlogPage from '../pages/BlogPage.vue'

 const router = createRouter({
history: createMemoryHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path:'/',
            name: "home",
            component: HomePage,
        },
        {
            path:'/products',
            name: "products",
            component: Products
        },
        {
            path:'/about',
            name:'about',
            component: AboutPage
        },
        {
            path:'/blog',
            name:'blog',
            component: BlogPage
        },
    ]
})


export default router