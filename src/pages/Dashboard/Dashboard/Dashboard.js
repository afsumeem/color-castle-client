import { faCartPlus, faCommentAlt, faFileInvoiceDollar, faPlusSquare, faShoppingBasket, faSignOutAlt, faTasks, faUser, faUsersCog, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Alert, Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { NavLink, Outlet } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png'

const Dashboard = () => {

    const { user, logOut, admin } = useAuth();

    return (
        <div>
            <Row>
                {/* dashboard nested route */}
                <Col xs={12} sm={12} md={3} className="px-0">
                    <Navbar style={{
                        'height': '100vh', 'background': 'linear-gradient(to right, #dae2f8, #d6a4a4)'
                    }} expand="md">
                        <Container className=" d-flex flex-column dashboard-route">

                            <Navbar.Brand href="/home">
                                <img src={logo} alt="" style={{ "height": "65px" }} />
                            </Navbar.Brand>

                            <hr className="w-100" />

                            <NavLink to='/dashboard' className="text-dark fs-4 fw-bolder my-1 text-decoration-none">
                                <FontAwesomeIcon className=" me-2" icon={faUsersCog} />
                                Dashboard
                            </NavLink>

                            <hr className="w-100" />

                            <Navbar.Toggle aria-controls="basic-navbar-nav" className="me-auto" />

                            <Navbar.Collapse id="basic-navbar-nav" className="me-auto">

                                <Nav className="d-flex flex-column">

                                    {/* dashboard options */}

                                    {admin ?
                                        <>
                                            <NavLink to='/dashboard/manageOrder' className='text-decoration-none ms-5 fw-bolder fs-6 text-dark'>
                                                <FontAwesomeIcon className="me-2" icon={faShoppingBasket} />
                                                Manage All Order
                                            </NavLink><br />

                                            <NavLink to='/dashboard/addService' className='text-decoration-none ms-5 fw-bolder fs-6  text-dark'>
                                                <FontAwesomeIcon className="me-2" icon={faPlusSquare} />
                                                Add New Service
                                            </NavLink><br />

                                            <hr className="w-100 bg-dark" />

                                            <NavLink to='/dashboard/makeAdmin' className='text-decoration-none ms-5 fw-bolder fs-6 text-dark'>
                                                <FontAwesomeIcon className="me-2" icon={faUserShield} />
                                                Make Admin
                                            </NavLink><br />

                                            <NavLink to='/dashboard/manageService' className='text-decoration-none ms-5 fw-bolder fs-6 text-dark'>
                                                <FontAwesomeIcon className="me-2" icon={faTasks} />
                                                Manage Services
                                            </NavLink><br />
                                        </>
                                        :
                                        <>
                                            <NavLink to='/dashboard/payment' className='text-decoration-none ms-5 fw-bolder fs-6 text-dark'>
                                                <FontAwesomeIcon className="me-2" icon={faFileInvoiceDollar} />
                                                Payment
                                            </NavLink><br />


                                            <NavLink to='/dashboard/myOrder' className='text-decoration-none ms-5 fs-6 fw-bolder text-dark'>
                                                <FontAwesomeIcon className="me-2" icon={faCartPlus} />
                                                My Orders
                                            </NavLink><br />

                                            <NavLink to='/dashboard/addReview' className='text-decoration-none ms-5 fs-6 fw-bolder text-dark'>
                                                <FontAwesomeIcon className="me-2" icon={faCommentAlt} />
                                                Add Review
                                            </NavLink><br />
                                        </>
                                    }

                                    {/* users name and logout button */}

                                    <hr className="w-100 mx-auto" />

                                    <Navbar.Text className="text-primary ms-5 fs-5 my-1  fw-bolder me-auto">
                                        <FontAwesomeIcon className=" me-2" icon={faUser} />
                                        <span className="text-success">
                                            {user.displayName && user.displayName}
                                        </span>
                                    </Navbar.Text>

                                    <NavLink onClick={logOut} className="text-decoration-none ms-5 text-dark fw-bolder fs-6" to="/home">
                                        <FontAwesomeIcon className="me-2" icon={faSignOutAlt} />
                                        Logout
                                    </NavLink>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Col>
                <Col xs={12} sm={12} md={9} className="px-0 ">
                    <div>
                        <Alert style={{ 'background': 'linear-gradient(to right, #dae2f8, #dae2f8' }} className="text-start border-0">
                            <h3 className="mb-5">Hello, {user.displayName}</h3>

                        </Alert>
                    </div>
                    <Outlet />
                </Col>
            </Row>

        </div >
    );
};

export default Dashboard;