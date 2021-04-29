import * as actionType from "../Constant/ActionType";

export const fetchListRoom = () => ({
	type: actionType.FETCH_LIST_ROOM
});

export const fetchListRoomSuccess = data => ({
	type: actionType.FETCH_LIST_ROOM_SUCCESS,
	data
});

export const updateRoomSearchSco = data => ({
	type: actionType.UPDATE_ROOM_SEARCH,
	data
});

export const fetchRoom = data => ({
	type: actionType.FETCH_ROOM,
	data
});

export const fetchRoomSuccess = data => ({
	type: actionType.FETCH_ROOM_SUCCESS,
	data
});
