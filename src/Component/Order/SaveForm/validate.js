export const validate = values => {
	const error = {};
	let { note } = values;

	if (note) {
		note = note.trim();
	}

	if (!note) {
		error.note = "Vui lòng nhập nội dung ghi chú";
	}

	return error;
}
