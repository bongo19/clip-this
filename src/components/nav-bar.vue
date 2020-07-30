<template>
<section>
    <section class="container">
        <div class="level">
            <div class="level-item has-text-centered">
                <p class="select-service-text">Please select where you would like to save:</p>
            </div>
            <div class="columns level-item has-text-centered">
                <div class="column is-1">
                    <router-link :to="{ name:'login', params: { cloudService: 'Dropbox'}}" class="button is-info is-outlined iconBtn" tag="button"> 
                            <i class="fab fa-dropbox"></i><span>Dropbox</span>
                    </router-link>
                   
                </div>
                <div class="column is-1">
                    <button class="button is-info is-outlined iconBtn">
                        <i class="fab fa-dropbox"></i><span>Google Drive</span>
                    </button>
                </div>
            </div>
        </div>
            
    </section>
</section>


</template>

<script>
    export default {
        name:'NavBar',
    }
</script>

<style lang="scss" scoped>

</style>