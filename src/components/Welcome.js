import React from 'react';
import './Welcome.css';

class Welcome extends React.Component {
    handleButton() {
        this.props.onHandleWelcome(); 
    }

    render() {
        return (
        <div className="welcome">
            <p>Buzz Kill is an application designed to help businesses 
                track their customers' alcohol intake. Simply create a record for your patron and 
                add drinks as they are served. Buzz Kill takes care of the rest!
            <br />
            </p>
            <button onClick={() => this.handleButton()} className="button_blue top_spacing">Get Started</button>
        </div>
        );
    }
}

export default Welcome;

