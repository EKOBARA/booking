import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import { Button } from '@mui/material';
import { People } from '@mui/icons-material';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import './search.css';


const Search = () => {
    const [start, setStart] = useState(new Date());
    const [end, setEnd] = useState(new Date());

    const range = {
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
            <DateRange ranges={[range]} onChange={handleChange} />
        </div>
    );
};

export default Search;