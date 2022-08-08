import React from 'react';
import pic from '../cvi.jpg'
import {FaEnvelope,FaLinkedin} from 'react-icons/fa'
import './Home.css'

function Buttons() {
    return(
        <div className='buttons'>
            <button className='mail-button'> <FaEnvelope className='icon'/> <h4> Email</h4> </button> 
            <button className='linkdin-button'>  <FaLinkedin className='icons'/><p>LinkdIn </p></button> 
        </div>
    )
}

function Home() {
    return (
        <div className='home'>
            <img className='home-img' src={pic} alt='Ankita Metrani'/>
            <h1>Ankita Metrani </h1>
            <h4> UI UX Designer</h4>
            <h6> ankitametrani@xyz.com</h6>
            <Buttons />
        </div>
        
     );
}

export default Home;