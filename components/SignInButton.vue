<template>
  <v-btn @click="signInPopup" color="#ff7000">
    <v-icon color="white">
      mdi-google
    </v-icon>
    <!-- if user logged in
    <v-icon color="white">
      mdi-exit-to-app
    </v-icon> -->
  </v-btn>
</template>

<script>
export default {
  methods: {
    signInPopup: async function () {
      var user = null;
      var provider = new this.$firebase.auth.GoogleAuthProvider();
      this.$firebase
        .auth()
        .signInWithPopup(provider)
        .then((res) => {
          user = result.user;
          console.log(user);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
