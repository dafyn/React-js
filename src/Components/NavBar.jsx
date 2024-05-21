import React from 'react';
// import { Link } from 'react-router-dom';
import logo from '../Assets/olum-nobg.png';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { FundOutlined } from '@ant-design/icons';

const NavbarComponent = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" style={{ paddingTop: '50px'}}>
            <Container>
                <Navbar.Brand >
                     <img src={logo} alt="Logo" style={{ width: '140px', height: 'auto' }} />
                </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto" id='Nav'>
                                <ul style={{ listStyleType: 'none', padding: 0, margin: 0 , fontSize: '20px' }}>
                                    <li style={{ display: 'inline', marginRight: '15px' }}>
                                        <NavLink exact to='/' style={{ textDecoration: 'none' , color: 'inherit' }} activeClassName="active-link">Home</NavLink>
                                    </li>                                    
                                    <li style={{ display: 'inline', marginRight: '15px' }}>
                                        <NavLink to="/about" style= {{ textDecoration: 'none' , color: 'inherit' }} activeClassName="active-link">About Us</NavLink>
                                    </li>
                                    <li style={{ display: 'inline', marginRight: '15px' }}>
                                        <NavLink to="/projects" style={{ textDecoration: 'none', color: 'inherit' }} activeClassName="active-link">Projects</NavLink>
                                    </li>
                                    <li style={{ display: 'inline', marginRight: '15px' }}>
                                        <NavLink to="/news" style={{ textDecoration: 'none', color: 'inherit' }} activeClassName="active-link">News</NavLink>
                                    </li>
                                    <li style={{ display: 'inline', marginRight: '15px' }}>
                                        <NavLink to="/contact" style={{ textDecoration: 'none', color: 'inherit' }} activeClassName="active-link">Join Us</NavLink>
                                    </li>
                                </ul>                                
                            </Nav>
                            <Nav>
                                <Button 
                                className='custom-button' 
                                >
                                    <span><FundOutlined /> | Donate</span>
                                </Button>
                            </Nav>
                        </Navbar.Collapse>
            </Container>
    </Navbar>
    );
}

export default NavbarComponent;
