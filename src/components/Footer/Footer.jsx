import React from 'react';
import { Typography, Container, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

import './footer.css';


const Footer = () => {
    return (
        <Container className='footer'>
          <Typography
            variant='h4'
            level={5}
            style={{ color: 'white', textAlign: 'center' }}>
            ____ Properties <br />
            All Rights Reserved
          </Typography>
          <Grid>
            <Link to='/home'>Home</Link>
            <Link to='/exchanges'>Exchanges</Link>
            <Link to='/news'>News</Link>
          </Grid>
        </Container>
      
    );
};

export default Footer;