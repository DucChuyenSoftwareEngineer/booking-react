import { call, delay, put, select } from "@redux-saga/core/effects";
import { toast } from "react-toastify";
import * as uiAction from "../Action/Ui";
import * as orderAction from "../Action/Order";
import * as roomService from "../Service/RoomService";
import * as orderService from "../Service/OrderService";
import { LOADING_DELAY_TIME } from "../Config";
import { SUCCESS_MESSAGE } from "../Constant";

export function* fetchSelectedBookRoom({ data }) {
	yield put(uiAction.showBlocking());

	try {
		const response = yield call(roomService.fetchRoom, data);
		const { message } = response;

		if (message === SUCCESS_MESSAGE) {
			const username = yield select(({ user: { userInfo } }) => userInfo.username);

			const room = {
				customerName: username,
				name: response.name,
				hostFullName: response.guidelineCheckin,
				price: response.price
			}

			yield put(orderAction.fetchSelectedBookRoomSuccess(room));
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

export function* bookRoom({ data }) {
	yield put(uiAction.showBlocking());

	try {
		const response = yield call(orderService.bookRoom, data);
		const { message } = response;

		if (message === SUCCESS_MESSAGE) {
			toast.success("Đặt phòng thành công");
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
