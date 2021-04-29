import * as actionType from "../Constant/ActionType";

export const registerUser = data => ({
	type: actionType.REGISTER_USER,
	data
});

export const login = data => ({
	type: actionType.LOGIN,
	data
});

export const loginSuccess = data => ({
	type: actionType.LOGIN_SUCCESS,
	data
});
