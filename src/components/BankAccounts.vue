<template>
  <div class="parent-compliting-form-setting-profile">
    <div>
      <v-card
        class="mx-auto text-right"
        style="background: none"
        max-width="1000"
      >
        <v-list-item-title class="text-h6 mx-3 py-3 mb-1">
          شرایط تسویه
        </v-list-item-title>
        <hr />
        <v-list style="background: none" two-line>
          <v-list-item-group
            v-model="selected"
            active-class="pink--text"
            multiple
          >
            <template v-for="(item, index) in items">
              <v-list-item :key="item.title">
                <template v-slot:default="{ active }">
                  <v-list-item-content>
                    <v-list-item-subtitle
                      v-text="item.subtitle"
                    ></v-list-item-subtitle>
                  </v-list-item-content>

                  <v-list-item-action>
                    <v-list-item-action-text
                      v-text="item.action"
                    ></v-list-item-action-text>

                    <v-icon v-if="!active" color="grey lighten-1">
                      mdi-star-outline
                    </v-icon>

                    <v-icon v-else color="yellow darken-3"> mdi-star </v-icon>
                  </v-list-item-action>
                </template>
              </v-list-item>

              <v-divider
                v-if="index < items.length - 1"
                :key="index"
              ></v-divider>
            </template>
          </v-list-item-group>
        </v-list>
      </v-card>
    </div>
    <div class="mt-5 text-center justify-center">
      <v-card class="text-center justify-center">
        <v-toolbar
          color="primary"
          class="text-center justify-space-around"
          tabs
          flat
        >
          <template class="kkk justify-center" v-slot:extension>
            <v-tabs class="kkk justify-center" v-model="tabs" align-with-title>
              <v-tab class="kkk justify-center white--text" href="#one">
                حساب شتابی - شاپرکی (شبا)
              </v-tab>
              <v-tab class="text-center white--text" href="#two">
                حساب آنی
              </v-tab>
            </v-tabs>
          </template>
        </v-toolbar>
        <v-card-text>
          <v-tabs-items v-model="tabs">
            <v-tab-item
              v-for="content in ['one', 'two']"
              :key="content"
              :value="content"
            >
            </v-tab-item>
          </v-tabs-items>
        </v-card-text>
        <v-fab-transition>
          <p
            class="mb-4 text-h6"
            :key="activeFab.icon"
            :color="activeFab.color"
          >
            موردی یافت نشد
          </p>
        </v-fab-transition>
        <v-row justify="center">
          <v-dialog v-model="dialog" persistent max-width="500">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                @click="getData"
                class="my-3"
                color="primary"
                dark
                v-bind="attrs"
                v-on="on"
              >
                {{ activeFab.icon }}
              </v-btn>
            </template>
            <v-card class="mx-auto" width="600" outlined>
              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-title class="text-h6 text-right mb-1 mt-4">
                    اضافه کردن شبای جدید
                  </v-list-item-title>
                  <p
                    class="
                      text-alert-user
                      rounded
                      primary
                      py-3
                      px-5
                      pink
                      lighten-4
                      primary--text
                      my-4
                    "
                  >
                    لطفا شماره شبای خود را با دقت وارد کنید . کارت اعتباری
                    ایرانیان مسئولیتی در قبال خطاهای حاصله از وارد کردن شماره
                    شبای اشتباه برعهده ندارد.
                  </p>

                  <hr />
                  <v-text-field class="mt-4" outlined label="شماره شبا">
                  </v-text-field>
                </v-list-item-content>
              </v-list-item>

              <v-card-actions>
                <v-btn
                  color="green darken-1"
                  outlined
                  text
                  @click="dialog = false"
                >
                  انصراف
                </v-btn>
                <v-btn color="green darken-1" outlined text disabled>
                  ثبت
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-row>
      </v-card>
    </div>
  </div>
</template>

<script lang="ts">
import store from "@/store";
import Vue from "vue";
export default Vue.extend({
  name: "BankAccounts",

  data(): any {
    return {
      selected: [2],
      items: [
        {
          subtitle:
            "زمان تسویه حساب از ساعت ۷ صبح تا ۱۵/۳۰ دقیقه همان روز است.",
        },
        {
          subtitle: "حداکثر تعداد تسویه در هر روز حداکثر 3 مرتبه است.",
        },
        {
          subtitle:
            "بین هر دو درخواست تسویه متوالی باید حداقل ۳ ساعت فاصله زمانی وجود داشته باشد.",
        },
        {
          subtitle:
            "حداکثر مبلغ قابل درخواست در هر بار تسویه، حداکثر 30,000,000 ریال است.",
        },
        {
          subtitle:
            "تسویه شتابی - شاپرکی (شبا) در روزهای تعطیل غیر فعال می‌باشد.",
          title: "Britta Holt",
        },
        {
          subtitle:
            "درآمد حاصل از فروش درگاه‌های اینترنتی پس از ۲۴ ساعت قابل برداشت خواهد بود.",
        },
      ],

      fab: false,
      hidden: false,
      tabs: null,
      dialog: false,
      //
    };
  },

  methods: {
    getData() {
      console.log("click in btn get data");
      // console.log(store.state.panel.accountBanks.banks[0]);
      // store.state.panel.showModalInstant = true;
    },
  },

  computed: {
    activeFab() {
      switch (this.tabs) {
        case "one":
          return { color: "white", icon: "اضافه کردن شبا" };
        case "two":
          return { color: "white", icon: "اضافه کردن حساب آنی" };
        default:
          return {};
      }
    },
  },

  created() {
    console.log("my acoount banks");
    store.dispatch("panel/getDataAcoountBanks");
  },
});
</script>

<style lang="scss" scoped>
.text-h6 {
  color: $color-text;
}

.parent-compliting-form-setting-profile {
  max-width: 100%;
  min-width: 60%;
  margin: $margin-mx;
}

.kkk.v-slide-group__content {
  justify-content: space-evenly !important;
}

.text-alert-user {
  line-height: 25px;
  text-align: justify;
}
</style>
