<template>
  <div>
    <div>
      <v-card-text class="d-block">
        <b class="text-title-select-operator"
          >لطفا یکی از اپراتور ها را انتخاب کنید</b
        >
      </v-card-text>
      <div class="overflow-select-operator d-flex justify-center">
        <div class="d-flex" v-for="item in operators" :key="item.id">
          <v-card
            @click="selectOperator(item)"
            :class="{ activeCard: item.active }"
            class="item-card-operator my-3 mx-3"
          >
            <v-card-text class="item-operator">
              <div>
                <b class="operator-title teal--text"> {{ item.title }} </b>
              </div>
            </v-card-text>
          </v-card>
        </div>

        <!-- <v-container id="dropdown-example-1">
          <v-overflow-btn
            class="my-2"
            :items="dropdown_font"
            v-model="select"
            @click="selectOperator(item)"
            menu-props="top"
            label="انتخاب نوع شارژ"
            hint="انتخاب اپراتور"
            target="#dropdown-example-1"
          ></v-overflow-btn>
        </v-container> -->
      </div>
    </div>

    <!-- <div>
      <v-container id="dropdown-example-1">
        <v-overflow-btn
          class="my-2"
          :items="dropdown_font"
          v-model="select"
          menu-props="top"
          label="انتخاب نوع شارژ"
          hint="انتخاب اپراتور"
          target="#dropdown-example-1"
        ></v-overflow-btn>
      </v-container>
    </div> -->
  </div>
</template>

<script lang="ts">
import { Operators } from "@/utils/types.util";
import Vue from "vue";

interface ListItem {
  title: string;
  img: string;
  id: Operators;
  active: boolean;
}

interface Data {
  select: string;
  operators: ListItem[];
  dropdown_font: string[];
}

export default Vue.extend({
  name: "SelectOperatorCharge",

  data(): Data {
    return {
      select: "",
      operators: [
        {
          title: "همراه اول",
          img: "log-ic-hamrah-aval.png",
          id: "mci",
          active: false,
        },
        {
          title: "ایرانسل",
          img: "logo-ic-irancell.png",
          id: "mtn",
          active: false,
        },
        {
          title: "رایتل",
          img: "logo-ic-rightel.png",
          id: "rightel",
          active: false,
        },
      ],
      dropdown_font: ["همراه اول", "ایرانسل", "رایتل"],
    };
  },

  methods: {
    sendSelectOperator(select: string) {
      console.log("select child", select);
      this.$emit("SendSelectOperator", this.select);
    },

    //TODO:
    selectOperator(item: ListItem) {
      this.setItemAsActive(item);
      this.$emit("SelectOperator", item.id);
      console.log(this.select);
    },
    setItemAsActive(item: ListItem): void {
      this.setAllItemsAsInactive();
      const index = this.operators.findIndex((el) => el.id === item.id);
      if (index > -1) {
        this.operators[index].active = true;
      }
    },
    setAllItemsAsInactive(): void {
      for (let i = 0; i < this.operators.length; i++) {
        this.operators[i].active = false;
      }
    },

    onChange(value: string): void {
      console.log("new button", value);
    },
  },
});
</script>

<style lang="scss" scoped>
.text-title-select-operator {
  color: $color-title;
}
.item-card-operator {
  width: 120px;
}
.v-card {
  &.activeCard {
    background: blueviolet;

    .item-operator {
      .operator-title {
        color: white !important;
      }
    }
  }
}

@media only screen and (max-width: 500px) {
  .overflow-select-operator {
    overflow: auto;
    justify-content: flex-start !important;
  }

  .item-card-operator {
    width: 235px;
  }
}
</style>
