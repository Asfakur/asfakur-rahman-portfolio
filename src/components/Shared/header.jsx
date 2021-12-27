import React from 'react';

import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand>
                <Link className="nav-link text-white h5" to="/">Asfakur Rahman</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">

                </Nav>
                <Nav>
                    <Link className="active nav-link text-white mx-3 h6" to="/projects">Projects</Link>
                    {/* <Link className="nav-link text-white mx-3 h6" to="/blog">Blog</Link> */}
                    {/* <Link className="nav-link text-white mx-3 h6" to="/resume">Resume</Link> */}
                    <Link className="nav-link text-white mx-3 h6" to="/contact">Contact</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;