<script setup>

</script>

<template>
  <v-expansion-panels id="filtre">
    <v-expansion-panel
      title="Filtre"
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
    ><v-expansion-panel-text>

    <div id="cbx-group">
        <v-combobox variant="outlined" density="compact" label="type"></v-combobox>
        <v-combobox variant="outlined" density="compact" label="couleur"></v-combobox>
        <v-combobox  variant="outlined" density="compact" label="taille"></v-combobox>
        <v-combobox  variant="outlined" density="compact" label="prix"></v-combobox>
      </div>
    </v-expansion-panel-text>
    </v-expansion-panel>

  </v-expansion-panels>
</template>

<style scoped>


#filtre{
  margin-top: 80px;
}

#cbx-group{
  display: flex;
}
</style>
