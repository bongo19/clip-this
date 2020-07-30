<template>
<div id='app'>
    <Home />
</div>
</template>
<script>
import Home from '@/views/home.vue';

export default {
    name: 'App',
    components:{
        Home,
    },
};
</script>

<style lang="scss">
@import '@/assets/css/styles.scss';
</style>