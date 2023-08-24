<template>
  <div>
    <div class="parent-internet-package">
      <h2 class="pt-3">خرید بسته اینترنت</h2>
      <item-list-package-operator class="mt-3 px-3 py-2" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ItemListPackageOperator from "@/components/ItemListPackageOperator.vue";
export default Vue.extend({
  name: "BuyInternetPackage",

  components: { ItemListPackageOperator },

  created() {
    this.$store.dispatch("panel/getListInternetPackageAsServer");
  },
});
</script>

<style lang="scss" scoped>
.parent-internet-package {
  max-width: 90%;
  margin: $margin-mx;
  border-radius: $border-radius;
  height: 500px;
  background: $background-item-panel;
}
</style>
