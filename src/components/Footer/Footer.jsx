import React from 'react';
import { Typography, Container, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

import './footer.css';


const Footer = () => {
    return (
        <footer className='footer'>
          <Typography
            variant='h4'
            level={5}
            style={{ color: 'white', textAlign: 'center' }}>
            © 2022 ___ Properties! All rights reserved - this is a demo!
            <br />
          </Typography>
          <Grid>
            <Link to='/home'>Home</Link>
            <Link to='/exchanges'>Exchanges</Link>
            <Link to='/news'>News</Link>
          </Grid>
        </footer>
      
    );
};

export default Footer;