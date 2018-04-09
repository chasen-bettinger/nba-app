import React from 'react'
import Slider from 'react-slick';

const SliderTemplate = (props) => {
    let template = null;
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    switch(props.type) {
        case('news'):
            
            break;
        default:
            template = null
    }

    return (
        <Slider {...settings}>
            {template}
        </Slider>
    )
}

export { SliderTemplate as default };

