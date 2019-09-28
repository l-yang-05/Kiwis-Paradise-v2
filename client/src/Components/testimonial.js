import React from 'react';
import { Carousel } from 'react-bootstrap'

const testimonial = ({ data }) => {
    return (
        <section className="testimonial">
            <div className="test-container">
                <h3>Testimonials</h3>
                <Carousel>
                    {data && data.map((person, index) => {
                        return (
                            <Carousel.Item>
                                <blockquote>{person.message}</blockquote>
                                <h4>{person.full_name}</h4>
                            </Carousel.Item>
                        )
                    })}
                </Carousel>
            </div>
        </section>
    )
}

export default testimonial;