import React, { Component } from 'react'
import classes from './Interest.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

class Interest extends Component {
  render() {
    return (
      <div className={classes.box} id="interest">
        <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible={true}>
          <span className={classes.head}>WHAT I DO?</span>
          <h2 className={classes.heading}>HERE ARE SOME OF MY EXPERTISE</h2>
          <div className={classes.Interest}>
            <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible={true}>
              <div className={classes.app}>
                <h3>APP Develpoment</h3>
                <p>
                  I have knowledge and experience in building cross-platform applications using ReactNative and Expo framework. 
                  Currently working on having a live published app on Google Play Store. 
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible={true}>
              <div className={classes.web}>
                <h3>Web Develpoment</h3>
                <p>I am a full stack web developer(MERN). Fluent in HTML, CSS, Javascript (NodeJS, ExpressJS, ReactJS).
                  <br />
                  Databases: Proficient in SQL and NoSQL(MongoDB).
                  <br /> 
                  Cloud: Google Firebase, Netlify and Heroku.
                  <br /> I also have a decent amount of work developing websites with WordPress.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible={true}>
              <div className={classes.other}>
                <h3>Other's Interest</h3>
                <p> Adobe PhotoShop, Adobe Illustrator, MS Office, Networking (Cisco Systems) are my other fields of interest.
                  <br />
                  Code Editor: Visual Studio Code
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </ScrollAnimation>
      </div>
    )
  }
}

export default Interest;