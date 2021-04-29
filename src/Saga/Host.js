import { call, delay, put } from "@redux-saga/core/effects";
import { toast } from "react-toastify";
import * as uiAction from "../Action/Ui";
import * as hostService from "../Service/HostService";
import * as hostAction from "../Action/Host";
import { LOADING_DELAY_TIME } from "../Config";
import { SUCCESS_MESSAGE } from "../Constant";

export function* fetchHostInfo() {
	yield put(uiAction.showBlocking());

	try {
		const response = yield call(hostService.fetchHostInfo);
		const { message, data: { role, infor } } = response;

		if (message === SUCCESS_MESSAGE && role === "host") {
			yield put(hostAction.fetchHostInfoSuccess(infor));
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

export function* saveHostInfo(data) {
	yield put(uiAction.showBlocking());

	try {
		const response = yield call(hostService.saveHostInfo, data);
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

export function* fetchHostListOrder() {
	yield put(uiAction.showBlocking());

	try {
		const response = yield call(hostService.fetchHostListOrder);
		const { message } = response;

		if (message === SUCCESS_MESSAGE) {
			yield put(hostAction.fetchHostListOrderSuccess(response.data));
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

export function* fetchHostListOrderHistory() {
	yield put(uiAction.showBlocking());

	try {
		const response = yield call(hostService.fetchHostListOrderHistory);
		const { message } = response;

		if (message === SUCCESS_MESSAGE) {
			yield put(hostAction.fetchHostListOrderHistorySuccess(response.data));
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
