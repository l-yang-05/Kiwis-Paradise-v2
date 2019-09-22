import React from 'react';
import { useTitle } from 'hookrouter';
import useForm from 'react-hook-form';


const Contact = () => {
    useTitle("Kiwi's Paradise | Contact");

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data, e) => {
        e.target.reset();
        console.log(data);
    }
    console.log(errors);


    return (
        <div className="container-contact">
            <h1>Contact Us!</h1>
            <div className="form-wrapper">
                <fieldset>
                    <form id="form-val" onSubmit={handleSubmit(onSubmit)}>

                        <label htmlFor="fname">Name</label>
                        <input type="text" placeholder="Full Name" name="fullName" id="fname" ref={register({ required: true, min: 2, pattern: /^[A-Za-z]+$/ })} />
                        <p className="error-msg">{errors.fullName && 'Please enter in your full name!'}</p>

                        <label htmlFor="mail">Email Address</label>
                        <input type="text" placeholder="Email address" name="email" id="mail" ref={register({ required: true, pattern: /^\S+@\.com+$/i })} />
                        <p className="error-msg">{errors.email && 'Please enter in a vaild email address!'}</p>

                        <label htmlFor="msg">Message</label>
                        <textarea name="message" placeholder="Write your message in here!" id="msg" ref={register({ required: true, min: 2, max: 1000, maxLength: 200 })}></textarea>
                        <p className="error-msg">{errors.message && 'Please enter in a message!'}</p>

                        <button type="submit" value="Submit" id="sub">Submit</button>
                    </form>
                </fieldset>
            </div>

        </div>
    )


}

export default Contact;