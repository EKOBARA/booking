import React, { useState } from 'react';
import Search from './Search/Search';
import Slider from './Slider/Slider';
import Banner from './Banner';


const Home = () => {
    const [showSearch, setShowSearch] = useState(false)
    return (
        <div>
            {showSearch && <Search />}
            <Slider />
            <Banner />
        </div>
    );
};

export default Home;