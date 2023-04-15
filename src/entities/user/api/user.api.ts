import apiInstance from "../../../api/base";
import { AxiosPromise } from "axios";
import { IGetUser, ILoginParams } from "./user.dto";

export const login = (params: ILoginParams): AxiosPromise<IGetUser> =>
  apiInstance.post("/login", params);
