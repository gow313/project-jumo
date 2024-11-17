/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_dyo6led', 'template_3iv5y3l', form.current, {
            publicKey: 'tsBnrYgs7KU7KNgA8',
        })
        e.target.reset()
    };

    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Get In Touch 📩</h2>
            <span className="section__subtitle">Ready to get started on your project? <br /> Contact me now for a Free consultation.</span>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">Talk To Me<i className="uil uil-calling"></i></h3>

                    <div className="contact__info">

                        <div className="contact__card">
                            <i className="bx bx-mail-send contact__card-icon"></i>

                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">tgarajan97@gmail.com</span>

                            <a href="mailto:tgarajan97@gmail.com" className="contact__button">Write Me <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                        </div>

                        <div className="contact__card">
                            <i className="bx bxl-whatsapp contact__card-icon"></i>

                            <h3 className="contact__card-title">WhatsApp</h3>
                            <span className="contact__card-data">(+91)9788203519</span>

                            <a href="https://api.whatsapp.com/send?phone=+919788203519&text=Hello, I would like to connect with you!" className="contact__button">Write Me <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact