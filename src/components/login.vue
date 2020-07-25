<template>
    <div class="content-container">
        <div class="column">
            <div class="login-field">
                <div id="userNameLbl" class="column is-8">
                    <span>Email:</span>
                </div>
                <div id="userNamefield" class="column is-4">
                    <input type="text">
                </div>
            </div>
            <div class="login-field">
                <div id="passwordLbl" class="column is-8">
                    <span>Password:</span>
                </div>
                <div id="passwordfield" class="column is-4">
                    <input type="password">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
         name: 'Login',
    }
</script>

<style lang="scss" scoped>

</style>