<template>
  <div class="parent-display-card d-flex">
    <v-card
      @click="getDataJsonBank"
      class="card-management rounded-lg text-right mt-5 mx-3"
      outlined
    >
      <div class="parent-circle-card-1"></div>
      <div class="parent-circle-card-2"></div>
      <div class="parent-circle-card-3"></div>
      <div class="parent-circle-card-4"></div>
      <div class="parent-circle-card-6"></div>

      <v-list-item three-line>
        <v-list-item-content>
          <div class="d-flex">
            <v-list-item-title class="mx-2 mt-3 text-right white--text mb-1">
              کارت جدید
            </v-list-item-title>
            <img
              class="photo-logo-card-bank mx-2 my-2 white--text"
              src="../assets/bank/bank/ic_bank_resalat.png"
              alt="logo-bank"
              width="50"
              height="50"
            />
          </div>

          <div class="mt-10">
            <div class="white--text mt-5 mx-6">
              <div dir="ltr" class="text-left text-h5 d-flex">
                <p class="text-left px-3">{{ cardNumber.slice(0, 4) }}</p>
                <p class="text-left px-3">{{ cardNumber.slice(4, 8) }}</p>
                <p class="text-left px-3">{{ cardNumber.slice(8, 12) }}</p>
                <p class="text-left px-3">{{ cardNumber.slice(12, 16) }}</p>
              </div>
            </div>

            <div class="parent-text-fullname text-left">
              <h4 class="white--text">
                {{ fullname }}
              </h4>
            </div>
          </div>
        </v-list-item-content>
      </v-list-item>
    </v-card>

    <div class="mt-8 mx-10">
      <dialog-create-new-card-bank />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import DialogCreateNewCardBank from "@/components/DialogCreateNewCardBank.vue";
import store from "@/store";
export default Vue.extend({
  name: "ListCardManagement",

  components: { DialogCreateNewCardBank },

  computed: {
    cardNumber(): string {
      return store.state.panel.cards.cardno.toString();
    },

    fullname(): string {
      return store.state.panel.cards.cardownerfullname;
    },
  },

  methods: {
    printDataCards(): void {
      console.log(store.state.panel.cards);
    },

    // getDataJsonBank(): void {
    //   var data: string = require("../assets/json/bank.json");
    //   console.log("click get data json bank", data);
    //   fetch("../src/assets/json/banks.json")
    //     .then((response) => response.json())
    //     .then((json) => console.log(json));
    // },
  },
});
</script>

<style lang="scss" scoped>
.card-management {
  max-width: 366px;
  height: 220px;
  background: $background-active-panel;
  color: white !important;
  overflow: hidden;
}

.parent-circle-card-1 {
  width: 500px;
  height: 300px;
  position: absolute;
  top: -30px;
  right: 30px;
  border: 2px solid #4444;
  border-radius: 500px;
  display: none;
  margin: auto;

  text-align: center;
}

.parent-circle-card-2 {
  width: 500px;
  height: 300px;
  position: absolute;
  top: -30px;
  right: 10px;
  border: 2px solid #4444;
  border-radius: 500px;
  margin: auto;
  text-align: center;
}

.parent-circle-card-3 {
  width: 500px;
  height: 300px;
  position: absolute;
  top: 0px;
  right: 100px;
  border: 2px solid #4444;
  border-radius: 500px;
  margin: auto;
  text-align: center;
}

.parent-circle-card-4 {
  width: 500px;
  height: 300px;
  position: absolute;
  top: -80px;
  right: 220px;
  border: 2px solid #4444;
  border-radius: 500px;
  margin: auto;
  display: none;
  text-align: center;
}

.parent-circle-card-6 {
  width: 500px;
  height: 300px;
  position: absolute;
  top: 50px;
  right: 200px;
  border: 2px solid #4444;
  border-radius: 500px;
  margin: auto;
  text-align: center;
}

.parent-text-fullname {
  position: absolute;
  top: 160px;
  left: 30px;
}

@media only screen and (max-width: 777px) {
  .parent-display-card {
    display: block !important;
  }

  .card-management {
    max-width: 90% !important;
    height: 220px;
    margin: auto !important;
    background: $background-active-panel;
    color: white !important;
    overflow: hidden;
  }
}

.photo-logo-card-bank {
  position: absolute;
  left: 15px;
}
</style>
