<template>
    <div class="content-container">
        <h1>WELCOME TO CLIP IT!!!</h1>
        <p>Your token is - {{token}}</p>
    </div>
</template>

<script>;
    export default {
        name:'Dropbox',
        data() {
            return {
                token: '',
            }
        },
        methods: {
            getAccessToken() {
                const tokenHash = location.hash.substring(13);
                this.token = tokenHash.substring(0,tokenHash.indexOf("&"));
                console.log(this.token.substring(13,this.token.indexOf("&")));
            }
        },
        mounted(){
            this.getAccessToken();
        }
    }
</script>

<style lang="scss" scoped>

</style>