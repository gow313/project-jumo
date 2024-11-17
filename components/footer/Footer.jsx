/* eslint-disable no-unused-vars */
import React from 'react';
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Thiyagarajan</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#home" className="footer__link">Home</a>
                    </li>

                    <li>
                        <a href="#contact" className="footer__link">Contact</a>
                    </li>

                    <li>
                        <a href="#experience" className="footer__link">Products</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="" className="footer__social-link" target="_blank">
                        <i className="bx bxl-instagram"></i>
                    </a>

                    <a href="" className="footer__social-link" target="_blank">
                        <i className="bx bxl-twitter"></i>
                    </a>

                    <a href="" className="footer__social-link" target="_blank">
                        <i className="bx bxl-github"></i>
                    </a>
                </div>

                <span className="footer__copy">&#169; Thiyagarajan. All rigths reserved</span>
            </div>
        </footer>
    )
}

export default Footer