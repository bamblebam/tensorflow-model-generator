<template>
  <v-container>
    <h1>My models:</h1>
    <v-card>
      <v-card-title>Project Name</v-card-title>
      <v-card-subtitle>Project date</v-card-subtitle>
      <v-btn @click="test">Test</v-btn>
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

<style></style>
