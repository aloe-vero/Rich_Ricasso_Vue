<template>
  <v-container id="products-list">
    <v-card-text>
      <v-progress-linear v-if="loading" indeterminate></v-progress-linear>
      <v-row v-if="produits.length > 0" dense>
        <v-col v-for="produit in produits" :key="produit.id" cols="12" md="6" lg="4">
          <v-card outlined  :to="`/produits/${produit.id}`">
            <v-img :src="produit.image" alt="Produit Image" aspect-ratio="1.7" contain></v-img>
            <v-card-title>{{ produit.name }}</v-card-title>
            <v-card-subtitle>Price: {{ produit.prix }}$</v-card-subtitle>
            <v-card-text>
              <p>Color: {{ produit.couleur }}</p>
              <p>Taille: {{ produit.taille }}</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-card-text>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { fetchProduits } from '@/services/product.service';

const produits = ref([]);
const loading = ref(true);

onMounted(() => {
  fetchProduits().then((result) => {
    if (result.success) {
      produits.value = result.products;
    } else {
      console.error("Failed to fetch products:", result.error);
    }
    loading.value = false;
  });
});
</script>

<style scoped>
#products-list {
  margin-top: 10px;
}
</style>
