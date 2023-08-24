<template>
  <div class="parent-link-payment mx-auto mt-10">
    <div>
      <v-card class="mx-auto" width="700">
        <v-card-text>
          <div>
            <div>
              <b class="text-h6">لینک اختصاصی پروفایل مالی شما</b>
              <v-btn depressed>تنظیمات لینک ها</v-btn>
            </div>
          </div>
          <hr class="my-3" />

          <div>
            <div class="text-right text--primary">صفحه لینک های شما :</div>
            <div class="parent-link-page mt-3 py-3">
              <a class="primary--text text-h6" :href="link">
                https://link.iccard.ir/link/{{ account }}
              </a>
            </div>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn class="mx-auto mb-3 primary" large depressed> کپی لینک </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script lang="ts">
import store from "@/store";
import Vue from "vue";
export default Vue.extend({
  name: "FinancialProfileLink",

  computed: {
    account(): number {
      return store.state.panel.userInformation.account_no;
    },

    link() {
      const account =
        "https://link.iccard.ir/link/" +
        store.state.panel.userInformation.account_no;
      return account;
    },
  },
});
</script>

<style lang="scss" scoped>
.parent-link-page {
  background: $background-item-panel;
  border-radius: $border-radius;
}

@media only screen and (max-width: 777px) {
  .parent-link-payment {
    width: 100%;
    margin: auto !important;
    margin-top: 20px !important;
  }

  .parent-link-page {
    padding: 0px 10px;
  }
}
</style>
