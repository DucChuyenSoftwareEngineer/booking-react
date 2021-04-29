import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as adminAction from "../Action/Admin";
import InfoForm from "../Component/Admin/InfoForm";
import HostList from "../Component/Admin/Host/HostList";
import OrderHistoryList from "../Component/Admin/OrderHistory/OrderHistoryList";

class AdminPage extends PureComponent {

	constructor(props) {
		super(props);

		this.state = {
			selectedHost: null,
			selectedOrderHisHistory: null
		}
	}

	componentDidMount() {
		this.props.adminAction.fetchAdminInfo();
		this.props.adminAction.fetchAdminListHost();
		this.props.adminAction.fetchAdminListOrderHistory();
	}

	onSaveAdminInfo = data => {
		this.props.adminAction.saveAdminInfo(data);
	}

	onViewHostDetail = data => {
		this.setState({
			selectedHost: data
		}, () => {
			const { $ } = window;

			$("#hostModal").modal("show");
		});
	};

	onViewOrderHistoryDetail = data => {
		this.setState({
			selectedOrderHisHistory: data
		}, () => {
			const { $ } = window;

			$("#orderHistoryModal").modal("show");
		});
	};

	render() {
		const { selectedHost, selectedOrderHisHistory } = this.state;
		const { listHost, listOrderHistory } = this.props;

		return (
			<>
				<div className="container">
					<div className="section_content_customer">
						<div className="accordion accordion-flush" id="accordionFlush">
							<div className="accordion-item">
								<h2 className="accordion-header" id="flush-headingOne">
									<button className="accordion-button collapsed"
											type="button"
											data-bs-toggle="collapse"
											data-bs-target="#flush-collapseOne"
											aria-expanded="false"
											aria-controls="flush-collapseOne">
										Thông Tin Admin
									</button>
								</h2>
								<div id="flush-collapseOne"
									className="accordion-collapse collapse"
									aria-labelledby="flush-headingOne"
									data-bs-parent="#accordionFlush">
									<InfoForm onSave={this.onSaveAdminInfo} />
								</div>
							</div>
							<div className="accordion-item">
								<h2 className="accordion-header" id="flush-headingTwo">
									<button className="accordion-button collapsed"
											type="button"
											data-bs-toggle="collapse"
											data-bs-target="#flush-collapseTwo"
											aria-expanded="false"
											aria-controls="flush-collapseTwo">
										Danh sách Chủ Phòng Trọ
									</button>
								</h2>
								<div id="flush-collapseTwo"
									className="accordion-collapse collapse"
									aria-labelledby="flush-headingTwo"
									data-bs-parent="#accordionFlush">
									<HostList listHost={listHost}
											onViewHostDetail={this.onViewHostDetail} />
								</div>
							</div>
							<div className="accordion-item">
								<h2 className="accordion-header"
									id="flush-headingThree">
									<button className="accordion-button collapsed"
											type="button"
											data-bs-toggle="collapse"
											data-bs-target="#flush-collapseThree"
											aria-expanded="false"
											aria-controls="flush-collapseThree">
										Lịch Sử Phòng Đã Đặt Thành Công
									</button>
								</h2>
								<div id="flush-collapseThree"
									className="accordion-collapse collapse"
									aria-labelledby="flush-headingThree"
									data-bs-parent="#accordionFlush">
									<OrderHistoryList listOrderHistory={listOrderHistory}
													onViewOrderHistoryDetail={this.onViewOrderHistoryDetail} />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="modal fade" id="hostModal" tabIndex="-1"
					aria-hidden="true">
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title">
									Chủ Trọ
								</h5>
								<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
							</div>
							<div className="modal-body">
								<div className="row">
									<div className="col-3">
										<strong>Họ & Tên:</strong>
									</div>
									<div className="col-7">
										<p>{selectedHost?.fullName}</p>
									</div>
								</div>
								<div className="row">
									<div className="col-3">
										<strong>CMND:</strong>
									</div>
									<div className="col-7">
										<p>{selectedHost?.legalNo}</p>
									</div>
								</div>
								<div className="row">
									<div className="col-3">
										<strong>Địa Chỉ:</strong>
									</div>
									<div className="col-7">
										<p>{selectedHost?.address}</p>
									</div>
								</div>
								<div className="row">
									<div className="col-3"><
										strong>Email:</strong>
									</div>
									<div className="col-7">
										<p>{selectedHost?.email}</p>
									</div>
								</div>
								<div className="row">
									<div className="col-3">
										<strong>Phone:</strong>
									</div>
									<div className="col-7">
										<p>{selectedHost?.phone}</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="modal fade" id="orderHistoryModal" tabIndex="-1"
					aria-hidden="true">
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title">
									Lịch sử đặt phòng
								</h5>
								<button type="button" className="btn-close"
										data-bs-dismiss="modal" aria-label="Close"/>
							</div>
							<div className="modal-body">
								<div className="row">
									<div className="col-3">
										<strong>Họ & Tên :</strong>
									</div>
									<div className="col-7">
										<p>{selectedOrderHisHistory?.fullName}</p>
									</div>
								</div>
								<div className="row">
									<div className="col-3">
										<strong>CMD:</strong>
									</div>
									<div className="col-7">
										<p>{selectedOrderHisHistory?.legalNo}</p>
									</div>
								</div>
								<div className="row">
									<div className="col-3">
										<strong> Địa Chỉ:</strong>
									</div>
									<div className="col-7">
										<p>{selectedOrderHisHistory?.address}</p>
									</div>
								</div>
								<div className="row">
									<div className="col-3">
										<strong>Email:</strong>
									</div>
									<div className="col-7">
										<p>{selectedOrderHisHistory?.email}</p>
									</div>
								</div>
								<div className="row">
									<div className="col-3">
										<strong>Phone:</strong>
									</div>
									<div className="col-7">
										<p>{selectedOrderHisHistory?.email}</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}

AdminPage.propTypes = {
	listHost: PropTypes.array,
	listOrderHistory: PropTypes.array,
	adminAction: PropTypes.shape({
		fetchAdminInfo: PropTypes.func,
		saveAdminInfo: PropTypes.func,
		fetchAdminListHost: PropTypes.func,
		fetchAdminListOrderHistory: PropTypes.func
	})
};

const mapStateToProps = ({
							admin: {
								listHost,
								listOrderHistory
							}
						}) => ({
	listHost,
	listOrderHistory
});

const mapDispatchToProps = dispatch => ({
	adminAction: bindActionCreators(adminAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);
