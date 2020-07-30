import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    base: '/',
    mode: 'history',
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/path', component: component },
    ]
});