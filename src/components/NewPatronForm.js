import React from 'react';
import { addPatron, deleteAll, clearError } from '../actions';
import { connect } from 'react-redux'; 
import './NewPatronForm.css'; 

export class NewPatronForm extends React.Component {
    constructor(props){
        super(props); 
        this.state = {
            formDisplayed: false
        }
    }
    
    handleFormSubmit(event) {
        event.preventDefault(); 
        const {gender} = this.form;
        this.props.dispatch(clearError())
        this.props.dispatch(addPatron(this.tableInput.value, this.seatInput.value, gender.value))
            .then(res => {
                    if(this.props.error === undefined) {
                        this.tableInput.value = '';
                        this.seatInput.value = ''; 
                        this.handleFormToggle();
                        const audio = this.audioPlayer; 
                        audio.play();
                    }
                }
            )
    }

    handleFormToggle() {
        this.setState({formDisplayed: !this.state.formDisplayed})
    }

    handleDeleteAll() {
        this.props.dispatch(deleteAll())
    }
    
    render() {

        let formError;
    
        if(this.props.error === 'Unprocessable Entity') {
            formError = (<p className="error">Please enter a valid seat number, <br />table number and gender.</p>)
        }
        
        if(this.state.formDisplayed){
            return (
                <div className="newPatronForm">
                    {formError}
                    <form onSubmit={e => this.handleFormSubmit(e)} ref={form => this.form = form} className="form" > 
                        <input className="input" placeholder="Table" ref={input => this.tableInput = input} />
                        <input className="input" placeholder="Seat" ref={input => this.seatInput = input} />
                        <div className="radio-button-container">
                            <input type="radio" className="radio" name="gender" value="male" id="male" /><label htmlFor="male">Male</label>
                            <input type="radio" className="radio" name="gender" value="female" id="female" /><label htmlFor="female">Female</label>
                        </div>
                        <button className="button_blue testing-submit" type="submit">Add Patron</button>
                        <button className="button_red" onClick={() => this.handleFormToggle()}>Close</button>
                    </form>
                </div>
            )
        }
        return (
            <div className="newPatronToggleArea">
                <button className="button_blue" onClick={() => this.handleFormToggle()}>Add New Patron</button>
                <button className="button_red" onClick={() => this.handleDeleteAll()}>Clear</button>
                <audio ref={audio => this.audioPlayer = audio} >
                    <source src="./sounds/open.m4a" type="audio/mp4" />
                </audio>
            </div>
        )
    }
}

export const mapStateToProps = state => ({
    error: state.error
}); 

export default connect(mapStateToProps)(NewPatronForm); 