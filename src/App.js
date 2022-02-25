import React from 'react';
import { Routes, Navigate, Route } from 'react-router-dom';
import { Footer, Navbar, Home } from './components';

import './app.css';

const App = () => {
    return (
        <div>
            <div>
                {/* navbar */}
                <Navbar />
            </div>
            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
            </main>
            {/* carousel */}
                {/* <Slider /> */}
                {/* date selecter */}
            
            {/* List of properties */}
            <div>
                {/* Footer */}
                <Footer />
            </div>
        </div>
    );
};

export default App;