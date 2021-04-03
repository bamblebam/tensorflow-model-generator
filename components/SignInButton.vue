<template>
  <v-btn @click="signInPopup" color="#ff7000">
    <v-icon color="white"> mdi-account-plus</v-icon>
  </v-btn>
</template>

<script>
export default {
  methods: {
    signInPopup: async function() {
      var provider = new this.$firebase.auth.GoogleAuthProvider();
      this.$firebase
        .auth()
        .signInWithPopup(provider)
        .then(res => {
          var user = {
            username: res.user.displayName,
            email: res.user.email,
            uid: res.user.uid
          };
          this.$store.commit("addUser", user);
          console.log(res.user);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
