<template>
  <header class="app-header">
    <div class="left-side">
      <v-img class="logo" src="@/assets/img/logov3.png" width="150"></v-img>

      <div class="tabs">
        <v-btn class="tab" variant="plain" :ripple="false" active-color="#800080" to="/">Acceuil</v-btn>
        <v-btn class="tab" variant="plain" :ripple="false" active-color="#800080" to="/produits">Produits</v-btn>
      </div>
    </div>
    <div class="icon-right">
      <v-btn class="tab" variant="plain" :ripple="false" active-color="#800080" to="/panier">Panier</v-btn>
      <v-btn
        v-if="!userStore.isLoggedIn"
        class="tab"
        variant="plain"
        :ripple="false"
        active-color="#800080"
        to="/login"
      >
        Log in
      </v-btn>
      <v-btn
        v-else
        class="tab"
        variant="plain"
        :ripple="false"
        active-color="#800080"
        :to="`/users/${userId}`"
      >
        Account
      </v-btn>
    </div>
  </header>
</template>

<script setup>
import { useUserStore } from '@/stores/user';
const userStore = useUserStore(); // Access the store
const userId = userStore.userId;

</script>
<style scoped>

.app-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #48c1b8;
  height: fit-content;

  padding: 10px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  backdrop-filter: blur(10px);

}
.logo{
  margin-left: 20px;
}
.left-side{
  display: flex;
  align-items: center;
}

.icon-right {
  font-size: 24px;
  color: #fff;

}


.tabs {
  display: flex;
  gap: 15px;
  padding-left: 40px;
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


</style>
