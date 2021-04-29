import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class OrderItem extends PureComponent {

	deleteOrder = () => {
		const { order } = this.props;
		const event = this.props.onDeleteOrder;

		if (event) {
			event(order.id);
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
							onClick={this.deleteOrder}>
						Xóa
					</button>
				</td>
			</tr>
		);
	}
}

OrderItem.propTypes = {
	onDeleteOrder: PropTypes.func,
	order: PropTypes.shape({
		id: PropTypes.string,
		roomName: PropTypes.string,
		price: PropTypes.string,
		time: PropTypes.string
	})
}

export default OrderItem;
