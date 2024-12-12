<template>
  <v-container id="color">
    <p>Inscrivez-vous à notre infolettre</p>
    <v-form @submit.prevent="handleSubmit">
      <v-text-field
        v-model="courriel"
        label="Courriel"
        type="email"
        required
        density="compact"
        variant="outlined"
      ></v-text-field>
      <v-btn type="submit" rounded variant="outlined">S'inscrire</v-btn>
    </v-form>

    <p v-if="message" :class="{'error-text': !success, 'success-text': success}">
      {{ message }}
    </p>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
import { inscrireAbonnement } from "@/services/abonnement.service"; // Importez votre méthode

const courriel = ref("");
const message = ref("");
const success = ref(false);

const handleSubmit = async () => {


  const result = await inscrireAbonnement(courriel.value);



  message.value = result.message;
  success.value = result.success;

  // Réinitialisation du champ si réussi
  if (result.success) {
    courriel.value = "";
  }
};
</script>



<style scoped>

</style>
