import { call, delay, put, select } from "@redux-saga/core/effects";
import { toast } from "react-toastify";
import * as uiAction from "../Action/Ui";
import * as roomAction from "../Action/Room";
import * as roomService from "../Service/RoomService";
import { LOADING_DELAY_TIME } from "../Config";
import { SUCCESS_MESSAGE } from "../Constant";

export function* fetchListRoom() {
	const sco = yield select(({ room: { list } }) => list.sco);

	yield put(uiAction.showBlocking());

	try {
		const response = yield call(roomService.fetchListRoom, sco);
		const { message } = response;

		if (message === SUCCESS_MESSAGE) {
			yield put(roomAction.fetchListRoomSuccess(response.data));
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

export function* fetchRoom(data) {
	yield put(uiAction.showBlocking());

	try {
		const response = yield call(roomService.fetchRoom, data);
		const { message } = response;

		if (message === SUCCESS_MESSAGE) {
			yield put(roomAction.fetchRoomSuccess(response.data));
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
