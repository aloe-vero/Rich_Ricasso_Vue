<template>
    <v-container>
        <v-card id="profile-card">
            <p>Prenom: {{ utilisateur.prenom }}</p>
            <p>Nom: {{ utilisateur.nom }}</p>
            <p>Email: {{ utilisateur.courriel }}</p>
            <v-card-actions>
                <v-btn>Change Password</v-btn>
            </v-card-actions>

        </v-card>
    </v-container>
</template>
<script setup>

import { ref, onMounted } from "vue";
import {fetchUtilisateur} from "@/services/utilisateur.service";


let utilisateur = ref({})

onMounted(() => {
  fetchUtilisateur(28).then((data)=>{
      console.log(data);
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
