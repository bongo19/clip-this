import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/home.vue';
import Dropbox from './views/dropbox.vue';
import NavBar from '@/components/nav-bar.vue';
import Login from './views/login.vue';
import App from './popup/App.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: '/',
    routes: [
        {
            path: '/public/index.html',
            component: App
        },
        { 
            path: '/public/index.html', 
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
        { path: '/dropbox/',
          name: 'dropbox', 
          component: Dropbox,
          props: true,
        },
        {
            path: '/login/:cloudService',
            name: 'login',
            component: Login,
            props:true,

        },
    ]
});