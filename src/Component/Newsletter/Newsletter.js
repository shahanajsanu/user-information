import React from 'react';
import './Newsletter.css'

const Newsletter = () => {
    return (
        <div className="center">
            <div className="newsletter">
            <h1>LET'S SAY IN TOUCH</h1>
            <h5>Get more update news</h5>
            <input className="input-form" type="email" placeholder="  Write Your Email"/>
            <br></br>
            <br></br>
            <button className="main-btn">SUBSCRIBE</button>
            </div>
        </div>
        
    );
};

export default Newsletter;