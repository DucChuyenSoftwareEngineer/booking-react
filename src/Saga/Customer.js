import { call, delay, put } from "@redux-saga/core/effects";
import { toast } from "react-toastify";
import * as uiAction from "../Action/Ui";
import * as customerAction from "../Action/Customer";
import * as customerService from "../Service/CustomerService";
import { LOADING_DELAY_TIME } from "../Config";
import {SUCCESS_MESSAGE} from "../Constant";

export function* fetchCustomerInfo(data) {
	yield put(uiAction.showBlocking());

	try {
		const response = yield call(customerService.fetchCustomerInfo, data);
		const { message } = response;

		if (message === SUCCESS_MESSAGE) {
			yield put(customerAction.fetchCustomerInfoSuccess(response));
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

export function* saveCustomerInfo(data) {
	yield put(uiAction.showBlocking());

	try {
		const response = yield call(customerService.updateCustomerInfo, data.data);
		const { message } = response;

		if (message === SUCCESS_MESSAGE) {

			toast.success("Lưu dữ liệu thành công");
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

export function* fetchCustomerOrder() {
	yield put(uiAction.showBlocking());

	try {
		const response = yield call(customerService.fetchCustomerOrder);
		const { message } = response;

		if (message === SUCCESS_MESSAGE) {
			yield put(customerAction.fetchCustomerOrderSuccess(response));
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

export function* fetchCustomerOrderHistory() {
	yield put(uiAction.showBlocking());

	try {
		const response = yield call(customerService.fetchCustomerOrderHistory);
		const { message } = response;

		if (message === SUCCESS_MESSAGE) {
			yield put(customerAction.fetchCustomerOrderHistorySuccess(response));
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

export function* deleteCustomerOrder(data) {
	yield put(uiAction.showBlocking());

	try {
		const response = yield call(customerService.deleteCustomerOrder, data);
		const { message } = response;

		if (message === SUCCESS_MESSAGE) {
			toast.success("Xóa thành công")
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
