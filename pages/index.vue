<template>
  <v-container>
    <v-row>
      <v-col cols="12" align="end">
        <SignInButton />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <v-row>
          <v-col cols="12">
            <h2>Layers:</h2>

            <draggable
              v-model="layer_state"
              group="people"
              @start="drag = true"
              @end="drag = false"
            >
              <v-item v-for="(layer, index) in layer_state" :key="index">
                <v-row no-gutters>
                  <Card
                    v-bind:layerData="layer"
                    v-bind:method="removeLayer"
                    v-bind:index="index"
                  />
                </v-row>
              </v-item>
            </draggable>
          </v-col>
        </v-row>

        <v-btn color="#ff7000" @click="dialog = true">
          <v-icon color="white">mdi-plus-thick</v-icon>
        </v-btn>

        <v-dialog overlay-color="#ff7000 " v-model="dialog" max-width="700">
          <v-card>
            <v-card-title class="headline"> Layer </v-card-title>

            <v-card-text>
              <v-combobox
                placeholder="Layer Name"
                v-model="layerName"
                :items="layerNames"
              >
              </v-combobox>
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
                  <v-select
                    v-if="hyperparameter.form.type === 'dropdown'"
                    v-model="response_hyperparameter[hyperparameter.name]"
                    :items="hyperparameter.form.options"
                  ></v-select>
                  <v-text-field
                    v-else
                    label="value"
                    :type="hyperparameter.form.type"
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
      <v-col cols="6">
        <v-container>
          <h1>Code:</h1>
          <ul class="list-group">
            <li
              class="list-group-item"
              v-for="(layer, index) in layer_state"
              :key="index"
            >
              {{ layerToPython(layer) }},
            </li>
          </ul>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Card from "@/components/Card";
import SignInButton from "@/components/SignInButton";
import layers from "@/tensorflow_data/tensorflow_data";
import draggable from "vuedraggable";

export default {
  data() {
    return {
      dialog: false,
      layer_state: [],
      layersTemplate: layers,
      layerName: "Dense",
      layerNames: Object.keys(layers),
      response_hyperparameter: {},
      response: {}
    };
  },

  components: {
    Card,
    draggable,
    SignInButton
  },
  methods: {
    layerToPython(object) {
      console.log(object);
      var line = `${object.name}(`;
      for (let [key, value] of Object.entries(object.hyperparameter)) {
        line += key + " = " + value + ", ";
      }
      line = line.substring(0, line.length - 2);
      line += ")";
      return line;
    },

    test() {
      console.log(this.layersTemplate);
    },

    addLayer() {
      this.dialog = false;
      this.response = {
        name: this.layerName,
        hyperparameter: this.response_hyperparameter
      };
      this.layer_state.push(this.response);
      this.response = {};
      this.response_hyperparameter = {};
    },

    removeLayer(index) {
      this.$delete(this.layer_state, index);
    }
  }
};
</script>

<style scoped>
.list-group {
  list-style: none;
}
</style>
