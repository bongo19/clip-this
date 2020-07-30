import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import Dropbox from '@/views/Dropbox.vue';

Vue.use(Router);

export default new Router({
    base: '/',
    mode: 'history',
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', name: 'home', component: Home },
        { path: '/dropbox', name: 'dropbox', component: Dropbox },
    ]
});