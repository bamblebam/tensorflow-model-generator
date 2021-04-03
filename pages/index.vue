<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <v-row>
          <v-col cols="12">
            <v-item v-for="(layer, index) in layersTemplate" :key="index">
              <v-row>
                <Card v-bind:layerData="layer" />
              </v-row>
            </v-item>
          </v-col>
        </v-row>
        <v-row align="end">
          <v-flex justify="end">
            <v-icon>mdi-plus-thick</v-icon>
          </v-flex>
        </v-row>
        <h1>Something</h1>
      </v-col>
      <v-col cols="6">Code here</v-col>
    </v-row>
    <v-btn @click="test">Click</v-btn>
  </v-container>
</template>

<script>
import Card from "@/components/Card";
import layers from "@/tensorflow_data/tensorflow_data";

export default {
  data() {
    return {
      layer_state: [],
      layersTemplate: layers,
    };
  },
  components: {
    Card,
  },
  methods: {
    layerToPython(object) {
      var line = `${object.name}(`;
      for (let [key, value] of Object.entries(object.hyperparameters)) {
        line += key + " = " + value.value + ",";
      }
      line = line.substring(0, line.length - 1);
      line += ")";
      return line;
    },
    test() {
      console.log(this.layersTemplate);
    },
  },
};
</script>
