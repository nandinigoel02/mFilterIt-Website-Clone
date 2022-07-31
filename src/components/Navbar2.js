import React from "react";
// import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from 'react-bootstrap/Button';

function BasicExample() {
	return (
		<Navbar bg="dark" variant="dark" expand="lg" sticky="top">
			<Navbar.Brand href="#home">
				<img src="/logo.png" class="logo logoDefault lazyloaded" />
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav ">
				<Nav className="me-auto">
					<NavDropdown title="Solutions" id="basic-nav-dropdown">
						<NavDropdown.Item href="#action/3.1">
							Ad Traffic Validation
						</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.2">
							Brand Hygiene Protection
						</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.3">
							Ecommerce Competitive Analysis
						</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.4">
							Account Takeover Protection
						</NavDropdown.Item>
					</NavDropdown>
					<NavDropdown title="Resources" id="basic-nav-dropdown">
						<NavDropdown.Item href="#action/3.1">
							Blogs
						</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.2">
							Case Studies
						</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.3">
							Reports
						</NavDropdown.Item>
					</NavDropdown>
					<NavDropdown title="About" id="basic-nav-dropdown">
						<NavDropdown.Item href="#action/3.1">
							Company
						</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.2">
							Newsroom & Media
						</NavDropdown.Item>
					</NavDropdown>
					<Nav.Link href="#home">Contact</Nav.Link>
					<Nav.Link href="#home">Career</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default BasicExample;