import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import OrderItem from "./OrderItem";

class OrderList extends PureComponent {

	componentDidMount() {
		const { $ } = window;

		$(document).ready(() => {
			$("#tblOrder").DataTable();
		});
	}

	onViewOrderDetail = data => {
		const event = this.props.onViewOrderDetail;

		if (event) {
			event(data);
		}
	};

	render() {
		const { listOrder } = this.props;

		return (
			<div className="item">
			<div className="w-100" style={{overflowY: "scroll", height: "250px"}}>
				<table className="table" id="tblOrder">
					<thead>
					<tr>
						<th scope="col">Tên Phòng</th>
						<th scope="col">Khách hàng</th>
						<th scope="col">Đợt</th>
						<th scope="col">&nbsp;</th>
					</tr>
					</thead>
					<tbody>
					{
						listOrder &&
						listOrder.map((item, index) => (
							<OrderItem
								key={index}
								host={item}
								onViewHostDetail={this.onViewOrderDetail} />
						))
					}
					</tbody>
				</table>
			</div>
		</div>
		);
	}
}

OrderList.propTypes = {
	onViewOrderDetail: PropTypes.func,
	listOrder: PropTypes.array
};

export default OrderList;
