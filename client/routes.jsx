import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App.jsx';
import Timeline from './components/Timeline.jsx';
import Future from './components/Future.jsx';
import Past from './components/Past.jsx';
import Playground from './components/Playground.jsx';

const Wait = () => {
	return (
		<div>
			Default loading page.
		</div>
	)
}

export default (
	<Route path ='' component={App}>
		<Route path='/timeline' component={Timeline} />		
		<Route path='/future' component={Future} />				
		<Route path='/past' component={Past} />		
		<Route path='/playground' component={Playground} />		
		<Route path='/' component={Wait} />
	</Route>
)
