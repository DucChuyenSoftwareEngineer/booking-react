import * as actionType from "../Constant/ActionType";

const initState = {
	info: null,
	listOrder: [],
	listOrderHistory: []
};

const reducer = (state = initState, {type, data}) => {
	switch (type) {
		case actionType.FETCH_CUSTOMER_INFO_SUCCESS:
			return {
				...state,
				user: data
			}
		case actionType.FETCH_CUSTOMER_ORDER_SUCCESS:
			return {
				...state,
				listOrder: data
			};
		case actionType.FETCH_CUSTOMER_ORDER_HISTORY_SUCCESS:
			return {
				...state,
				listOrderHistory: data
			};
		default:
			return state;
	}
};

export default reducer;
