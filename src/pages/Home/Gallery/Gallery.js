import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import image1 from '../../../images/gallery1.jpg';
import image2 from '../../../images/gallery2.jpg';
import image3 from '../../../images/gallery3.jpg';
import image4 from '../../../images/gallery4.jpg';
import image5 from '../../../images/gallery5.jpg';
import './Gallery.css';

const Gallery = () => {
    return (

        <Container fluid className='mt-5'>
            <h4 className='gallery-title mb-5  ms-5'>Gallery</h4>
            <Row>
                <Col md={3} sm={6} xs={12} className='m-0 p-0 galleryImg'>
                    <img src={image1} className='img-fluid' alt="galleryImg" />
                </Col>

                <Col md={3} sm={6} xs={12} className='m-0 p-0 galleryImg'>
                    <img src={image2} className='img-fluid' alt="galleryImg" />
                </Col>

                <Col md={3} sm={6} xs={12} className='m-0 p-0 galleryImg'><img src={image3} className='img-fluid h-100' alt="galleryImg" /></Col>

                <Col md={3} sm={6} xs={12} className='m-0 p-0 galleryImg'><img src={image4} className='img-fluid' alt="galleryImg" /></Col>

                <Col md={3} sm={6} xs={12} className='m-0 p-0 galleryImg'><img src={image5} className='img-fluid' alt="galleryImg" /></Col>

                <Col md={3} sm={6} xs={12} className='m-0 p-0 galleryImg'><img src={image4} className='img-fluid' alt="galleryImg" /></Col>

                <Col md={3} sm={6} xs={12} className='m-0 p-0 galleryImg'><img src={image1} className='img-fluid' alt="galleryImg" /></Col>

                <Col md={3} sm={6} xs={12} className='m-0 p-0 galleryImg'><img src={image2} className='img-fluid' alt="galleryImg" /></Col>
            </Row>
        </Container>
    );
};

export default Gallery;