import axiosService from "./AxiosService";

const endpoint = "admin";

export const fetchAdminInfo = () => axiosService.get(`/${endpoint}`);

export const saveAdminInfo = data => axiosService.post(`/${endpoint}`, data);

export const fetchAdminListHost = () => axiosService.get(`/${endpoint}/host`);

export const fetchAdminListOrderHistory = () => axiosService.get(`/${endpoint}/order_history`);
