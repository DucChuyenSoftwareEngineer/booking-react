import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { compose } from "redux";
import { validate } from "./validate";
import InputField from "../../Common/Form/InputField";

class InfoForm extends PureComponent {

	handleSubmit = data => {
		const event = this.props.onSave;

		if (event) {
			event(data);
		}
	};

	render() {
		const { handleSubmit } = this.props;

		return (
			<form autoComplete="off" onSubmit={handleSubmit(this.handleSubmit)}>
				<div className="item">
					<div className="row">
						<div className="row col-8">
							<div className=" mb-3 col-6 ">
								<Field type="text"
										component={InputField}
										name="fullName"
										label="Họ & Tên"
										className="form-control" />
							</div>
							<div className=" mb-3 col-6 ">
								<Field type="text"
										component={InputField}
										name="idCard"
										label="CMDN"
										className="form-control" />
							</div>
							<div className=" mb-3 col-6 ">
								<Field type="text"
										component={InputField}
										name="address"
										label="Địa Chỉ"
										className="form-control" />
							</div>
							<div className=" mb-3 col-6">
								<Field type="text"
										component={InputField}
										name="email"
										label="email"
										className="form-control" />
							</div>
							<div className=" mb-3 col-6">
								<Field type="text"
										component={InputField}
										name="phone"
										label="Điện thoại"
										className="form-control" />
							</div>
							<div className=" mb-3 col-6">
								<Field type="text"
										component={InputField}
										name="map"
										label="Địa chỉ trên bản đồ"
										className="form-control" />
							</div>
							<div className=" mb-3">
								<div className="col-sm-4">
									<button type="submit"
											className="btn btn-primary w-100">
										Sửa
									</button>
								</div>
							</div>
						</div>
						<div className="col-3"
						style={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center"}}>
							<Field type="text"
									component={InputField}
									name="total"
									label="Tổng Số Doanh Thu"
									className="form-control"
									disabled />
						</div>
					</div>
				</div>
			</form>
		);
	}
}

InfoForm.propTypes = {
		onSave: PropTypes.func,
			handleSubmit: PropTypes.func
	};

const mapStateToProps = ({
		admin: {
			info: {
				fullName,
				idCard,
				address,
				email,
				phone,
				map,
				total
			}
		}
	}) => ({
		initialValues: {
			fullName,
			idCard,
			address,
			email,
			phone,
			map,
			total
		}
	});

const withReduxForm = reduxForm({
		form: "admin_info_form",
			enableReinitialize: true,
			validate
	});

const withConnect = connect(mapStateToProps);

export default compose(withConnect, withReduxForm)(InfoForm);
