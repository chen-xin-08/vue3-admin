import type { StoreDefinition } from "pinia";
import { defineStore } from "pinia";
import type { AppState, LoginType } from "@/type/loginType";

import tokenApi from "@/api/token";

export const useAppStore: StoreDefinition<string, AppState> = defineStore(
  "app",
  {
    state: () => {
      return {
        token: "",
      };
    },

    actions: {
      async login(loginForm: LoginType): Promise<void> {
        this.token = await tokenApi.createToken(loginForm);
      },
    },
  }
);
