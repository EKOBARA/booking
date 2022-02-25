import React from 'react'
import {Container, AppBar, Toolbar, Typography, Link, Button} from '@mui/material'
import { makeStyles } from '@mui/styles'


const useStyles = makeStyles((theme) => ({
    appBar: {

    }
}));


function Navbar() {

    const classes = useStyles();

    return (
        <>
            <AppBar position='fixed'  color='' className={classes.appBar}>
                <Toolbar>
                    <Container display='flex' direction='row' align='right'>
                        <Link sx={{textDecoration:'none'}}><Button variant='text'>Home</Button></Link>
                        <Link sx={{textDecoration:'none'}}><Button variant='text'>Properties</Button></Link>
                        <Link sx={{textDecoration:'none'}}><Button variant='text'>Map</Button></Link>
                        <Link sx={{textDecoration:'none'}}><Button variant='text'>Availabiity</Button></Link>
                        <Link sx={{textDecoration:'none'}}><Button variant='text'>Reviews</Button></Link>
                        <Link sx={{textDecoration:'none'}} mr={2}><Button variant='text'>Videos</Button></Link>
                        <Button variant='outlined' size='large'>Get a Quote Now</Button>
                    </Container>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
