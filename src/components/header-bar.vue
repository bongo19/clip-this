<template>
  <header>
      <div class="hero">
        <HeaderBarBrand></HeaderBarBrand>
      </div>
  </header>
</template>

<script>
import HeaderBarBrand from '@/components/header-bar-brand.vue';


export default {
    name: 'HeaderBar',
    components: { HeaderBarBrand, },
};
</script>

