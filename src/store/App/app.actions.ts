import { MUTATIONS } from "@/constants/mutations";
import { ActionTree } from "vuex";
import { RootState } from "..";
import { AppState } from "./app.module";

export const APP_ACTIONS: ActionTree<AppState, RootState> = {
  updateLoading(context): void {
    context.commit(MUTATIONS.app.updateLoading);
  },
};
