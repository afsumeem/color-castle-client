import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import banner from '../../../images/banner.jpg';
import './Banner.css';


const Banner = () => {
    return (
        // banner section

        <div className='mt-5 banner' style={{ "background": "linear-gradient(to right, #dae2f8, #d6a4a4)" }}>
            <Row className='m-0'>
                <Col md={6} className='d-flex  flex-column justify-content-center'>
                    <h5 className='banner-title mt-5'>BEST IN-COUNTRY</h5>

                    <h1 className='my-4'>Bring your home to lively <span style={{ "color": "#c13f22" }}>Colors!</span></h1>
                    <h6 className='my-4'>We bring your home to your dream Colors. We bring your home to your dream Colors!We bring your home to your dream Colors! We bring your home to your dream Colors!</h6>
                    <NavLink to='/service' className="text-decoration-none">
                        <Button variant='none' style={{ 'border': '2px solid #c13f22' }} className='w-100 mx-auto  d-block py-2 mt-4 banner-btn fw-bold fs-5'>COLOR ME</Button>
                    </NavLink>

                </Col>
                <Col md={6} className='mt-5'>
                    <img src={banner} className=' img-fluid mx-auto d-block' alt="" />
                </Col>
            </Row>

        </div>
    );
};

export default Banner;