import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class OrderHistoryItem extends PureComponent {

	viewOrderHistoryDetail = () => {
		const { order } = this.props;
		const event = this.props.onViewOrderHistoryDetail;

		if (event) {
			event(order);
		}
	};

	render() {
		const { order: { roomName, price, time } } = this.props;

		return (
			<tr>
				<th scope="row">{roomName}</th>
				<td>{price}</td>
				<td>{time}</td>
				<td>
					<button type="button" className="btn btn-danger"
							onClick={this.viewOrderHistoryDetail}>
						Xem
					</button>
				</td>
			</tr>
		);
	}
}

OrderHistoryItem.propTypes = {
	order: PropTypes.shape({
		roomName: PropTypes.string,
		price: PropTypes.string,
		time: PropTypes.string
	}),
	onViewOrderHistoryDetail: PropTypes.func
}

export default OrderHistoryItem;
