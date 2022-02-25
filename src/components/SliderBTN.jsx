import React from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const SliderBTN = ({ direction, moveSlide }) => {
    return (
        <div>
            {direction === "next" ?
                <ArrowForwardIosIcon
                onClick={moveSlide} 
                className="btn-slide next"
                />
                :
                <ArrowBackIosNewIcon
                onClick={moveSlide} 
                className="btn-slide prev"
                />
            }
        </div>

    );
};

export default SliderBTN;