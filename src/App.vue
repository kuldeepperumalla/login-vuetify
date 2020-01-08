<template>
  <v-app>
    <login />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import login from "./components/login.vue";
import '../src/assets/index.css';

export default Vue.extend({
  name: "App",

  components: {
    login
  },

  data: () => ({
    //
  })
});
</script>
