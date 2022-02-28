import React, { useState } from 'react';
import Search from './Search/Search';
import Slider from './Slider/Slider';


const Home = () => {
    const [showSearch, setShowSearch] = useState(false)
    return (
        <div>
            {showSearch && <Search />}
            <Slider />
        </div>
    );
};

export default Home;