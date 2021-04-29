import React from "react";
import PropTypes from "prop-types";

const SelectField = ({
						label,
						input,
						meta: { touched, invalid, error },
						children,
						...otherProps
					}) => (
	<div className="form-group">
		{label && <label className="font-weight-bolder">{label}</label>}
		<select {...input} {...otherProps}>
			{children}
		</select>
		{touched && invalid && <span className="text-danger">{error}</span>}
	</div>
);

SelectField.propTypes = {
	label: PropTypes.string,
	input: PropTypes.object,
	meta: PropTypes.shape({
		touched: PropTypes.bool,
		invalid: PropTypes.bool,
		error: PropTypes.string
	}),
	children: PropTypes.array
};

export default SelectField;
