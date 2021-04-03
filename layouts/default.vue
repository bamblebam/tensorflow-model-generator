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

            <v-list-item link>
              <v-list-item-content>
                <v-list-item-title class="title">
                  Test user
                </v-list-item-title>
                <v-list-item-subtitle>test_user@gmail.com</v-list-item-subtitle>
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
            <v-list-item to="/models">
              <v-list-item-icon>
                <v-icon>mdi-book</v-icon>
              </v-list-item-icon>
              <v-list-item-title>My models</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-exit-to-app</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-col>
      <v-col cols="10">
        <v-main>
          <v-container>
            <nuxt />
          </v-container>
        </v-main>
      </v-col>
    </v-row>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#ff7000"
        fill-opacity="1"
        d="M0,192L24,160C48,128,96,64,144,85.3C192,107,240,213,288,256C336,299,384,277,432,277.3C480,277,528,299,576,288C624,277,672,235,720,224C768,213,816,235,864,229.3C912,224,960,192,1008,181.3C1056,171,1104,181,1152,197.3C1200,213,1248,235,1296,202.7C1344,171,1392,85,1416,42.7L1440,0L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
      ></path>
    </svg>
  </v-app>
</template>

<script>
export default {};
</script>
