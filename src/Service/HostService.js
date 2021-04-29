import axiosService from "./AxiosService";

const endpoint = "host";

export const fetchHostInfo = () => axiosService.get(`/${endpoint}`);

export const saveHostInfo = data => axiosService.post(`/${endpoint}`, data);

export const fetchHostListOrder = () => axiosService.get(`/${endpoint}/order`);

export const fetchHostListOrderHistory = () => axiosService.get(`/${endpoint}/order_history`);
