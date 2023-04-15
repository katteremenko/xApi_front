import { createEffect, createEvent, createStore, sample } from "effector";
import { IClient, IUser } from "./user.types";
import { useStore } from "effector-react";
import { login } from "../api/user.api";
import { ILoginParams } from "../api/user.dto";
import { logoutEvent } from "./user.actions";

export const loginFX = createEffect(async (params: ILoginParams) => {
  const response = await login(params);
  return response.data;
});

export const authMeEvent = createEvent();

export const $user = createStore<IUser | null>(null);

sample({
  clock: loginFX.doneData,
  fn: (pld) => {
    const token: string = pld.token;
    const client: IClient = {
      username: pld.clientInfo.api.basic_key,
      password: pld.clientInfo.api.basic_secret,
    };
    localStorage.setItem("client", JSON.stringify(client));
    localStorage.setItem("token", JSON.stringify(token));
    return {
      token,
      client,
    };
  },
  target: $user,
});

sample({
  clock: logoutEvent,
  fn: () => {
    localStorage.clear()
    return null;
  },
  target: $user,
});

sample({
  clock: authMeEvent,
  filter: () =>
    !!localStorage.getItem("client") && !!localStorage.getItem("token"),
  fn: (): IUser => {
    const client = localStorage.getItem("client") || "";
    return {
      client: JSON.parse(client),
      token: localStorage.getItem("token") || "",
    };
  },
  target: $user,
});

export const useIsAuth = () => useStore($user.map(item=>!!item?.token))
export const useUserStore = () => useStore($user);
