<template>
  <div class="parent-my-store mt-15">
    <div class="parent-display-select-card d-flex">
      <div class="mx-2 mt-8 my-2">
        <v-card @click="selectStore" class="mx-auto" width="300" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <p class="text-h6 mb-1">تعریف فروشگاه</p>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </div>
      <div class="mx-2 mt-8 my-2">
        <v-card class="mx-auto" width="300" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <p class="text-h6 mb-1">گزارشات</p>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </div>
    </div>
    <div class="parent-item-list-store mt-5">
      <list-my-store />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ListMyStore from "@/components/ListMyStore.vue";
export default Vue.extend({
  name: "SelectStore",

  methods: {
    selectStore() {
      console.log("log select store");
      this.$router.push({ name: "CreateInformationMyStore" });
    },
  },

  components: { ListMyStore },
});
</script>

<style lang="scss" scoped>
.parent-my-store {
  margin: auto;
}

@media only screen and (max-width: 777px) {
  .parent-my-store {
    width: 90% !important;
    margin: auto;
  }

  .parent-display-select-card {
    display: block !important;
  }
}
</style>
