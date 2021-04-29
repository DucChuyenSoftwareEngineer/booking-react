import React from "react";
import PropTypes from "prop-types";

const TextAreaField = ({
						label,
						required,
						input,
						meta: { touched, invalid, error },
						placeholder,
						...otherProps
						}) => (
	<div className="form-group">
		<label className="form-label">{label}</label>
		{required && <>&nbsp;<span className="text-danger">*</span></>}
		<textarea className="form-control" placeholder={placeholder || label} {...otherProps} />
		{touched && invalid && <span className="text-danger">{error}</span>}
	</div>
);

TextAreaField.propTypes = {
	label: PropTypes.string,
	required: PropTypes.bool,
	input: PropTypes.object,
	meta: PropTypes.shape({
		touched: PropTypes.bool,
		invalid: PropTypes.bool,
		error: PropTypes.string
	}),
	placeholder: PropTypes.string
};

export default TextAreaField;
