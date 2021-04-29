import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class Gallery extends PureComponent {

	componentDidMount() {
		window.initSwiper();
	}

	render() {
		const { listImage } = this.props;
		const renderImage = listImage?.map((item, index) => (
			<div key={index} className="swiper-slide"
				style={{backgroundImage: `url(${item})`}} />
		));

		return (
			<div className="section_slider">
				<div className="swiper-container gallery-top">
					<div className="swiper-wrapper">
						{renderImage}
					</div>
					<div className="swiper-button-next swiper-button-white" />
					<div className="swiper-button-prev swiper-button-white" />
				</div>
				<div className="swiper-container gallery-thumbs">
					<div className="swiper-wrapper">
						{renderImage}
					</div>
				</div>
			</div>
		);
	}
}

Gallery.propTypes = {
	listImage: PropTypes.array
};

export default Gallery;
