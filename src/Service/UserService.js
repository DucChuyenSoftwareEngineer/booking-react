import axiosService from "./AxiosService";

const endpoint = "account";

export const registerUser = data => axiosService.post(`/${endpoint}`, data);

export const login = data => axiosService.post(`/${endpoint}/login/`, data);
