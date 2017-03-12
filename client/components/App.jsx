import React, { Component } from 'react';
import Navigation from './Navigation.jsx';

class App extends Component {
	render () {
		return (
			<div>
        <img className="backdrop" src={"http://cdn.wallpapersafari.com/22/51/sGgI4L.jpg"}/>
				<Navigation />
		        {this.props.children}
			</div>
		)
	}
}

export default App;
