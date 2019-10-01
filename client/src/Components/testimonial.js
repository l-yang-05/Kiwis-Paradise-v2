import React from 'react';


const Testimonial = ({ data }) => {
    return (
        <section className="testimonial">
            <h3>Testimonials</h3>
            <div className="test-container">
                {data && data.map((person, index) => {
                    return (
                        <div key={index} className="profile">
                            <blockquote>"{person.message}"</blockquote>
                            <h4 className="contact-name">{person.full_name}</h4>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Testimonial;