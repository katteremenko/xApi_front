import {createStore} from "effector";
import {loginFX} from "./user.actions";
import {IUser} from "./user.types";
import {useStore} from "effector-react";

export const $user = createStore<IUser>({token: ''})
    .on(loginFX.doneData, (_, payload) => payload)

// $user.watch(console.log)

export const useUserStore = () => useStore($user)