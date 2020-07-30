<template>
    <div class="content-container">
        <section>
            <header class="card-header">
                <p class="card-header-title">Connect</p>
            </header>
            <p>Click the button below to allow Clip It to access and copy files to your {{cloudService}}</p>
        </section>
            <footer class="card-footer">
                <button class="link card-footer-item success-button" @click="submitLogin">
                    <i class="fa fa-sign-in"></i>
                    <span>Sign-In</span>
                </button>
            </footer>
        </div>
</template>

<script>
import * as axios from 'axios';

    export default {
         name: 'Login',
         props: {
             cloudService: {
                 type: String,
                 default:null,
             },
         },
         data() {
             return {
                 token: null,
             };
         },
         methods: {
             async submitLogin() {
                 if(this.cloudService == 'Dropbox'){
                     await this.authenticateDropbox();
                 }
             },
             async authenticateDropbox(){
               const api_token = "imf0pehsqjibmn2";
               const api_token_secret = "99jz6txlmbwnd1v";
               const base64 = btoa(`${api_token}:${api_token_secret}`);

                const response = await axios({
                                    method: 'post',
                                    url: 'https://api.dropboxapi.com/2/auth/token/from_oauth1',
                                    //url: `https://dropbox.com/oauth2/authorize?client_id=${api_token}&response_type=code`,
                                    data: {
                                        oauth1_token: api_token,
                                        oauth1_token_secret: api_token_secret,
                                        // link:`https://www.dropbox.com/sh/${api_token}/${api_token_secret}?dl=0`
                                    },
                                    headers:{
                                        'Authorization': `Basic ${base64}`,
                                        'Content-Type': 'application/json'
                                    }
                });

                if(response.status == 200){
                    this.data.token = response.data;
                }
             },
         },
    }
</script>

<style lang="scss" scoped>

</style>