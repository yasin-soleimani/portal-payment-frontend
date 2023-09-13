<template>
  <v-app>
    <dialog-exit />
    <router-view />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import DialogExit from "@/components/DialogExit.vue";
export default Vue.extend({
  name: "App",

  components: { DialogExit },

  created(): void {
    this.$vuetify.rtl = true;
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: $text-center;
  color: #2c3e50;
  background-color: $background-color;
}

.container {
  padding: 0 !important;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
