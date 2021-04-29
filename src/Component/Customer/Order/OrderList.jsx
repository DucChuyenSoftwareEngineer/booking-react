import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import OrderItem from "./OrderItem";

class RoomList extends PureComponent {

	componentDidMount() {
		const { $ } = window;

		$(document).ready(() => {
			$("#tblRoom").DataTable();
		});
	}

	onDeleteOrder = data => {
		const event = this.props.onDeleteOrder;

		if (event) {
			event(data);
		}
	};

	render() {
		const { listOrder } = this.props;

		return (
			<div className="item">
				<div className="w-100" style={{overflowY: "scroll", height: "250px"}}>
					<table className="table" id="tblRoom">
						<thead>
						<tr>
							<th scope="col">Tên Phòng</th>
							<th scope="col">Giá</th>
							<th scope="col">Thời Gian</th>
							<th scope="col">&nbsp;</th>
						</tr>
						</thead>
						<tbody>
						{
							listOrder &&
							listOrder.map((item, index) => (
								<OrderItem
									key={index}
									order={item}
									onDelete={this.onDeleteOrder} />
							))
						}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}

RoomList.propTypes = {
	onDeleteOrder: PropTypes.func,
	listOrder: PropTypes.array
};

export default RoomList;
