import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import OrderHistoryItem from "./OrderHistoryItem";

class OrderHistoryList extends PureComponent {

	componentDidMount() {
		const { $ } = window;

		$(document).ready(() => {
			$("#tblHistory").DataTable();
		});
	}

	onViewOrderHistoryDetail = data => {
		const event = this.props.onViewOrderHistoryDetail;

		if (event) {
			event(data);
		}
	};

	render() {
		const { listOrderHistory } = this.props;

		return (
			<div className="item">
				<div className="w-100" style={{overflowY: "scroll", height: "250px"}}>
					<table className="table" id="tblHistory">
						<thead>
						<tr>
							<th scope="col">Tên Phòng</th>
							<th scope="col">Khách hàng</th>
							<th scope="col">Đợt</th>
							<th scope="col">Tổng Tiền</th>
							<th scope="col">&nbsp;</th>
						</tr>
						</thead>
						<tbody>
						{
							listOrderHistory &&
							listOrderHistory.map((item, index) => (
								<OrderHistoryItem
									key={index}
									order={item}
									onViewOrderHistoryDetail={this.onViewOrderHistoryDetail} />
							))
						}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}

OrderHistoryList.propTypes = {
	onViewOrderHistoryDetail: PropTypes.func,
	listOrderHistory: PropTypes.array
};

export default OrderHistoryList;
