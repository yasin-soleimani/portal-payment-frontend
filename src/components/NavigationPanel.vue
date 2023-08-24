<template>
  <div>
    <v-card>
      <v-app-bar
        flat
        dense
        app
        color="#f7f7f8"
        scroll-target="#scrolling-techniques-3"
        hide-off-scroll
        style="overflow: auto"
      >
        <v-btn tile icon @click="toggleShowSidebar">
          <v-icon> fa fa-bars</v-icon>
        </v-btn>

        <v-card class="text-center">
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                class="button-menu rounded-pill mx-2"
                width="10"
                v-bind="attrs"
                v-on="on"
                text
              >
                <img
                  class="style-image-photo-user"
                  :src="avatar"
                  alt="photo-card-user"
                  width="40"
                  height="40"
                />
              </v-btn>
            </template>
            <v-list>
              <v-list-item v-for="(item, index) in items" :key="index">
                <v-card
                  class="mx-auto"
                  max-width="344"
                  outlined
                  style="border: none"
                >
                  <v-list-item three-line>
                    <v-list-item-content>
                      <div class="text-overline mb-4">{{ clubName }}</div>
                      <v-list-item-title class="text-right text-h5 mb-4">
                        {{ fullName }}
                      </v-list-item-title>

                      <hr />
                      <v-list-item-subtitle class="primary--text mt-2 text-h6">
                        <div class="d-flex justify-space-between text-overline">
                          <p class="text-h6">شماره کارت :</p>
                          <p class="text-h6">
                            {{ cardNo }}
                          </p>
                        </div>
                      </v-list-item-subtitle>
                      <hr />
                      <v-list-item-subtitle class="primary--text mt-2 text-h6">
                        <div class="d-flex justify-space-between">
                          <v-btn @click="buttonExit" block depressed large
                            >خروج از حساب
                            <!-- <p></p> -->
                            <!-- <v-icon>fa fas-home</v-icon> -->
                          </v-btn>
                        </div>
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-card>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-card>
        <navigation-card
          v-for="item in navigationItems"
          :key="item.text"
          :text="item.text"
          :icon="item.icon"
          :path="item.path"
        />
      </v-app-bar>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import NavigationCard from "@/components/NavigationCard.vue";
import store from "@/store";
export default Vue.extend({
  name: "NavigationPanel",

  components: { NavigationCard },

  data(): any {
    return {
      items: [{ title: "" }],
      navigationItems: [
        { text: "خانه", icon: "fas fa-home", path: "ListTransactions" },
        { text: "شارژ کیف پول", icon: "fas fa-wallet", path: "ChargeWallet" },
        {
          text: "انتقال وجه",
          icon: "fas fa-arrow-left",
          path: "MoneyTransfer",
        },
        { text: "خرید شارژ", icon: "fas fa-sim-card", path: "ToBuyCredit" },
        {
          text: "خرید بسته اینترنت",
          icon: "fas fa-wifi",
          path: "BuyInternetPackage",
        },
        {
          text: "پرداخت قبوض",
          icon: "fas fa-file-invoice",
          path: "ListBill",
        },
        { text: "تولید کد QR", icon: "fas fa-qrcode ", path: "CreateQr" },
      ],
    };
  },

  computed: {
    avatar() {
      const img = store.state.panel.userInformation.avatar;
      return img ? img : require("../assets/images/profile-user.svg");
    },
    fullName() {
      return store.state.panel.userInformation.fullname;
    },

    clubName() {
      return store.state.panel.userInformation.clubname;
    },
    cardNo() {
      return store.state.panel.userInformation.cardno;
    },
  },

  methods: {
    toggleShowSidebar() {
      this.$store.dispatch("panel/showSidebar");
      this.$emit("showSidebar");
    },
    buttonExit() {
      store.dispatch("panel/updateShowConfirmExit");
      // const exit = !store.state.panel.showConfirmExit;
      // if (exit === true) {
      //   // localStorage.removeItem("user");
      // this.$router.push({ name: "Login" });
      // }
    },
  },
});
</script>

<style>
.button-menu {
  position: fixed;
  width: 50px;
  top: 5px;
  left: 10px;
}

.style-image-photo-user {
  border-radius: 40px;
}
</style>
