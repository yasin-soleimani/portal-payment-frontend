<template>
  <div class="item-charge-irancel">
    <v-card-text class="d-block">
      <b>لطفا نوع شارز را انتخاب کنید</b>
    </v-card-text>
    <div class="d-flex select-item-irancel justify-center">
      <div class="d-flex" v-for="item in ChargeIrancels" :key="item.typeOf">
        <v-card
          @click="selectItemIrancel(item)"
          :class="{ activeCard: item.active }"
          class="item-irancel my-3 mx-3"
          width="120"
        >
          <v-card-text>
            <div>
              <b class="item-title"> {{ item.typeOf }} </b>
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
interface ItemChargeIrancel {
  typeOf: string;
  active: boolean;
  rechargeCode: number;
  operator: number;
}

interface Data {
  ChargeIrancels: ItemChargeIrancel[];
}

enum RechargeCodeIrancel {
  normal = 20,
  special = 19,
  permanent = 0,
}
export default Vue.extend({
  name: "ChargeTypeIrancel",

  data(): Data {
    return {
      ChargeIrancels: [
        {
          typeOf: "معمولی",
          active: false,
          rechargeCode: RechargeCodeIrancel.normal,
          operator: 2,
        },
        {
          typeOf: "شگفت انگیز",
          active: false,
          rechargeCode: RechargeCodeIrancel.special,
          operator: 2,
        },
        {
          typeOf: "قبض داعمی",
          active: false,
          rechargeCode: RechargeCodeIrancel.permanent,
          operator: 2,
        },
      ],
    };
  },

  methods: {
    selectItemIrancel(item: any) {
      this.setItemIrancelActive(item);
      store.dispatch("panel/setOperatorCharge", item.operator);
      store.dispatch("panel/setRechargeCodeHamrah", item.rechargeCode);
    },
    setItemIrancelActive(item: any): void {
      this.setAllItemIrancelActive();
      const index = this.ChargeIrancels.findIndex(
        (el) => el.typeOf === item.typeOf
      );
      if (index > -1) {
        this.ChargeIrancels[index].active = true;
      }
    },

    setAllItemIrancelActive(): void {
      for (let i = 0; i < this.ChargeIrancels.length; i++) {
        this.ChargeIrancels[i].active = false;
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.activeCard {
  background: $background-active-panel;
  .item-title {
    color: white;
  }
}

//media

@media only screen and (max-width: 600px) {
  .select-item-irancel {
    overflow: auto;
    justify-content: flex-start !important;
  }

  .item-irancel {
    width: 235px !important;
  }
}
</style>
