import React, { Component } from 'react';

class Portfolio extends Component {
	render () {
		return (
			<div>
				<iframe src="http://www.local-spot.com" height="540" width="960">Loca-Spot</iframe>
				<iframe src="https://bash-to-the-trivia.herokuapp.com" height="540" width="960">Trivia</iframe>
				<iframe src="https://bash-to-the-dating.herokuapp.com" height="540" width="960">Video Dating</iframe>
			</div>
		)
	}
}

export default Portfolio;
