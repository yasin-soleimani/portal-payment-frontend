<template>
  <panel-layout>
    <div class="parent-qr mx-auto mt-10">
      <v-card class="parent-create-qr mx-auto mt-6" width="800" outlined>
        <v-icon class="mt-5" large aria-hidden="false"> fas fa-user </v-icon>

        <v-list-item three-line>
          <v-list-item-content>
            <div class="text-overline mb-4"></div>
            <p class="text-h5 mb-1">شما به این قسمت دسترسی ندارید</p>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </div>
  </panel-layout>
</template>

<script lang="ts">
import Vue from "vue";
import PanelLayout from "@/layout/PanelLayout.vue";
export default Vue.extend({
  components: { PanelLayout },
  name: "CreateQr",
});
</script>

<style lang="scss" scoped>
.parent-create-qr {
  background: $background-item-panel;
  color: $color-text;
  height: 90vh;
}

.text-h5 {
  color: $color-text;
}

@media only screen and (max-width: 777px) {
  .parent-create-qr {
    width: 90% !important;
    height: 50vh !important;
  }
}
</style>
