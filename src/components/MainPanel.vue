<template>
  <div class="itemCardNavbarMain mt-1">
    <div class="MainPanel">
      <!-- <default-main-panel /> -->
      <router-view class="mt-0" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
// import NavigationPanel from "@/components/NavigationPanel.vue";
// import DefaultMainPanel from "@/components/DefaultMainPanel.vue";
import store from "@/store";

export default Vue.extend({
  name: "MainPanel",

  components: {
    // ListTransactions,
    // NavigationCard,
    // NavigationPanel,
    // DefaultMainPanel,
  },

  computed: {
    history() {
      return store.dispatch("panel/getHistory");
    },
  },

  created(): void {
    this.history;
  },
});
</script>

<style lang="scss" scpped>
.parentItemCardNavbarMain {
  overflow: hidden;
}

.itemCardNavbarMain {
  max-width: 100%;
  min-width: 60%;
  margin: $margin-mx;
  max-height: 50%;
  justify-content: $justify-center;
  flex-wrap: wrap;
}

.navbarMain {
  display: flex;
  flex-wrap: wrap;
  justify-content: $justify-center;
}
</style>
