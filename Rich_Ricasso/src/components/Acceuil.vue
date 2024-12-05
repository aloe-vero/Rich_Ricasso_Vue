<template>
    <ParallaxBackground :image-src="imageSrc" height="90vh">
        <v-container>

            <AboutRich />
        </v-container>

    </ParallaxBackground>

    <Showcase />

</template>

<script setup>
import InfolettrePopUp from './InfolettrePopUp.vue';
import Produits from './Produits.vue';
import ParallaxBackground from "./ParallaxBackground.vue";
import HelloWorld from './HelloWorld.vue';
import Carousel from './Carousel.vue';
import Showcase from './Showcase.vue';
const imageSrc = '/src/assets/bg_img.jpeg';
</script>

<style>
.parallax-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100%;
}
</style>
