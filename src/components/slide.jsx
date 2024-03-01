import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { testimonials } from '../constants/data'

const Slide = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Slider {...settings}>
            {
                testimonials.map((card) => (
                    <div key={card.id}>
                        <div className='card'>
                            <div className='image'>
                                <img src={card.avatar} alt="avatar" />
                            </div>
                            <p className='quote'>{card.quote}</p>
                            <h4>{card.name}</h4>
                            <p className='job'>{card.job}</p>
                        </div>
                    </div>
                ))
            }
        </Slider>
    );
};

export default Slide;
