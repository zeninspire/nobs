import React, { Component } from 'react';
import Navigation from './Navigation.jsx';
import Timeline from './Timeline.jsx';


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
