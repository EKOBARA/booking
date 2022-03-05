import React, { useState } from 'react';
import {Container, Box, AppBar, Toolbar, Typography, Link, Button} from '@mui/material';
import Search from '../Home/Search/Search';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';



function Navbar() {

    return (
        <>
            <AppBar position='fixed'  color='' align='center'>
                <Toolbar >
                    {/* <Container display='flex' direction='row' align='center'> */}
                        <Link sx={{textDecoration:'none'}}>
                            <Button variant='text'>Home</Button>
                        </Link>
                        <Box sx={{ flexGrow: 1 }} />
                            <Link sx={{textDecoration:'none'}}>
                                <Button variant='text'>Properties</Button>
                            </Link>            
                            <Link sx={{textDecoration:'none'}}>
                                <Button variant='text'>Map</Button>
                            </Link>
                                
                        {/* <Button variant='outlined' size='large'>Get a Quote Now</Button> */}
                    {/* </Container> */}
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
