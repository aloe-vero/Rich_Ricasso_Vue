<template>
  <v-container id="products-list">
    <v-card-text>
      <v-progress-linear v-if="loading" indeterminate></v-progress-linear>
      <v-row v-if="products.length > 0" dense>
        <v-col v-for="product in products" :key="product.id" cols="12" md="6" lg="4">
          <v-card outlined>
            <v-img :src="product.image" alt="Product Image" aspect-ratio="1.7" contain></v-img>
            <v-card-title>{{ product.name }}</v-card-title>
            <v-card-subtitle>Price: {{ product.prix }}€</v-card-subtitle>
            <v-card-text>
              <p>Color: {{ product.couleur }}</p>
              <p>Taille: {{ product.taille }}</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-card-text>
  </v-container>
</template>

<script>
import { fetchProducts } from '@/services/product.service';

export default {
  data() {
    return {
      products: [],
      loading: false,
      error: null,
    };
  },
  methods: {
    async loadProducts() {
      this.loading = true;
      this.error = null;
      try {
        const result = await fetchProducts();
        if (result.success) {
          this.products = result.products;
        } else {
          this.error = result.error || 'Failed to load products.';
        }
      } catch (error) {
        this.error = error.message || 'An unexpected error occurred.';
      } finally {
        this.loading = false;
      }
    },
  },
  mounted() {
    this.loadProducts();
  },
};
</script>


<style scoped>
#products-list {
  margin-top: 100px;
}
</style>
