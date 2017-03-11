import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App.jsx';
import routes from './routes.jsx';
import reducers from './reducers/reducer_index';

const store = createStore(reducers);

ReactDOM.render(
	<Provider store={store}>
		<Router history = {browserHistory} routes={routes} />
	</Provider>
	, document.querySelector('.app')
);

