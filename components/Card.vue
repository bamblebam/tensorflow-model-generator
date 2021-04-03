<template>
  <v-container>
    <v-card class="mx-auto" max-width="700" id="card">
      <v-card-title>
        <v-row>
          <v-col cols="8">Layer : {{ this.layerData.name }}</v-col>
          <v-col cols="2" align-self="end">
            <v-icon @click="method(index)" color="white">
              mdi-delete
            </v-icon>
          </v-col>
          <v-col cols="2" align-self="end">
            <v-icon @click="edit(index)" color="white">
              mdi-square-edit-outline
            </v-icon>
          </v-col>
        </v-row>
      </v-card-title>
      <v-card-text id="text">
        <v-item
          v-for="[key, value] in Object.entries(this.layerData.hyperparameter)"
          :key="key"
        >
          {{ key }} : {{ value }}</v-item
        >
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      hyperparameters: this.layerData.hyperparameters
    };
  },
  props: ["layerData", "method", "index", "edit"]
};
</script>

<style scoped>
#card {
  background: linear-gradient(to right, #ff7000 0%, #ff9000 100%);
  color: white;
}
#text {
  color: white;
}
</style>
