import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as orderAction from "../../Action/Order";
import SaveForm from "../../Component/Order/SaveForm";
import img40888968 from "../../Assets/img/40888968.jpg";
import "./style.css";

class OrderPage extends PureComponent {

	componentDidMount() {
		const { history, match } = this.props;
		const { id } = match.params;

		if (id) {
			this.props.orderAction.fetchSelectedBookRoom(id);
		} else {
			history.push("/");
		}
	}

	onSave = data => {
		const { id } = this.props.match.params;

		if (id) {
			const formData = {
				id,
				...data
			}
			this.props.orderAction.bookRoom(formData);
		}
	};

	render() {
		return (
			<>
				<div className="section_slider">
					<div className="section_slider_background">
						<img src={img40888968} alt="" />
					</div>
				</div>
				<SaveForm onSave={this.onSave} />
			</>
		);
	}
}

OrderPage.propTypes = {
	orderAction: PropTypes.shape({
		fetchSelectedBookRoom: PropTypes.func,
		bookRoom: PropTypes.func
	}),
	history: PropTypes.shape({
		push: PropTypes.func
	}),
	match: PropTypes.shape({
		params: PropTypes.shape({
			id: PropTypes.string
		})
	})
};

const mapDispatchToProps = dispatch => ({
	orderAction: bindActionCreators(orderAction, dispatch)
});

export default connect(null, mapDispatchToProps)(OrderPage);
