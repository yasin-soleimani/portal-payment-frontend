<template>
  <div>
    <v-card
      fuiled
      class="mx-auto justify-center my-3 mx-3 rounded-lg"
      width="500"
    >
      <v-card-text class="d-block">
        <b
          >مبلغ شارژ: <span class="primary--text"> {{ amount }} </span></b
        >
      </v-card-text>
      <div>
        <v-text-field
          class="mt-4 mx-3"
          v-model="$v.mobile.$model"
          outlined
          maxlength="9"
          label="موبایل"
          type="number"
          :error-messages="amountWalletError"
        >
        </v-text-field>

        <v-btn
          @click="toBuyCharge"
          class="mx-auto mb-3"
          depressed
          large
          color="primary"
          :disabled="$v.$invalid"
          :loading="loading"
        >
          خرید شارژ
        </v-btn>
      </div>
    </v-card>
  </div>
</template>

<script lang="ts">
import store from "@/store";
import Vue from "vue";
import { validationMixin } from "vuelidate";
import { required, minLength, maxLength } from "vuelidate/lib/validators";
export default Vue.extend({
  name: "ChildFormToBuyCharge",
  mixins: [validationMixin],

  methods: {
    toBuyCharge() {
      store.dispatch("panel/postDataToBuyCharge");
      store.state.panel.isSubmitingToBuyCharge = true;
    },
  },

  validations: {
    mobile: {
      required,
      minLength: minLength(11),
      maxLength: maxLength(11),
    },
  },

  computed: {
    mobile: {
      get(): string {
        return this.$store.state.panel.dataReCharge.mobile;
      },
      set(value: string): void {
        this.$store.dispatch("panel/setMobileCharge", value);
      },
    },

    amountWalletError(): string[] {
      const errors: string[] = [];
      if (!this.$v.mobile?.$dirty) {
        return errors;
      }
      !this.$v.mobile.required && errors.push("تکمیل این فیلد الزامیست");
      !this.$v.mobile.minLength &&
        errors.push("این فیلد باید حداقل یازده حرف داشته باشد");
      !this.$v.mobile.maxLength &&
        errors.push("این فیلد حدکثر میتواند یازده حرف باشد");
      return errors;
    },
    amount(): number {
      return store.state.panel.dataReCharge.amount;
    },

    loading(): boolean {
      return store.state.panel.isSubmitingToBuyCharge;
    },
  },
});
</script>
