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
                    src="https://i.ytimg.com/vi/287if5nT444/maxresdefault.jpg"
                    alt="First banner slide"
                />
                <Carousel.Caption>
                    <h3>Welcome!</h3>
                    <p>Take a tour of Kiwi's paradise!</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ytimg.com/vi/GKGQwpYpOHY/maxresdefault.jpg"
                    alt="Second banner slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://3.bp.blogspot.com/-xCxLqmoDnNs/XNJeJaqCF2I/AAAAAAAASA4/wUIWdLRPJd8KEKxaIP6NoXn49Cv0znODQCLcBGAs/s1600/Rilakkuma%2Band%2BKaoru%2BSign%2Bme%2Bup.jpg"
                    alt="Third banner slide"
                />

                <Carousel.Caption>
                    <h3>Contact Us!</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    );
}

export default HomeSlider;