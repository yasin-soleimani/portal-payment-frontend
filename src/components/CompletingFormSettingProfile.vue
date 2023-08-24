<template>
  <div class="parent-compliting-form-setting-profile">
    <div>
      <div>
        <img
          class="style-images-setting-profile"
          :src="avatar"
          alt="photo-person"
          width="150"
          height="150"
        />
      </div>
      <div>
        <h2>{{ fullname }}</h2>
      </div>

      <div>
        <v-list-item-title
          class="
            text-adress
            px-2
            mb-1
            mx-2
            mt-4
            pink
            lighten-4
            primary--text
            py-3
          "
        >
          لینک ثبت نام با کد معرف شما:
        </v-list-item-title>
        <v-list-item-title
          class="
            text-adress
            px-2
            mb-1
            mx-2
            mt-4
            mb-4
            pink
            lighten-4
            primary--text
            py-3
          "
        >
          لینک ثبت نام با کد معرف شما (مخصوص باشگاه مشتریان):
        </v-list-item-title>
      </div>
      <hr class="mx-2" />

      <div class="parent-filed-information-user d-flex mx-2 mt-0">
        <v-card class="item-card mx-auto" max-width="344" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-subtitle class="mb-1">کد ملی</v-list-item-subtitle>
              <v-list-item-title>
                {{ nationalcode }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
        <v-card class="item-card mx-auto" max-width="344" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-subtitle class="mb-1"
                >تاریخ تولد</v-list-item-subtitle
              >
              <v-list-item-title>
                {{ birthdate }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
        <v-card class="item-card mx-auto" max-width="344" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-subtitle class="mb-1">محل تولد</v-list-item-subtitle>
              <v-list-item-title> {{ place }} </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
        <v-card class="item-card mx-auto" max-width="344" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-subtitle class="mb-1">موبایل</v-list-item-subtitle>
              <v-list-item-title> 0{{ mobile }} </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </div>
    </div>
    <div>
      <div class="parent-style-input d-flex">
        <v-text-field
          outlined
          class="styleInputLogin mt-4 mx-2"
          label="تلفن ثابت"
          hide-details="auto"
        >
        </v-text-field>
        <v-text-field
          outlined
          class="styleInputLogin mt-4 mx-2"
          label="ایمیل"
          hide-details="auto"
        >
        </v-text-field>
      </div>
      <div class="parent-style-input d-flex">
        <v-text-field
          outlined
          class="styleInputLogin mt-4 mx-2"
          label="استان"
          hide-details="auto"
        >
        </v-text-field>
        <v-text-field
          outlined
          class="styleInputLogin mt-4 mx-2"
          label="شهر"
          hide-details="auto"
        >
        </v-text-field>
        <v-text-field
          outlined
          class="styleInputLogin mt-4 mx-2"
          label="کد پستی"
          hide-details="auto"
          :value="zipcode"
        >
        </v-text-field>
      </div>

      <div>
        <v-list-item-title
          class="
            text-adress
            px-2
            mb-1
            mx-2
            mt-4
            pink
            lighten-4
            primary--text
            py-3
          "
        >
          کارت اعتباری شما به آدرسی که در ذیل ارائه میکنید ارسال خواهد شد. لذا
          در وارد کردن آدرس صحیح دقت فرمایید.
        </v-list-item-title>
      </div>

      <div class="parent-style-input d-flex">
        <v-text-field
          outlined
          class="styleInputLogin mt-4 mx-2"
          label="آدرس"
          hide-details="auto"
        >
        </v-text-field>
      </div>
      <div class="parent-style-input d-flex">
        <v-text-field
          outlined
          class="styleInputLogin mt-4 mx-2"
          label="درباره من"
          hide-details="auto"
        >
        </v-text-field>
        <v-text-field
          outlined
          class="styleInputLogin mt-4 mx-2"
          label="وب سایت من"
          hide-details="auto"
        >
        </v-text-field>
      </div>
    </div>
    <hr class="mt-4" />
    <div class="my-4 mx-2 text-right">
      <v-btn class="primary" large depressed>اعمال ویرایش</v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import store from "@/store";
import Vue from "vue";
export default Vue.extend({
  name: "CompletingFormSettingProfile",

  computed: {
    avatar() {
      const img: string = store.state.panel.userInformation.avatar;
      return img ? img : require("../assets/images/profile-user.svg");
    },
    fullname() {
      return store.state.panel.dataProfile.fullname;
    },
    mobile() {
      return store.state.panel.dataProfile.mobile;
    },
    place() {
      return store.state.panel.dataProfile.place;
    },
    birthdate() {
      return store.state.panel.dataProfile.birthdate;
    },
    nationalcode() {
      return store.state.panel.dataProfile.nationalcode;
    },
    zipcode() {
      return store.state.panel.dataProfile.zipcode;
    },
  },

  created() {
    console.log("avatar", this.avatar);
  },
});
</script>

<style lang="scss" scoped>
.parent-compliting-form-setting-profile {
  max-width: 60%;
  min-width: 60%;
  margin: $margin-mx;
}
.style-images-setting-profile {
  border-radius: 80px;
  border: 1px solid white;
}

.text-adress {
  border-radius: $border-radius;
}

.item-card {
  border: none;
}

@media only screen and (max-width: 500px) {
  .parent-compliting-form-setting-profile {
    max-width: 100% !important;
    min-width: 95% !important;
    margin: $margin-mx;
  }

  .parent-style-input {
    display: block !important;
  }

  .parent-filed-information-user {
    flex-wrap: wrap !important;
  }
}
</style>
