<template>
<div id='app'>
    <HeaderBar />
</div>
</template>
<script>
import HeaderBar from '@/components/header-bar.vue';
// import NavBar from '@/components/nav-bar.vue';

export default {
    name: 'App',
    components:{
        HeaderBar,
        // NavBar,
    },
};
</script>

<style lang="scss">
@import '@/assets/css/styles.scss';
</style>