import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Breadcrumb, Button, Col, Container, Modal, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../shared/Footer/Footer';
import MenuBar from '../../shared/MenuBar/MenuBar';

const Details = () => {
    const { user } = useAuth()
    const { id } = useParams();
    const [details, setDetails] = useState([]);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    useEffect(() => {
        fetch(`https://stormy-woodland-90777.herokuapp.com/colorCastleServices/${id}`)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, []);

    // handle submit
    const onSubmit = data => {

        axios.post('https://stormy-woodland-90777.herokuapp.com/colorCastleOrders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Service Booked Successfully!!");
                    reset();
                    setShow(false)
                }
            })
    };

    return (
        <>
            <MenuBar></MenuBar>
            <div style={{ 'height': '200px', 'background': 'linear-gradient(to right, #dae2f8, #d6a4a4)' }}>

                <h2 className='ps-5 pt-5 text-uppercase mt-5' style={{ 'color': '#c13f22' }}>{details.name}</h2>
                <Breadcrumb className='ps-5 fs-5'>
                    <Breadcrumb.Item href="/service">Service</Breadcrumb.Item>
                    <Breadcrumb.Item active>{details.name}</Breadcrumb.Item>
                </Breadcrumb>
            </div>

            <Container>
                <Row className='my-5'>
                    <Col md={6} className='mb-5'>
                        <h4 className='services-title'>About <span style={{ 'color': '#c13f22' }}>{details.name}</span></h4>
                        <div className='py-3 px-5'>
                            <p className='pe-5'>{details.desc}</p>
                            <h4>$ {details.price}</h4>
                            <p>Contact: {details.phone} <br /> Working hour: {details.time}</p>
                        </div>

                        <Button variant='none' onClick={handleShow} className='w-75 text-white fs-5 border-0' style={{ 'background': 'linear-gradient(to right, #b92b27, #1565c0)' }}>Order Now</Button>

                    </Col>

                    <Col md={6}>
                        <img src={`data:image/png;base64,${details.image}`} className='ms-5' style={{ 'height': '250px', 'width': '300px' }} alt="" />
                        <br />
                        <img src={`data:image/png;base64,${details.image2}`} style={{ 'height': '250px', 'width': '300px', 'marginTop': '-100px', 'marginLeft': '180px' }} alt="" />
                    </Col>
                </Row>
            </Container>

            {/* order now form */}
            <Modal show={show} centered onHide={handleClose}

            >
                <div className='shadow rounded' style={{ 'background': 'linear-gradient(to right, #dae2f8, #d6a4a4)' }}>


                    <Modal.Header closeButton>
                        <Modal.Title>Booking Service</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        {/* form */}

                        <form className="pt-3 pb-5" onSubmit={handleSubmit(onSubmit)}

                        >
                            {/* order status */}
                            <input className="my-1 fst-italic me-5 w-25 bg-warning ms-auto d-block px-4 py-1 border-0 rounded" defaultValue="Pending" readOnly {...register("status")} title="Order status" />

                            <input className="my-2 w-75 mx-auto d-block px-4 py-1 border-0 rounded" defaultValue={user.displayName} {...register("name")} />

                            {details.name &&
                                <input className="my-2 w-75 mx-auto d-block px-4 py-1 border-0 rounded" value={details.name} {...register("service", { required: true })} />
                            }

                            {details.price &&
                                <input className="my-2 w-75 mx-auto d-block px-4 py-1 border-0 rounded" value={details.price} {...register("price", { required: true })} />
                            }

                            <input className="my-2 w-75 mx-auto d-block px-4 py-1 border-0 rounded" placeholder="Address"{...register("address", { required: true })} />

                            <input className="my-2 w-75 mx-auto d-block px-4 py-1 border-0 rounded" placeholder="+8801XXXXXXX"{...register("Contact", { required: true })} />

                            <input className="my-2 w-75 mx-auto d-block px-4 py-1 border-0 rounded" type="date" placeholder="Choose Date"{...register("date", { required: true })} />

                            <input className="my-2 w-75 mx-auto d-block px-4 py-1 border-0 rounded" defaultValue={user.email} {...register("email", { required: true })} />

                            {errors.email && <span className="text-danger">Please Enter Your Email</span>}
                            <br />


                            {/* submit button */}
                            < input className="d-block text-white mx-auto mx-3 my-2 btn w-75" type="submit" value="Order Now" style={{
                                'background': 'linear-gradient(to right, #b92b27, #1565c0)'
                            }} />

                            <Button className="d-block mx-auto mx-3 my-2 btn  w-75" variant="secondary" onClick={handleClose}>
                                Not Now
                            </Button>

                        </form>
                    </Modal.Body>
                </div>
            </Modal>
            <Footer></Footer>
        </>
    );
};

export default Details;