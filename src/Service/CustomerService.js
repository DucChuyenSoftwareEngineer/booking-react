import axiosService from "./AxiosService";

const endpoint = "customer";

export const fetchCustomerInfo = () => axiosService.get(`/${endpoint}`);

export const updateCustomerInfo = data => axiosService.put(`/${endpoint}`, data);

export const fetchCustomerOrder = () => axiosService.get(`/${endpoint}/order`);

export const deleteCustomerOrder = data => axiosService.delete(`/${endpoint}/order/${data}`);

export const fetchCustomerOrderHistory = () => axiosService.get(`/${endpoint}/order_history`);
