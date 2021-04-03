<template>
  <v-app>
    <v-row>
      <v-col cols="2">
        <v-navigation-drawer permanent expand-on-hover>
          <v-list>
            <v-list-item class="px-2">
              <v-list-item-avatar>
                <v-img
                  src="https://randomuser.me/api/portraits/men/37.jpg"
                ></v-img>
              </v-list-item-avatar>
            </v-list-item>

            <v-list-item link v-if="this.$store.state.user !== null">
              <v-list-item-content>
                <v-list-item-title class="title">{{
                  this.$store.state.user.username
                }}</v-list-item-title>
                <v-list-item-subtitle>{{
                  this.$store.state.user.email
                }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <v-divider></v-divider>

          <v-list nav dense>
            <v-list-item to="/">
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>
            <v-list-item v-if="this.$store.state.user !== null" to="/models">
              <v-list-item-icon>
                <v-icon>mdi-book</v-icon>
              </v-list-item-icon>
              <v-list-item-title>My models</v-list-item-title>
            </v-list-item>
            <v-list-item
              v-if="this.$store.state.user !== null"
              @click="signout"
            >
              <v-list-item-icon>
                <v-icon>mdi-exit-to-app</v-icon>
              </v-list-item-icon>
              <v-list-item-title v-if="this.$store.state.user !== null"
                >Logout</v-list-item-title
              >
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-col>
      <v-col cols="10">
        <v-main>
          <v-container>
            <v-slide-x-transition>
              <nuxt />
            </v-slide-x-transition>
          </v-container>
        </v-main>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      user: null,
    };
  },
  mounted() {
    this.user = this.$store.state.user;
  },
  methods: {
    signout() {
      this.$store.commit("logoutUser");
    },
  },
};
</script>
