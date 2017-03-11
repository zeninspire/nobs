import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App.jsx';
import About from './components/About.jsx';
import Portfolio from './components/Portfolio.jsx';
import Playground from './components/Playground.jsx';

const Wait = () => {
	return (
		<div>
			...
		</div>
	)
}

export default (
	<Route path ='' component={App}>
		<Route path='/about' component={About} />		
		<Route path='/portfolio' component={Portfolio} />		
		<Route path='/playground' component={Playground} />		
		<Route path='/' component={Wait} />
	</Route>
)
