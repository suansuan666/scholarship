import Vue from "vue";
import VueRouter from "vue-router";
import Login from './components/Login.vue'
import Home from "./views/Home.vue"
Vue.use(VueRouter)
const routes = [
    {
        path:"/",
        name:'login',
        component:Login
    },
    {
        path:"/home",
        name:'home',
        component:Home
    }
    
      
]

var router =  new VueRouter({
    routes
})
export default router;