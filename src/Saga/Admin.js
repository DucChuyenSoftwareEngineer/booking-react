import { call, delay, put } from "@redux-saga/core/effects";
import { toast } from "react-toastify";
import * as uiAction from "../Action/Ui";
import * as adminService from "../Service/AdminService";
import * as adminAction from "../Action/Admin";
import { LOADING_DELAY_TIME } from "../Config";
import { SUCCESS_MESSAGE } from "../Constant";

export function* fetchAdminInfo() {
	yield put(uiAction.showBlocking());

	try {
		const response = yield call(adminService.fetchAdminInfo);
		const { message, data: { role, infor } } = response;

		if (message === SUCCESS_MESSAGE && role === "admin") {
			yield put(adminAction.fetchAdminInfoSuccess(infor));
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

export function* saveAdminInfo(data) {
	yield put(uiAction.showBlocking());

	try {
		const response = yield call(adminService.saveAdminInfo, data);
		const { message } = response;

		if (message === SUCCESS_MESSAGE) {
			toast.success("Lưu thành công");
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

export function* fetchAdminListHost() {
	yield put(uiAction.showBlocking());

	try {
		const response = yield call(adminService.fetchAdminListHost);
		const { message } = response;

		if (message === SUCCESS_MESSAGE) {
			yield put(adminAction.fetchAdminListHostSuccess(response.data));
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

export function* fetchAdminListOrderHistory() {
	yield put(uiAction.showBlocking());

	try {
		const response = yield call(adminService.fetchAdminListOrderHistory);
		const { message } = response;

		if (message === SUCCESS_MESSAGE) {
			yield put(adminAction.fetchAdminListHostSuccess(response.data));
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
