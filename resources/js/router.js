import VueRouter from 'vue-router';

import Home from './components/pages/home/Home';
import Login from './components/pages/login/Login';
import Register from './components/pages/register/Register';

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about-us',
            name: 'about-us',
            component: Home
        },
        {
            path: '/sign-in',
            name: 'sign-in',
            component: Login
        },
        {
            path: '/sign-up',
            name: 'sign-up',
            component: Register
        }
    ]
})

export default router;