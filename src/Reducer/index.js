import { combineReducers } from "redux";
import { reducer as form } from "redux-form";
import ui from "./Ui";
import user from "./User";
import admin from "./Admin";
import host from "./Host";
import room from "./Room";
import order from "./Order";
import customer from "./Customer";

const reducer = combineReducers({
	form,
	ui,
	user,
	admin,
	host,
	room,
	order,
	customer
});

export default reducer;
