import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import * as customerAction from "../../Action/Customer";
import SaveForm from "../../Component/Customer/SaveForm";
import OrderList from "../../Component/Customer/Order/OrderList";
import OrderHistoryList from "../../Component/Customer/OrderHistory/OrderHistoryList";
import "./style.css";

class CustomerPage extends PureComponent {

	constructor(props) {
		super(props);

		this.state = {
			selectedOrderHisHistory: null
		};
	}

	componentDidMount() {
		this.props.customerAction.fetchCustomerInfo();
		this.props.customerAction.fetchCustomerOrder();
		this.props.customerAction.fetchCustomerOrderCompleted();
	}

	onDeleteOrder = data => {
		this.props.customerAction.deleteOrder(data);
	}

	onSave = data => {
		this.props.customerAction.saveCustomerInfo(data);
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
		const { selectedOrderHisHistory } = this.state;
		const { listOrder, listOrderHistory } = this.props;

		return (
			<>
				<div className="section_content">
					<div className="container">
						<div className="section_content_customer">
							<div className="accordion accordion-flush"
								 id="accordionFlushExample">
								<div className="saccordion-item">
									<h2 className="accordion-header"
										id="flush-headingOne">
										<button className="accordion-button collapsed"
												type="button" data-bs-toggle="collapse"
												data-bs-target="#flush-collapseOne"
												aria-expanded="false"
												aria-controls="flush-collapseOne">
											Thông Tin Khách Hàng
										</button>
									</h2>
									<div id="flush-collapseOne"
										 className="accordion-collapse collapse"
										 aria-labelledby="flush-headingOne"
										 data-bs-parent="#accordionFlushExample">
										<div className="p-2">
											<SaveForm onSave={this.onSave} />
										</div>
									</div>
								</div>
								<div className="accordion-item">
									<h2 className="accordion-header"
										id="flush-headingTwo">
										<button
											className="accordion-button collapsed"
											type="button" data-bs-toggle="collapse"
											data-bs-target="#flush-collapseTwo"
											aria-expanded="false"
											aria-controls="flush-collapseTwo">
											Thông Tin Đặt Phòng Đang Duyệt
										</button>
									</h2>
									<div id="flush-collapseTwo"
										 className="accordion-collapse collapse"
										 aria-labelledby="flush-headingTwo"
										 data-bs-parent="#accordionFlushExample">
										<OrderList onDeleteOrder={this.onDeleteOrder}
												   listOrder={listOrder} />
									</div>
								</div>
								<div className="accordion-item">
									<h2 className="accordion-header"
										id="flush-headingThree">
										<button
											className="accordion-button collapsed"
											type="button" data-bs-toggle="collapse"
											data-bs-target="#flush-collapseThree"
											aria-expanded="false"
											aria-controls="flush-collapseThree">
											Lịch Sử Phòng Đã Đặt Thành Công
										</button>
									</h2>
									<div id="flush-collapseThree"
										 className="accordion-collapse collapse"
										 aria-labelledby="flush-headingThree"
										 data-bs-parent="#accordionFlushExample">
										<OrderHistoryList listOrderHistory={listOrderHistory}
														  onViewOrderHistoryDetail={this.onViewOrderHistoryDetail} />
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

CustomerPage.propTypes = {
	listOrder: PropTypes.array,
	listOrderHistory: PropTypes.array,
	customerAction: PropTypes.shape({
		fetchCustomerInfo: PropTypes.func,
		saveCustomerInfo: PropTypes.func,
		fetchCustomerOrder: PropTypes.func,
		fetchCustomerOrderCompleted: PropTypes.func,
		deleteOrder: PropTypes.func
	})
};

const mapStateToProps = ({
							 customer: {
								 listOrder,
								 listOrderHistory
							 }
						 }) => ({
	listOrder,
	listOrderHistory
});

const mapDispatchToProps = dispatch => ({
	customerAction: bindActionCreators(customerAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomerPage);
