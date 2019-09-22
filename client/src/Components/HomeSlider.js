import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const HomeSlider = () => {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        setDirection(e.direction);
    };

    return (
        <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://findjapan.superdelivery.com/wp-content/uploads/2017/10/DSC_0019.jpg"
                    alt="First banner slide"
                />
                <Carousel.Caption>
                    <h3 className="intro-text">Welcome!</h3>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ytimg.com/vi/287if5nT444/maxresdefault.jpg"
                    alt="Second banner slide"
                />

                <Carousel.Caption>
                    <h3 className="intro-text">Cute Plushies for a cheap price!</h3>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://3.bp.blogspot.com/-xCxLqmoDnNs/XNJeJaqCF2I/AAAAAAAASA4/wUIWdLRPJd8KEKxaIP6NoXn49Cv0znODQCLcBGAs/s1600/Rilakkuma%2Band%2BKaoru%2BSign%2Bme%2Bup.jpg"
                    alt="Third banner slide"
                />

                <Carousel.Caption>
                    <h3 className="intro-text">Contact Us!</h3>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    );
}

export default HomeSlider;