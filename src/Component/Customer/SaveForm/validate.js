export const validate = values => {
	const error = {};
	let { fullName, legalNo, address, email, phone, map } = values;

	if (fullName) {
		fullName = fullName.trim();
	}
	if (legalNo) {
		legalNo = legalNo.trim();
	}
	if (address) {
		address = address.trim();
	}
	if (email) {
		email = email.trim();
	}
	if (phone) {
		phone = phone.trim();
	}
	if (map) {
		map = map.trim();
	}

	if (!fullName) {
		error.fullName = "Vui lòng nhập Họ & Tên";
	}
	if (!legalNo) {
		error.legalNo = "Vui lòng nhập CMND";
	}
	if (!address) {
		error.address = "Vui lòng nhập Địa chỉ";
	}
	if (!email) {
		error.email = "Vui lòng nhập Email";
	}
	if (!phone) {
		error.phone = "Vui lòng nhập Phone";
	}
	if (!map) {
		error.map = "Vui lòng nhập Map";
	}

	return error;
}
