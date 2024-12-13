
<template>
  <v-sheet class="mx-auto login-sheet" width="300">
    <h1>Connexion</h1>
    <v-form @submit.prevent="handleLogin">
      <v-text-field
        v-model="courriel"
        label="Email"
        density="compact"
        variant="outlined"
      ></v-text-field>
      <v-text-field
        v-model="password"
        label="Password"
        type="password"
        density="compact"
        variant="outlined"
      ></v-text-field>
      <v-btn class="mt-2" type="submit" block>Submit</v-btn>
    </v-form>
  </v-sheet>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { loginUser } from "@/services/utilisateur.service";
import {useUserStore} from "@/stores/user";

const courriel = ref("");
const password = ref("");
const router = useRouter();

const handleLogin = async () => {
  const data = JSON.stringify({
    courriel: courriel.value,
    password: password.value,
  });

  const response = await loginUser(data);
  const userStore = useUserStore();


  if (response.success) {
    if (response.data && response.data.id) {
      const userId = response.data.id;


      userStore.login(response.data.id);
      await router.push(`/users/${userId}`);
    } else {
      console.error("ID Introuvable:", response.data);
    }
  } else {
    console.error("Erreur de connexion :", response.message);
  }
};

</script>

<style scoped>
.login-sheet {
  margin-top: 200px;
}
</style>
