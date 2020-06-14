<template>
    <div>
        <Header />
        <router-view></router-view>
        <Footer />
    </div>
</template>

<script>
import Header from './components/organims/header/Header';
import Footer from './components/organims/footer/Footer';

export default {
    components: {
        Header,
        Footer,
    }
}
</script>