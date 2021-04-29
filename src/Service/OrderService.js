import axiosService from "./AxiosService";

const endpoint = "order";

export const bookRoom = data => axiosService.get(`/${endpoint}`, data);
