import * as actionType from "../Constant/ActionType"

const initState = {
	room: {
		customerName: null,
		name: null,
		hostFullName: null,
		price: null
	}
};

const reducer = (state = initState, { type, data }) => {
	switch (type) {
		case actionType.FETCH_SELECTED_BOOK_ROOM_SUCCESS:
			return {
				room: data
			};
		default:
			return state;
	}
};

export default reducer;
