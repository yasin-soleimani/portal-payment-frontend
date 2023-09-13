<template>
  <v-card class="itemCard mx-3 my-8" elevation="3">
    <v-card-text class="text-right">
      <div class="d-flex justify-space-between text-left">
        <span class="card-text-color font-weight-blod mt-1"
          >ریال پیمنت کارت</span
        >

        <img
          class="text-left"
          width="50px"
          height="50px"
          src="../assets/bank/bank/ic_bank_icc.png"
          alt="bank|_logo"
        />
      </div>
      <div>
        <span class="text-h5 card-number font-weight-light"
          >1412721310254326</span
        >
      </div>
      <div class="my-3">
        <span class="card-text-color font-weight-bold">
          محمد یاسین سلیمانی
        </span>
      </div>
      <div class="d-flex justify-space-between">
        <span class="card-text-color">cvv2: 5550</span>
        <span class="card-text-color">1408/05</span>
      </div>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "AccountCard",

  props: {
    title: {
      type: String,
      default: "title",
    },

    value: {
      type: Number,
      default: 0,
    },

    text: {
      type: String,
      default: "card",
    },

    icon: {
      type: String,
    },
  },
});
</script>

<style lang="scss" scoped>
.itemCard {
  max-height: 180px;
  min-height: 180px;
  width: 45%;
  border-radius: 18px;
  background-color: $background-color;
}

.color-text {
  color: $color-text;
}

.card-number {
  letter-spacing: 5px !important;
  color: $background-item;
}

.card-text-color {
  color: $background-item;
}

@media screen and (max-width: 1820px) {
  .itemCard {
    margin: 10px 10px 10px 10px !important;
  }
}

@media screen and (max-width: 1200px) {
  .itemCard {
    max-height: 110px;
    width: 230px;
  }
}
</style>
