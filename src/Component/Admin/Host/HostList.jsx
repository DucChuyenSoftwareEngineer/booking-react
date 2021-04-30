import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import HostItem from "./HostItem";

class HostList extends PureComponent {

	componentDidMount() {
		const { $ } = window;

		$(document).ready(() => {
			$("#tblHost").DataTable();
		});
	}

	onViewHostDetail = data => {
		const event = this.props.onViewHostDetail;

		if (event) {
			event(data);
		}

	};

	render() {
		 let { listHost } = this.props;
		 listHost =[
			{
				"fullName":"chu phong 1",
				"email":"chung1.com",
				"phone":"099393939",
				"active":1
			},
			{
				"fullName":"chu phong 2",
				"email":"chungieng@gmail.com",
				"phone":"0245s93939",
				"acive":0
			},
			{
				"fullName":"chu phong 3",
				"email":"ieng@gmail.com",
				"phone":"0788839",
				"active":1
			}

	]

		return (
			<div className="item">
				<div className="w-100">
					<table className="table" id="tblHost">
						<thead>
						<tr>
							<th scope="col">Tên</th>
							<th scope="col">Email</th>
							<th scope="col">Số Điện Thoại</th>
							<th scope="col">Trạng Thái</th>
							<th scope="col">&nbsp;</th>
						</tr>
						</thead>
						<tbody>
						{
							listHost &&
							listHost.map((item, index) => (
								<HostItem
									key={index}
									host={item}
									onViewHostDetail={this.onViewHostDetail} />
							))
						}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}

HostList.propTypes = {
	onViewHostDetail: PropTypes.func,
	listHost: PropTypes.array
};

export default HostList;
