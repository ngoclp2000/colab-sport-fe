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
      <the-footer></the-footer>
    </div>
  </template>
  
  <script>
  import TheHeader from "@/layouts/TheHeader/TheHeader.vue";
  import TheMenu from "@/layouts/TheMenu/TheMenu.vue"
  import TheFooter from "@/layouts/TheFooter/TheFooter.vue";
  import ConfirmDialog from 'primevue/confirmdialog';
  
  export default {
    components: {
      TheHeader,
      TheMenu,
      TheFooter,
      ConfirmDialog
    }
  }
  </script>
  
  <style lang="scss">
  @import "@/assets/scss/main.scss";
  </style>