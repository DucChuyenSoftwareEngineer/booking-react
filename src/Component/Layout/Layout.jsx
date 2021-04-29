import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { updatePageTitle } from "../../Util/CommonUtil";
import Navbar from "./Navbar";
import "./style.css";

class Layout extends PureComponent {

	componentDidMount() {
		const { pageTitle } = this.props;

		updatePageTitle(pageTitle);
	}

	render() {
		const { userInfo, children } = this.props;

		return (
			<>
				<Navbar userInfo={userInfo} />
				{children}
				<footer>
					<div className="footer-content">
						<h1 className="h3 logo">BookingRoo</h1>
						<p>Đồ Án Học Viên</p>
					</div>
					<div className="footer-bottom"/>
				</footer>
			</>
		);
	}
}

Layout.propTypes = {
	pageTitle: PropTypes.string,
	userInfo: PropTypes.object,
	children: PropTypes.element
};

export default Layout;
