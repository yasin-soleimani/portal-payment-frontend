<template>
  <v-container fluid class="parent-background-portal">
    <slot />
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "AuthLayout",
});
</script>

<style lang="scss">
.parent-background-portal {
  all: unset;
  /* background-image: url("https://picsum.photos/1920/1080?random"); */
  background-color: #ffff;
  height: 100%;
  margin: 0;
  width: 1200px;
  padding: 0;
  box-sizing: border-box;
}
</style>
