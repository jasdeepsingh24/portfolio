import React from 'react';
import programmer_img from '../assets/programmer.svg';
import '../css/frontWall.css';

const FrontWall=()=>{

const heading1='Software Developer and Programmer.';
const heading2='I design and code beautifully simple things, and I love what I do.';
    return (
        <div className="frontWall">
            <div className="frontWall-content">
                <img src={programmer_img} className="svg"></img>
                <h1>{heading1}</h1>
                <h2>{heading2}</h2>
            </div>
        </div>
    );
}

export default FrontWall;