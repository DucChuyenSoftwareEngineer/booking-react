import * as actionType from "../Constant/ActionType";

export const showBlocking = () => ({
	type: actionType.SHOW_LOADING
});

export const hideBlocking = () => ({
	type: actionType.HIDE_LOADING,
});
