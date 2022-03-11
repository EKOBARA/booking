import React from 'react';
import { Routes, Navigate, Route } from 'react-router-dom';
import { Footer, Navbar, Home, Signup, Login, Dashboard } from './components';

// import { AuthProvider } from './components/Auth/AuthContext';
import './app.css';

const App = () => {
    return (<>
        {/* // <AuthProvider> */}
            <div>
                {/* navbar */}
                <Navbar />
            </div>
            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/signup' element={<Signup/>} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/dashboard' element={<Dashboard />} />
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
        {/* // </AuthProvider> */}
        </>
    );
};

export default App;