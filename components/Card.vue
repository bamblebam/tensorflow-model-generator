<template>
  <v-container>
    <v-card class="mx-auto my-12" max-width="700">
      <v-card-title>
        <v-row>
          <v-col cols="10">Layer : {{ this.layerData.name }}</v-col>
          <v-col cols="2" align-self="end"
            ><v-icon @click="method(index)">mdi-delete</v-icon></v-col
          >
        </v-row>
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col>Parameters</v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: ["layerData", "method", "index"],
};
</script>

<style></style>
