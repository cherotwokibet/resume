import React, { Component } from 'react'
import classes from './About.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css"; 

class About extends Component {
    render() {
        return (
            <div className={classes.box} id="about">
                <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible ={true}>
                    <span  className={classes.head}>ABOUT ME</span>
                    <h2 className={classes.heading}>Who Am I?</h2>
                    <div className={classes.About}>
                        <p> 
                            My name is BONIFACE KIBET. I am a creative software engineer with 4+ years of experience.  </p>
                        <p className={classes.br}>
                            I am passionate and able to design and create software solutions tailored to client needs. 
                            Coding style : Agile/Scrum. Capable and interested in building Mobile and Web Applications. 
                            Open mind in pursuit of learning new frameworks, languages and technologies. </p>
                    </div>
                </ScrollAnimation>
            </div>
        )
    }
}

export default About;