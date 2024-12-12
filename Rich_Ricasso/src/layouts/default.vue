<template>
  <v-app>
    <v-main id="app-container">
      <AppHeader />

      <div id="main-content">
        <router-view />
      </div>

      <AppFooter />
    </v-main>
  </v-app>
</template>


<script setup>
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from "@/components/AppFooter.vue";




</script>
<style>

#app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}


#main-content {
  flex: 1;
}

</style>
