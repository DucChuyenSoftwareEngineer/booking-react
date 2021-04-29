import * as actionType from "../Constant/ActionType";

export const fetchSelectedBookRoom = data => ({
	type: actionType.FETCH_SELECTED_BOOK_ROOM,
	data
});

export const fetchSelectedBookRoomSuccess = data => ({
	type: actionType.FETCH_SELECTED_BOOK_ROOM_SUCCESS,
	data
});


export const bookRoom = data => ({
	type: actionType.BOOK_ROOM,
	data
});
