<template>
  <header>
      <div class="hero">
        <HeaderBarBrand></HeaderBarBrand>
        <NavBar></NavBar>
      </div>
  </header>
</template>

<script>
import HeaderBarBrand from '@/components/header-bar-brand.vue';
import NavBar from '@/components/nav-bar.vue';

export default {
    name: 'HeaderBar',
    components: { HeaderBarBrand, NavBar },
};
</script>

