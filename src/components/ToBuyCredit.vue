<template>
  <div class="parentItemCardCharge">
    <div class="item-card-charge">
      <!-- // -->
      <div class="select-operator d-flex">
        <div class="mx-3 mx-auto">
          <select-operator-charge
            @SendSelectOperato="myOperator"
            @SelectOperator="handleOperatorSelection"
          />
        </div>

        <!-- // -->
        <div>
          <div v-if="types === 'mci'">
            <charge-type-hamrah />
          </div>
          <div v-else-if="types === 'mtn'">
            <charge-type-irancel />
          </div>
          <div v-else-if="types === 'rightel'">
            <charge-type-raitel />
          </div>
        </div>
      </div>

      <amount-to-buy-charge />

      <child-form-to-buy-charge />
    </div>
    <!-- // -->
    <div class="mx-3">
      <div>
        <img
          @click="myOperator"
          class="image-card-buycharge mt-5"
          src="../assets/images/background-note-2.svg"
          width="500"
          height="400"
          alt="photo-card"
        />
      </div>
    </div>
    <!-- // -->
    <snackbar />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SelectOperatorCharge from "@/components/SelectOperatorCharge.vue";
import AmountToBuyCharge from "@/components/AmountToBuyCharge.vue";
import ChargeTypeIrancel from "@/components/ChargeTypeIrancel.vue";
import ChargeTypeHamrah from "@/components/ChargeTypeHamrah.vue";
import ChargeTypeRaitel from "@/components/ChargeTypeRaitel.vue";
import ChildFormToBuyCharge from "@/components/ChildFormToBuyCharge.vue";
import Snackbar from "@/components/Snackbar.vue";
import { Operators } from "@/utils/types.util";

interface ToBuyCreditData {
  types: Operators | "none";
  activeNone: boolean;
}

export default Vue.extend({
  components: {
    ChildFormToBuyCharge,
    SelectOperatorCharge,
    AmountToBuyCharge,
    ChargeTypeIrancel,
    ChargeTypeHamrah,
    ChargeTypeRaitel,
    Snackbar,
  },
  name: "ToBuyCredit",

  data(): ToBuyCreditData {
    return {
      types: "none",
      activeNone: true,
    };
  },

  methods: {
    myOperator(select: any) {
      console.log("select:", select);
    },
    handleOperatorSelection(id: Operators): void {
      this.types = id;
    },
  },
});
</script>

<style lang="scss" scoped>
.parentItemCardCharge {
  position: relative;
  overflow: hidden;
  max-width: 90%;
  display: flex;
  margin: $margin-mx;
  max-height: 50%;
  justify-content: space-around;
  flex-wrap: wrap;
  background: $background-item-panel;
  border-radius: $border-radius;
}

.item-card-charge {
  max-width: 90%;
  // margin: $margin-mx;
}

.itemSelectOprator {
  background: blue;
  color: white !important;
}

.image-card-buycharge {
  max-width: 90%;
}

//media

@media only screen and (max-width: 1285px) {
  .select-operator {
    display: block !important;
  }
}
</style>
