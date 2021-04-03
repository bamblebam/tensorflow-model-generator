<template>
  <v-container>
    <h1>My models:</h1>
    <v-btn @click="load">Load </v-btn>
    <v-row v-for="(model, index) in models" :key="index">
      <v-col cols="12">
        <v-card>
          <v-card-title class="text">{{ model.model_name }}</v-card-title>
          <v-card-subtitle>Project date</v-card-subtitle>
          <v-btn class="text" @click="setModel(index)" v-bind:index="index"
            >Set Current</v-btn
          >
          <v-btn color="#ff7000">
            <v-text class="secText">Download model</v-text>
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import firebase from "firebase/app";
import "firebase/firestore";

export default {
  data() {
    return {
      models: []
    };
  },

  methods: {
    load() {
      firebase
        .firestore()
        .collection("users")
        .where("uid", "==", firebase.auth().currentUser.uid)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            doc.data().models.forEach(modelId => {
              firebase
                .firestore()
                .collection("models")
                .where("uid", "==", modelId)
                .get()
                .then(querySnapshot => {
                  querySnapshot.forEach(doc => {
                    // doc.data() is never undefined for query doc snapshots
                    this.models.push(doc.data());
                  });
                })
                .catch(error => {
                  console.log("Error getting documents: ", error);
                });
            });
          });
        });
      console.log(this.models);
    },
    setModel(index) {
      const model = this.models[index];
      console.log(model);
      this.$store.commit("addModel", model);
    }
  }

  // mounted:{
  //   models(){

  //   }
  // }
};
</script>

<style scoped>
.text {
  color: #ff7000;
}
.secText {
  color: white;
}
</style>
