import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class DetailContent extends PureComponent {

	render() {
		const { room : { name, streetDetail, description } } = this.props;

		return (
			<div className="row">
				<div className="col-8">
					<div className="noidung">
						<div className="tieude_noidung">
							<h6 className="tieude_noidung1">
								Một trong những lựa chọn
								hàng đầu của chúng tôi ở
								Đà Lạt
							</h6>
							{description}
						</div>
						<h6 className="tieude_noidung1">
							Các Loại dịch vụ của khách sạn:
						</h6>
						<div className="loaidv">
							<li>Dịch vụ 24h</li>
							<li> Dịch vụ thức ăn</li>
							<li>Dịch vụ thể thao</li>
						</div>
						<h6 className="tieude_noidung1">
							Các loại dịch vụ ưa chuộng nhấn của khách sạn:
						</h6>
						<div className="loaidv">
							<li><i className="fas fa-wifi"/> Wi-FI miễn phí</li>
							<li><i className="fas fa-parking"/> Chỗ đỗ xe</li>
							<li><i className="fas fa-parking"/> Quày bar</li>
						</div>
						<h6 className="tieude_noidung1">Các loại phòng:</h6>
					</div>
				</div>
				<div className="col-4">
					<div className="hotel_khachsan">
						<div className="name_hotel_1">
							<h6 className="h6">{name}</h6>
							<span className="vitri">
								<p>
									<strong>Vị Trí:</strong> {streetDetail}
								</p>
							</span>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

DetailContent.propTypes = {
	room: PropTypes.shape({
		name: PropTypes.string,
		streetDetail: PropTypes.string,
		description: PropTypes.string
	})
};

export default DetailContent;
