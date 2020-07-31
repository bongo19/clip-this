<template>
<section>
    <section class="container">
        <div class="level">
            <div class="level-item has-text-centered">
                <p class="select-service-text">Please select where you would like to save:</p>
            </div>
            <div class="columns level-item has-text-centered">
                <!-- <div class="column is-1">
                    <router-link :to="{ name:'login', params: { cloudService: 'Dropbox'}}" class="button is-info is-outlined iconBtn" tag="button"> 
                            <i class="fab fa-dropbox"></i><span>Dropbox</span>
                    </router-link>
                   
                </div> -->
                 <div class="column is-1">
                    <button id="dropboxBtn" class="button is-info is-outlined iconBtn" @click="toggleDropboxComp">
                        <i class="fab fa-dropbox"></i><span>Dropbox</span>
                    </button>
                </div>
                <div class="column is-1">
                    <button id="googleBtn" class="button is-info is-outlined iconBtn">
                        <i class="fab fa-dropbox"></i><span>Google Drive</span>
                    </button>
                </div>
            </div>
            <Dropbox
              v-if="showDropboxComponent"
            />
        </div>
            
    </section>
</section>


</template>

<script>
import Dropbox from '../views/dropbox';
    export default {
        name:'NavBar',
        data() {
            return {
                showDropboxComponent: false,
                showGoogleDriveComponent: false
            }
        },
        components: {
            Dropbox,
        },
        methods: {
            toggleDropboxComp() {
               this.showDropboxComponent != this.showDropboxComponent;
            }
        },
    }
</script>

<style lang="scss" scoped>
.column{
    margin-top:10%;
}

#googleBtn{
    margin-right:5%;
}

.select-service-text{
    font-size: 15px;
    font-weight: bold;
    padding-left: 2%;
    margin-top: 5%;
  }
</style>