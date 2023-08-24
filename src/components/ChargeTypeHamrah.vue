<template>
  <div class="item-charge-hamrah">
    <v-card-text class="d-block">
      <b>لطفا نوع شارز را انتخاب کنید</b>
    </v-card-text>
    <div class="d-flex select-charge-hamrah justify-center">
      <div class="d-flex" v-for="item in ChargeHamrahs" :key="item.typeOf">
        <v-card
          @click="selectTypeOperator(item)"
          :class="{ activeCard: item.active }"
          class="item-hamrah my-3 mx-3"
          width="120"
        >
          <v-card-text>
            <div>
              <b class="typeOf-title"> {{ item.typeOf }} </b>
            </div>
          </v-card-text>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import store from "@/store";
import Vue from "vue";

enum RechargeCodeHamrah {
  normal = 1002,
  young = 1004,
  woman = 1005,
}
interface TypeOperator {
  typeOf: string;
  active: boolean;
  rechargeCode: number;
  operator: number;
}

interface Data {
  ChargeHamrahs: TypeOperator[];
}
export default Vue.extend({
  name: "ChargeTypeHamrah",

  data(): Data {
    return {
      ChargeHamrahs: [
        {
          typeOf: "معمولی",
          active: false,
          rechargeCode: RechargeCodeHamrah.normal,
          operator: 1,
        },
        {
          typeOf: "بانوان",
          active: false,
          rechargeCode: RechargeCodeHamrah.woman,
          operator: 1,
        },
        {
          typeOf: "جوانان",
          active: false,
          rechargeCode: RechargeCodeHamrah.young,
          operator: 1,
        },
      ],
    };
  },

  methods: {
    selectTypeOperator(item: TypeOperator): void {
      this.setTypeOperatorActive(item);
      store.dispatch("panel/setOperatorCharge", item.operator);
      store.dispatch("panel/setRechargeCodeHamrah", item.rechargeCode);
    },
    setTypeOperatorActive(item: TypeOperator): void {
      this.setAllTypeOperatorActive();
      const index = this.ChargeHamrahs.findIndex(
        (el) => el.typeOf === item.typeOf
      );
      if (index > -1) {
        this.ChargeHamrahs[index].active = true;
      }
    },
    setAllTypeOperatorActive(): void {
      for (let i = 0; i < this.ChargeHamrahs.length; i++) {
        this.ChargeHamrahs[i].active = false;
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.activeCard {
  background: $background-active-panel;
  .typeOf-title {
    color: white;
  }
}

@media only screen and (max-width: 600px) {
  .select-charge-hamrah {
    overflow: auto;
    justify-content: flex-start !important;
  }

  .item-hamrah {
    width: 235px !important;
  }
}
</style>
