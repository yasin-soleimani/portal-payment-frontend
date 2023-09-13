<template>
  <div class="parentSidebar">
    <img
      class="logo mt-10"
      src="../assets/images/profile-user.svg"
      alt="photo-logo-sidebar"
      width="100"
    />

    <div class="my-2">
      <h3>Full name</h3>
    </div>

    <!-- wallet information user -->

    <div class="d-flex justify-space-around">
      <div class="d-block py-2">
        <span>موجودی کیف پول</span>
        <br />
        <span>100,000 (ریال)</span>
      </div>
      <div class="d-block py-2">
        <span>اعتبار در فروشگاه</span>
        <br />
        <span>100,000 (ریال)</span>
      </div>
    </div>

    <!-- options profile sidebar (menu) -->

    <div class="mx-auto profile-sidebar-menu">
      <ul class="mx-auto parent-item-list-sidebar px-0">
        <li
          class="mx-auto profile-sidebar-item rounded-lg my-5 py-5"
          v-for="item of profileItemSidebar"
          :key="item"
        >
          <div class="d-flex">
            <v-icon class="mx-5">
              {{ item.icon }}
            </v-icon>
            <span>
              {{ item.text }}
            </span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "ProfilePanel",

  data(): any {
    return {
      profileItemSidebar: [
        {
          icon: "fas fa-user-cog",
          text: "ویرایش پروفایل",
          id: 1,
        },
        {
          icon: "fas fa-wallet",
          text: "شارژ شارژ کیف پول",
          id: 2,
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.parentSidebar {
  background-color: $background-item;
  color: $background-color;
  width: 350px;
  min-width: 350px;
  max-width: 350px;
  min-height: 90vh;
  max-height: 90vh;
  border-radius: $border-radius;
  transition: all 400ms ease;
  // height: 100vh;
}

// profile sidebar

.profile-sidebar-menu {
  min-width: 90%;
  max-width: 90%;
}

.parent-item-list-sidebar {
  list-style: none;
  max-width: 100%;
  min-width: 100%;
}

// item profile sidebar

.profile-sidebar-item {
  background-color: $background-color;
  color: $background-item;
  min-width: 100%;
  max-width: 100%;
  cursor: pointer;
}

//media

@media only screen and (max-width: 600px) {
  .parentSidebar {
    background: $background-item-panel;
    width: 80%;
    min-height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    // left: 0;
    bottom: 0;
    margin-top: 0px !important;
    padding-top: 5px !important;
    margin-right: 0px !important;
    transition: all 800ms ease;
    z-index: 999;
    // height: 100vh;
  }

  .buttonLargeSidebar {
    display: none;
  }

  .logo {
    display: none;
  }
}
</style>
