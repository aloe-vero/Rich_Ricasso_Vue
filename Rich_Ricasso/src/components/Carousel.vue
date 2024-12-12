<template>
<v-card max-width="300">
    <v-carousel  height="300" show-arrows="hover" cycle hide-delimiter-background>
        <v-carousel-item v-for="produit in produits" :key="produit.id">
            <v-sheet  height="100%">
                  <v-img :src="produit.image"  alt="Produit Image" aspect-ratio="1" contain></v-img>
            </v-sheet>
        </v-carousel-item>
    </v-carousel>
</v-card>
</template>

<script setup >

import {onMounted, ref} from "vue";
import {fetchProduits} from "@/services/product.service";
const produits = ref([]);
onMounted(() => {
  fetchProduits().then((result) => {
    if (result.success) {
      produits.value = result.products;
    } else {
      console.error("Failed to fetch products:", result.error);
    }

  });
});


</script>
