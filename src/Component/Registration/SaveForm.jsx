import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import InputField from "../Common/Form/InputField";
import SelectField from "../Common/Form/SelectField";

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
					<div className="col-6">
						<div className="mb-3">
							<Field type="text"
								component={InputField}
								name="fullName"
								label="Họ và Tên"
								className="form-control" />
						</div>
					</div>
					<div className="col-6">
						<div className="mb-3">
							<Field type="text"
								component={InputField}
								name="legalNo"
								label="CMDN"
								className="form-control" />
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-6">
						<div className="mb-3">
							<Field type="text"
								component={InputField}
								name="email"
								label="Email"
								className="form-control" />
						</div>
					</div>
					<div className="col-6">
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
					<div className="col-6">
						<div className="mb-3">
							<Field type="text"
								component={InputField}
								name="username"
								label="Tài Khoản"
								className="form-control" />
						</div>
					</div>
					<div className="col-6">
						<div className="mb-3">
							<Field type="text"
								component={InputField}
								name="address"
								label="Địa Chỉ"
								className="form-control" />
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-6">
						<div className="mb-3">
							<Field type="password"
								component={InputField}
								name="password"
								label="Mật Khẩu"
								className="form-control" />
						</div>
					</div>
					<div className="col-6">
						<div className="mb-3">
							<Field component={SelectField}
								name="role"
								label="Phân Quyền"
								className="form-select form-select-lg mb-3"
								aria-label="form-select-lg example">
								<option value="">Phân Quyền</option>
								<option value="1">Hot</option>
								<option value="2">Customer</option>
							</Field>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-4 m-auto">
						<div className="mb-3">
							<button type="submit" className="btn btn-dark w-100">
								Đăng Ký
							</button>
						</div>
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

const withReduxForm = reduxForm({
	form: "user_registration_form"
});

export default withReduxForm(SaveForm);
