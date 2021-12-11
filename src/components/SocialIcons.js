import React from 'react';
import path from 'path';
import github from '../assets/social icons/github.svg';
import linkedin from '../assets/social icons/linkedin.svg';
import leetcode from '../assets/social icons/leetcode.svg';
import hackerrank from '../assets/social icons/hackerrank.svg';

import '../css/navBar.css';

const socials=[
    {
        src:require('../assets/social icons/github.svg'),
        name:'Github'
    },
    {
        src:linkedin,
        name:'LinkedIn'
    },
    {
        src:hackerrank,
        name:'HackerRank'
    },
    {
        src:leetcode,
        name:'LeetCode'
    }
];

const SocialIcons=()=>{


    return(
            <>
            <a href="https://github.com/jasdeepsingh24" target="_blank"><img className="navbar-icons"src={github}></img></a>
            <a href="https://www.linkedin.com/in/jasdeep-singh-157563202/" target="_blank"><img className="navbar-icons"src={linkedin}></img></a>
            <a href="https://www.hackerrank.com/jasdeepsingh2405" target="_blank"><img className="navbar-icons"src={hackerrank}></img></a>
            <a href="https://leetcode.com/jasdeep_singh/" target="_blank"><img className="navbar-icons"src={leetcode}></img></a>
            </>
    );
}

export default SocialIcons;