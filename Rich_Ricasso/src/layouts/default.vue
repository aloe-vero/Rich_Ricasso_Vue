<template>
  <v-app>

    <v-main>
      <AppHeader />

      <router-view />

      <AppFooter />
    </v-main>



  </v-app>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from "@/components/AppFooter.vue";




</script>
<style></style>
