<template>
  <div class="parent-forget-password-setting-profile mx-auto">
    <div class="mt-10">
      <v-form
        @submit.prevent="submitForgetPasswordSettingProfile"
        class="parent-form-forget-setting-profile mx-5"
      >
        <v-card class="parentCardForgetPassword mx-auto" width="700">
          <h4 class="text-h5 pt-3">تغییر گذرواژه</h4>
          <div class="parentInputForgetPassword mx-5">
            <v-text-field
              class="mt-4"
              outlined
              label="گذرواژه فعلی"
              v-model="$v.password.$model"
              :error-messages="passwordErrors"
            >
            </v-text-field>
            <v-text-field
              class="mt-4"
              outlined
              label="گذرواژه جدید"
              v-model="$v.newPassword.$model"
              :error-messages="newPasswordErrors"
            >
            </v-text-field>
            <div class="mb-5">
              <v-btn
                class="mb-4"
                color="primary"
                type="submit"
                :disabled="$v.password.$invalid || $v.newPassword.$invalid"
                :loading="loading"
                depressed
                large
                >ارسال</v-btn
              >
            </div>
          </div>
        </v-card>
      </v-form>
    </div>
  </div>
</template>

<script lang="ts">
import store from "@/store";
import Vue from "vue";
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";
export default Vue.extend({
  name: "ForgetPasswordSettingProfile",
  mixins: [validationMixin],

  methods: {
    submitForgetPasswordSettingProfile() {
      store.dispatch("panel/postDataForgetPasswordSettingProfile");
      store.state.panel.forgetPasswordSettingProfile.isSubmiting = true;
      console.log("submit form forget password setting profile");
    },
  },

  computed: {
    password: {
      get(): string {
        return store.state.panel.forgetPasswordSettingProfile.password;
      },
      set(value: string): void {
        store.dispatch("panel/updatePasswordSettingProfile", value);
      },
    },

    passwordErrors(): string[] {
      const errors: string[] = [];
      if (!this.$v.password?.$dirty) {
        return errors;
      }
      !this.$v.password.required && errors.push("تکمیل این فیلد الزامیست");

      return errors;
    },
    newPassword: {
      get(): string {
        return store.state.panel.forgetPasswordSettingProfile.newPassword;
      },
      set(value: string): void {
        store.dispatch("panel/updateNewPasswordSettingProfile", value);
      },
    },
    newPasswordErrors(): string[] {
      const errors: string[] = [];
      if (!this.$v.newPassword?.$dirty) {
        return errors;
      }
      !this.$v.newPassword.required && errors.push("تکمیل این فیلد الزامیست");
      !this.$v.newPassword.minLength &&
        errors.push("این فیلد باید حداقل 8 حرف داشته باشد");
      return errors;
    },

    loading(): boolean {
      return store.state.panel.forgetPasswordSettingProfile.isSubmiting;
    },
  },

  validations: {
    password: {
      required,
    },
    newPassword: {
      required,
      minLength: minLength(8),
    },
  },
});
</script>

<style lang="scss" scoped>
.parentCardForgetPassword {
  margin: $margin-mx;
}
.parentInputForgetPassword {
  position: relative;
}

.iconMobile {
  position: absolute;
  top: 20px;
  left: 15px;
}

@media only screen and (max-width: 777px) {
  .parent-forget-password-setting-profile {
    width: 100% !important;
    margin: auto !important;
  }

  .parent-form-forget-setting-profile {
    width: 100% !important;
    margin: auto !important;
  }
}
</style>
