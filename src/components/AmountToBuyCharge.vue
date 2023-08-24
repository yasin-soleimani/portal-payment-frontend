<template>
  <div>
    <div>
      <v-card-text class="d-block">
        <b class="text-title-select-amount"
          >لطفا یکی از مبلغ ها را انتخاب کنید(ریال)</b
        >
      </v-card-text>
      <div class="d-flex select-amount-charge flex-wrap justify-center">
        <div class="d-flex" v-for="item in amounts" :key="item.messages">
          <v-card
            @click="selectAmountCharge(item)"
            :class="{ activeCard: item.active }"
            class="item-amount my-3 mx-3"
            width="120"
          >
            <v-card-text class="item-amounts">
              <div>
                <b class="amount-title"> {{ item.amount }} </b>
              </div>
            </v-card-text>
          </v-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

interface AmountsItem {
  amount: number;
  active: boolean;
}

interface Data {
  amounts: AmountsItem[];
}
export default Vue.extend({
  name: "AmountToBuyCharge",

  data(): Data {
    return {
      amounts: [
        { amount: 10000, active: false },
        { amount: 20000, active: false },
        { amount: 50000, active: false },
        { amount: 100000, active: false },
        { amount: 200000, active: false },
      ],
    };
  },

  methods: {
    selectAmountCharge(item: AmountsItem): void {
      this.$store.dispatch("panel/setAmountCharge", item.amount);
      this.setItemAmountActive(item);
    },

    setItemAmountActive(item: AmountsItem): void {
      this.setAllItemAmountActive();
      const index = this.amounts.findIndex((el) => el.amount === item.amount);
      if (index > -1) {
        this.amounts[index].active = true;
      }
    },

    setAllItemAmountActive(): void {
      for (let i = 0; i < this.amounts.length; i++) {
        this.amounts[i].active = false;
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.text-title-select-amount {
  color: $color-title;
}
.activeCard {
  background: blueviolet;

  .item-amounts {
    .amount-title {
      color: white !important;
    }
  }
}

//media

@media only screen and (max-width: 600px) {
  .select-amount-charge {
    overflow: auto;
    justify-content: flex-start !important;
    flex-wrap: nowrap !important;
  }

  .item-amount {
    width: 235px !important;
  }
}
</style>
