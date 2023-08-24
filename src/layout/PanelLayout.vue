<template>
  <v-container fluid>
    <navigation-panel @showSidebar="toggleShowSidebar" />

    <div class="d-flex">
      <sidebar-panel v-if="showSidebar" />
      <slot />
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import SidebarPanel from "@/components/SidebarPanel.vue";
import NavigationPanel from "@/components/NavigationPanel.vue";
import store from "@/store";

// import { panelService } from "@/http/panel";
// import router from "@/router";
export default Vue.extend({
  name: "PanelLayoute",
  components: { SidebarPanel, NavigationPanel },

  created() {
    // router.push("ListTransactions");
    this.$store.dispatch("panel/getPanelService");
    this.$store.dispatch("panel/getInformation");
  },

  computed: {
    showSidebar() {
      return store.state.panel.sidebarSmall;
    },
  },
  methods: {
    toggleShowSidebar() {
      store.dispatch("panel/sidebarSmall");
    },
  },
});
</script>
