import React from 'react';
import Banner from './Banner';
import Testimonial from './ClientsReviews/Testimonial';
import Categories from './Categories/Categories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;