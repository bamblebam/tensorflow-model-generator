<template>
  <v-container>
    <v-card>
      <v-row>
        <v-col cols="10">Layer : {{ this.layerData.name }}</v-col>
        <v-col cols="2" align-self="end"><v-icon>mdi-delete</v-icon></v-col>
      </v-row>
      <v-row>
        <v-col>Parameters</v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: ["layerData"]
};
</script>

<style></style>
