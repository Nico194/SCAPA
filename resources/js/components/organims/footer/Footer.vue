<template>
    <footer class="o-footer">
        <div class="row">
            <div class="col-5">
                <div class="o-footer__presentation">
                    <div class="o-footer__presentation-icon">
                        <img src="../../../../img/heart-icon.svg" alt="icon">
                    </div>
                    <div class="o-footer__presentation-name">
                        <h1 class="text-center">SCAPA</h1>
                        <h5 class="text-center">Sistema de Comunicación Alternativo y Aumentativo para Personas con Autismo</h5>
                    </div>
                </div>
            </div>
            <div class="col-7">
                <div class="o-footer__nav">
                    <div v-for="(link, index) in routes.tutor.left" :key="index">
                        <Link :direction='link.route' :name='link.name'/>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import Link from '../../atoms/link/Link';
import routes from '../../../routes';

export default {
    name: 'Footer',
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