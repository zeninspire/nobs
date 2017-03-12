import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import App from './components/App.jsx';
import routes from './routes.jsx';
import reducers from './reducers/reducer_index';
import thunkMiddleware from 'redux-thunk';

// const store = createStore(reducers);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
  applyMiddleware(thunkMiddleware)
));

ReactDOM.render(
	<Provider store={store}>
		<Router history = {browserHistory} routes={routes} />
	</Provider>
	, document.querySelector('.app')
);

