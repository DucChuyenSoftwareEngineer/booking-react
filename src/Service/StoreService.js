import { LOGIN_USER_TOKEN } from "../Constant";

export const save = (key, value) => {
	if (value) {
		window.localStorage.setItem(key, value);
	} else {
		remove(key);
	}
};

export const remove = key => {
	window.localStorage.removeItem(key);
};

export const get = key => window.localStorage.getItem(key);

export const getLoginToken = () => get(LOGIN_USER_TOKEN);

export const removeLoginInfo = () => {
	remove(LOGIN_USER_TOKEN);
};
