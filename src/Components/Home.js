import React from 'react';
import Navbar from "./Navbar";
import Maindiv from "./Maindiv";
import MostPopularTours from "./MostPopularTours";
import TopDestinations from "./TopDestinations";
import DestinationSection from "./DestinationSection";
import InterestingStories from "./InterestingStories";
import RecentBlog from "./RecentBlog";
import Newsletter from "./Newsletter";
import Last from "./Last";
import Footer from "./Footer";
import "./Style.css";

const Home = () => {
    return <div>
        <Navbar />
        <Maindiv />
        <MostPopularTours />
        <TopDestinations />
        <DestinationSection />
        <InterestingStories />
        <RecentBlog />
        <Newsletter />
        <Last />
        <Footer />
    </div>;
}


export default Home;