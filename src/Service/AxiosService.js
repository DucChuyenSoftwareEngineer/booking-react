import { create } from "axios";
import queryString from "querystring";
import * as storeService from "./StoreService";
import { LOGIN_USER_TOKEN } from "../Constant";

class AxiosService {
	constructor() {
		// const backendUrl = "http://172.27.5.95:8704";

		const handleRequestSuccess = config => {
			const { url } = config;

			if (url !== "/login") {
				const token = this.getLoginToken();

				if (token) {
					config.headers.Authorization = `Bearer ${token}`;
				}
			}

			return config;
		};
		const handleRequestFail = error => Promise.reject(error);
		const handleResponseSuccess = ({ data }) => data;
		const handleResponseFail = error => Promise.reject(error);

		this.instance = create({

			paramsSerializer: params => queryString.stringify(params)
		});
		this.instance.interceptors.request.use(handleRequestSuccess, handleRequestFail);
		this.instance.interceptors.response.use(handleResponseSuccess, handleResponseFail);
	}

	get = (url, params) => this.instance.get(url, { params });

	post = (url, data) => this.instance.post(url, data);

	delete = url => this.instance.delete(url);

	getLoginToken = () => storeService.get(LOGIN_USER_TOKEN);
}

export default new AxiosService();
