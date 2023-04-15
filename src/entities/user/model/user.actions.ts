import {createEffect, createEvent, sample} from "effector";
import {ILoginParams} from "../api/user.dto";
import {login} from "../api/user.api";

export const loginFX = createEffect(async (params: ILoginParams) => {
    const response = await login(params)
    return response.data
})

export const authMeEvent = createEvent();
export const logoutEvent = createEvent();