import React, { PureComponent } from "react";
import { Field, reduxForm } from "redux-form";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { validate } from "./validate";
import InputField from "../../Common/Form/InputField";

class SaveForm extends PureComponent {

	handleSubmit = data => {
		const event = this.props.onSave;

		if (event) {
			event(data);
		}
	};

	render() {
		const { handleSubmit } = this.props;

		return (
			<form autoComplete="off" onSubmit={handleSubmit(this.handleSubmit)}>
				<div className="row">
					<div className="col-4 m-auto">
						<div className="mb-3">
							<Field type="text"
								   component={InputField}
								   name="fullName"
								   label="Họ & Tên"
								   className="form-control" />
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-4 m-auto">
						<div className="mb-3">
							<Field type="text"
								   component={InputField}
								   name="legalNo"
								   label="CMND"
								   className="form-control" />
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-4 m-auto">
						<div className="mb-3">
							<Field type="text"
								   component={InputField}
								   name="address"
								   label="Địa chỉ"
								   className="form-control" />
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-4 m-auto">
						<div className="mb-3">
							<Field type="text"
								   component={InputField}
								   name="email"
								   label="Email"
								   className="form-control" />
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-4 m-auto">
						<div className="mb-3">
							<Field type="text"
								   component={InputField}
								   name="phone"
								   label="Phone"
								   className="form-control" />
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-4 m-auto">
						<div className="mb-3">
							<Field type="text"
								   component={InputField}
								   name="map"
								   label="Map"
								   className="form-control" />
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-4 m-auto">
						<div className="mb-3">
							<Field type="text"
								   component={InputField}
								   name="totalBill"
								   label="Tổng số hóa đơn"
								   className="form-control" disabled />
						</div>
					</div>
				</div>
				<div className="mb-3 row">
					<div className="col-sm-7 m-auto">
						<button type="submit"
								className="btn btn-primary w-100"
								style={{marginLeft: "25px"}}>Sửa
						</button>
					</div>
				</div>
			</form>
		);
	}
}

SaveForm.propTypes = {
	onSave: PropTypes.func,
	handleSubmit: PropTypes.func
};

const mapStateToProps = state => ({
	initialValues: state.customer.info
});

const withReduxForm = reduxForm({
	form: "customer_info_form",
	validate,
	enableReinitialize: true
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect, withReduxForm)(SaveForm);
