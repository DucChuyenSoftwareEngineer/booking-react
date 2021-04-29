import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { formatDecimal } from "../../Util/CommonUtil";

class RoomItem extends PureComponent {

	viewRoomDetail = e => {
		const event = this.props.onViewRoomDetail;

		e.preventDefault();

		if (event) {
			const { room: { id } } = this.props;

			event(id);
		}
	};

	bookRoom = e => {
		const event = this.props.onBookRoom;

		e.preventDefault();

		if (event) {
			const { room: { id } } = this.props;

			event(id);
		}
	};

	render() {
		const { room: { name, streetDetail, roomProfileImage, price } } = this.props;

		return (
			<div className="col-4">
				<div className="phong">
					<div className="card">
						<img src={roomProfileImage} alt="" />
						<div className="tieude">
							<a href="#" onClick={this.viewRoomDetail}>
								<strong>{name}</strong>
							</a>
							<p>{streetDetail}</p>
							<hr />
						</div>
						<div className="gia">
							<p>Giá <strong>{formatDecimal(price)}</strong>
							</p>
							<button type="button"
									className="btn btn-outline-warning"
									onClick={this.bookRoom}>
								Đăt Phòng
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

RoomItem.propTypes = {
	room: PropTypes.shape({
		id: PropTypes.string,
		title: PropTypes.string,
		streetDetail: PropTypes.string,
		image: PropTypes.string,
		price: PropTypes.string
	}),
	onViewRoomDetail: PropTypes.func,
	onBookRoom: PropTypes.func
};


export default RoomItem;
