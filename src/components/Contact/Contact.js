import React, { useRef } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        console.log('check', e);
        e.preventDefault();
        emailjs
            .sendForm('Neeraj_SV06', 'Neeraj_TP06', form.current, {
                publicKey: 'ZR0WBd1yzATj40M58',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    e.target.reset();
                    alert('Email Sent!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <section id='contactPage'>
            <h2 className='contactTitle'>Contact Me</h2>
            <span className='contactSubTitle'>Please fill out the form to discuss any work opportunities</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type='text' className='name' required={true} placeholder='Your Name' name='from_name'></input>
                <input type='email' className='email' required={true} placeholder='Your Email Id' name='from_email'></input>
                <textarea className='message' name='message' required={true} placeholder='Your Message'></textarea>
                <button type='submit' value='send' className='sendBtn'><i className='bx bx-mail-send'></i> Send Mail </button>
            </form>
        </section>
    )
}

export default Contact;