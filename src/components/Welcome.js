import React from 'react';
import './Welcome.css';

function Welcome() {

    return (
      <div className="welcome">
        <p>Welcome to Buzz Kill!<br />Do you own a restaurant or bar 
        where alcohol is served? Buzz Kill is an internet applciation 
        that helps businesses track their customer's alcohol intake. 
        <br />
        </p>
        <button className="button_red top_spacing">Get Started</button>
      </div>
    );
}

export default Welcome;
