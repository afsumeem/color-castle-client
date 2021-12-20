import React from 'react';
import { Breadcrumb, Col, Container, Row } from 'react-bootstrap';
import Footer from '../shared/Footer/Footer';
import MenuBar from '../shared/MenuBar/MenuBar';
import wallpaper from '../../images/wallpaper.jpg';

const About = () => {
    return (
        <>
            <div className='mb-5'>

                <MenuBar></MenuBar>
                <div style={{ 'height': '200px', 'background': 'linear-gradient(to right, #dae2f8, #d6a4a4)' }} className='mb-5'>

                    <h2 className='ps-5 pt-5 text-uppercase mt-5' style={{ 'color': '#c13f22' }}>About Color Castle</h2>
                    <Breadcrumb className='ps-5 fs-5'>
                        <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>
                        <Breadcrumb.Item active>About</Breadcrumb.Item>
                    </Breadcrumb>
                </div>

                <Container>
                    <Row>
                        <Col md={6} sm={12} sx={12}>
                            <h4 className='services-title'>Who We Are</h4>
                            <p className='ms-5 mt-4'> <span className='fw-bold fs-5'>Color Castle</span> bring your home to your dream Colors. We bring your home to your dream Colors.We bring your home to your dream Colors.We bring your home to your dream Colors!We bring your home to your dream Colors! We bring your home to your dream Colors! <br />We bring your home to your dream Colors. We bring your home to your dream Colors.We bring your home to your dream Colors.We bring your home to your dream Colors!We bring your home to your dream Colors! We bring your home to your dream Colors!</p>
                        </Col>
                        <Col md={6} sm={12} sx={12}>
                            <img src={wallpaper} className='img-fluid h-100 w-100' alt="" />
                        </Col>
                    </Row>
                </Container>

                <div className='text-center my-5' style={{ 'background': 'linear-gradient(to right, #dae2f8, #d6a4a4)' }}>
                    <Container className='py-5'>
                        <div className='pb-5 my-5 shadow border border-1'>
                            <h2 className='pt-5'>We Are Growing with you!</h2>
                            <hr className='mx-auto w-25' />

                            <Row className='pt-3'>
                                <Col md={4} sm={12} sx={12}>
                                    <h2 className='fw-bolder'>446</h2>
                                    <h5>People in our company</h5>
                                </Col>
                                <Col md={4} sm={12} sx={12}>
                                    <h2 className='fw-bolder'>1580</h2>
                                    <h5>Our Happy Customers</h5>
                                </Col>
                                <Col md={4} sm={12} sx={12}>
                                    <h2 className='fw-bolder'>990</h2>
                                    <h5>Houses we paint for clients</h5>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>


            </div>

            <Footer></Footer>

        </>
    );
};

export default About;