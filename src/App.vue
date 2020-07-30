<template>
    <div id='app'>
        <HeaderBar/>
        <div class="main-section columns">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import HeaderBar from '@/components/header-bar.vue';

export default {
    name: 'App',
    components:{
        HeaderBar,
    },
};
</script>

<style lang="scss">
@import '@/assets/css/styles.scss';
</style>