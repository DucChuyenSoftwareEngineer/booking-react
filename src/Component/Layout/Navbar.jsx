import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Navbar extends PureComponent {

	render() {
		const { userInfo } = this.props;

		return (
			<nav className="navbar navbar-light bg-dark">
					<div className="container-fluid">
						<Link to="/" className="navbar-brand">
							<h1 className="h3 logo">BookingRoo</h1>
						</Link>
						<div className="setion_menu d-flex">
							{
								userInfo
									? <>
										<a href="#">{userInfo.username} </a>
										<p>&nbsp;|&nbsp;</p>
										<a href="#">Giỏ Hàng</a>
									</>
									: <>
										<Link to="/login">
											Đăng nhập
										</Link>
										<p>&nbsp;|&nbsp;</p>
										<Link to="/registration">
											Đăng ký
										</Link>
									</>
							}
						</div>
					</div>
				</nav>
		);
	}
}

Navbar.propTypes = {
	userInfo: PropTypes.shape({
		username: PropTypes.string
	})
};


export default Navbar;
