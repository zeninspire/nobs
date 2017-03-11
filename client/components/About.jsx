import React, { Component } from 'react';
import Links from './Links.jsx';

class About extends Component {
	render () {
		return (
			<div>
				THIS IS THE HEADER.
				<Links />
		        {this.props.children}
			</div>
		)
	}
}

export default About;
