import * as actionType from "../Constant/ActionType";

export const fetchAdminInfo = () => ({
	type: actionType.FETCH_ADMIN_INFO
});

export const fetchAdminInfoSuccess = data => ({
	type: actionType.FETCH_ADMIN_INFO_SUCCESS,
	data
});

export const saveAdminInfo = data => ({
	type: actionType.SAVE_ADMIN_INFO,
	data
});

export const fetchAdminListHost = () => ({
	type: actionType.FETCH_ADMIN_LIST_HOST
});

export const fetchAdminListHostSuccess = data => ({
	type: actionType.FETCH_ADMIN_LIST_HOST_SUCCESS,
	data
});

export const fetchAdminListOrderHistory = () => ({
	type: actionType.FETCH_ADMIN_LIST_ORDER_HISTORY
});

export const fetchAdminListOrderHistorySuccess = data => ({
	type: actionType.FETCH_ADMIN_LIST_ORDER_HISTORY_SUCCESS,
	data
});
