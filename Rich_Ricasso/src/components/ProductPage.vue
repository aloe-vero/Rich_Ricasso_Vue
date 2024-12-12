<template>
    <v-container id="product-container">
        <v-row>
            <v-col>
                <v-row>
                    <v-col v-for="n in 4" :key="n" class="d-flex child-flex" cols="6">
                        <v-img
                            :src="produit.image" aspect-ratio="1"
                            class="bg-grey-lighten-2" cover>
                            <template v-slot:placeholder>
                                <v-row align="center" class="fill-height ma-0" justify="center">
                                    <v-progress-circular color="grey-lighten-5" indeterminate></v-progress-circular>
                                </v-row>
                            </template>
                        </v-img>
                    </v-col>
                </v-row>


            </v-col>
            <v-divider :thickness="6" vertical></v-divider>
            <v-col id="product-details">
                <v-container>
                    <h1>{{produit.nom}}</h1>
                    <p>{{produit.description}}</p>
                    <p>{{produit.prix}}$</p>
                <v-btn-toggle>
                  <v-btn
                    v-for="taille in tailleArray" :key="taille"
                  >{{ taille }}
                  </v-btn>
                </v-btn-toggle>
                  <v-btn>Ajouter</v-btn>


                </v-container>

            </v-col>
        </v-row>

        <v-container>




        </v-container>
    </v-container>
</template>


<script setup>
import { ref, onMounted } from "vue";
import {fetchProduit} from "@/services/product.service";
import { useRoute } from 'vue-router'

const route = useRoute()
let produit = ref({});


onMounted(() => {
  fetchProduit(route.params.id).then((data)=>{
      console.log(data);
      produit.value = data;
    }

  );

});


const tailleArray = computed(() => {

  return produit.value.taille
    ? produit.value.taille.split(',')
    : [];
});
</script>

<style scoped>
#product-container {
    margin-top: 100px;
}
</style>
