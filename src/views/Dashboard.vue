<template>
  <panel-layout>
    <Main-panel />
  </panel-layout>
</template>

<script lang="ts">
import Vue from "vue";
import PanelLayout from "@/layout/PanelLayout.vue";
import MainPanel from "@/components/MainPanel.vue";
export default Vue.extend({
  name: "Dashboard",
  components: {
    PanelLayout,
    MainPanel,
  },
});
</script>
