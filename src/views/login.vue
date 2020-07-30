<template>
    <div class="content-container">
        <div class="column">
            <div class="field">
               <label for="userName" class="label">Username/Email:</label>
               <input id="userName" type="text" class="input" v-model="userObj.userName"/>
            </div>
            <div class="field">
               <label for="password" class="label">Password:</label>
               <input id="password" type="password" class="input" v-model="userObj.password"/>
            </div>
            <footer class="card-footer">
                <button class="link card-footer-item success-button" @click="submitLogin">
                    <i class="fa fa-sign-in"></i>
                    <span>Sign-In</span>
                </button>
            </footer>
        </div>
    </div>
</template>

<script>
    export default {
         name: 'Login',
         props: {
             cloudService: {
                 type: String,
                 default:'', 
             },
         },
         data() {
             return {
                 userObj: {
                    userName: null,
                    password: null,
                    token: null,
                 },
             };
         },
         methods: {
             submitLogin() {
                 
             }
         },
    }
</script>

<style lang="scss" scoped>

</style>