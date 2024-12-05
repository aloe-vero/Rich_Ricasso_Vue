<template>
    <header class="app-header">
        <div class="icon-left">
            Ricasso
        </div>
        <nav class="tabs">
            <button class="tab"><router-link class="router-link" to="/">Acceuil</router-link></button>
            <button class="tab"><router-link class="router-link" to="/products">Produits</router-link></button>
        </nav>
        <div class="icon-right">
            <span class="material-icons">account_circle</span>
        </div>
    </header>
</template>

<script>
export default {
    name: "HeaderBar",
};
</script>

<style scoped>
/* Transparent header with purple tone */
.app-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgba(72, 193, 184, 0.7);
    height: fit-content;
    /* Purple with transparency */
    padding: 10px 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
    backdrop-filter: blur(10px);
    /* Adds a blur effect for a modern look */
}

.router-link {
    color: aliceblue;
    text-decoration: none;
}

/* Left and Right Icons */
.icon-left,
.icon-right {
    font-size: 24px;
    color: #fff;
    /* White icons for contrast */
}

/* Tabs styling */
.tabs {
    display: flex;
    gap: 15px;
}

.tab {
    background: none;
    border: none;
    font-size: 16px;
    cursor: pointer;
    color: #fff;
    padding: 5px 10px;
    transition: color 0.3s ease, border-bottom 0.3s ease;
}

.tab:hover {
    color: #ffccff;
    /* Lighter purple on hover */
    border-bottom: 2px double #fff;
}
</style>
