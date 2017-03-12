import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';

class Event extends Component {
	render () {
		return (
			<div className='event'>
				<Button>
                This is reserved for poped-up event from timeline. 
				</Button>
            </div>	
        )
	}
}

export default Event;
