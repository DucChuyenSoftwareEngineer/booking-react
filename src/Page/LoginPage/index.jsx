import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { Redirect } from "react-router"
import { connect } from "react-redux";
import * as userAction from "../../Action/User";
import LoginForm from "../../Component/Login/LoginForm";
import "./style.css";

class LoginPage extends PureComponent {

	onLogin = data => {
		this.props.userAction.login(data);
	};

	render() {
		const { userInfo } = this.props;

		if (userInfo) {
			return <Redirect to="/" />
		}

		return (
			<div className="container">
				<div className="row d-block">
					<div className="col-12 m-auto mt-3">
						<h3 className="text-center mb-3">Đăng Nhập</h3>
					</div>
					<LoginForm onLogin={this.onLogin} />
				</div>
			</div>
		);
	}
}

LoginPage.propTypes = {
	userInfo: PropTypes.object,
	userAction: PropTypes.shape({
		login: PropTypes.func
	})
};

const mapDispatchToProps = dispatch => ({
	userAction: bindActionCreators(userAction, dispatch)
});

export default connect(null, mapDispatchToProps)(LoginPage);
