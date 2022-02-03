import React from 'react';


import '../css/technologies.css';
import tech_img from '../assets/sitting_developer.svg';

import Rating from './Rating';

import data from '../technologies_data';
const Technologies=()=>{

    return (
        <div className="container">
            <img viewBox="0 -110 926.62165 706" src={tech_img} className="technology_img svg" ></img>
            <div className="technologies">
                <h1>Technologies</h1>
                <div class="parents">
                    {
                        data.map((item)=>{
                            return(
                                <div class="child">
                                    <img src={item.img}></img>
                                    <Rating stars={item.stars}/>
                                    <p>{item.name}</p>
                                    
                                </div>
                            )
                        })
                    }
				
			</div>
            </div>
        </div>
    );
}


export default Technologies;