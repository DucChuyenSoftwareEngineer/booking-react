export const updatePageTitle = title => {
	document.title = `Booking room - ${title}`;
};

export const formatDecimal = value =>
	value
		? new Intl.NumberFormat("vi-VN", { maximumSignificantDigits: 3 }).format(value)
		: "";
