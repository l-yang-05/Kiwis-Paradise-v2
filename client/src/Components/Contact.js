import React, { useState, useEffect } from 'react';
import { useTitle } from 'hookrouter';
import useForm from 'react-hook-form';
import Testimonial from './Testimonial';


const Contact = () => {
    useTitle("Kiwi's Paradise | Contact");

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data, e) => {
        const errorFields = [];
        const full_name = document.getElementsByName("full_name")[0].value;
        const email = document.getElementsByName("email")[0].value;
        const message = document.getElementsByName("message")[0].value;

        if (full_name === "") {
            errorFields.push(full_name)
        } else if (email === "") {
            errorFields.push(email)
        } else if (message === "") {
            errorFields.push(message)
        }
        else if (errorFields.length) {
            alert(`Please fill out the following fields ${errorFields.join(', ')}`)
        }
        else {
            newContactAPI(full_name, email, message).then(res => {
                alert(`Thank you ${full_name} for sending us a message!`)
            })
        }
        console.log(data)
        e.target.reset()
    };


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

    const newContactAPI = async (full_name, email, message) => {
        try {
            const res = await fetch("api/newContact", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    full_name,
                    email,
                    message
                })
            })
            const content = await res.json()
            console.log(content);
        }
        catch (error) {
            throw error;
        }
    };

    useEffect(() => {
        contactsAPI()
    }, [])


    return (
        <div className="container-contact">
            <h1>Contact Us!</h1>
            <div className="form-wrapper">
                <fieldset>
                    <form id="form-val" onSubmit={handleSubmit(onSubmit)} method="post" action="api/newContact">

                        <label htmlFor="fname">Full Name</label>
                        <input type="text" placeholder="Full Name" name="full_name" id="fname" ref={register({ required: true, min: 5, pattern: /^[a-zA-z']([^0-9]*)$/ })} />
                        <p className="error-msg">{errors.full_name && "Please enter in your full name! Make sure you're only submitting in letter characters in this field!!!"}</p>

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
            <Testimonial data={testimonial} />
        </div >
    )


}

export default Contact;