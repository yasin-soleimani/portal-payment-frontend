<template>
  <div class="d-flex my-5 mx-5">
    <v-card class="mx-auto" width="650">
      <v-card-text>
        <div class="title-bills">
          <b class="text-h6">قبض های من</b>
          <v-btn class="mb-3" large depressed primary>قبض های پرداخت شده</v-btn>
        </div>
        <hr />
        <v-btn class="my-3" :disabled="true" large depressed primary
          >پرداخت سریع!</v-btn
        >
        <v-list-item-title
          style="background: #ece6ff"
          class="mb-1 mt-5 primary--text py-3"
        >
          <b> شما هنوز قبضی را به لیست قبض‌های من اضافه نکرده‌اید. </b>
        </v-list-item-title>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "ListPaymentBills",
});
</script>
