import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";
import reducer from "../Reducer";
import saga from "../Saga";

const configStore = () => {
	const composeEnhancer =
		process.env.NODE_MODE !== "production"
		&& typeof window === "object"
		&& window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
			? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
				shouldHotReload: false,
			})
			: compose();
	const sagaMiddleware = createSagaMiddleware();
	const middlewares = [thunk, sagaMiddleware];
	const enhances = [applyMiddleware(...middlewares)];
	const store = createStore(reducer, composeEnhancer(...enhances));

	sagaMiddleware.run(saga);

	return store;
};

export default configStore;
