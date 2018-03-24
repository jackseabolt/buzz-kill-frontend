import React from 'react';
import './Welcome.css';

class Welcome extends React.Component {
    handleButton() {
        this.props.onHandleWelcome(); 
    }

    render() {
        return (
        <div className="welcome">
            <p className="welcome-p">Welcome! Buzz Kill is application for tracking bar patrons' blood alcohol content. Simply create a record for your patron and 
                add drinks as they are served. Buzz Kill takes care of the rest!
            <br />
            </p>
            <button onClick={() => this.handleButton()} className="button_blue top_spacing">Get Started</button>
        </div>
        );
    }
}

export default Welcome;

