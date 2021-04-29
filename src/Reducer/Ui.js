import * as actionType from "../Constant/ActionType";

const initState = {
	blocking: false,
	runningRequest: 0
};

const reducer = (state = initState, { type }) => {
	switch (type) {
		case actionType.SHOW_LOADING:
			return updateState(state);
		case actionType.HIDE_LOADING:
			return updateState(state, -1);
		default:
			return state;
	}
};

const updateState = (state, dir = 1) => {
	let { runningRequest } = state;

	runningRequest += dir;
	return {
		...state,
		runningRequest,
		blocking: runningRequest > 0
	};
}

export default reducer;
