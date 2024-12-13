<template>
    <v-container>
        <v-card id="profile-card">
            <p>Prenom: {{ utilisateur.prenom }}</p>
            <p>Nom: {{ utilisateur.nom }}</p>
            <p>Email: {{ utilisateur.courriel }}</p>

                <v-btn  class="tab"
                        variant="plain"
                        :ripple="false"
                        active-color="#800080">Change Password</v-btn>

          <v-btn
            class="tab"
            variant="plain"
            :ripple="false"
            active-color="#800080"
            @click="handleLogout"
          >
            Logout
          </v-btn>
        </v-card>
    </v-container>
</template>
<script setup>

import { ref, onMounted } from "vue";
import {fetchUtilisateur} from "@/services/utilisateur.service";
import { useRoute } from 'vue-router';
import { useUserStore } from "@/stores/user";
import router from "@/router";

let utilisateur = ref({})

const route = useRoute();
const userId = route.params.id;
const userStore = useUserStore();


const handleLogout = () => {
  userStore.logout();
  router.push("/login");
};

onMounted(() => {
  fetchUtilisateur(userId).then((data)=>{
      utilisateur.value = data;
    }

  );
});



</script>
<style>
#profile-card {
    margin-top: 100px;
}
</style>
