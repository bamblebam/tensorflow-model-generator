<template>
  <v-btn @click="signInPopup" color="#ff7000"
    ><v-icon color="white">mdi-google</v-icon></v-btn
  >
</template>

<script>
export default {
  methods: {
    signInPopup: async function() {
      var provider = new this.$firebase.auth.GoogleAuthProvider();
      const result = await this.$firebase.auth().signInWithPopup(provider);
      var user = result.user;
      console.log(user);
    }
  }
};
</script>
