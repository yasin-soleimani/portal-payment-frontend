<template>
  <div class="itemCardNavbarChargeWallet">
    <v-card class="parent-card-charge mx-auto my-3 mx-3">
      <v-card-text>
        <div class="text-right my-2">
          <b class="color-text">شارژ کیف پول</b>
        </div>
        <hr />
        <div class="text--primary mt-3">
          <p class="font-size-text-charge-wallet">
            حداقل مبلغ شارژ<i class="primary--text">20,000</i> ریال و حداکثر
            مبلغ <i class="primary--text">500,000,000</i> میلیون ریال است.
          </p>
          <img
            class="photo-image-card-charge-wallet my-3"
            src="../assets/images/credit_card.svg"
            width="300"
            height="200"
            alt="photo-credet-card"
          />
        </div>
      </v-card-text>
      <v-text-field
        class="mt-4 mx-3"
        v-model="$v.amount.$model"
        outlined
        maxlength="9"
        label="مبلغ"
        type="number"
        :error-messages="amountError"
      >
      </v-text-field>
      <v-btn
        class="mx-auto mb-3"
        depressed
        large
        color="primary"
        :disabled="$v.$invalid"
      >
        شارز کیف پول
      </v-btn>
    </v-card>

    <div class="parent-image-charge-wallet">
      <img
        class="image-charge-wallet mx-5 my-5"
        src="../assets/images/cardCharge.svg"
        alt="photo-card-charge"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { validationMixin } from "vuelidate";
import { required, minLength, maxLength } from "vuelidate/lib/validators";
export default Vue.extend({
  name: "ChargeWallet",
  mixins: [validationMixin],

  validations: {
    amount: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(9),
    },
  },

  computed: {
    amount: {
      get(): string {
        return this.$store.state.panel.amount;
      },
      set(value: string): void {
        this.$store.dispatch("panel/setChargeWallet", value);
      },
    },
    amountError(): string[] {
      const errors: string[] = [];
      if (!this.$v.amount?.$dirty) {
        return errors;
      }
      !this.$v.amount.minLength &&
        errors.push("این فیلد حد اقل باید سه خرف باشد");
      !this.$v.amount.required && errors.push("تکمیل این فیلد الزامیست");
      !this.$v.amount.maxLength &&
        errors.push("این فیلد باید حداکثر نه حرف داشته باشد");
      return errors;
    },
  },
});
</script>

<style lang="scss" scoped>
.parent-card-charge {
  max-width: 90%;
  // min-width: 600px;
}

.itemCardNavbarChargeWallet {
  max-width: 90%;
  display: flex;
  margin: $margin-mx;
  max-height: 50%;
  justify-content: $justify-flex-start;
  flex-wrap: wrap;
  background: $background-item-panel;
  border-radius: $border-radius;
}

.font-size-text-charge-wallet {
  font-size: 16px;
  line-height: 30px;
  color: $color-text;
}

.photo-card-charge {
  width: 50%;
}
.photo-card-charge {
  width: 50%;
}

.color-text {
  color: $color-text;
}

.parent-image-charge-wallet {
  text-align: center;
}

.photo-image-card-charge-wallet {
  max-width: 90%;
  margin: $margin-mx;
}

.image-charge-wallet {
  max-width: 95%;
  margin: $margin-mx !important;
  margin-top: 10px !important;
}

/* //media query */
@media only screen and (max-width: 1500px) {
  .itemCardNavbarChargeWallet {
    display: flex;
    justify-content: flex-start;
  }
  .parent-card-charge {
    max-width: 90% !important;
  }
  .image-charge-wallet {
    max-width: 90% !important;
  }
}

@media only screen and (max-width: 777px) {
  .parent-card-charge {
    max-width: 200px;
    min-width: 30px !important;
  }

  .image-charge-wallet {
    width: 95%;
    margin: $margin-mx !important;
  }
}
</style>
