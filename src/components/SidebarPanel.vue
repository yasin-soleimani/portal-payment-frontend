<template>
  <div
    class="parentSidebar"
    v-if="showSidebar"
    :class="{ parentSidebarShow: hideText }"
  >
    <img
      class="logo mt-10"
      src="../assets/logo-white.png"
      alt="photo-logo-sidebar"
      width="100"
    />

    <ul class="parent-item-list-sidebar pl-0 py-1">
      <li
        @click="buttonExit(item)"
        class="item-list-sidebar"
        v-for="(item, index) in itemSidebar"
        :key="index"
        :title="item.text"
      >
        <div
          :class="{ 'justify-center': hideText }"
          class="parentLiSidebar full-width mt-6 mx-3"
        >
          <v-icon class="icon-list-sidebar">
            {{ item.icon }}
          </v-icon>
          <p class="sidebar-text">
            {{ item.text }}
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import store from "@/store";
import Vue from "vue";

export default Vue.extend({
  name: "SidebarPanel",

  data(): any {
    return {
      itemSidebar: [
        {
          icon: "fas fa-home",
          text: "صفحه اصلی",
          id: 1,
          pathName: "ListTransactions",
        },
        {
          icon: "fas fa-user-cog",
          text: "خرید شارژ",
          id: 2,
          pathName: "CompletingFormSettingProfile",
        },
        {
          icon: "fas fa-store",
          text: "خرید اینترنت",
          id: 3,
          pathName: "SelectStore",
        },
        {
          icon: "fas fa-calendar-check",
          text: "پرداخت قبوض",
          id: 4,
          pathName: "",
        },
        {
          icon: "fas fa-calendar-alt",
          text: "خروج از حساب",
          id: 5,
          pathName: "",
        },
      ],
    };
  },

  computed: {
    showSidebar(): boolean {
      return store.state.panel.sidebarSmall;
    },
  },

  methods: {
    buttonExit(item: any) {
      this.$router.push({ name: item.pathName });
      if (this.$vuetify.breakpoint.smAndDown) {
        this.toggleShowSidebar();
      }
    },

    toggleShowSidebar() {
      store.dispatch("panel/sidebarSmall");
      console.log("toggle sidebar small:", store.state.panel.sidebarSmall);
    },
  },
});
</script>

<style lang="scss" scoped>
.parentSidebar {
  background-color: $background-item;
  color: $background-color;
  width: 200px;
  min-width: 200px;
  max-width: 240px;
  min-height: 90vh;
  max-height: 90vh;
  border-radius: $border-radius;
  transition: all 400ms ease;
  // height: 100vh;
}

.sidebar-small {
  display: none;
}

.parentLiSidebar {
  display: flex;
  justify-content: $justify-flex-start;
  align-items: baseline;
  overflow: hidden;

  > p {
    margin: 0 !important;
    margin-right: 8px !important;
    transition: all 400ms ease;
    white-space: nowrap;
    color: $color-text;
  }
}

.style-icon-button {
  color: $color-text;
}

.parentSidebarShow {
  &.parentSidebar {
    background: $background-item-panel;
    width: 150px !important;
    min-width: 150px !important;
    margin: 66px 30px 0px 0px;
    border-radius: $border-radius;
    transition: all 400ms ease;
  }
  .parentLiSidebar {
    display: flex;
    justify-content: $justify-center;
  }

  .buttonLargeSidebar {
    position: absolute;
    border-radius: 30px;
    background: $background-item-panel;
    width: 45px;
    height: 70px;
    text-align: $text-center;
    right: 155px;
    top: 445px;
    transition: all 400ms ease;
  }

  .icon-list-sidebar {
    text-align: $text-center;
    transition: 500ms all ease;
    font-size: 35px;
    line-height: 50px;
    color: $background-color;
    margin: $margin-mx;
  }
}

.item-list-sidebar {
  list-style: none;
  padding: 6px 10px;
  justify-content: $justify-flex-start;
  text-align: $text-center;
  line-height: 30px;
  cursor: pointer;
  font-size: 0.875rem;
  border-left: 4px solid transparent;
}

.icon-list-sidebar {
  text-align: $text-center;
  transition: 500ms all ease;
  color: $background-color;
}

.sidebar-text {
  color: $background-color;
}

.buttonLargeSidebar {
  position: absolute;
  border-radius: 30px;
  background: $background-item-panel;
  color: $color-text;
  width: 45px;
  height: 70px;
  text-align: $text-center;
  right: 238px;
  top: 445px;
  transition: all 400ms ease;
}

.parent-item-list-sidebar {
  list-style: none;
  max-width: 80%;
  margin: auto;
}

.hideTextSidebar {
  opacity: 0;
  display: none;
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

  .sidebar-small {
    display: block;
    position: absolute;
    top: 12px;
    // right: 38px;
    left: 25px;
  }

  .logo {
    display: none;
  }
}
</style>
