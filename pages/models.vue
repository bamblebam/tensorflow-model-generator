<template>
  <v-container>
    <h1>My models:</h1>
    <v-card>
      <v-card-title class="text">Project Name</v-card-title>
      <v-card-subtitle>Project date</v-card-subtitle>
      <v-btn class="text" @click="test">Discard model</v-btn>
      <v-btn color="#ff7000" @click="test">
        <v-text class="secText">Download model</v-text>
      </v-btn>
    </v-card>
  </v-container>
</template>

<script>
import firebase from "firebase";

export default {
  methods: {
    test() {
      console.log(firebase.auth().currentUser);
    }
  }
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
