<template>
  <div>
    <v-form
      @submit.prevent="submitFormCreateNewPassword"
      class="formCreateNewPassword px-5 pt-5 mb-5 rounded"
      max-width="400"
      color="primary"
    >
      <div>
        <div>
          <v-text-field
            outlined
            label="گذرواژه جدید"
            v-model.trim="$v.password.$model"
            :error-messages="passwordError"
            hide-details="auto"
            type="password"
          ></v-text-field>
        </div>
        <div>
          <v-text-field
            class="mt-4"
            outlined
            label="تکرار گذرواژه جدید"
            v-model.trim="$v.confirm.$model"
            :error-messages="confirmError"
            type="password"
          >
          </v-text-field>
        </div>
      </div>
      <!-- <div> -->
      <v-btn
        type="submit"
        block
        depressed
        large
        color="primary"
        class="mb-5"
        :disabled="$v.password.$invalid || $v.confirm.$invalid"
        :loading="loading"
        >تایید</v-btn
      >
      <!-- </div> -->
      <snackbar />
    </v-form>
  </div>
</template>

<script lang="ts">
import store from "@/store";
import Vue from "vue";
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";
import Snackbar from "@/components/Snackbar.vue";
export default Vue.extend({
  name: "CreateNewPasswordUser",
  mixins: [validationMixin],

  components: { Snackbar },

  computed: {
    password: {
      get(): string {
        return this.$store.state.auth.createNewPassword.password;
      },
      set(value: string): void {
        this.$store.dispatch("auth/createNewPassword", value);
      },
    },
    passwordError(): string[] {
      const errors: string[] = [];
      if (!this.$v.password?.$dirty) {
        return errors;
      }
      !this.$v.password.required && errors.push("تکمیل این فیلد الزامیست");
      !this.$v.password.minLength &&
        errors.push("پسورد شما باید حداقل  8 حرف باشد");

      return errors;
    },

    confirm: {
      get(): string {
        return this.$store.state.auth.createNewPassword.confirm;
      },

      set(value: string): void {
        this.$store.dispatch("auth/createNewPasswordConfirm", value);
      },
    },

    confirmError(): string[] {
      const errors: string[] = [];
      if (!this.$v.confirm?.$dirty) {
        return errors;
      }

      !this.$v.confirm.required && errors.push("تکمیل این فیلد الزامیست");
      !this.$v.confirm.minLength &&
        errors.push("گذرواژه شما باید حداقل 8 حرف باشد");

      return errors;
    },

    loading(): boolean {
      return store.state.app.loading;
    },
  },

  methods: {
    submitFormCreateNewPassword() {
      store.dispatch("app/updateLoading");
      if (this.password === this.confirm) {
        this.$store.dispatch("auth/postForgetNewPassword");
      } else {
        store.state.app.loading = false;
        // alert("پسورد و تکرار پسورد یکسان نمیباشد");
        store.state.panel.textSnackbar = "پسورد و تکرار پسورد یکسان نمیباشد";
        store.state.panel.showSnackbar = true;
        setTimeout(() => {
          store.state.panel.showSnackbar = false;
        }, 3000);
      }

      // this.password === this.confirm
      //   ? this.$store.dispatch("auth/createNewPassword", this.password)
      //   : alert("password and confirm is not ok");
    },
  },

  validations: {
    password: {
      required,
      minLength: minLength(8),
    },
    confirm: {
      required,
      minLength: minLength(8),
    },
  },
});
</script>

<style lang="scss">
.formCreateNewPassword {
  background: white;
  max-width: 400px;
  margin: $margin-mx;
  text-align: $text-center;
  margin-top: 300px;
  padding-bottom: 5px;
}
</style>
