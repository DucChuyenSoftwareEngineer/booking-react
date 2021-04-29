export const validate = values => {
	const error = {};
	let { fullName, idCard, address, email, phone } = values;

	if (fullName) {
		fullName = fullName.trim();
	}
	if (idCard) {
		idCard = idCard.trim();
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

	if (!fullName) {
		error.fullName = "Vui lòng nhập họ và tên";
	}

	if (!idCard) {
		error.idCard = "Vui lòng nhập CMND";
	}

	if (!address) {
		error.address = "Vui lòng nhập địa chỉ";
	}

	if (!email) {
		error.email = "Vui lòng nhập email";
	}

	if (!phone) {
		error.phone = "Vui lòng nhập điện thoại";
	}

	return error;
}
