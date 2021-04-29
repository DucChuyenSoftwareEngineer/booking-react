import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class HostItem extends PureComponent {

	viewHostDetail = e => {
		const { host } = this.props;
		const event = this.props.onViewHostDetail;

		e.preventDefault();

		if (event) {
			event(host);
		}
	};

	render() {
		const { host: { fullName, email, phone } } = this.props;

		return (
			<tr>
				<th>{fullName}</th>
				<td>{email}</td>
				<td>{phone}</td>
				<td>
					<a href="#" onClick={this.viewHostDetail}>
						Chi tiết
					</a>
				</td>
			</tr>
		);
	}
}

HostItem.propTypes = {
	onViewHostDetail: PropTypes.func,
	host: PropTypes.shape({
		fullName: PropTypes.string,
		email: PropTypes.string,
		phone: PropTypes.string
	})
};

export default HostItem;
