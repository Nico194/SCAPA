<template>
    <header class="o-header">
        <div class="o-header__img">
            <div class="aspect-ratio-content">
                <img src="../../../../img/header.jpg" alt="header">
            </div>
        </div>
        <nav class="o-header__nav">
            <div class="o-header__nav-left mr-auto">
                <div class="o-header__nav-link o-header__nav-link--home">
                    <img class="o-header__nav-icon" src="../../../../img/heart-icon.svg" alt="icon">
                    <router-link to="/">SCAPA</router-link>
                </div>
                <div v-for="(link, index) in routes.initial.left" :key="index">
                    <Link :direction='link.route' :name='link.name'/>
                </div>
            </div>
            <div class="o-header__nav-right ml-auto">
                <div v-for="(link, index) in routes.initial.right" :key="index">
                    <Link :direction='link.route' :name='link.name'/>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
import Link from '../../atoms/link/Link';
import routes from '../../../routes';

export default {
    name: 'Header',
    components: {
        Link
    },
    beforeMount() {
        this.getRoutes();
    },
    data() {
        return {
            routes: {}
        }
    },
    methods: {
        getRoutes() {
            return this.routes = routes;
        }
    },
};
</script>