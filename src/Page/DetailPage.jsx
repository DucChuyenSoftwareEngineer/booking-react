import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as roomAction from "../Action/Room";
import Info from "../Component/Detail/Info";
import Gallery from "../Component/Detail/Gallery";
import DetailContent from "../Component/Detail/DetailContent";

class DetailPage extends PureComponent {

	componentDidMount() {
		const { match } = this.props;
		const { id } = match.params;

		if (id) {
			this.props.roomAction.fetchRoom(id);
		}
	}

	render() {
		const { room } = this.props;

		return (
			<div className="container">
				<div className="row">
					<div className="col-12">
						{ room && <Info room={room} />}
						<div className="section_content">
							<div className="container">
								{ room && <Gallery listImage={room.roomImgList} />}
								<div className="conten_chitiet">
									{ room && <DetailContent room={room} />}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

DetailPage.propTypes = {
	room: PropTypes.shape({
		name: PropTypes.string,
		streetDetail: PropTypes.string,
		roomImgList: PropTypes.array,
		description: PropTypes.string
	}),
	roomAction: PropTypes.shape({
		fetchRoom: PropTypes.func
	}),
	match: PropTypes.shape({
		params: PropTypes.shape({
			id: PropTypes.string
		})
	})
};

const mapStateToProps = ({ room: { selected: room }}) => ({
	room
});

const mapDispatchToProps = dispatch => ({
	roomAction: bindActionCreators(roomAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);
