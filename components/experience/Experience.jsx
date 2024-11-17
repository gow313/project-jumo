import React, { useState } from 'react';
import './experience.css';

const Experience = () => {
    const [activeModal, setActiveModal] = useState(null);

    const toggleTab = (index) => {
        setActiveModal(index === activeModal ? null : index);
    };

    return (
        <div className="section experience section" id="experience">
            <h2 className="section__title">Products 💼</h2>
            <span className="section__subtitle">What we work on</span>

            <div className="exp__container container grid">
                {/* U-Panel Bags */}
                <div className="exp__content">
                    <div>
                        <i className="uil uil-web-grid exp__icon"></i>
                        <h3 className="exp__title">U-Panel Bags</h3>
                    </div>

                    <span className="exp__button" onClick={() => toggleTab(1)}>
                        View More <i className="uil uil-arrow-right exp__button-icon"></i>
                    </span>

                    <div className={activeModal === 1 ? "exp__modal active-modal" : "exp__modal"}>
                        <div className="exp__modal-content">
                            <i onClick={() => toggleTab(null)} className="uil uil-times exp__modal-close"></i>
                            <h3 className="exp__modal-title">U-Panel Bags <br />Currently Available</h3>
                            <p className="exp__modal-description">Constructed with three panels (two side panels and a bottom panel). Offers good stability and strength for heavy loads.</p>
                            <ul className="exp__modal-experiences grid">
                                <li className="exp__modal-experience">
                                    <i className="uil uil-check-circle exp__modal-icon"></i>
                                    <p className="exp__modal-info">Manufacturing</p>
                                </li>
                                <li className="exp__modal-experience">
                                    <i className="uil uil-check-circle exp__modal-icon"></i>
                                    <p className="exp__modal-info">Best Price</p>
                                </li>
                                <li className="exp__modal-experience">
                                    <i className="uil uil-check-circle exp__modal-icon"></i>
                                    <p className="exp__modal-info">High Quality</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Circular Bags */}
                <div className="exp__content">
                    <div>
                        <i className="uil uil-web-grid exp__icon"></i>
                        <h3 className="exp__title">Circular Bags</h3>
                    </div>

                    <span className="exp__button" onClick={() => toggleTab(2)}>
                        View More <i className="uil uil-arrow-right exp__button-icon"></i>
                    </span>

                    <div className={activeModal === 2 ? "exp__modal active-modal" : "exp__modal"}>
                        <div className="exp__modal-content">
                            <i onClick={() => toggleTab(null)} className="uil uil-times exp__modal-close"></i>
                            <h3 className="exp__modal-title">Circular Bags (Tubular Bags) <br />Currently Available</h3>
                            <p className="exp__modal-description">Made from a single circular woven fabric. Ideal for fine materials like powders since they minimize leakage.</p>
                            <ul className="exp__modal-experiences grid">
                                <li className="exp__modal-experience">
                                    <i className="uil uil-check-circle exp__modal-icon"></i>
                                    <p className="exp__modal-info">Manufacturing</p>
                                </li>
                                <li className="exp__modal-experience">
                                    <i className="uil uil-check-circle exp__modal-icon"></i>
                                    <p className="exp__modal-info">Best Price</p>
                                </li>
                                <li className="exp__modal-experience">
                                    <i className="uil uil-check-circle exp__modal-icon"></i>
                                    <p className="exp__modal-info">High Quality</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Four-Panel Bags */}
                <div className="exp__content">
                    <div>
                        <i className="uil uil-web-grid exp__icon"></i>
                        <h3 className="exp__title">Four-Panel Bags</h3>
                    </div>

                    <span className="exp__button" onClick={() => toggleTab(3)}>
                        View More <i className="uil uil-arrow-right exp__button-icon"></i>
                    </span>

                    <div className={activeModal === 3 ? "exp__modal active-modal" : "exp__modal"}>
                        <div className="exp__modal-content">
                            <i onClick={() => toggleTab(null)} className="uil uil-times exp__modal-close"></i>
                            <h3 className="exp__modal-title">Four-Panel Bags<br />Currently Available</h3>
                            <p className="exp__modal-description">Constructed from four fabric panels stitched together. Highly durable and provides excellent shape retention.</p>
                            <ul className="exp__modal-experiences grid">
                                <li className="exp__modal-experience">
                                    <i className="uil uil-check-circle exp__modal-icon"></i>
                                    <p className="exp__modal-info">Manufacturing</p>
                                </li>
                                <li className="exp__modal-experience">
                                    <i className="uil uil-check-circle exp__modal-icon"></i>
                                    <p className="exp__modal-info">Best Price</p>
                                </li>
                                <li className="exp__modal-experience">
                                    <i className="uil uil-check-circle exp__modal-icon"></i>
                                    <p className="exp__modal-info">High Quality</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Agriculture Bags */}
                <div className="exp__content">
                    <div>
                        <i className="uil uil-web-grid exp__icon"></i>
                        <h3 className="exp__title">Agriculture Bags</h3>
                    </div>

                    <span className="exp__button" onClick={() => toggleTab(4)}>
                        View More <i className="uil uil-arrow-right exp__button-icon"></i>
                    </span>

                    <div className={activeModal === 4 ? "exp__modal active-modal" : "exp__modal"}>
                        <div className="exp__modal-content">
                            <i onClick={() => toggleTab(null)} className="uil uil-times exp__modal-close"></i>
                            <h3 className="exp__modal-title">Agriculture Bags<br />Currently Available</h3>
                            <p className="exp__modal-description">Industries Served<br /> Manufacturing<br />Bags</p>
                            <ul className="exp__modal-experiences grid">
                                <li className="exp__modal-experience">
                                    <i className="uil uil-check-circle exp__modal-icon"></i>
                                    <p className="exp__modal-info">Chemicals</p>
                                </li>
                                <li className="exp__modal-experience">
                                    <i className="uil uil-check-circle exp__modal-icon"></i>
                                    <p className="exp__modal-info">Food Processing</p>
                                </li>
                                <li className="exp__modal-experience">
                                    <i className="uil uil-check-circle exp__modal-icon"></i>
                                    <p className="exp__modal-info">Pharmaceuticals</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
