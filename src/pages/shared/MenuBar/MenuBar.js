import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from "../../../images/logo.png";
import './Menubar.css'

const MenuBar = () => {

    const { user, logOut } = useAuth();

    return (
        <div className='pb-4'>
            <Navbar collapseOnSelect expand="lg" fixed="top"
                style={{ "background": "linear-gradient(to right, #fdbb2d, #b21f1f, #1a2a6c)" }}
            >
                <Container>
                    <Navbar.Brand href="#home" className='fs-3'>
                        <img src={logo} alt="" style={{ "height": "65px" }} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink to="/home" className="text-white fs-5 text-decoration-none mx-3 font-monospace menu-item">Home</NavLink>
                            <NavLink to="/about" className="text-white fs-5 text-decoration-none mx-3 font-monospace">About</NavLink>
                            <NavLink to="/service" className="text-white fs-5 text-decoration-none mx-3 font-monospace">Services</NavLink>
                            {/* <NavLink to="/contact" className="text-white fs-5 text-decoration-none mx-3 font-monospace">Contact</NavLink> */}

                            {
                                user?.email
                                    ?
                                    <>

                                        <NavLink to="/dashboard" className="text-white fs-5 text-decoration-none mx-3 font-monospace">Dashboard</NavLink>
                                        <p className='text-warning fs-5 text-decoration-none mx-3 font-monospace'>{user.displayName}</p>

                                        <NavLink to="/home" onClick={logOut} className="text-white fs-5 text-decoration-none mx-3 font-monospace">Logout</NavLink>
                                    </>
                                    :
                                    <NavLink to="/login" className="text-white fs-5 text-decoration-none mx-3 font-monospace">Login</NavLink>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default MenuBar;