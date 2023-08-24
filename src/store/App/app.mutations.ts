import { MUTATIONS } from "@/constants/mutations";
import { MutationTree } from "vuex";
import { AppState } from "./app.module";

export const APP_MUTATIONS: MutationTree<AppState> = {
  [MUTATIONS.app.updateLoading](state): void {
    state.loading = !state.loading;
  },
};
