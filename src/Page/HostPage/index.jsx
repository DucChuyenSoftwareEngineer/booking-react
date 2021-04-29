import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as hostAction from "../../Action/Host";
import InfoForm from "../../Component/Host/InfoForm";
import OrderList from "../../Component/Host/Order/OrderList";
import OrderHistoryList from "../../Component/Host/OrderHistory/OrderHistoryList";
import "./style.css";

class HostPage extends PureComponent {

	constructor(props) {
		super(props);

		this.state = {
			selectedOrder: null,
			selectedOrderHisHistory: null
		};
	}

	componentDidMount() {
		this.props.hostAction.fetchHostInfo();
		this.props.hostAction.fetchHostListOrder();
		this.props.hostAction.fetchHostListOrderHistory();
	}

	onSaveHostInfo = data => {
		this.props.hostAction.saveHostInfo(data);
	}

	onViewOrderDetail = data => {
		this.setState({
			selectedOrder: data
		}, () => {
			const { $ } = window;

			$("#orderModal").modal("show");
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
		const { selectedOrder, selectedOrderHisHistory } = this.state;
		const { listOrder, listOrderHistory } = this.props;

		return (
			<>
				<div className="section_content">
					<div className="container">
						<div className="section_content_customer">
							<div className="accordion accordion-flush" id="accordionFlush">
								<div className="accordion-item">
									<h2 className="accordion-header" id="flush-headingOne">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
											Thông Tin Chủ Phòng
										</button>
									</h2>
									<div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne"
										data-bs-parent="#accordionFlush">
										<InfoForm onSave={this.onSaveHostInfo} />
									</div>
								</div>
								<div className="accordion-item">
									<h2 className="accordion-header" id="flush-headingTwo">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
											Khách Hàng Cần Duyệt
										</button>
									</h2>
									<div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
										data-bs-parent="#accordionFlush">
										<OrderList listOrder={listOrder}
													onViewOrderDetail={this.onViewOrderDetail}	/>
									</div>
								</div>
								<div className="accordion-item">
									<h2 className="accordion-header" id="flush-headingThree">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
											Lịch Sử Phòng Đã Đặt Thành Công
										</button>
									</h2>
									<div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree"
										data-bs-parent="#accordionFlush">
										<OrderHistoryList listOrderHistory={listOrderHistory}
															onViewOrderHistoryDetail={this.onViewOrderHistoryDetail} />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="modal fade" id="orderModal" tabIndex="-1"
					aria-hidden="true">
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title">Khách Hàng</h5>
								<button type="button" className="btn-close"
										data-bs-dismiss="modal" aria-label="Close"/>
							</div>
							<div className="modal-body">
								<div className="row">
									<div className="col-3">
										<strong>Họ & Tên :</strong>
									</div>
									<div className="col-7">
										<p>{selectedOrder?.customerName}</p>
									</div>
								</div>
								<div className="row">
									<div className="col-3">
										<strong>Tên Phòng :</strong>
									</div>
									<div className="col-7">
										<p>{selectedOrder?.hotelName}</p>
									</div>
								</div>
								<div className="row">
									<div className="col-3">
										<strong>Giá :</strong>
									</div>
									<div className="col-7">
										<p>{selectedOrder?.price}</p>
									</div>
								</div>
								<div className="row">
									<div className="col-3">
										<strong>Ghi Chú :</strong>
									</div>
									<div className="col-7">
										<p>{selectedOrder?.note}</p>
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


HostPage.propTypes = {
	listOrder: PropTypes.array,
	listOrderHistory: PropTypes.array,
	hostAction: PropTypes.shape({
		fetchHostInfo: PropTypes.func,
		saveHostInfo: PropTypes.func,
		fetchHostListOrder: PropTypes.func,
		fetchHostListOrderHistory: PropTypes.func
	})
};

const mapStateToProps = ({
							host: {
								listOrder,
								listOrderHistory
							}
						}) => ({
	listOrder,
	listOrderHistory
});

const mapDispatchToProps = dispatch => ({
	hostAction: bindActionCreators(hostAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(HostPage);
