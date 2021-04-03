<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <v-row>
          <v-col cols="12">
            <v-item v-for="layerDat in layerData" :key="layerDat.name">
              <v-row>
                <Card v-bind:layerData="layerDat" />
              </v-row>
            </v-item>
          </v-col>
        </v-row>
        <v-row align="end">
          <v-flex justify="end">
            <v-icon>mdi-plus-thick</v-icon>
          </v-flex>
        </v-row>
      </v-col>
      <v-col cols="6">Code here</v-col>
    </v-row>
  </v-container>
</template>

<script>
import Card from "@/components/Card";
import data from "@/main.js";
export default {
  data() {
    return {
      layerData: data
    };
  },
  components: {
    Card
  },
  methods: {
    test() {
      console.log(this.layerData[0].name);
    }
  }
};
</script>
