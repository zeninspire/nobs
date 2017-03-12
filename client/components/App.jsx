import React, { Component } from 'react';
import Navigation from './Navigation.jsx';
import Timeline from '../containers/Timeline_container.jsx';


class App extends Component {
	render () {
		return (
			<div>
				<Navigation />
				<Timeline />
		        {this.props.children}
			</div>
		)
	}
}

export default App;
