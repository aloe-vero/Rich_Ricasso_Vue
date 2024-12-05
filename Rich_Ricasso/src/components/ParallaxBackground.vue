<template>
    <v-parallax :src="imageSrc" :height="height" class="parallax-background">
        <slot />
    </v-parallax>
</template>

<script>
export default {
    name: "ParallaxBackground",
    props: {
        imageSrc: {
            type: String,
            required: true, // The background image URL is required
        },
        height: {
            type: [String, Number],
            default: "100vh", // Default height is full screen
        },
    },
};
</script>

<style scoped>
.parallax-background {
    position: relative;
}
</style>
