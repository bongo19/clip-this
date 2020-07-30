import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/home.vue';
import Dropbox from './views/dropbox.vue';
import NavBar from '@/components/nav-bar.vue';
import Login from './views/login.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        { 
            path: '/', 
            redirect: '/home', 
            component: Home,
            children:[
                {
                    path:'/home/navbar',
                    component: NavBar
                }
            ]
        },
        { path: "/home", 
            name: 'home', 
            component: Home, 
        },
        { path: '/dropbox',
          name: 'dropbox', 
          component: Dropbox,
        },
        {
            path: '/login/:cloudService',
            name: 'login',
            component: Login,
            props:true,

        },
    ]
});