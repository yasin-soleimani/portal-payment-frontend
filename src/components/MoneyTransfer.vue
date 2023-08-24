<template>
  <div class="parentMoneyTransfer">
    <div class="display-parent-money-transfer d-flex">
      <v-card class="mx-auto mx-3 my-5" width="500" outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title class="text-h6 mb-1 mt-6">
              جستجو با شماره همراه
            </v-list-item-title>
            <!-- <v-list-item-subtitle
            >Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle -->
            <v-text-field
              class="mt-4"
              outlined
              label="شماره همراه"
              v-model.trim="$v.mobileCard.$model"
              :error-messages="mobileCardError"
              :disabled="!$v.cardNumber.$invalid"
            >
            </v-text-field>

            <v-text-field
              class="mt-4"
              outlined
              label="شماره کارت ۱۶ رقمی کارت اعتباری"
              v-model.trim="$v.cardNumber.$model"
              :error-messages="cardNumberError"
              :disabled="!$v.mobileCard.$invalid"
            >
            </v-text-field>

            <v-list-item-title
              style="background: #ece6ff"
              class="mb-1 primary--text py-3"
            >
              دقت داشته باشید تکمیل یکی از فیلد ها کافی است.
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <div class="mx-4" v-if="showFormMoneyTransfer === true">
          <div class="pb-5 font-weight-light">
            <p>اطلاعات شخص</p>
          </div>
          <div class="d-flex justify-space-between font-weight-light px-2">
            <p>نام و نام خانوادگی:</p>
            <p>{{ fullname }}</p>
          </div>
          <hr />
          <div class="d-flex justify-space-between font-weight-light px-2 mt-3">
            <p>شماره حساب:</p>
            <p>{{ accountNo }}</p>
          </div>
        </div>
      </v-card>
      <div v-if="showFormMoneyTransfer === false">
        <img
          class="image-money-transfer my-5 mx-5"
          src="../assets/images/undraw-transfer.svg"
          width="700"
          alt="undraw-transfer"
        />
      </div>
      <div>
        <user-money-transfer
          class="mx-5"
          v-if="showFormMoneyTransfer === true"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import UserMoneyTransfer from "@/components/UserMoneyTransfer.vue";
import { validationMixin } from "vuelidate";
import { required, minLength, maxLength } from "vuelidate/lib/validators";
import store from "@/store";

export default Vue.extend({
  name: "MoneyTransfer",
  mixins: [validationMixin],

  computed: {
    accountNo() {
      return store.state.panel.accountUserMoneyTransfer.accountNo;
    },

    fullname() {
      return store.state.panel.accountUserMoneyTransfer.fullname;
    },
    showFormMoneyTransfer() {
      return store.state.panel.showFormMoneyTransfer;
    },
    mobileCard: {
      get(): any {
        return store.state.panel.mobileCard;
      },
      set(value: string): void {
        store.dispatch("panel/setMobileCard", value);
      },
    },
    mobileCardError(): string[] {
      const errors: string[] = [];
      if (!this.$v.mobileCard?.$dirty) {
        return errors;
      }
      if (!this.$v.mobileCard.$invalid) {
        store.dispatch("panel/postDestinationinfo");
      }
      if (this.mobileCard.length < 11) {
        store.state.panel.showFormMoneyTransfer = false;
      }

      !this.$v.mobileCard.required && errors.push("تکمیل این فیلد الزامیست");
      !this.$v.mobileCard.minLength &&
        errors.push("این فیلد باید حد اقل یازده حرف داشته باشد");
      !this.$v.mobileCard.maxLength &&
        errors.push("این فیلد باید حداکثر یازده حرف داشته باشد");
      return errors;
    },

    cardNumber: {
      get(): any {
        return store.state.panel.cardNumber;
      },
      set(value: string): void {
        store.dispatch("panel/setCardNumber", value);
      },
    },

    cardNumberError(): string[] {
      const errors: string[] = [];
      if (!this.$v.cardNumber?.$dirty) {
        return errors;
      }
      if (!this.$v.cardNumber.$invalid) {
        store.dispatch("panel/postCardNumberDestinationinfo");
      }

      if (this.cardNumber.length < 16) {
        store.state.panel.showFormMoneyTransfer = false;
      }
      !this.$v.cardNumber.required && errors.push("تکمیل این فیلد الزامیست");
      !this.$v.cardNumber.minLength &&
        errors.push("این فیلد حداکثر باید شانزده حرف داشته باشد");
      !this.$v.cardNumber.maxLength &&
        errors.push("این فیلد باید حداکثر شانزده حرف داشته باشد");
      return errors;
    },
  },

  validations: {
    mobileCard: {
      required,
      minLength: minLength(11),
      maxLength: maxLength(11),
    },
    cardNumber: {
      required,
      minLength: minLength(16),
      maxLength: maxLength(16),
    },
  },

  components: { UserMoneyTransfer },
});
</script>

<style lang="scss" scoped>
.parentMoneyTransfer {
  max-width: 90%;
  margin: $margin-mx;
  max-height: 50%;
  justify-content: $justify-flex-start;
  flex-wrap: wrap;
  background: $background-item-panel;
  border-radius: $border-radius;
}

//media
@media only screen and (max-width: 777px) {
  .display-parent-money-transfer {
    display: block !important;
  }

  .image-money-transfer {
    width: 285px !important;
  }
}
</style>
