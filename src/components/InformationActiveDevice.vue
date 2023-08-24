<template>
  <div class="d-flex">
    <v-card class="mx-auto" width="1000" outlined>
      <div class="d-flex">
        <div>
          <div class="text-overline mb-4">item:{{ text }}</div>
          <div class="parent-item-device justify-center">
            <div>
              <p class="item-device mx-3 mb-1">device:{{ device }}</p>
            </div>
            <div>
              <p class="item-device mx-3 mb-1">device:{{ device }}</p>
            </div>
            <div>
              <p class="item-device mx-3 mb-1">device:{{ device }}</p>
            </div>
            <div>
              <p class="item-device mx-3 mb-1">device:{{ device }}</p>
            </div>
          </div>
        </div>
      </div>

      <v-card-actions>
        <v-btn outlined rounded text> id:{{ id }} </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "InformationActiveDevice",

  props: {
    text: String,
    updatedAt: String,
    device: String,
    system: String,
    id: Number,
  },
});
</script>

<style lang="scss" scoped>
.parent-item-device {
  width: 1000px;
  display: flex;
  background: green;
  flex-wrap: wrap;
}
.item-device {
  width: 220px;
  background: blue;
  color: white;
}
</style>
