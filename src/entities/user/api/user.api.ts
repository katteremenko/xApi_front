import apiInstance from "../../../api/base";
import {AxiosPromise} from "axios";
import {IUser} from "../model/user.types";
import {ILoginParams} from "./user.dto";


export const login = (params: ILoginParams): AxiosPromise<IUser> => apiInstance.post('/login', params)