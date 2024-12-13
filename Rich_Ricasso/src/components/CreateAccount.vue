
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
        density="compact" variant="outlined"
        label="Nom"
      ></v-text-field>
      <v-text-field
        v-model="password"
        density="compact" variant="outlined"
        label="Password"
      ></v-text-field>
      <v-text-field
        v-model="courriel"
        density="compact" variant="outlined"
        label="Email"
      ></v-text-field>
      <v-btn class="mt-2" type="submit" block >Create Account</v-btn>
    </v-form>
  </v-sheet>
</template>


<script setup>
import { ref } from "vue";
import { createUtilisateur } from "@/services/utilisateur.service";
import {useRouter} from "vue-router";
const router = useRouter();

const courriel = ref("");
const prenom = ref("");
const nom = ref("");
const password = ref("");

const handleSubmit = async () => {

  const data = JSON.stringify({
    prenom: prenom.value,
    nom: nom.value,
    password: password.value,
    courriel: courriel.value,
  });

  try {

    const response = await createUtilisateur(data);

    if (response.success) {
      await router.push(`/login`);
    } else {
     console.log("Erreur lors de la création de l'utilisateur.");
    }
  } catch (error) {
    console.error("Erreur lors de la soumission :", error);

  }
};
</script>


<style scoped>
.create-sheet{
  margin-top: 200px;

}
</style>
