import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Button, Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class Navigation extends Component {
	render () {
		return (
			<div>
                <Navbar fluid>
                    <Navbar.Header>
                        <Navbar.Brand>
                        <a onClick={() => browserHistory.push("/about")}>Whichever user that logs in from Facebook</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Nav>
                    <NavItem eventKey={1} href="#" onClick={() => browserHistory.push("/about")}>[used to be about me] but this should be BOOKED FUTURE EVENTS</NavItem>
                    <NavItem eventKey={2} onClick={() => browserHistory.push("/portfolio")}>[used to be portfolio] but this SHould be PAST EVENTS</NavItem>
                    <NavDropdown eventKey={3} title="Playground" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1}>Action1</MenuItem>                        
                    </NavDropdown>
                    </Nav>
                </Navbar>
			</div>
		)
	}
}

export default Navigation;
