import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import SelectField from "../Common/Form/SelectField";

class SearchForm extends PureComponent {

	handleSubmit = data => {
		const event = this.props.onSearch;

		if (event) {
			event(data);
		}
	};

	render() {
		const { handleSubmit } = this.props;

		return (
			<div className="section-timkiem">
				<form autoComplete="off" onSubmit={handleSubmit(this.handleSubmit)}>
					<div className="container mt-2">
						<div className="row">
							<div className="col-3">
								<Field component={SelectField}
									name="city"
									className="form-select"
									aria-label="Default select example">
									<option value="">Chọn Thành Phố & Tỉnh</option>
									<option value="1">Hải Phòng</option>
									<option value="2">Hà Nội</option>
									<option value="3">TP.Hồ Chí Minh</option>
								</Field>
							</div>
							<div className="col-2">
								<Field component={SelectField}
									name="area"
									className="form-select"
									aria-label="Default select example">
									<option value="">Diện Tích</option>
									<option value="1">1m2</option>
									<option value="2">46m2</option>
									<option value="3">7m2</option>
								</Field>
							</div>
							<div className="col-2">
								<Field component={SelectField}
									name="type"
									className="form-select"
									aria-label="Default select example">
									<option value="">Loại</option>
									<option value="1">vip</option>
									<option value="2">46m2</option>
									<option value="3">7m2</option>
								</Field>
							</div>
							<div className="col-3">
								<Field component={SelectField}
									name="price"
									className="form-select"
									aria-label="Default select example">
									<option value="">Giá</option>
									<option value="1">100000000</option>
									<option value="2">500000000</option>
									<option value="3">7m2</option>
								</Field>
							</div>
							<div className="col-2">
								<button type="submit" className="btn btn-primary">
									Tìm Kiếm
								</button>
							</div>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

SearchForm.propTypes = {
	onSearch: PropTypes.func,
	handleSubmit: PropTypes.func
};

const mapStateToProps = ({
							room: {
								list: {
									sco: {
										city,
										area,
										type,
										price
									}
								}
							}
						}) => ({
	initialValues: {
		city,
		area,
		type,
		price
	}
});

const withReduxForm = reduxForm({
	form: "form_search_form",
	enableReinitialize: true
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect, withReduxForm)(SearchForm);
