require('./bootstrap');

import Vue from 'vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import router from './router';
import App from './App'

import './icons';

Vue.component('app', require('./App.vue').default)

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    components: {
        App
    },
    router
});
