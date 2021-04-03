<template>
  <ul class="list-group">
    <li class="list-group-item" v-for="(layer, index) in layers" :key="index">
      {{ layerToPython(layer) }}
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
  methods: {
    layerToPython(object) {
      var line = `${object.name}(`;
      for (let [key, value] of Object.entries(object.hyperparameters)) {
        line += key + " = " + value.value + ",";
      }
      line = line.substring(0, line.length - 1);
      line += ")";
      return line;
    },
  },
};
</script>
