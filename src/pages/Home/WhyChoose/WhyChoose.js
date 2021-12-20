import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './WhyChoose.css';
import image1 from '../../../images/whyChooseUs/images1.png';
import image2 from '../../../images/whyChooseUs/image2.jpg';
import image3 from '../../../images/whyChooseUs/image3.png';
import image4 from '../../../images/whyChooseUs/image4.png';
import image5 from '../../../images/whyChooseUs/image5.png';
import image6 from '../../../images/whyChooseUs/images6.jpg';

const WhyChoose = () => {
    return (
        <div>
            <div className='ps-5 pt-5'>
                <h4 className='chooseUs'>Why Choose us</h4>
                <Container>
                    <Row className='my-5'>
                        <Col md={4} sm={12} xs={12} className='d-flex flex-column justify-content-center'>
                            <img src={image2} className='img-fluid chooseImg mx-auto' alt="" />
                            <h4 className='chooseTitle text-center'>Water Proofing</h4>
                        </Col>
                        <Col md={4} sm={12} xs={12} className='d-flex flex-column '>
                            <img src={image1} className='img-fluid chooseImg mx-auto' alt="" />
                            <h4 className='chooseTitle text-center'>Faux Finishes</h4>
                        </Col>
                        <Col md={4} sm={12} xs={12} className='d-flex flex-column '>
                            <img src={image4} className='img-fluid chooseImg mx-auto' alt="" />
                            <h4 className='chooseTitle text-center'>Mildew Removal</h4>
                        </Col>
                    </Row>

                    <Row className='my-5'>
                        <Col md={4} sm={12} xs={12} className='d-flex flex-column '>
                            <img src={image3} className='img-fluid chooseImg mx-auto' alt="" />
                            <h4 className='chooseTitle text-center'>Pre-Paint Demo</h4>
                        </Col>
                        <Col md={4} sm={12} xs={12} className='d-flex flex-column '>
                            <img src={image6} className='img-fluid chooseImg mx-auto' alt="" />
                            <h4 className='chooseTitle text-center'>Color Proof</h4>
                        </Col>
                        <Col md={4} sm={12} xs={12} className='d-flex flex-column '>
                            <img src={image5} className='img-fluid chooseImg mx-auto' alt="" />
                            <h4 className='chooseTitle text-center'>Window Washing</h4>
                        </Col>
                    </Row>
                </Container>
            </div>

        </div>
    );
};

export default WhyChoose;