<template>
  <panel-layout>
    <div class="mt-13 mx-auto">
      <v-card class="card-link-vitrin mx-auto mt-10" width="850" outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title class="text-right text-h6 mb-1 py-2">
              به روز رسانی فروشگاه ها
            </v-list-item-title>
            <hr />
            <p class="text-link-vitrin py-5 text-h5">
              لطفا جهت مشاهده فروشگاه ها به
              <a class="link-vitrin" href="https://vitrin.iccard.ir/"
                >ویترین کارت اعتباری ایرانیان</a
              >
              مراجعه کنید.
            </p>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </div>
  </panel-layout>
</template>

<script lang="ts">
import Vue from "vue";
import PanelLayout from "@/layout/PanelLayout.vue";
export default Vue.extend({
  name: "Stores",

  components: { PanelLayout },
});
</script>

<style lang="scss" scoped>
.text-h6 {
  color: $color-text;
}
.link-vitrin {
  text-decoration: none;
}

.text-link-vitrin {
  opacity: 80%;
  color: $color-text;
}

@media only screen and (max-width: 880px) {
  .card-link-vitrin {
    width: 500px !important;
  }

  .text-link-vitrin {
    line-height: 38px;
  }
}

@media only screen and (max-width: 530px) {
  .card-link-vitrin {
    width: 300px !important;
  }

  .text-link-vitrin {
    line-height: 45px;
    text-align: right !important;
    font-size: 22px !important;
  }
}
</style>
