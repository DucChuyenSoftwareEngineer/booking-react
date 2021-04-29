import { takeEvery } from "@redux-saga/core/effects";
import * as admin from "./Admin";
import * as host from "./Host";
import * as room from "./Room";
import * as user from "./User";
import * as order from "./Order";
import * as customer from "./Customer";
import * as actionType from "../Constant/ActionType";

function* saga() {

	// Room
	yield takeEvery(actionType.FETCH_LIST_ROOM, room.fetchListRoom);
	yield takeEvery(actionType.FETCH_ROOM, room.fetchRoom);

	// Admin
	yield takeEvery(actionType.FETCH_ADMIN_INFO, admin.fetchAdminInfo);
	yield takeEvery(actionType.SAVE_ADMIN_INFO, admin.saveAdminInfo);
	yield takeEvery(actionType.FETCH_ADMIN_LIST_HOST, admin.fetchAdminListHost);
	yield takeEvery(actionType.FETCH_ADMIN_LIST_ORDER_HISTORY, admin.fetchAdminListOrderHistory);

	// Host
	yield takeEvery(actionType.FETCH_HOST_INFO, host.fetchHostInfo);
	yield takeEvery(actionType.SAVE_HOST_INFO, host.saveHostInfo);
	yield takeEvery(actionType.FETCH_HOST_LIST_ORDER, host.fetchHostListOrder);
	yield takeEvery(actionType.FETCH_HOST_LIST_ORDER_HISTORY, host.fetchHostListOrderHistory);

	// User
	yield takeEvery(actionType.REGISTER_USER, user.registerUser);
	yield takeEvery(actionType.LOGIN, user.login);

	// Order
	yield takeEvery(actionType.FETCH_SELECTED_BOOK_ROOM, order.fetchSelectedBookRoom);
	yield takeEvery(actionType.BOOK_ROOM, order.bookRoom);

	// Customer
	yield takeEvery(actionType.FETCH_CUSTOMER_INFO, customer.fetchCustomerInfo);
	yield takeEvery(actionType.SAVE_CUSTOMER_INFO, customer.saveCustomerInfo);
	yield takeEvery(actionType.FETCH_CUSTOMER_ORDER, customer.fetchCustomerOrder);
	yield takeEvery(actionType.FETCH_CUSTOMER_ORDER_HISTORY, customer.fetchCustomerOrderHistory);
	yield takeEvery(actionType.DELETE_CUSTOMER_ORDER, customer.deleteCustomerOrder);
}

export default saga;
