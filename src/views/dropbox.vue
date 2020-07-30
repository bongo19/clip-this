<template>
    <div class="content-container">
        <header class="card-header flex-container">
                <p class="card-header-title">Currently Connected to Dropbox</p>
        </header>
    </div>
</template>

<script>;
import Axios from 'axios';
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
                //console.log(this.token.substring(13,this.token.indexOf("&")));
            },
            async getFilesInClipFolder(){
                const result = await Axios({
                    url: 'https://api.dropboxapi.com/2/file_requests/list_v2',
                    data:{
                        'limit':1000,
                    },
                    headers:{
                        'Authorization': `Bearer ${this.token}`,
                        'Content-Type':'application/json',
                    }
                });

                return result.data;
            }
        },
        mounted(){
            this.getAccessToken();
        }
    }
</script>

<style lang="scss" scoped>

</style>