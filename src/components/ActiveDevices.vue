<template>
  <div class="mx-auto">
    <h2>salam active device</h2>

    <div v-for="item in deviceInformation" :key="item.message">
      <information-active-device
        :text="item.text"
        :updatedAt="item.updatedAt"
        :device="item.device"
        :system="item.system"
        :id="item.id"
      />
    </div>
  </div>
</template>

<script lang="ts">
import store from "@/store";
import Vue from "vue";
import InformationActiveDevice from "@/components/InformationActiveDevice.vue";
export default Vue.extend({
  name: "ActiveDevices",
  data(): any {
    return {
      deviceInformation: [
        {
          text: "item text",
          updatedAt: "item updatedAt",
          device: "سیستم عامل",
          system: "item system",
          id: 1,
        },
        {
          text: "item text",
          updatedAt: "item updatedAt",
          device: "سیستم عامل",
          system: "item system",
          id: 1,
        },
      ],
    };
  },

  components: { InformationActiveDevice },

  created() {
    store.dispatch("panel/getDataList");
  },
});
</script>

<style lang="scss" scoped>
.parentInformationDevice {
  padding: 20px;
  border-radius: $border-radius;
  border: 1px solid teal;
  flex-wrap: wrap;
}
</style>
