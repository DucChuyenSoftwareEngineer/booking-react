import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import InputField from "../../Common/Form/InputField";
import TextAreaField from "../../Common/Form/TextAreaField";
import { validate } from "./validate";
import { formatDecimal } from "../../../Util/CommonUtil";

class SaveForm extends PureComponent {

	handleSubmit = data => {
		const event = this.props.onSave;

		if (event) {
			event(data);
		}
	};

	render() {
		const { initialValues: { price }, handleSubmit } = this.props;
		const priceText = formatDecimal(price);

		return (
			<form autoComplete="off" onSubmit={handleSubmit(this.handleSubmit)}>
				<div className="section_content">
					<div className="container">
						<div className="item">
							<div className="row">
								<div className="col-6">
									<div className="mb-3">
										<Field type="text"
											component={InputField}
											name="customerName"
											label="Họ & Tên"
											className="form-control"
											disabled />
									</div>
								</div>
								<div className="col-6">
									<div className="mb-3">
										<Field type="text"
											component={InputField}
											name="name"
											label="Tên Phòng"
											className="form-control"
											disabled />
									</div>
								</div>
								<div className="col-12">
									<div className="mb-3">
										<Field type="text"
											component={TextAreaField}
											name="note"
											label="Ghi Chú"
											className="form-control"
											placeholder="Yêu cần bạn nhập thông tin những người cùng phòng bao gồm tên ,số điện thoại,email"
											rows="3" />
									</div>
								</div>
								<div className="col-6">
									<div className="mb-3">
										<Field type="text"
											component={InputField}
											name="hostFullName"
											label="Tên Chủ"
											className="form-control"
											disabled />
									</div>
								</div>
								<div className="col-6">
									<label className="form-label">Giá</label>
									<div className="input-group mb-3">
										<input className="form-control"
											type="text"
											placeholder="Giá"
											value={priceText}
											disabled />
										<span className="input-group-text">VND</span>
									</div>
								</div>
								<div className="col-6">
									<div className="m-auto">
										<button type="submit"
												className="btn btn-primary">
											Gửi cho chủ phòng
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</form>
		);
	}
}

SaveForm.propTypes = {
	onSave: PropTypes.func,
	handleSubmit: PropTypes.func,
	initialValues: PropTypes.shape({
		price: PropTypes.string
	})
};

const mapStateToProps = ({
							order: {
								room: {
									customerName,
									name,
									hostFullName,
									price
								}
							}
						}) => ({
	initialValues: {
		customerName,
		name,
		hostFullName,
		price
	}
});

const withReduxForm = reduxForm({
	form: "room_order_form",
	enableReinitialize: true,
	validate
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect, withReduxForm)(SaveForm);
