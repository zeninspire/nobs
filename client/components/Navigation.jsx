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
                            <Navbar.Text>
                                Signed in as: John Dough
                            </Navbar.Text>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <NavItem eventKey={1} href="#" onClick={() => browserHistory.push("/about")}>Booked Venues</NavItem>
                            <NavItem eventKey={2} onClick={() => browserHistory.push("/portfolio")}>Past Venues</NavItem>
                        </Nav>
                    </Navbar.Collapse>    
                </Navbar>
			</div>
		)
	}
}

export default Navigation;
