import * as actionType from "../Constant/ActionType";

export const fetchHostInfo = () => ({
	type: actionType.FETCH_HOST_INFO
});

export const fetchHostInfoSuccess = data => ({
	type: actionType.FETCH_HOST_INFO_SUCCESS,
	data
});

export const saveHostInfo = data => ({
	type: actionType.SAVE_HOST_INFO,
	data
});

export const fetchHostListOrder = () => ({
	type: actionType.FETCH_HOST_LIST_ORDER
});

export const fetchHostListOrderSuccess = data => ({
	type: actionType.FETCH_HOST_LIST_ORDER_SUCCESS,
	data
});

export const fetchHostListOrderHistory = () => ({
	type: actionType.FETCH_HOST_LIST_ORDER_HISTORY
});

export const fetchHostListOrderHistorySuccess = data => ({
	type: actionType.FETCH_HOST_LIST_ORDER_HISTORY_SUCCESS,
	data
});
