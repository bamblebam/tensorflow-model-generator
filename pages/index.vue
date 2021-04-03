<template>
  <v-container>
    <v-row>
      <v-col cols="3">
        <v-text-field
          placeholder="Project Name"
          v-model="projectName"
        ></v-text-field>
      </v-col>
      <v-col cols="9" align="end">
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
              group="layers"
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

        <v-row>
          <v-col>
            <v-btn color="#ff7000" @click="dialog = true">
              <v-icon color="white">mdi-plus-thick</v-icon>
            </v-btn>
          </v-col>
          <v-col>
            <v-btn @click="saveModel">
              Save Model
            </v-btn>
          </v-col>
        </v-row>

        <v-dialog v-model="dialog" max-width="700">
          <v-card>
            <v-card-title class="text"> Layer </v-card-title>

            <v-card-text>
              <v-combobox
                class="text"
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
                  <v-card-text class="text formText">
                    {{ hyperparameter.name }}
                  </v-card-text>
                </v-col>
                <v-col>
                  <v-select
                    class="text"
                    :label="hyperparameter.name"
                    v-if="hyperparameter.form.type === 'dropdown'"
                    v-model="response_hyperparameter[hyperparameter.name]"
                    :items="hyperparameter.form.options"
                    :value="hyperparameter.value"
                  ></v-select>
                  <v-text-field
                    class="text"
                    v-else
                    :label="hyperparameter.name"
                    background-color="white"
                    color="#ff7000"
                    :type="hyperparameter.form.type"
                    v-model="response_hyperparameter[hyperparameter.name]"
                    :value="hyperparameter.value"
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
          <ul class="list-group">
            <v-row>
              <v-col cols="3"><h2>Code:</h2></v-col>
              <v-col cols="9" align="end">
                <v-btn class="icon" @click="copyToClipBoard">
                  <v-icon>mdi-clipboard-text-multiple-outline</v-icon>
                </v-btn>
              </v-col>
            </v-row>
            <li
              class="list-group-item"
              v-for="(layer, index) in layer_state"
              :key="index"
            >
              {{ layerToPython(layer) }}
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
import firebase from "firebase/app";
import "firebase/firestore";
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

    saveModel() {
      if (this.layer_state) {
        firebase
          .firestore()
          .collection("models")
          .add({ ...this.layer_state });
      }
    },

    removeLayer(index) {
      this.$delete(this.layer_state, index);
    },
    copyToClipBoard() {
      console.log("copied");
    }
  }
};
</script>

<style scoped>
.list-group {
  list-style: none;
}

.text {
  color: #ff7000;
}

.formText {
  font-size: 1.2rem;
}

.icon {
  transform: scale(0.8);
}
.list-group {
  margin-top: 1rem;
  border: 1px solid #5e5d5c;
  padding-left: 5rem;
  padding: 1rem;
  box-shadow: 2px 1px rgb(177, 177, 177), 1px 2px rgb(197, 197, 197);
}
</style>
