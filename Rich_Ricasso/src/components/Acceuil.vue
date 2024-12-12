<template>
  <v-container id="acceuil-display">
    <v-row dense no-gutters>
      <v-col cols="5">
        <AboutRich />
      </v-col>
      <v-col >
        <Showcase />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import Showcase from './Showcase.vue';
import AboutRich from './AboutRich.vue';
</script>

<style scoped>
#acceuil-display {
  margin-top: 80px;
  display: flex;
  width: 100%;
}

v-row {
  margin: 0;
  padding: 0;
}

v-col {
  padding: 0;
  margin: 0;
}
</style>
