import { faDiscord, faFacebook, faInstagram, faSkype, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div style={{ 'background': 'linear-gradient(to right, #3c3b3f, #605c3c)', 'minHeight': '250px', 'borderRadius': '40px 40px 0 0' }}>

            <Container>
                <Row>
                    <Col md={5}>
                        <div className='text-white px-5 pt-4'>
                            <h5 className='text-uppercase mb-3'>Color Castle</h5>
                            <p>We bring your home to your dream Colors. We bring your home to your dream Colors.We bring your home to your dream Colors.We bring your home to your dream Colors!</p>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className='px-5 pt-4 text-center text-white'>
                            <h5 className='mb-3 text-uppercase'>Quick Links</h5>

                            <NavLink to='/home' className='text-white text-decoration-none fs-6'>Home</NavLink><br />
                            <NavLink to='/service' className='text-white text-decoration-none fs-6'>Service</NavLink><br />
                            <NavLink to='/about' className='text-white text-decoration-none fs-6'>About Us</NavLink><br />
                            <NavLink to='/contact' className='text-white text-decoration-none fs-6'>Contact</NavLink><br />
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className='px-5 pt-4  text-white'>
                            <h5 className='mb-3 text-uppercase'>Address</h5>
                            <p>127/10,Uttara <br />Dhaka, Bangladesh</p>

                            <h6>Follow us-</h6>
                            <hr />
                            <a href="https://twitter.com/?lang=en"><FontAwesomeIcon className='text-info fs-5 mx-1' icon={faTwitter} /></a>

                            <a href="https://www.facebook.com/"><FontAwesomeIcon className='text-primary fs-5 mx-1' icon={faFacebook} /></a>

                            <a href="https://www.instagram.com/"><FontAwesomeIcon className='text-danger fs-5 mx-1' icon={faInstagram} /></a>

                            <a href="https://www.skype.com/en/"><FontAwesomeIcon className='text-info fs-5 mx-1' icon={faSkype} /></a>


                        </div>
                    </Col>
                </Row>
                <hr className='text-white' />

                <p className="text-white text-center text-opacity-75 m-0">Copyright &copy;2021 All Rights Reserved | This Website is made with &#x003C;&#10083;&#x003E; by Afsana Meem </p>

            </Container>

        </div >
    );
};

export default Footer;