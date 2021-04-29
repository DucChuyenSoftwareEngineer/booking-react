import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import RoomItem from "./RoomItem";

class RoomList extends PureComponent {

	onViewRoomDetail = data => {
		const event = this.props.onViewRoomDetail;

		if (event) {
			event(data);
		}
	};

	onBookRoom = data => {
		const event = this.props.onBookRoom;

		if (event) {
			event(data);
		}
	};

	render() {
		const { listRoom } = this.props;

		return (
			<div className="container">
				<div className="row">
					{
						listRoom?.length
							? listRoom.map((item, index) => (
								<RoomItem key={index}
										room={item}
										onViewRoomDetail={this.onViewRoomDetail}
										onBookRoom={this.onBookRoom} />
							))
							: <div className="text-center">Chưa có phòng</div>
					}
				</div>
			</div>
		);
	}
}

RoomList.propTypes = {
	listRoom: PropTypes.array,
	onViewRoomDetail: PropTypes.func,
	onBookRoom: PropTypes.func
};

export default RoomList;
