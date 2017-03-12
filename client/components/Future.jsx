import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';

class Future extends Component {
	render () {
		return (
			<div className='booking'>
                <Button onClick = {() => window.open('http://www.linkedin.com/in/zeninspire', '_blank')}>Venue 1, 03/20/2017</Button>
                <Button onClick = {() => window.open('http://www.github.com/zeninspire', '_blank')}>Venue 2, 03/22/2017</Button>
                <Button onClick = {() => window.open('https://drive.google.com/open?id=0Bx8IDkDn2v9Xa1dzekdlc014cms', '_blank')}>Venue 3, 06/11/2017, Hawaii</Button>
            </div>
		)
	}
}

export default Future;

// <FlatButtonExampleComplex />
