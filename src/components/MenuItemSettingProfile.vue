<template>
  <div class="parent-item-list">
    <div class="text-right mx-2 mb-2">تنظیمات پروفایل کاربری</div>
    <hr />
    <div class="card-sidebar">
      <!-- <v-card class="mx-auto mx-2" height="500"> -->
      <v-navigation-drawer style="background: none">
        <v-list style="all: unset">
          <v-list-item
            :to="{ name: item.pathName }"
            class="item-list my-3"
            v-for="item in items"
            :key="item.message"
            link
          >
            <v-list-item-content>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item-content>

            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "MenuItemSettingProfile",

  data(): any {
    return {
      items: [
        {
          text: "پروفایل",
          icon: "fas fa-user-edit",
          id: 1,
          pathName: "CompletingFormSettingProfile",
        },
        {
          text: "حساب های بانکی",
          icon: "fas fa-pen-alt",
          id: 2,
          pathName: "BankAccounts",
        },
        {
          text: "نشست های فعال",
          icon: "fas fa-user-lock",
          id: 3,
          pathName: "ActiveDevices",
        },
        {
          text: "تغییر گذرواژه",
          icon: "fas fa-lock",
          id: 4,
          pathName: "ForgetPasswordSettingProfile",
        },
        {
          text: "لینک پروفایل مالی",
          icon: "fas fa-paperclip",
          id: 5,
          pathName: "FinancialProfileLink",
        },
        {
          text: "مدیریت دسترسی",
          icon: "fas fa-user-shield",
          id: 6,
          pathName: "BankAccounts",
        },
      ],
    };
  },
  methods: {
    // changeSlide(item: any) {
    //   this.$router.push({ name: item.pathName });
    // },
  },
});
</script>

<style lang="scss" scoped>
.item-list {
  list-style: none;
  text-align: right;
  border-radius: $border-radius;
  color: $color-text;
  border: 1px solid #4444;

  &.v-list-item--active {
    background: $background-active-panel;
    color: white;
  }
}

.item-list:hover {
  color: white;
}

.card-sidebar > aside {
  margin: auto;
  width: 100%;
  transform: translateX(0) !important;
}

.card-sidebar > aside > .v-navigation-drawer--close {
  visibility: inherit;
}

.card-sidebar > .v-navigation-drawer--close {
  visibility: inherit;
}

@media only screen and (max-width: 777px) {
  .parent-item-list {
    margin: auto;
  }
}
</style>
