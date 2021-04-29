import * as actionType from "../Constant/ActionType"

const initState = {
	info: {
		fullName: null,
		legalNo: null,
		address: null,
		email: null,
		phone: null,
		map: null,
		total: null
	},
	listOrder: [],
	listOrderHistory: [],
};

const reducer = (state = initState, { type, data }) => {
	switch (type) {
		case actionType.FETCH_HOST_INFO_SUCCESS:
			return {
				...state,
				info: data
			};
		case actionType.FETCH_HOST_LIST_ORDER_SUCCESS:
			return {
				...state,
				listOrder: data
			};
		case actionType.FETCH_HOST_LIST_ORDER_HISTORY_SUCCESS:
			return {
				...state,
				listOrderHistory: data
			};
		default:
			return state;
	}
};

export default reducer;
