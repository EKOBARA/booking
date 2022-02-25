import React, { useState } from 'react';
import { Container } from '@mui/material'
import SliderBTN from './SliderBTN';

import './slider.css';

const images = [
    'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg', 
    'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg', 
    'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg', 'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg'
]


const Slider = () => {
    const [idx, setIdx] = useState(1);

    const nextSlide = () => {
        if (idx !== images.length) {
            setIdx(idx + 1);
        } else {
            setIdx(1);
        }
    }

    const prevSlide = () => {
        if (idx !== 1) {
            setIdx(idx - 1);
        } else {
            setIdx(images.length);
        }
    }
    return (
        <Container className='container-slider'>
            {images.map((pic, i) => (
                <div key={i} className={idx === i + 1 ? "slide active-anim" : "slide"}>                        
                    <img src={pic} alt='' />
                </div>
            ))}

            <SliderBTN moveSlide={nextSlide} direction="next" />
            <SliderBTN moveSlide={prevSlide} direction="prev" />
        </Container>
    )
}

export default Slider;
