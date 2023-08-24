<template>
  <panel-layout>
    <div v-if="showModalInstant" class="parent-modal">
      <create-instant-account class="mt-16" />
    </div>
    <div class="itemCardNavbarMain mt-5">
      <div class="MainPanel mt-12">
        <div class="d-flex parentMainSettingProfile pt-5">
          <menu-item-setting-profile />
          <router-view />
        </div>
      </div>
    </div>
  </panel-layout>
</template>

<script lang="ts">
import PanelLayout from "@/layout/PanelLayout.vue";
import MenuItemSettingProfile from "@/components/MenuItemSettingProfile.vue";
import CreateInstantAccount from "@/components/CreateInstantAccount.vue";
import Vue from "vue";
import store from "@/store";
export default Vue.extend({
  name: "SettingProfile",
  components: {
    PanelLayout,
    MenuItemSettingProfile,
    CreateInstantAccount,
  },

  created() {
    store.dispatch("panel/getSettingProfile");
    this.$router.push({ name: "CompletingFormSettingProfile" });
  },

  computed: {
    showModalInstant(): boolean {
      return store.state.panel.showModalInstant;
    },
  },
});
</script>

<style lang="scss" scoped>
.parentMainSettingProfile {
  max-width: 90%;
  min-width: 70vw;
  flex-wrap: wrap;
  margin: $margin-mx;
  border-radius: $border-radius;
}

.parent-modal {
  background: whitesmoke;
  position: fixed;
  width: 100%;
  height: 100%;
  margin-top: 48px;
  z-index: 999;
}
</style>
