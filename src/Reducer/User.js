import * as actionType from "../Constant/ActionType";

const initState = {
	userInfo: null
};

const reducer = (state = initState, { type, data }) => {
	switch (type) {
		case actionType.LOGIN_SUCCESS:
			return {
				...state,
				userInfo: data
			}
		default:
			return state;
	}
};

export default reducer;
