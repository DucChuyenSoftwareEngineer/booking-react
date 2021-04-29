import React, { lazy } from "react";

const HomePage = lazy(() => import("./Page/HomePage"));
const DetailPage = lazy(() => import("./Page/DetailPage"));
const OrderPage = lazy(() => import("./Page/OrderPage"));
const RegistrationPage = lazy(() => import("./Page/RegistrationPage"));
const LoginPage = lazy(() => import("./Page/LoginPage"));
const CustomerPage = lazy(() => import("./Page/CustomerPage"));
const AdminPage = lazy(() => import("./Page/AdminPage"));
const HostPage = lazy(() => import("./Page/HostPage"));

export const route = [
	{
		path: "/",
		pageTitle: "Trang chủ",
		main: props => <HomePage {...props} />
	},
	{
		path: "/room/:id/detail",
		pageTitle: "Chi tiêt phòng",
		main: props => <DetailPage {...props} />
	},
	{
		path: "/registration",
		pageTitle: "Đăng ký",
		main: props => <RegistrationPage {...props} />
	},
	{
		path: "/login",
		pageTitle: "Đăng nhập",
		main: props => <LoginPage {...props} />
	},
];

export const protectRoute = [
	{
		path: "/room/:id/order",
		pageTitle: "Đặt phòng",
		main: props => <OrderPage {...props} />
	},
	{
		path: "/customer",
		pageTitle: "Khách hàng",
		main: props => <CustomerPage {...props} />
	},
	{
		path: "/admin",
		pageTitle: "Quản trị",
		main: props => <AdminPage {...props} />
	},
	{
		path: "/host",
		pageTitle: "Host",
		main: props => <HostPage {...props} />
	}
];
