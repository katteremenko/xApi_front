import {ApiError, ApiRequestConfig, ApiResponse} from './types';
import {toast} from "react-toastify";

export const errorHandler = (err: ApiError) => {

    console.error(`from errorHandler = `, err)

    toast.error(err.response?.data.message || 'Something error')

    return Promise.reject(err);
};

export const requestHandler = (config: ApiRequestConfig) => {
    const headers = config.headers || {};

    return {...config, headers};
};


export const responseHandler = (res: ApiResponse) => res;
