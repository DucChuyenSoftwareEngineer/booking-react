import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class Info extends PureComponent {

	render() {
		const {
			room: {
				name,
				streetDetail,
				totalRating,
				mapLink
			}
		} = this.props;

		return (
			<div className="section_tieude">
				<div className="container">
					<div className="section_name">
						<h2 className="hotel_name">
							<span className="hp_hotel">Khách sạn</span>
							{name}
						</h2>
						{totalRating &&
							<div className="star">
								{
									Array(Math.round(totalRating))
									.fill()
									.map((_, i) => (
										<span key={i}><i className="fas fa-star"/></span>
									))
								}
							</div>
						}
						<div className="like">
							<i className="fas fa-thumbs-up"/>
						</div>
					</div>
					<div className="section_maps">
						<i className="fas fa-map-marker-alt maps"/>
						<p> {streetDetail}</p>_
						{
							mapLink &&
							<a href={mapLink}
								target="_blank"
								rel="noopener noreferrer"
								className="maps_nhan"
								role="button">
								Hiển thị bản đồ
							</a>
						}
					</div>
				</div>
			</div>
		);
	}
}

Info.propTypes = {
	room: PropTypes.shape({
		name: PropTypes.string,
		streetDetail: PropTypes.string,
		totalRating: PropTypes.number,
		mapLink: PropTypes.string
	})
};

export default Info;
