import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://color-castle-server.onrender.com/colorCastleServices')
            .then(res => res.json())
            .then(data => setServices(data.slice(0, 4)))
    }, []);


    return (

        <div style={{ 'background': 'linear-gradient(to right, #dae2f8, #d6a4a4)' }} className='services mt-5'>

            <div className='ps-5 pt-5'>
                <h4 className='services-title'>What We offer</h4>
                <h6 style={{ 'color': '#c13f22', 'fontWeight': '400', 'paddingLeft': '40px' }} >We Help you for Made Your Dream Painting</h6>
            </div>

            <Container>
                <Row xs={1} md={4} sm={2} className="g-3 mt-5">
                    {
                        services.map(service => <Service
                            key={service._id}
                            service={service}
                        ></Service>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Services;