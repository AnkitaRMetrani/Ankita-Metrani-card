import React from 'react';
import'./Footer.css'
import {FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaGithubSquare, FaBehanceSquare} from'react-icons/fa';


export default function Footer() {
    return(
        <div className='footer-icons'>
            <FaFacebookSquare className='f-icons'/> 
            <FaTwitterSquare className='f-icons'/>
            <FaInstagramSquare className='f-icons'/>
            <FaGithubSquare className='f-icons'/>
            <FaBehanceSquare className='f-icons'/>
        </div>
    );
}

 