import React, { useState, useEffect } from 'react';
import { useTitle } from 'hookrouter';
import useForm from 'react-hook-form';
import Testimonials from './testimonial';


const Contact = () => {
    useTitle("Kiwi's Paradise | Contact");

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data, e) => {
        e.target.reset();
        console.log(data);
    }
    console.log(errors);


    const [testimonial, setTestimonial] = useState(null)
    const contactsAPI = async () => {
        try {
            const res = await fetch("api/contacts");
            const text = await res.text();
            const response = text.length ? JSON.parse(text) : {}
            setTestimonial(response);
        }
        catch (error) {
            throw error;
        }
    }

    useEffect(() => {
        contactsAPI()
    }, [])

    return (
        <div className="container-contact">
            <h1>Contact Us!</h1>
            <div className="form-wrapper">
                <fieldset>
                    <form id="form-val" onSubmit={handleSubmit(onSubmit)}>

                        <label htmlFor="fname">Full Name</label>
                        <input type="text" placeholder="Full Name" name="fullName" id="fname" ref={register({ required: true, min: 5, pattern: /[a-zA-z']/ })} />
                        <p className="error-msg">{errors.fullName && "Please enter in your full name! Make sure you're only submitting in letter characters in this field!!!"}</p>

                        <label htmlFor="mail">Email Address</label>
                        <input type="text" placeholder="Email address" name="email" id="mail" ref={register({ required: true, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} />
                        <p className="error-msg">{errors.email && 'Please enter in a vaild email address!'}</p>

                        <label htmlFor="msg">Message</label>
                        <textarea name="message" placeholder="Write your message in here!" id="msg" ref={register({ required: true, min: 2, max: 1000, maxLength: 200 })}></textarea>
                        <p className="error-msg">{errors.message && 'Please enter in a message!'}</p>

                        <button type="submit" value="Submit" id="sub">Submit</button>
                    </form>
                </fieldset>
            </div>
            <Testimonials data={testimonial} />
        </div>
    )


}

export default Contact;