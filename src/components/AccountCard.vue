<template>
  <v-card class="itemCard mx-3 lighten-5 my-8">
    <v-card-text class="text-right">
      <div class="d-flex justify-space-between">
        <div class="pb-3 color-text">{{ title }}</div>
        <div class="text-left primary--text">
          <h4 class="mr-5">{{ value }} ریال</h4>
        </div>
      </div>
      <hr />
      <p class="pt-3 color-text" style="cursor: pointer">
        {{ text }}
        <v-icon class="mx-1" style="font-size: 15px">
          {{ icon }}
        </v-icon>
      </p>
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
  max-height: 110px;
  width: 330px;
}

.color-text {
  color: $color-text;
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
