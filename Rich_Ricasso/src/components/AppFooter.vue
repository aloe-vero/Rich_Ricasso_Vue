<template>
  <v-footer id="footer-color" border absolute>
    <v-sheet class="d-flex align-center justify-center flex-wrap text-center mx-auto px-4" color="#48c1b8">
    <Infolettre />


     <v-container>
       <p>© 2024 Rich Ricasso</p>
     </v-container>
    </v-sheet>

  </v-footer>
</template>

<script>
import Infolettre from "@/components/Infolettre.vue";

export default {
  components: {
    Infolettre,
  },
};
</script>

<style scoped>
#footer-color{
  background-color: #48c1b8;

}
</style>
