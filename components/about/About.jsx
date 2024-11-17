// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./about.css";
import AboutImg from "../../src/assets/about-pic.jpg";
import CV from "../../src/assets/Soumyajit's New Resume.pdf";
import Info from './Info';

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My Intoduction</span>

      <div className="about__container container grid">
        <img src={AboutImg} alt="" className="about__img" />

        <div className="about__data">
          <Info />

          <p className="about__description">I am Thiygarajan Manger at AIT Polymer</p>


        </div>
      </div>
    </section>
  )
}

export default About