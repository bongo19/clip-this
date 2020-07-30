<template>
    <div>
        <HeaderBar/>
        <NavBar></NavBar>
    </div>
</template>

<script>
import NavBar from '@/components/nav-bar.vue';
import HeaderBar from '@/components/header-bar.vue';

    export default {
        name: "home",
        components:{
            NavBar,
            HeaderBar,
        },
    }
</script>

<style lang="scss" scoped>

</style>