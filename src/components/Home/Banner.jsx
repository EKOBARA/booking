import React, { useState } from 'react'
import './Banner.css'
import { Button } from "@mui/material";
import Search from './Search/Search';
import { useNavigate } from "react-router-dom";

function Banner() {
    const history = useNavigate();

    return (
        <div className='banner'>
            <div className='banner__info'>
                <div className='banner__search'>
                    <Search />
                    
                    {/* <Button onClick={handleOpen} className='banner__searchButton' variant='outlined'>
                            {showSearch ? "Hide" : "Search Dates"}
                    </Button> */}
                </div>
                <h1>Get out and stretch your imagination</h1>
                <h5>
                    Plan a different kind of getaway to uncover the hidden gems near you.
                </h5>
                <Button onClick={() => history.push('/search')} variant='outlined'>Explore</Button>
            </div>
        </div>
    )
}

export default Banner;