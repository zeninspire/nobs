import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Jumbotron, Button } from 'react-bootstrap';

export default () => {
  return (
    <div>
    
    <Jumbotron>
      <div className='container landingText'>
        <h2>Don't wanna miss any gathering with friends and family?</h2><br/>
        <h3>Take a look into your upcoming events!</h3> <br/> <Button bsStyle='info' onClick={() => browserHistory.push('/timeline')}> Log into Facebook </Button>
      </div>
    </Jumbotron>
    <img className="backdrop" src={"http://cdn.wallpapersafari.com/22/51/sGgI4L.jpg"}/>
    </div>
  );
}
