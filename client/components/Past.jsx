import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';

class Past extends Component {
	render () {
		return (
			<div className='booking'>
                <Button onClick = {() => window.open('http://www.linkedin.com/in/zeninspire', '_blank')}>Venue -1, 02/27/2017</Button>
                <Button onClick = {() => window.open('http://www.github.com/zeninspire', '_blank')}>Venue -2, 02/12/2017, Shenzhen</Button>
                <Button onClick = {() => window.open('https://drive.google.com/open?id=0Bx8IDkDn2v9Xa1dzekdlc014cms', '_blank')}>Venue -3, 01/03/2017</Button>
            </div>		
        )
	}
}

export default Past;
