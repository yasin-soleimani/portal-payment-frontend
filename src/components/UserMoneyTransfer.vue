<template>
  <div class="parentUserMoneyFtansfer">
    <v-card class="mx-auto mx-3 my-5" width="860" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="text-h6 mb-1 mt-6">
            فرم انتقال وجه
          </v-list-item-title>
          <!-- <v-list-item-subtitle
            >Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle -->
          <v-text-field
            class="mt-4"
            outlined
            maxlength="9"
            label="
مبلغ (ریال)
"
          >
          </v-text-field>
          <v-text-field
            class="mt-4"
            outlined
            maxlength="9"
            label="
توضیحات
"
          >
          </v-text-field>
        </v-list-item-content>
      </v-list-item>

      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="text-h6 mb-1"> </v-list-item-title>

          <v-text-field
            class="mt-4"
            outlined
            maxlength="9"
            label="
پین کارت اعتباری
"
          >
          </v-text-field>
          <v-list-item-title
            style="background: #ece6ff"
            class="mb-1 primary--text py-3"
          >
            دقت داشته باشید که مبلغ، پس از انتقال، قابل استرداد نمی‌باشد.
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <div class="pb-3">
        <v-btn color="primary" depressed large> انتقال وجه </v-btn>
      </div>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "UserMoneyTransfer",
});
</script>

<style scoped>
.parentUserMoneyFtansfer {
  max-width: 90%;
}
</style>
