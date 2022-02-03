import React,{useRef} from 'react';

import NavBar from './components/NavBar';
import FrontWall from './components/FrontWall';
import Intro from './components/Intro';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Education from './components/Education';

const App=()=>{
    function handleScroll() {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0, 
      behavior: 'smooth',
    });
  }
    
    return (
        <React.Fragment>
            <NavBar handleScroll={handleScroll}/>
            <FrontWall/>
            <Intro/>
            <Technologies/>
            {/* <Education/> */}
            <Projects/>
            <Resume/>
            <Contact />
        </React.Fragment>
    );
}

export default App;