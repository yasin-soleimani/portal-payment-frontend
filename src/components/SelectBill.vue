<template>
  <div class="parent-pagar-facturas d-flex mx-auto">
    <div class="select-bill d-flex my-5 mx-2">
      <br />
      <hr />

      <div class="py-5" v-for="item in operator" :key="item.id">
        <v-card
          class="mx-2"
          width="165"
          @click="setSelectItemOperator(item)"
          :class="{ activeCard: item.active }"
          :disabled="item.active"
        >
          <div class="d-flex">
            <v-card-text class="d-flex">
              <div class="d-flex align-center">
                <div>
                  <div>
                    <b> {{ item.item }} </b>
                  </div>
                </div>
              </div>
            </v-card-text>
            <v-card-text class="d-flex">
              <div class="d-flex align-center">
                <div>
                  <div>
                    <img
                      :src="require('../assets/images/' + item.img)"
                      alt="photo-logo-ic-water"
                      width="40"
                    />
                  </div>
                </div>
              </div>
            </v-card-text>
          </div>
          <!-- <div>
                  <img
                    :src="require('../assets/images/' + item.img)"
                    alt="photo-logo-ic-water"
                    width="40"
                  />
                </div> -->
        </v-card>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import store from "@/store";
import Vue from "vue";
import { mapGetters } from "vuex";
interface ItemOperator {
  item: string;
  type: number;
  asSave: boolean;
  img: string;
}

interface Data {
  operator: ItemOperator[];
}
export default Vue.extend({
  name: "SelectBill",

  data(): Data {
    return {
      operator: [
        {
          item: "آب",
          img: "logo-ic_water.svg",
          type: 1,
          asSave: false,
        },
        {
          item: "برق",
          img: "logo-ic-electric.svg",
          type: 2,
          asSave: false,
        },
        {
          item: "گاز",
          img: "logo-ic-gas.svg",
          type: 3,
          asSave: false,
        },
        {
          item: "تلفن ثابت",
          img: "logo-ic-telephone.svg",
          type: 4,
          asSave: false,
        },
        {
          item: "همراه اول",
          img: "logo-ic-hamrah.svg",
          type: 51,
          asSave: false,
        },
        {
          item: "رایتل",
          img: "logo-ic-rightel.svg",
          type: 53,
          asSave: false,
        },
      ],
    };
  },
  methods: {
    setSelectItemOperator(item: ItemOperator) {
      this.selectItemActive(item);
      this.$emit("selectBill");
      store.dispatch("panel/setItemOperatorBill", item);
      console.log(item);
    },

    selectItemActive(item: ItemOperator): void {
      this.selAllItemActive();
      const index = this.operator.findIndex((el) => el.type === item.type);
      if (index > -1) {
        this.operator[index].active = true;
      }
    },

    selAllItemActive(): void {
      for (let i = 0; i < this.operator.length; i++) {
        this.operator[i].active = false;
      }
    },
  },

  computed: {
    //TODO:
    ...mapGetters("panel", {
      listOperatorPackage: "listOperatorPackage",
    }),
  },
});
</script>

<style lang="scss" scoped>
.parent-pagar-facturas {
  max-width: 90%;
  height: 50vh;
  background: $background-item-panel;
  margin: $margin-mx;
  border-radius: $border-radius;
  justify-content: space-around;
}

.select-bill {
  flex-wrap: wrap;
  max-height: 300px;
  justify-content: center;
}

.title-bills {
  display: flex;
  justify-content: space-between;
}

@media only screen and (max-width: 620px) {
  .parent-pagar-facturas {
    background: $background-item-panel;
    margin: $margin-mx;
    border-radius: $border-radius;
  }
  .select-bill {
    flex-wrap: nowrap;
    overflow: auto;
    justify-content: flex-start;
  }
}
</style>
