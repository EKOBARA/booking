import React, { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import { People } from '@mui/icons-material';
import { Backdrop, Modal, Fade, Typography, Box, Button } from '@mui/material';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import './search.css';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Search = () => {
    const [open, setOpen] = React.useState(false);
    const [start, setStart] = useState(new Date());
    const [end, setEnd] = useState(new Date());
    
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const selectionRange = {
        startDate: start,
        endDate: end,
        key: 'selection',
    }

    const handleChange = (ranges) => {
        setStart(ranges.selection.startDate);
        setEnd(ranges.selection.endDate);
    }

    return (
        <div>
        <Button onClick={handleOpen}>Open modal</Button>
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
            >
            <Fade in={open}>
            <Box sx={style}>

                <DateRangePicker 
                    editableDateInputs={true}
                    onChange={handleChange} className='dates'
                    moveRangeOnFirstSelection={false}
                    ranges={[selectionRange]} 
                />
                <Typography variant='p'>
                    Number of guests <People />
                </Typography>
                <input min={0} defaultValue={2} type="number" />
                <Button>Search Airbnb</Button>
                <Button onClick={handleClose}>Hide</Button>
            </Box>
            </Fade>
        </Modal>
        </div>
    );
}

export default Search;