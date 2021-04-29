import axiosService from "./AxiosService";

const endpoint = "room";

export const fetchListRoom = data => axiosService.get(`/${endpoint}`, data);

export const fetchRoom = data => axiosService.get(`/${endpoint}/${data}`);
