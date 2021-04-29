export const validate = values => {
	const error = {};
	let { username, password } = values;

	if (username) {
		username = username.trim();
	}
	if (password) {
		password = password.trim();
	}

	if (!username) {
		error.username = "Vui lòng nhập Tài khoản";
	}

	if (!password) {
		error.password = "Vui lòng nhập Mật Khẩu";
	}

	return error;
}
