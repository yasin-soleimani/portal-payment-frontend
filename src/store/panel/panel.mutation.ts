import { MUTATIONS } from "@/constants/mutations";
import { ValueListTransactions } from "@/interfaces/value-list-transactions";
import { UserInformation } from "@/interfaces/user-information";
import { AccountUserMoneyTransfer } from "@/interfaces/accountUserMoneyTransfer";
import { ItemOperatorBill } from "@/interfaces/itemOperatorBill";
import { InternetPackage } from "@/interfaces/internetPackage";
import { DataProfile } from "@/interfaces/dataProfile";
import { ListDevice } from "@/interfaces/listDevice";
import { MutationTree } from "vuex";
import { PanelState } from "./panel.module";

export const PANEL_MUTATIONS: MutationTree<PanelState> = {
  [MUTATIONS.panel.showSidebar](state): void {
    state.showSidebar = !state.showSidebar;
  },
  [MUTATIONS.panel.sidebarSmall](state) {
    state.sidebarSmall = !state.sidebarSmall;
  },
  [MUTATIONS.panel.showValueWalletUser](state, value: number): void {
    state.valueWalletUser.wallet = value;
  },
  [MUTATIONS.panel.showValueDiscountUser](state, value: number): void {
    state.valueWalletUser.discount = value;
  },
  [MUTATIONS.panel.showValueCreditUser](state, value: number): void {
    state.valueWalletUser.credit = value;
  },
  [MUTATIONS.panel.showValueOrganUser](state, value: number): void {
    state.valueWalletUser.organ = value;
  },
  [MUTATIONS.panel.setValueAmount](
    state,
    value: ValueListTransactions[]
  ): void {
    state.valueListTransactions = value;
  },
  [MUTATIONS.panel.setChargeWallet](state, value: string): void {
    state.amount = value;
  },
  [MUTATIONS.panel.getInformation](state, value: UserInformation): void {
    state.userInformation = value;
  },
  [MUTATIONS.panel.setMobileCharge](state, value: string) {
    state.dataReCharge.mobile = value;
  },
  [MUTATIONS.panel.getHistory](state, value: ValueListTransactions[]) {
    state.valueListTransactions = value;
  },
  [MUTATIONS.panel.setAmountCharge](state, value: number) {
    state.dataReCharge.amount = value;
  },
  [MUTATIONS.panel.setOperatorCharge](state, value: number) {
    state.dataReCharge.operator = value;
  },
  [MUTATIONS.panel.setRechargeCodeHamrah](state, value: number) {
    state.dataReCharge.rechargeCode = value;
  },
  [MUTATIONS.panel.postDataToBuyCharge](state, value: string) {
    state.postDataCharge = value;
    state.isSubmitingToBuyCharge = false;
  },

  [MUTATIONS.panel.setMobileCard](state, value: string) {
    state.mobileCard = value;
  },
  [MUTATIONS.panel.setCardNumber](state, value: string) {
    state.cardNumber = value;
  },
  [MUTATIONS.panel.postCardNumberDestinationinfo](state, value: any) {
    state.accountUserMoneyTransfer = value;
  },
  [MUTATIONS.panel.postDestinationinfo](
    state,
    value: AccountUserMoneyTransfer
  ) {
    state.accountUserMoneyTransfer = value;
  },
  [MUTATIONS.panel.getListInternetPackageAsServer](
    state,
    value: InternetPackage[]
  ) {
    state.getListInternetPackage = value;
  },
  [MUTATIONS.panel.setItemOperatorBill](state, value: ItemOperatorBill) {
    state.listItemOperatorBill = value;
  }, //TODO:
  [MUTATIONS.panel.setIdForListItemOperatorBill](state, value: null) {
    state.listItemOperatorBill.id = value;
  },
  [MUTATIONS.panel.getSettingProfile](state, value: DataProfile) {
    state.dataProfile = value;
  },
  [MUTATIONS.panel.updatePasswordSettingProfile](state, value: string) {
    state.forgetPasswordSettingProfile.password = value;
  },
  [MUTATIONS.panel.updateNewPasswordSettingProfile](state, value: string) {
    state.forgetPasswordSettingProfile.newPassword = value;
  },
  [MUTATIONS.panel.postDataForgetPasswordSettingProfile](
    state,
    value: string[]
  ) {
    state.newPassword = value;
  },
  [MUTATIONS.panel.getDataList](state, value: ListDevice[]) {
    state.listDevice = value;
  },
  [MUTATIONS.panel.getDataAcoountBanks](state, value: any) {
    state.accountBanks = value;
  },
  [MUTATIONS.panel.updateConfirmExit](state) {
    state.showConfirmExit = true;
  },
  [MUTATIONS.panel.updateOffShowConfirmExit](state) {
    state.showConfirmExit = false;
  },
  [MUTATIONS.panel.updateBankCardNumber](state, value: string) {
    state.bankCardNumber = value;
  },

  [MUTATIONS.panel.updateSetActiveFullname](state, value: string) {
    state.setActiveFullname = value;
  },
  [MUTATIONS.panel.getDataCards](state, value: any) {
    state.cards = value;
  },
};
