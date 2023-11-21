<template>
    <div class="main-container">
      <div class="fixed-wrapper">
        <the-header></the-header>
      </div>
      <div class="main-content">
        <Suspense>
          <router-view />
          
          <template #fallback> Loading </template>
          
        </Suspense>
  
      </div>
    </div>
  </template>
  
  <script>
  import TheHeader from "@/layouts/TheHeader/TheHeader.vue";
   
  export default {
    components: {
      TheHeader,
    }
  }
  </script>
  
  <style lang="scss">
  @import "@/assets/scss/main.scss";
  </style>