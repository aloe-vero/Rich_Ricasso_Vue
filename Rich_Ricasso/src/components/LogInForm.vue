<script setup>

</script>

<template>

  <v-sheet class="mx-auto login-sheet" width="300">
    <h1>Connexion</h1>
    <v-form @submit.prevent>
      <v-text-field
        v-model="firstName"
        :rules="rules"
        label="Email" density="compact" variant="outlined"
      ></v-text-field>
      <v-text-field
        v-model="firstName"
        :rules="rules"
        label="Password" density="compact" variant="outlined"
      ></v-text-field>
      <v-btn class="mt-2" type="submit" block>Submit</v-btn>
      <v-btn class="mt-2" to="/create">Create Account</v-btn>
    </v-form>
  </v-sheet>
</template>

<style scoped>
.login-sheet{
  margin-top: 200px;

}
</style>
