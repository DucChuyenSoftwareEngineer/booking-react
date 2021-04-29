import * as actionType from "../Constant/ActionType";

const initState = {
	list: {
		sco: {
			city: null,
			area: null,
			type: null,
			price: null
		},
		data: [],
	},
	selected: null
};

const reducer = (state = initState, { type, data }) => {
	const { list } = state;

	switch (type) {
		case actionType.FETCH_LIST_ROOM_SUCCESS:
			return {
				...state,
				list: {
					...list,
					data
				}
			};
		case actionType.UPDATE_ROOM_SEARCH:
			return {
				...state,
				list: {
					...list,
					sco: data
				}
			};
			case actionType.FETCH_ROOM_SUCCESS:
			return {
				...state,
				selected: data
			};
		default:
			return state;
	}
};

export default reducer;
