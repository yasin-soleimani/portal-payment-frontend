<template>
  <div class="itemCardNavbarMain mt-5">
    <div class="MainPanel mt-12">
      <default-main-panel />
      <router-view class="mt-10" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
// import NavigationPanel from "@/components/NavigationPanel.vue";
import DefaultMainPanel from "@/components/DefaultMainPanel.vue";
import store from "@/store";

export default Vue.extend({
  name: "MainPanel",

  components: {
    // ListTransactions,
    // NavigationCard,
    // NavigationPanel,
    DefaultMainPanel,
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
  padding: 5px 0px;
}

.itemCardNavbarMain {
  max-width: 90%;
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
