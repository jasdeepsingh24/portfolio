import React from 'react';
import reading_img from '../assets/skateboard.svg';
import '../css/intro.css';
const Intro=()=>{

const greeting='Hi, I’m Jasdeep. Nice to meet you.';
const intro_message='I am a Computer Science 4th Year student who is currently doing Internship. I like to create and build cool Apps and Websites.';
    return (
        <React.Fragment>
        <div className="intro">
            <img className="svg" src={reading_img}></img>
        </div>
        <div className="intro-content">
            <h2>{greeting}</h2>
            <h3>{intro_message}</h3>
        </div>
        
        </React.Fragment>
    );
}

export default Intro;