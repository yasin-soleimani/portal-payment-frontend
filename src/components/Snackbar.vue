<template>
  <div class="text-center">
    <v-snackbar color="white--text" v-model="snackbar" :timeout="timeout">
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
          بستن
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script lang="ts">
import store from "@/store";
import Vue from "vue";
export default Vue.extend({
  name: "Snackbar",

  data() {
    return {
      // snackbar: store.state.panel.showSnackbar,
      // text: store.state.panel.textSnackbar,
      timeout: 5000,
    };
  },

  computed: {
    snackbar(): boolean {
      return store.state.panel.showSnackbar;
    },

    text(): string {
      return store.state.panel.textSnackbar;
    },
  },
});
</script>
