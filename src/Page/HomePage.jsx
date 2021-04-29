import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as roomAction from "../Action/Room";
import SearchForm from "../Component/Home/SearchForm";
import RoomList from "../Component/Home/RoomList";

class HomePage extends PureComponent {

	componentDidMount() {
		this.props.roomAction.fetchListRoom();
	}

	onSearch = data => {
		this.props.roomAction.updateRoomSearchSco(data);
		this.props.roomAction.fetchListRoom();
	};

	onViewRoomDetail = data => {
		const { history } = this.props;

		history.push(`/room/${data}/detail`);
	};

	onBookRoom = data => {
		const { history } = this.props;

		history.push(`/room/${data}/order`);
	};

	render() {
		const { listRoom } = this.props;

		return (
			<>
				<SearchForm onSearch={this.onSearch} />
				<div className="section_danhsach">
					<p>Danh sách</p>
					<h6>Thuê Nhà và Khách Sạn</h6>
				</div>
				<div className="section_hienthi mt20">
					<RoomList listRoom={listRoom}
								onViewRoomDetail={this.onViewRoomDetail}
								onBookRoom={this.onBookRoom} />
				</div>
			</>
		);
	}
}

HomePage.propTypes = {
	roomAction: PropTypes.shape({
		fetchListRoom: PropTypes.func,
		updateRoomSearchSco: PropTypes.func,
		bookRoom: PropTypes.func
	}),
	listRoom: PropTypes.array,
	history: PropTypes.shape({
		push: PropTypes.func
	})
};

const mapStateToProps = ({ room: { list: { data: listRoom } } }) => ({
	listRoom
});

const mapDispatchToProps = dispatch => ({
	roomAction: bindActionCreators(roomAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
