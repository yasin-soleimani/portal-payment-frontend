<template>
  <div class="parentNavbar p-relative primary" width="100">
    <div class="d-flex mx-auto text-center justify-center">
      <ul @click="clickShowSidebar" class="p-absolute-btn parent-li-btn">
        <li id="li-btn-1" class="li-btn"></li>
        <li id="li-btn-2" class="li-btn"></li>
        <li id="li-btn-3" class="li-btn"></li>
      </ul>
    </div>
    <div class="d-flex">
      <i class="p-absolute-icon fas fa-user-alt fa-2x"></i>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "NavbarPanel",

  computed: {
    sidebar() {
      return this.$store.state.panel.showSidebar;
    },
  },
});
</script>

<style lang="scss">
.parentNavbar {
  padding: 0;
  margin: 0;
  margin-top: 0px;
}

.p-relative {
  position: relative;
}

.p-absolute-icon {
  position: absolute;
  top: 5px;
  left: 10px;
}

.p-absolute-btn {
  position: absolute;
  top: 0;
  right: 0;
}

.li-btn {
  background: black;
  list-style: none;
  width: 50px;
  height: 5px;
  margin: 10px 10px 10px 0px;
}
</style>
