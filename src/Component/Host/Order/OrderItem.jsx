import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class OrderItem extends PureComponent {

	viewOrderDetail = () => {
		const { order } = this.props;
		const event = this.props.onViewOrderDetail;

		if (event) {
			event(order);
		}
	};

	render() {
		const { order: { hotelName, customerName } } = this.props;

		return (
			<tr>
				<td>{hotelName}</td>
				<td>
					<a href="#" onClick={this.viewOrderDetail}>
						{customerName}
					</a>
				</td>
				<td>5</td>
				<td>
					<button type="button" className="btn btn-danger">Duyệt</button>
				</td>
			</tr>
		);
	}
}

OrderItem.propTypes = {
	onViewOrderDetail: PropTypes.func,
	order: PropTypes.shape({
		hotelName: PropTypes.string,
		customerName: PropTypes.string
	})
}

export default OrderItem;
