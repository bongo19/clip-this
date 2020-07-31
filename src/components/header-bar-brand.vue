<template>
   <div class="container">
       <div class="level">
           <div class="level-item">
               <img src="@/assets/images/logo_black.png" alt="" class="logo-icon">
           </div>
           <div class="level-item has-text-centered">
               <h1 class="logo">
                    ClipIt
                    <span class="version">(1.0.0)</span>
                </h1>
           </div>
       </div>
    </div>
</template>

<script>
export default {
    name: 'HeaderBarBrand',
}
</script>


<style lang="scss" scoped>

  .logo {
    padding: 16px;
    font-family: 'Menlo', monospace;
    font-size: 30px;
    font-weight: 400;
    margin: 0;
    color: #5ea0cf;
  }
  
  .logo-icon {
    vertical-align: text-bottom;
    margin-right: 12px;
    margin-top:15%;
    width:30px;
    
  }
  
  .version {
    color: #777;
    font-size: 18px;
  }

</style>