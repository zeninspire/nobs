import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App.jsx';
import Timeline from './Containers/TimelineView.jsx';
import Future from './components/Future.jsx';
import Past from './components/Past.jsx';
import Recs from './components/Recs.jsx';

const Wait = () => {
	return (
		<div>
			Default loading page.
		</div>
	)
}

export default (
	<Route path ='/' component={App}>
		<Route path='/future' component={Future} />				
		<Route path='/past' component={Past} />		
		<Route path='/recs' component={Recs} />		
		<Route path='/wait' component={Wait} />
	</Route>
)
