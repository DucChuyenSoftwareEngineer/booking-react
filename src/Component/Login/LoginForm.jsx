import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import { validate } from "./validate";
import InputField from "../Common/Form/InputField";

class LoginForm extends PureComponent {

	handleSubmit = data => {
		const event = this.props.onLogin;

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
									name="username"
									label="Tài Khoản"
									className="form-control" />
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-4 m-auto">
						<div className="mb-3">
							<Field type="password"
									component={InputField}
									name="password"
									label="Mật Khẩu"
									className="form-control" />
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-4 m-auto">
						<div className="mb-3">
							<button type="submit" className="btn btn-dark w-100">
								Đăng Nhập
							</button>
						</div>
					</div>
				</div>
			</form>
		);
	}
}

LoginForm.propTypes = {
	onLogin: PropTypes.func,
	handleSubmit: PropTypes.func
};

const withReduxForm = reduxForm({
	form: "login_form",
	validate
});

export default withReduxForm(LoginForm);
