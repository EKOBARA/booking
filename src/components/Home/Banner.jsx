import React, { useState } from 'react'
import './Banner.css'
import { Button, Typography } from "@mui/material";
import Search from './Search/Search';
import { useNavigate } from "react-router-dom";

function Banner() {
    const history = useNavigate();

    return (
        <div className='banner'>
            <div className='banner__info'>
                <div className='banner__search'>
                    <Search />
                </div>
                <br/>
                <Typography variant='h4'>Get out and stretch your imagination</Typography>
                <Typography variant='h6'>
                    Plan a different kind of getaway to uncover the hidden gems near you.
                </Typography>
                <Button  className='explore' onClick={() => history.push('/search')} variant='outlined'>Explore</Button>
            </div>
        </div>
    )
}

export default Banner;