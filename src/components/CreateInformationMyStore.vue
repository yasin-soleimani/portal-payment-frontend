<template>
  <div class="parent-create-information-store mt-16">
    <v-card class="mx-auto mt-8" width="1200" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <p
            class="
              font-size-information-title-store
              text-right text-h6
              mb-1
              py-2
            "
          >
            ثبت مشخصات فروشگاه
            <v-divider class="mx-auto mt-3" inset></v-divider>
          </p>
          <v-divider class="mx-auto" inset></v-divider>
          <div>
            <v-switch
              class="text-title-button-select-store py-3"
              v-model="switch2"
              label="وبسایت فروشگاهی خودم را دارم"
            ></v-switch>
            <v-divider class="mx-auto" inset></v-divider>
          </div>
          <div v-if="switch2">
            <div class="parent-filed-child-form d-flex">
              <v-text-field
                outlined
                class="styleInputLogin mt-3 mx-2"
                label="نام فروشگاه"
                hide-details="auto"
              >
              </v-text-field>
              <v-text-field
                outlined
                class="styleInputLogin mt-3 mx-2"
                label="آدرس وبسایت فروشگاهی من"
                hide-details="auto"
              >
              </v-text-field>
            </div>
            <div>
              <v-textarea
                class="mt-4 mx-2"
                label="درباره فروشگاه"
                auto-grow
                outlined
                rows="1"
                row-height="15"
              ></v-textarea>
            </div>
          </div>
          <v-divider class="mx-auto" inset></v-divider>
          <div>
            <v-switch
              class="text-title-button-select-store py-3"
              v-model="switch1"
              label="می‌خواهم در کارت اعتباری ایرانیان فروشگاه بسازم"
            ></v-switch>
            <v-divider v-if="switch1" class="mx-auto" inset></v-divider>
          </div>
          <div style="width: 90%" v-if="switch1">
            <div class="parent-filed-child-form d-flex">
              <v-text-field
                outlined
                class="styleInputLogin mt-4 mx-2"
                label="نام فروشگاه"
                hide-details="auto"
              >
              </v-text-field>
              <v-text-field
                outlined
                class="styleInputLogin mt-4 mx-2"
                label="آی دی فروشگاه"
                hide-details="auto"
              >
              </v-text-field>
            </div>
            <div>
              <v-text-field
                outlined
                class="styleInputLogin my-4 mx-2"
                label="ایمیل"
                hide-details="auto"
              >
              </v-text-field>
            </div>
            <v-divider class="mx-auto" inset></v-divider>
            <div class="text-left">
              <v-btn
                class="my-3 mx-2 text-left error--text"
                large
                primary
                text
                outlined
                ><i class="fas fa-plus mx-2"></i> اضافه شماره جدید</v-btn
              >
            </div>
            <v-divider class="mx-auto" inset></v-divider>
            <div>
              <v-textarea
                class="mt-4 mx-2"
                label="درباره فروشگاه"
                auto-grow
                outlined
                rows="1"
                row-height="15"
              ></v-textarea>
              <v-textarea
                class="mx-2"
                label="توضیحات فروشگاه"
                auto-grow
                outlined
                rows="1"
                row-height="15"
              ></v-textarea>
            </div>
          </div>
          <div v-if="switch1 || switch2">
            <div
              class="
                parent-button-set-logo
                d-flex
                mx-auto
                text-center
                justify-center
                my-3
              "
            >
              <v-btn
                large
                class="
                  button-set-logo
                  deep-purple
                  darken-4
                  white--text
                  mx-5
                  my-3
                "
                >آپلود لوگو</v-btn
              >
              <v-btn large class="button-set-logo amber white--text my-3"
                >آپلود بنر فروشگاه (اختیاری)</v-btn
              >
            </div>
            <v-divider class="mx-auto" inset></v-divider>
            <div>
              <v-btn class="primary mt-2 mx-auto" large
                >ثبت مشخصات فروشگاه</v-btn
              >
            </div>
          </div>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "CreateInformationMyStore",

  data() {
    return {
      switch1: false,
      switch2: false,
    };
  },
});
</script>

<style lang="scss" scoped>
.parent-create-information-store {
  width: 70%;
  margin: auto;
}

.button-set-logo {
  width: 50%;
}

.text-title-button-select-store {
  text-align: right !important;
}

@media only screen and (max-width: 777px) {
  .parent-filed-child-form {
    display: block !important;
  }

  .font-size-information-title-store {
    font-size: 18px !important;
  }

  .parent-create-information-store {
    width: 90%;
    margin: auto;
  }

  .parent-button-set-logo {
    display: block !important;
  }

  .button-set-logo {
    width: 90%;
    margin: auto !important;
    margin-top: 10px !important;
  }
}
</style>
