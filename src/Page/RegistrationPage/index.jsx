import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userAction from "../../Action/User";
import SaveForm from "../../Component/Registration/SaveForm";
import "./style.css";

class RegistrationPage extends PureComponent {

	onSave = data => {
		this.props.userAction.registerUser(data);
	};

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-12 mt-3">
						<h3 className="text-center mb-3">Đăng Ký</h3>
					</div>
					<SaveForm onSave={this.onSave} />
				</div>
			</div>
		);
	}
}

RegistrationPage.propTypes = {
	userAction: PropTypes.shape({
		registerUser: PropTypes.func
	})
};

const mapDispatchToProps = dispatch => ({
	userAction: bindActionCreators(userAction, dispatch)
});

export default connect(null, mapDispatchToProps)(RegistrationPage);
