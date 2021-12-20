import React from 'react';
import Services from '../../Service/Services/Services';
import Footer from '../../shared/Footer/Footer';
import MenuBar from '../../shared/MenuBar/MenuBar';
import Banner from '../Banner/Banner';
import Reviews from '../CustomerReviews/Reviews/Reviews';
import Facility from '../Facility/Facility';
import Gallery from '../Gallery/Gallery';
import Offer from '../Offer/Offer';
import WhyChoose from '../WhyChoose/WhyChoose';

const Home = () => {
    return (
        <div>

            <MenuBar></MenuBar>
            <Banner></Banner>
            <Offer></Offer>
            <Services></Services>
            <WhyChoose></WhyChoose>
            <Gallery></Gallery>
            <Reviews></Reviews>
            <Facility></Facility>
            <Footer></Footer>

        </div>
    );
};

export default Home;