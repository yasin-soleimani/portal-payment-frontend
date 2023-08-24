<template>
  <v-row v-if="shoeDialogExit" justify="center">
    <v-dialog v-model="dialog" persistent max-width="380">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">
          Open Dialog
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="font-size-confirm text-h6">
          آیا تمایل به خروج از سیستم را دارید؟
        </v-card-title>

        <!-- <v-card-text
          >Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.</v-card-text
        > -->
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" outlined text @click="offShowDialog">
            انصراف
          </v-btn>
          <v-btn color="green darken-1" outlined text @click="logout">
            بله
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script lang="ts">
import store from "@/store";
import Vue from "vue";
export default Vue.extend({
  name: "DialogExit",

  data() {
    return {
      dialog: true,
    };
  },

  methods: {
    offShowDialog() {
      return store.dispatch("panel/updateOffShowConfirmExit");
    },

    logout() {
      this.$router.push({ name: "Login" });
      return store.dispatch("panel/updateOffShowConfirmExit");
    },
  },

  computed: {
    shoeDialogExit() {
      return store.state.panel.showConfirmExit;
    },
  },
});
</script>

<style lang="scss" scoped>
.font-size-confirm {
  font-size: 17px !important;
}

@media only screen and (max-width: 777px) {
  .font-size-confirm {
    font-size: 15px !important;
  }
}
</style>
