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
		const { listHost } = this.props;

		return (
			<div className="item">
				<div className="w-100" style={{overflowY: "scroll", height: "250px"}}>
					<table className="table" id="tblHost">
						<thead>
						<tr>
							<th scope="col">Tên</th>
							<th scope="col">Email</th>
							<th scope="col">Số Điện Thoại</th>
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
