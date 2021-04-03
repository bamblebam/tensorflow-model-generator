<template>
  <ul class="list-group">
    <li class="list-group-item" v-for="layer in layers" :key="layer">
      {{ layer.name }}
    </li>
  </ul>
</template>

<script>
import Logo from "~/components/Logo.vue";
import VuetifyLogo from "~/components/VuetifyLogo.vue";
import layers from "~/tensorflow_data/tensorflow_data.js";

export default {
  data() {
    return {
      layers,
    };
  },
  components: {
    Logo,
    VuetifyLogo,
  },
};
</script>
