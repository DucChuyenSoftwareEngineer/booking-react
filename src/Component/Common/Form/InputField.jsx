import React from "react";
import PropTypes from "prop-types";

const InputField = ({
						label,
						required,
						input,
						meta: { touched, invalid, error },
						...otherProps
					}) => (
	<div className="form-group">
		<label className="form-label">{label}</label>
		{required && <>&nbsp;<span className="text-danger">*</span></>}
		<input placeholder={label} {...input} {...otherProps} />
		{touched && invalid && <span className="text-danger">{error}</span>}
	</div>
);

InputField.propTypes = {
	label: PropTypes.string,
	input: PropTypes.object,
	required: PropTypes.bool,
	meta: PropTypes.shape({
		touched: PropTypes.bool,
		invalid: PropTypes.bool,
		error: PropTypes.string
	})
};

export default InputField;
