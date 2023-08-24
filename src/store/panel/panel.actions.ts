import { MUTATIONS } from "@/constants/mutations";
import { ActionTree } from "vuex";
import { PanelState } from "./panel.module";
import { panelService } from "@/http/panel";
import { ValueListTransactions } from "@/interfaces/value-list-transactions";
import { HTTP_RESPONSE_STATUS } from "@/static/http-response-status";
import { ItemOperatorBill } from "@/interfaces/itemOperatorBill";
import store from "..";

export const PANEL_ACTIONS: ActionTree<PanelState, RootState> = {
  showSidebar(context): void {
    context.commit(MUTATIONS.panel.showSidebar);
  },

  sidebarSmall(context): void {
    context.commit(MUTATIONS.panel.sidebarSmall);
  },

  showValueWalletUser(context, value: number): void {
    context.commit(MUTATIONS.panel.showValueWalletUser, value);
  },

  showValueDiscountUser(context, value: number): void {
    context.commit(MUTATIONS.panel.showValueDiscountUser, value);
  },

  getPanelService(context): void {
    panelService
      .getWallets()
      .then((response) => {
        context.dispatch("showValueWalletUser", response.data.wallet);
        context.dispatch("showValueDiscountUser", response.data.discount);
        context.dispatch("showValueCreditUser", response.data.credit);
        context.dispatch("showValueOrganUser", response.data.organ);
      })
      .catch((response) => {
        alert(response.error);
      });
  },
  showValueCreditUser(context, value: number): void {
    context.commit(MUTATIONS.panel.showValueCreditUser, value);
  },
  showValueOrganUser(context, value: number): void {
    context.commit(MUTATIONS.panel.showValueOrganUser, value);
  },

  getHistory(context): void {
    panelService
      .getHistory()
      .then((response) => {
        context.commit(MUTATIONS.panel.getHistory, response.data);
        context.dispatch("setValueAmount", response.data.data);
      })
      .catch((response) => {
        alert(response.error);
      });
  },

  setValueAmount(context, value: ValueListTransactions[]): void {
    context.commit(MUTATIONS.panel.setValueAmount, value);
  },

  setChargeWallet(context, value: string): void {
    context.commit(MUTATIONS.panel.setChargeWallet, value);
  },

  getInformation(context) {
    panelService
      .getinformation()
      .then((response) => {
        context.commit(MUTATIONS.panel.getInformation, response.data);
      })
      .catch((response) => {
        alert(response.error);
      });
  },

  setMobileCharge(context, value: string): void {
    context.commit(MUTATIONS.panel.setMobileCharge, value);
  },

  setAmountCharge(context, value: number): void {
    context.commit(MUTATIONS.panel.setAmountCharge, value);
  },

  setOperatorCharge(context, value: number): void {
    context.commit(MUTATIONS.panel.setOperatorCharge, value);
  },

  setRechargeCodeHamrah(context, value: number): void {
    context.commit(MUTATIONS.panel.setRechargeCodeHamrah, value);
  },

  postDataToBuyCharge(context): void {
    panelService
      .reChargeSimcard()
      .then((response) => {
        context.commit(MUTATIONS.panel.postDataToBuyCharge, response.data);

        store.state.panel.textSnackbar = response.data.message;
        store.state.panel.showSnackbar = true;

        setTimeout(() => {
          store.state.panel.showSnackbar = false;
        }, 3000);
      })
      .catch((response) => {
        store.state.panel.textSnackbar = response.error;
        store.state.panel.showSnackbar = true;
        setTimeout(() => {
          store.state.panel.showSnackbar = false;
        }, 3000);
      });
  },

  setMobileCard(context, value: string): void {
    context.commit(MUTATIONS.panel.setMobileCard, value);
  },

  setCardNumber(context, value: string): void {
    context.commit(MUTATIONS.panel.setCardNumber, value);
  },

  postDestinationinfo(context): void {
    panelService
      .destinationinfo()
      .then((response) => {
        if (response.data.status === HTTP_RESPONSE_STATUS.success) {
          context.commit(MUTATIONS.panel.postDestinationinfo, response.data);
          context.state.showFormMoneyTransfer = true;
        }
      })
      .catch((response) => {
        console.log("error response mobile:", response.error);
      });
  },

  postCardNumberDestinationinfo(context): void {
    panelService
      .destinationinfoCardNumber()
      .then((response) => {
        if (response.data.status === HTTP_RESPONSE_STATUS.success) {
          context.commit(
            MUTATIONS.panel.postCardNumberDestinationinfo,
            response.data
          );
          context.state.showFormMoneyTransfer = true;
        }
      })
      .catch((response) => {
        console.log("error response CardNumber:", response.data);
      });
  },
  getListInternetPackageAsServer(context): void {
    panelService
      .getListInternetOperator()
      .then((response) => {
        console.log(response.data);
        context.commit(
          MUTATIONS.panel.getListInternetPackageAsServer,
          response.data
        );
        console.log(
          "value data internet in the store:",
          store.state.panel.getListInternetPackage
        );
        // const list = store.state.panel.getListInternetPackage;
        // for (data in list) {
        //   console.log("ok data get list internet package:", list.data);
        // }
      })
      .catch((response) => {
        console.log(response.error);
      });
  },

  setItemOperatorBill(context, value: ItemOperatorBill[]): void {
    context.commit(MUTATIONS.panel.setItemOperatorBill, value);
  },

  setIdForListItemOperatorBill(context, value: number) {
    context.commit(MUTATIONS.panel.setIdForListItemOperatorBill, value);
  },

  postDataPaymentBill(context): void {
    panelService
      .postDataPaymentBill()
      .then((response) => {
        console.log(response.data);
        context.commit(MUTATIONS.panel.postDataPaymentBill);
        alert(response.data.message);
      })
      .catch((response) => {
        console.log(response.error);
      });
  },

  getSettingProfile(context): void {
    panelService
      .profile()
      .then((response) => {
        context.commit(MUTATIONS.panel.getSettingProfile, response.data);

        console.log(response.data);
      })
      .catch((response) => {
        console.log(response.error);
      });
  },
  updatePasswordSettingProfile(context, value: string): void {
    context.commit(MUTATIONS.panel.updatePasswordSettingProfile, value);
  },
  updateNewPasswordSettingProfile(context, value: string): void {
    context.commit(MUTATIONS.panel.updateNewPasswordSettingProfile, value);
  },

  postDataForgetPasswordSettingProfile(context): void {
    panelService
      .change()
      .then((response) => {
        context.commit(
          MUTATIONS.panel.postDataForgetPasswordSettingProfile,
          response.data
        );
        context.state.forgetPasswordSettingProfile.isSubmiting = false;
        alert(response.data.message);
      })
      .catch((response) => {
        alert(response.error);
      });
  },

  getDataList(context): void {
    panelService
      .list()
      .then((response) => {
        context.commit(MUTATIONS.panel.getDataList, response.data.data);
        console.log(response.data.data);
      })
      .catch((response) => {
        console.log(response.error);
      });
  },

  getDataAcoountBanks(context): void {
    panelService
      .banks()
      .then((response) => {
        context.commit(MUTATIONS.panel.getDataAcoountBanks, response.data.data);
        console.log("response get data data bnks:", response.data);
      })
      .catch((response) => {
        console.log("response error data acoount bank:", response.error);
      });
  },

  updateShowConfirmExit(context): void {
    context.commit(MUTATIONS.panel.updateConfirmExit);
  },

  updateOffShowConfirmExit(context): void {
    context.commit(MUTATIONS.panel.updateOffShowConfirmExit);
  },

  updateBankCardNumber(context, value: string): void {
    context.commit(MUTATIONS.panel.updateBankCardNumber, value);
  },

  updateSetActiveFullname(context, value: string) {
    context.commit(MUTATIONS.panel.updateSetActiveFullname, value);
  },

  getDataCards(context): void {
    panelService
      .cards()
      .then((response) => {
        console.log("get data cards ok:", response.data.cards);
        context.commit(MUTATIONS.panel.getDataCards, response.data.cards[0]);
      })
      .catch((response) => {
        console.log("get data cards error:", response.error);
      });
  },
};
