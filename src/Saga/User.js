import { call, delay, put } from "@redux-saga/core/effects";
import { toast } from "react-toastify";
import * as uiAction from "../Action/Ui";
import * as userAction from "../Action/User";
import * as userService from "../Service/UserService";
import * as storeService from "../Service/StoreService";
import { LOADING_DELAY_TIME } from "../Config";
import { LOGIN_USER_TOKEN, SUCCESS_MESSAGE } from "../Constant";

export function* registerUser(data) {
	yield put(uiAction.showBlocking());

	try {
		const response = yield call(userService.registerUser, data);
		const { message } = response;

		if (message === SUCCESS_MESSAGE) {
			toast.success("Đăng ký thành công")
		}
	} catch ({ message }) {
		if (message) {
			toast.error(message);
		}
	} finally {
		yield delay(LOADING_DELAY_TIME);
		yield put(uiAction.hideBlocking());
	}
}

export function* login(data) {
	yield put(uiAction.showBlocking());

	try {

		const response = yield call(userService.login, data.data);

		const { message, data: { token, role, username } } = response;

		if (message === SUCCESS_MESSAGE) {
			const reducerData = { role, username };

			storeService.save(LOGIN_USER_TOKEN, token);

			yield put(userAction.loginSuccess(reducerData));
		}
	} catch ({ message }) {
		if (message) {
			toast.error(message);
		}
	} finally {
		yield delay(LOADING_DELAY_TIME);
		yield put(uiAction.hideBlocking());
	}
}
