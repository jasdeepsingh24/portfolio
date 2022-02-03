import React from "react";
import resume from '../assets/resume.svg';
import '../css/resume.css';
const Resume = ()=>{

    return (
        <div className="resume" >
            
            <a href="https://drive.google.com/uc?id=1HZumORbl3F6ejFwBIbcaZau7up9YI5Dk&export=download"><img className="svg"src={resume}></img>
            <h1>Download Resume</h1></a>

        </div>
    );
}

export default Resume;