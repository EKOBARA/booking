import React from 'react';
import { Typography, Box, Container, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

import './footer.css';


const Footer = () => {
    return (
        <footer className='footer'>
          <Box>
            <Container maxWidth='lg'>
              <Grid container spacing={3} justifyContent='center'>
                <Grid item>
                  <Link to='/home'>Home</Link>
                </Grid>
                <Grid item>
                  <Link to='/exchanges'>Exchanges</Link>
                </Grid>
                <Grid item>
                  <Link to='/news'>News</Link>
                </Grid>
                <Grid item>
                  <Link to='/signup'>Admin</Link>
                </Grid>
              </Grid>
            </Container>
            <Typography
              variant='p'
              level={5}
              style={{ color: 'white', textAlign: 'center' }}>
                © 2022 ___ Properties! All rights reserved - this is a demo!
                <br />
            </Typography>
          </Box>
        </footer>
      
    );
};

export default Footer;