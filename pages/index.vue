<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <v-row>
          <v-col cols="12">
            <v-item v-for="(layer, index) in layer_state" :key="index">
              <v-row>
                <Card
                  v-bind:layerData="layer"
                  v-bind:method="removeLayer"
                  v-bind:index="index"
                />
              </v-row>
            </v-item>
          </v-col>
        </v-row>
        <v-btn @click="dialog = true">
          <v-icon>mdi-plus-thick</v-icon>
        </v-btn>
        <v-dialog v-model="dialog" max-width="320">
          <v-card>
            <v-card-title class="headline"> Layer name </v-card-title>

            <v-card-text>
              <v-combobox v-model="layerName" :items="layerNames"> </v-combobox>
            </v-card-text>
            <v-card-text>
              <v-row
                v-for="hyperparameter in this.layersTemplate[this.layerName]
                  .hyperparameters"
                :key="hyperparameter.name"
              >
                <v-col>
                  <v-card-text>
                    {{ hyperparameter.name }}
                  </v-card-text>
                </v-col>
                <v-col>
                  <v-text-field
                    label="value"
                    v-model="response_hyperparameter[hyperparameter.name]"
                    counter="50"
                    filled
                  />
                </v-col>
              </v-row>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn color="red darken-1" text @click="dialog = false">
                Cancel
              </v-btn>
              <v-btn color="green darken-1" text @click="addLayer">
                Add Layer
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
      <v-col cols="6">Code here</v-col>
    </v-row>
  </v-container>
</template>

<script>
import Card from "@/components/Card";
import layers from "@/tensorflow_data/tensorflow_data";

export default {
  data() {
    return {
      dialog: false,
      layer_state: [],
      layersTemplate: layers,
      layerName: "Dense",
      layerNames: Object.keys(layers),
      response_hyperparameter: {},
      response: {},
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

    addLayer() {
      this.response = {
        name: this.layerName,
        hyperparameter: this.response_hyperparameter,
      };
      console.log(this.response_hyperparameter);
      this.layer_state.push(this.response);
    },

    removeLayer(index) {
      this.$delete(this.layer_state, index);
    },
  },
};
</script>
