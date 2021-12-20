import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Service = ({ service }) => {
    const { _id, name, picture1, time, phone, price } = service;
    return (
        <div className='mb-5'>
            <img src={picture1} alt="" className='img-fluid w-100' style={{ 'height': '200px' }} />

            <div className='bg-white'>
                <div className='p-3'>
                    <h5 className='text-uppercase' style={{ 'color': '#c13f22' }}>{name}</h5>
                    <h6>{time}</h6>
                    <h6>{phone}</h6>
                    <h4>$ {price}</h4>
                </div>
                <NavLink to={`/service/${_id}`}>
                    <Button className='w-100 border-0 rounded-0' style={{ 'backgroundColor': '#c13f22' }}>View Details</Button>
                </NavLink>

            </div>
        </div>

    );
};

export default Service;