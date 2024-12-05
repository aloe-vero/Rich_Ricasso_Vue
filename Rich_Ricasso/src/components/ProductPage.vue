<template>
    <v-container>

        <v-card> <v-img :width="200" :src="product.image"></v-img></v-card>




    </v-container>
</template>


<script setup>
import { ref, onMounted } from "vue";
import { fetchProduct } from "@/services/product.service.js";

const props = defineProps(["productID"])
let product = ref({});

onMounted(() => {
    fetchProduct(props.productID).then((data) => {
        console.log(data);
        product.value = data;
    })
});

</script>

<style></style>