<template>
    <div class="content-container">
        <h1>WELCOME TO CLIP IT!!!</h1>
        <p>Your token is - {{token}}</p>
    </div>
</template>

<script>;
    export default {
        name:'Dropbox',
        props: {
            token: {
                type: String,
                default: 'this.$route.query.access_token',
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>