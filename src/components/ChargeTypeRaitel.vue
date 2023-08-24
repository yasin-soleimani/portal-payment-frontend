<template>
  <div class="item-charge-irancel">
    <v-card-text class="d-block">
      <b>لطفا نوع شارز را انتخاب کنید</b>
    </v-card-text>
    <div class="d-flex select-item-rightel justify-center">
      <div class="d-flex" v-for="item in ChargeRightel" :key="item.typeOf">
        <v-card
          @click="selectItemRightel(item)"
          :class="{ activeCard: item.active }"
          class="item-rightel my-3 mx-3"
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
interface ItemChargeRightel {
  typeOf: string;
  active: boolean;
  operator: number;
  rechargeCode: number;
}

interface Data {
  ChargeRightel: ItemChargeRightel[];
}

enum RechargeCode {
  normal = 2,
  special = 3,
}
export default Vue.extend({
  name: "ChargeTypeRaitel",

  data(): Data {
    return {
      ChargeRightel: [
        {
          typeOf: "معمولی",
          active: false,
          rechargeCode: RechargeCode.normal,
          operator: 3,
        },
        {
          typeOf: "شور انگیز",
          active: false,
          rechargeCode: RechargeCode.special,
          operator: 3,
        },
      ],
    };
  },

  methods: {
    selectItemRightel(item: ItemChargeRightel): void {
      this.setItemRightelActive(item);
      store.dispatch("panel/setOperatorCharge", item.operator);
      store.dispatch("panel/setRechargeCodeHamrah", item.rechargeCode);
    },
    setItemRightelActive(item: ItemChargeRightel): void {
      this.setAllItemChargeRightelActive();
      const index = this.ChargeRightel.findIndex(
        (el) => el.typeOf === item.typeOf
      );
      if (index > -1) {
        this.ChargeRightel[index].active = true;
      }
    },
    setAllItemChargeRightelActive(): void {
      for (let i = 0; i < this.ChargeRightel.length; i++) {
        this.ChargeRightel[i].active = false;
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

@media only screen and (max-width: 600px) {
  .select-item-rightel {
    overflow: auto;
    justify-content: flex-start !important;
  }

  .item-rightel {
    width: 235px !important;
  }
}
</style>
