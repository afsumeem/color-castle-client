import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Footer from '../../shared/Footer/Footer';
import MenuBar from '../../shared/MenuBar/MenuBar';
import AllService from '../AllService/AllService';

const AllServices = () => {
    const [allServices, setAllServices] = useState([]);

    useEffect(() => {
        fetch('https://color-castle-server.onrender.com/colorCastleServices')
            .then(res => res.json())
            .then(data => setAllServices(data))
    }, []);
    return (
        <div className='mb-5'>
            <MenuBar></MenuBar>
            <div style={{ 'background': 'linear-gradient(to right, #dae2f8, #d6a4a4)' }} className='services my-5'>

                <div className='ps-5 pt-5'>
                    <h4 className='services-title'>What We offer</h4>
                    <h6 style={{ 'color': '#c13f22', 'fontWeight': '400', 'paddingLeft': '40px' }} >We Help you for Made Your Dream Painting</h6>
                </div>

                <Container>
                    <Row xs={1} md={4} sm={2} className="g-3 mt-5">
                        {
                            allServices.map(allService => <AllService
                                key={allService._id}
                                allService={allService}
                            />)
                        }
                    </Row>
                </Container>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllServices;