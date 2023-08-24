<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="buttonDialogCreateCardBank primary--text"
          width="350"
          height="220"
          dark
          v-bind="attrs"
          v-on="on"
        >
          <div>
            <i class="primary--text mt-5 fas fa-plus fa-3x"></i>
            <p class="mt-3 text-h6">ثبت کارت جدید</p>
          </div>
        </v-btn>
      </template>
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>بستن</v-toolbar-title>
          <v-spacer></v-spacer>
          <!-- <v-toolbar-items>
            <v-btn class="text-h6" dark text @click="dialog = false">
              ‌‌‌‌‌ذخیره
            </v-btn>
          </v-toolbar-items> -->
        </v-toolbar>
        <v-list three-line subheader>
          <v-card class="card-management rounded-lg mx-auto mt-5 mx-3" outlined>
            <div class="parent-circle-card-1"></div>
            <div class="parent-circle-card-2"></div>
            <div class="parent-circle-card-3"></div>
            <div class="parent-circle-card-4"></div>
            <div class="parent-circle-card-6"></div>

            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title
                  class="mx-2 mt-3 text-right white--text mb-1"
                >
                  کارت جدید
                </v-list-item-title>

                <div class="mt-10">
                  <div dir="ltr" class="text-left white--text text-h5 d-flex">
                    <p class="text-left px-3">
                      {{ bankCardNumber.slice(0, 4) }}
                    </p>
                    <p class="text-left px-3">
                      {{ bankCardNumber.slice(4, 8) }}
                    </p>
                    <p class="text-left px-3">
                      {{ bankCardNumber.slice(8, 12) }}
                    </p>
                    <p class="text-left px-3">
                      {{ bankCardNumber.slice(12, 16) }}
                    </p>
                  </div>

                  <div v-if="aconnetMe" class="parent-text-fullname text-left">
                    <h4 class="white--text">
                      {{ fullName }}
                    </h4>
                  </div>
                  <div v-if="true" class="parent-text-fullname text-left">
                    <h4 class="white--text">
                      {{ setActiveFullname }}
                    </h4>
                  </div>
                </div>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-list>
        <v-divider></v-divider>
        <v-card
          class="parent-create-card mx-auto mt-5"
          max-width="500"
          outlined
        >
          <div class="mx-3 mb-1">
            <v-checkbox
              v-model="aconnetMe"
              :checked="true"
              label="صاحب کارت هستم"
              color="primary"
              value="primary"
              hide-details
              class="text-label"
            ></v-checkbox>
          </div>

          <div v-if="!aconnetMe" class="mx-3">
            <v-text-field
              v-model="setActiveFullname"
              class="text-lable mt-5"
              outlined
              label="نام و نام خانوادگی"
            >
            </v-text-field>

            <v-text-field
              class="text-lable mt-۲"
              outlined
              label="نسبت صاحب کارت"
            >
            </v-text-field>

            <v-list-item-title
              style="background: #ece6ff"
              class="mb-1 primary--text py-3"
            >
              در صورتی که فیلد فوق را خالی بگذارید، صاحب کارت تلقی خواهید شد.
            </v-list-item-title>
          </div>
          <div class="mx-3 my-5">
            <v-text-field
              class="text-lable mt-5"
              outlined
              maxlength="16"
              label="شماره ۱۶ رقمی کارت بانکی"
              v-model.trim="bankCardNumber"
            >
            </v-text-field>
          </div>

          <div class="mx-3 mb-5">
            <v-checkbox
              class="text-right"
              v-model="InterestedInHelping"
              label="علاقمند به کمک به سازمان‌های عام‌المنفعه هستم"
              v-on="aconnetMe"
              color="primary"
              value="primary"
              hide-details
            ></v-checkbox>
          </div>

          <v-divider class="mx-auto" inset></v-divider>

          <div class="my-3">
            <v-btn @click="changeNumberCard" color="primary" large
              >ثبت کارت</v-btn
            >
          </div>
        </v-card>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script lang="ts">
import store from "@/store";
import Vue from "vue";
export default Vue.extend({
  name: "DialogCreateNewCardBank",

  data(): any {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
      aconnetMe: true,
      InterestedInHelping: false,
    };
  },

  methods: {
    changeNumberCard() {
      const number: string = this.bankCardNumber;
      // number.slice(1.2);
      console.log("sumit change number card", number.slice(0, 4));
    },
  },

  computed: {
    fullName(): string {
      return store.state.panel.userInformation.fullname;
    },
    bankCardNumber: {
      get(): string {
        return store.state.panel.bankCardNumber;
      },
      set(value: string): void {
        store.dispatch("panel/updateBankCardNumber", value);
      },
    },

    setActiveFullname: {
      get(): string {
        return store.state.panel.setActiveFullname;
      },

      set(value: string): void {
        store.dispatch("panel/updateSetActiveFullname", value);
      },
    },
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

.buttonDialogCreateCardBank {
  background: white !important;
  border: 2px dashed #4444;
  box-shadow: none !important;
}

.parent-text-fullname {
  position: absolute;
  top: 160px;
  left: 30px;
}

@media only screen and (max-width: 777px) {
  .buttonDialogCreateCardBank {
    width: 100% !important;
    margin: auto !important;
    background: white !important;
    border: 2px dashed #4444;
    box-shadow: none !important;
  }

  .card-management {
    max-width: 90% !important;
    height: 220px;
    background: $background-active-panel;
    color: white !important;
    overflow: hidden;
  }

  .parent-create-card {
    max-width: 90% !important;
  }
}
</style>
