<template>
  <div class="fill-height">
    <v-btn
      class="item-navigation"
      :style="{ height: '100%' }"
      tile
      link
      text
      exact
      :to="{ name: path }"
    >
      {{ text }}
    </v-btn>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "NavigationCard",
  props: {
    text: {
      type: String,
      default: "card",
    },
    icon: {
      type: String,
      default: "fas fa-arrow-left",
    },
    path: {
      type: String,
      default: "/ListTransactions",
    },
  },
});
</script>

<style lang="scss" scoped>
.v-btn--active {
  border-bottom: 4px solid royalblue;
  color: royalblue;
  font-weight: 600;
  transition: all 200ms ease-in-out;

  &::before {
    opacity: 0;
  }
}

.item-navigation {
  color: $color-text;
}

.itemCard {
  margin-bottom: 1rem;
  max-width: 25%;
}

.p-absolute-icon {
  position: absolute;
  left: 5px;
  transition: 0.5s;
}

.p-absolute-icon-hover {
  position: absolute;
  opacity: 0;
  left: 5px;
  transition: 0.5s;
}

.card-text {
  transition: 0.5s;
}

.card-text:hover {
  background: whitesmoke;
  .p-absolute-icon {
    left: 25px;
  }
  .p-absolute-icon-hover {
    position: absolute;
    left: 0;
    opacity: 1;
  }
}

.p-relative {
  position: relative;
}
</style>
