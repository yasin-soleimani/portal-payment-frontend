<template>
  <panel-layout>
    <div class="parent-card-management mx-auto mt-16">
      <list-card-management class="mt-3" />
    </div>
  </panel-layout>
</template>

<script lang="ts">
import Vue from "vue";
import PanelLayout from "@/layout/PanelLayout.vue";
import ListCardManagement from "@/components/ListCardManagement.vue";
import store from "@/store";
export default Vue.extend({
  name: "CardManagement",

  components: {
    PanelLayout,
    ListCardManagement,
  },

  created() {
    store.dispatch("panel/getDataCards");
    console.log("created component card management");
  },
});
</script>

<style lang="scss" scoped>
.parent-card-management {
  width: 80% !important;
}

@media only screen and (max-width: 777px) {
  .parent-card-management {
    width: 100% !important;
  }
}
</style>
