import React from 'react';
import Banner from './Banner';
import CategoryList from './CategoryList';
import FeaturedJobs from './FeaturedJobs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CategoryList></CategoryList>
            <FeaturedJobs></FeaturedJobs>
            <h2>this is home</h2>
        </div>
    );
};

export default Home;