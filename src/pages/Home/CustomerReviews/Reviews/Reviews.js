import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from 'react-bootstrap';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://color-castle-server.onrender.com/colorCastleReviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='mb-5'>
            <h4 className='services-title ms-5 my-5'>Customer Reviews</h4>
            <Container>
                <Slider {...settings}>
                    {
                        reviews.map(review => <Review
                            key={review._id}
                            review={review}
                        ></Review>)
                    }
                </Slider>
            </Container>
        </div>
    );
};

export default Reviews;