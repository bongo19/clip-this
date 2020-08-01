<template>
  <div class="card">
    <header class="card-header flex-container">
      <p class="card-header-title">Connect to Dropbox</p>
    </header>
    <!-- <div class="card-content">
      <div class="media">
        <ul class="media-left list is-hoverable">
          <li v-for="entry in entries.entries" :key="entry.id">
            <div class="columns">
              <div class="column">
                <figure class="image is-48x48">
                  <i class="fa fa-file" aria-hidden="true"></i>
                </figure>
              </div>
              <div class="column is-full">
                <div class="media-content">
                  <p class="title is-7">{{entry.name}}</p>
                  <p class="subtitle is-7">{{entry.client_modified}}</p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div> -->
  </div>
</template>

<script>
import Axios from "axios";
export default {
  name: "Dropbox",
  data() {
    return {
      token: null,
      entries:[],
    };
  },
  methods: {
    getAccessToken() {
      const tokenHash = location.hash.substring(14);
      this.token = tokenHash.substring(0, tokenHash.indexOf("&"));
    },
    async getFilesInClipFolder() {
      const result = await Axios({
        method:'post',
        url: "https://api.dropboxapi.com/2/files/list_folder",
        data: {
          'path': '',
          'recursive': true,
          'include_mounted_folders': true
        },
        headers: {
          Authorization: `Bearer ${this.token}`,
          "Content-Type": "application/json"
        }
      });

      this.entries = result.data;
    },
    getCurrentPageAsPDF(){
        //TODO: Keep in mind that is method might need to be moved to a shared location for Google Drive to call as well.
        
    }
  },
  async mounted() {
    // if (this.token == null) {
    //   this.getAccessToken();
    // }
    // await this.getFilesInClipFolder();
  }
};
</script>

<style lang="scss" scoped>
</style>