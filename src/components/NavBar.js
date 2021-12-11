import React,{useRef,messages,useEffect} from 'react';

// import social from '../socials';


import SocialIcons from './SocialIcons';

import '../css/navBar.css';
import '../index.css';
const NavBar=(props)=>{
    
    console.log(props.handleScroll);
    

  

    return (
        <div className="navbar">
            <div className="navbar-content">
                <div className="logo">
                    <SocialIcons/>
                </div>
                <ul>
                    <li>
                    <a href=""></a>
                    </li>
                    <li>
                        <img className="profile" src="https://drive.google.com/uc?id=1oahfJRDKFpEM-bRkyxbmGe2kT-r80F_Z"></img>
                    {/* <a href="" ><div className="btn" onClick={props.handleScroll}>Say Hello</div></a> */}
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;