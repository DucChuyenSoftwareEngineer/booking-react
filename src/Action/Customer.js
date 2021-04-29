import * as actionType from "../Constant/ActionType";

export const fetchCustomerInfo = data => ({
	type: actionType.FETCH_CUSTOMER_INFO,
	data
});

export const fetchCustomerInfoSuccess = data => ({
	type: actionType.FETCH_CUSTOMER_INFO_SUCCESS,
	data
});

export const saveCustomerInfo = data => ({
	type: actionType.SAVE_CUSTOMER_INFO,
	data
});

export const fetchCustomerOrder = data => ({
	type: actionType.FETCH_CUSTOMER_ORDER,
	data
});

export const fetchCustomerOrderSuccess = data => ({
	type: actionType.FETCH_CUSTOMER_ORDER_SUCCESS,
	data
});

export const fetchCustomerOrderHistory = data => ({
	type: actionType.FETCH_CUSTOMER_ORDER_HISTORY,
	data
});

export const fetchCustomerOrderHistorySuccess = data => ({
	type: actionType.FETCH_CUSTOMER_ORDER_HISTORY_SUCCESS,
	data
});

export const deleteOrder = data => ({
	type: actionType.DELETE_CUSTOMER_ORDER,
	data
});
