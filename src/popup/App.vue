<template>
  <div id="app">
    <HeaderBar />
    <div class="main-section columns">
      <Home></Home>
    </div>
  </div>
</template>
<script>
import HeaderBar from "@/components/header-bar.vue";
import Home from "@/views/home.vue";

export default {
  name: "App",
  components: { HeaderBar, Home },
  created() {
    this.$router.push("app");
  }
};
</script>


<style lang="scss">
@import "../assets/css/styles.scss";
html {
  width: 400px;
  height: 400px;
}
</style>
