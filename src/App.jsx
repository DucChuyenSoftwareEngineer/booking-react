import React, { PureComponent, Suspense } from "react";
import { Route, Switch, withRouter } from "react-router";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import BlockUi from "react-block-ui";
import Loader from "react-loaders";
import { ToastContainer } from "react-toastify";
import Layout from "./Component/Layout/Layout";
import LoginPage from "./Page/LoginPage";
import { protectRoute, route } from "./route";
import * as commonAction from "./Action";
import "react-block-ui/style.css";
import "loaders.css/loaders.min.css";
import "react-toastify/dist/ReactToastify.css";

class App extends PureComponent {

	componentDidUpdate( { location: { pathname } }) {
		if (this.props.location.pathname !== pathname) {
			this.props.commonAction.resetState();
		}
	}

	renderProtectRoute = () => protectRoute.map((item, i) => {
		const { userInfo } = this.props;
		const { path, pageTitle, ...otherProps } = item;
		let child;

		return (
			<Route key={i} path={path} exact render={routeProps => {
				const childProps = {
					userInfo,
					...otherProps,
					...routeProps
				};

				// if (userInfo) {
					child = <item.main {...childProps} />;
				// } else {
				// 	child = <LoginPage {...childProps} />;
				// }

				return this.renderLayout(pageTitle, userInfo, child);
			}} />
		);
	});

	renderMainRoute = () => route.map((item, i) => {
		const { userInfo } = this.props;
		const { path, pageTitle, ...otherProps } = item;

		return (
			<Route key={i} path={path} exact render={routeProps => {
				const childProps = {
					userInfo,
					...otherProps,
					...routeProps
				};
				const child = <item.main {...childProps} />;

				return this.renderLayout(pageTitle, userInfo, child);
			}} />
		);
	});

	renderLayout = (pageTitle, userInfo, child) => (
		<Layout userInfo={userInfo} pageTitle={pageTitle}>
			{child}
		</Layout>
	);

	render() {
		const { blocking } = this.props;

		return (
			<div className="App">
				<BlockUi tag="div" blocking={blocking} loader={
					<Loader active type="ball-triangle-path" color="#3699FF" />
				}>
					<Suspense fallback="Đang tải....">
						<Switch>
							{this.renderProtectRoute()}
							{this.renderMainRoute()}
						</Switch>
					</Suspense>
				</BlockUi>
				<ToastContainer />
			</div>
		);
	}
}

App.propTypes = {
	blocking: PropTypes.bool,
	userInfo: PropTypes.object,
	commonAction: PropTypes.shape({
		resetState: PropTypes.func
	}),
	history: PropTypes.shape({
		push: PropTypes.func
	}),
	location: PropTypes.shape({
		pathname: PropTypes.string
	})
};

const mapStateToProps = ({
							ui: { blocking },
							user: { userInfo }
						}) => ({
	blocking,
	userInfo
});

const mapDispatchToProps = dispatch => ({
	commonAction: bindActionCreators(commonAction, dispatch)
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, withRouter)(App);
