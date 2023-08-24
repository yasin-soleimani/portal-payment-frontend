import { GetterTree } from "vuex";
import { RootState } from "..";
import { PanelState } from "./panel.module";

export const PANEL_GETTERS: GetterTree<PanelState, RootState> = {
  wallets: (state) => {
    return [
      {
        title: "کیف پول",
        text: "قابل برداشت",
        value: state.valueWalletUser.wallet,
      },
      {
        title: "اعتبار در فروشگاه",
        text: "جزییات اعتبار در فروشگاه",
        value: state.valueWalletUser.discount,
        icon: "fas fa-exclamation",
      },
      { title: "کارت اعتباری", text: "", value: state.valueWalletUser.credit },
      {
        title: "اعتبار سازمانی",
        text: "جزییات اعتبار سازمانی",
        value: state.valueWalletUser.organ,
        icon: "fas fa-exclamation",
      },
    ];
  },

  datas: (state) => {
    return state.valueListTransactions;
  },

  listOpratorPackage: (state) => (id: number) => {
    return state.getListInternetPackage.filter(
      (el) => el.mobileOperatorId === id
    );
  },
};
