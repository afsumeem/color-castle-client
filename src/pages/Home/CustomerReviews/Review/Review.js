import React from 'react';
import StarRatings from 'react-star-ratings';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const Review = ({ review }) => {
    const { name, picture, desc, rating, address, designation } = review;

    return (

        <>
            <div style={{ 'background': 'linear-gradient(to right, #dae2f8, #d6a4a4)' }} className='mx-5 mb-5'>
                <div className='px-5 py-4'>
                    <FontAwesomeIcon icon={faQuoteLeft} className='fs-1' style={{ 'color': '#c13f22' }} />
                    <p className='ps-5'>{desc}</p>
                    <div className='ps-5'>
                        <StarRatings
                            rating={parseFloat(rating)}
                            starDimension="22px"
                            starSpacing="5px"
                            starRatedColor="#c13f22"
                            starEmptyColor='gray'
                        />
                    </div>
                </div>

                <div className='d-flex px-5 pt-1 pb-0' style={{ 'backgroundColor': '#bf4a30' }}>
                    <div className='text-end ms-auto me-3 text-white'>
                        <h5>
                            {name}
                        </h5>
                        <p>{designation}<br />{address}</p>
                    </div>

                    <img className='img-fluid rounded-circle' src={picture} style={{ 'height': '70px', 'width': '70px', 'marginTop': '-30px' }} alt="" />
                </div>
            </div>
        </>
    );
};

export default Review;