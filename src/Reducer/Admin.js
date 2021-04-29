import * as actionType from "../Constant/ActionType"

const initState = {
	info: {
		fullName: null,
		idCard: null,
		address: null,
		email: null,
		phone: null,
		map: null,
		total: null
	},
	listHost: [],
	listOrderHistory: [],
};

const reducer = (state = initState, { type, data }) => {
	switch (type) {
		case actionType.FETCH_ADMIN_INFO_SUCCESS:
			return {
				...state,
				info: data
			};
		case actionType.FETCH_ADMIN_LIST_HOST_SUCCESS:
			return {
				...state,
				listHost: data
			};
		case actionType.FETCH_ADMIN_LIST_ORDER_HISTORY_SUCCESS:
			return {
				...state,
				listOrderHistory: data
			};
		default:
			return state;
	}
};

export default reducer;
