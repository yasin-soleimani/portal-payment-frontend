<template>
  <panel-layout>
    <router-view />
    <snackbar />
  </panel-layout>
</template>

<script lang="ts">
import Vue from "vue";
import PanelLayout from "@/layout/PanelLayout.vue";
import Snackbar from "@/components/Snackbar.vue";
export default Vue.extend({
  name: "Store",

  components: {
    PanelLayout,
    Snackbar,
  },
});
</script>

<style lang="scss" scoped>
.parent-my-store {
  margin: auto;
}
</style>
