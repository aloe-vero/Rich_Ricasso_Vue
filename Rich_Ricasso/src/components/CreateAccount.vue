
<template>
  <v-sheet class="mx-auto create-sheet" width="300">
    <h1>Créer un compte</h1>
    <v-form @submit.prevent="handleSubmit">
      <v-text-field
        v-model="prenom"
        density="compact" variant="outlined"
        label="Prénom"
      ></v-text-field>
      <v-text-field
        v-model="nom"
        label="Nom"
      ></v-text-field>
      <v-text-field
        v-model="password"
        label="Password"
      ></v-text-field>
      <v-text-field
        v-model="courriel"
        label="Email"
      ></v-text-field>
      <v-btn class="mt-2" type="submit" block >Create Account</v-btn>
    </v-form>
  </v-sheet>
</template>


<script setup>
import { ref } from "vue";
import { createUtilisateur } from "@/services/utilisateur.service";

const courriel = ref("");
const prenom = ref("");
const nom = ref("");
const password = ref("");

const handleSubmit = async () => {
  // Prepare the data to be sent
  const data = JSON.stringify({
    prenom: prenom.value,
    nom: nom.value,
    password: password.value,
    courriel: courriel.value,
  });

  try {
    // Call the function to send data to the API
    const response = await createUtilisateur(data);

    if (response.success) {
      alert(response.message || "Utilisateur créé avec succès !");
    } else {
      alert(response.message || "Erreur lors de la création de l'utilisateur.");
    }
  } catch (error) {
    console.error("Erreur lors de la soumission :", error);
    alert("Une erreur est survenue lors de la soumission du formulaire.");
  }
};
</script>


<style scoped>
.create-sheet{
  margin-top: 200px;

}
</style>
