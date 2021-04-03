<template>
  <v-container>
    <v-row>
      <v-col cols="3">
        <v-text-field
          placeholder="Project Name"
          v-model="project_name"
        ></v-text-field>
      </v-col>
      <v-col v-if="this.$store.state.user === null" cols="9" align="end">
        <SignInButton />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <h2>Layers:</h2>

        <v-row>
          <v-col cols="12">
            <v-card class="overflow-y-auto" max-height="400">
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
                      v-bind:edit="editLayer"
                      v-bind:index="index"
                    />
                  </v-row>
                </v-item>
              </draggable>
            </v-card>
          </v-col>
        </v-row>

        <v-row align="center">
          <v-col>
            <v-btn class="mx-2" fab dark color="#ff7000" @click="dialog = true">
              <v-icon dark> mdi-plus </v-icon>
            </v-btn>
          </v-col>
          <v-col>
            <v-btn
              v-if="this.$store.state.user !== null"
              color="#ff9000"
              @click="saveModel"
            >
              <v-text class="savemodel">Save Model</v-text>
            </v-btn>
          </v-col>
          <v-col>
            <v-btn color="#ff9000" @click="saveModel">
              <v-text class="savemodel">Discard Model</v-text>
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
          <ul ref="copy_code" class="list-group">
            <v-row>
              <v-col cols="3"><h2>Code:</h2></v-col>
              <v-col cols="9" align="end">
                <v-btn class="icon" @click="copyToClipBoard">
                  <v-icon>mdi-clipboard-text-multiple-outline</v-icon>
                </v-btn>
              </v-col>
            </v-row>
            <li>model = Sequential([</li>
            <li
              class="list-group-item"
              v-for="(layer, index) in layer_state"
              :key="index"
            >
              {{ layerToPython(layer) }},
            </li>
            <li>])</li>
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
import { v4 as uuidv4 } from "uuid";

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
      edited: false,
      index: 0,
      project_name: "",
      user: null
    };
  },

  mounted() {
    var model = this.$store.state.model;
    this.user = this.$store.state.user;
    if (model) {
      this.layer_state = model.layers;
      this.project_name = model.model_name;
    }
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
      let keys = Object.keys(this.response_hyperparameter);
      console.log(keys);
      let keys2 = Object.keys(
        this.layersTemplate[this.layerName].hyperparameters
      );
      console.log(keys2);

      for (const key in keys2) {
        let name = keys2[key];
        console.log(name);

        if (keys.includes(name)) {
          continue;
        } else {
          console.log(
            this.layersTemplate[this.layerName].hyperparameters[name].value
          );
          this.response_hyperparameter[name] = this.layersTemplate[
            this.layerName
          ].hyperparameters[name].value;
        }
      }
      this.response = {
        name: this.layerName,
        hyperparameter: this.response_hyperparameter
      };

      if (!this.edited) {
        this.layer_state.push(this.response);
      } else {
        this.layer_state[this.index] = this.response;
        this.edited = false;
      }
      this.response = {};
      this.response_hyperparameter = {};
    },

    saveModel() {
      if (this.layer_state && this.$store.state.user) {
        var uid = uuidv4();
        var model_name = this.project_name;
        console.log(model_name);
        const userref = firebase
          .firestore()
          .collection("users")
          .doc(this.$store.state.user.uid);
        userref.get().then(doc => {
          if (!doc.exists) {
            userref.set({ models: [uid], ...this.$store.state.user });
          }
        });
        firebase
          .firestore()
          .collection("users")
          .doc(this.$store.state.user.uid)
          .update({
            models: firebase.firestore.FieldValue.arrayUnion(uid)
          });
        firebase
          .firestore()
          .collection("models")
          .doc(uid)
          .set({ uid, model_name, layers: this.layer_state });
      }
      this.response_hyperparameter = {};
      this.response = {};
      this.layer_state = [];
    },

    removeLayer(index) {
      this.$delete(this.layer_state, index);
    },

    discardModel() {
      this.response_hyperparameter = {};
      this.response = {};
      this.layer_state = [];
    },

    editLayer(index) {
      for (const hyper in this.layer_state[index].hyperparameter) {
        this.response_hyperparameter[hyper] = this.layer_state[
          index
        ].hyperparameter[hyper];
      }
      this.index = index;
      this.layerName = this.layer_state[index].name;
      this.dialog = true;
      this.edited = true;
    },

    copyToClipBoard() {
      try {
        this.$copyText(
          this.$refs.copy_code.innerText.substring(
            5,
            this.$refs.copy_code.innerText.length
          )
        );
        console.log(
          this.$refs.copy_code.innerText.substring(
            5,
            this.$refs.copy_code.innerText.length
          )
        );
      } catch (error) {
        console.log(error);
      }
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
  margin-top: 2.3rem;
  border: 1px solid #5e5d5c;
  padding-left: 5rem;
  padding: 1rem;
  box-shadow: 2px 1px rgb(177, 177, 177), 1px 2px rgb(197, 197, 197);
}
.savemodel {
  color: white;
}
</style>
