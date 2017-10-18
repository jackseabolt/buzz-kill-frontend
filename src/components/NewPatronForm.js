import React from 'react';
import { addPatron } from '../actions';
import { connect } from 'react-redux'; 
import './NewPatronForm.css'; 


export class NewCustomerForm extends React.Component {
    constructor(props){
        super(props); 
        this.state = {
            formDisplayed: false
        }
    }
    
    handleFormSubmit(event) {
        event.preventDefault(); 
        console.log("handleFormSubmit ran");
        const {gender} = this.form;
        this.props.dispatch(addPatron(this.tableInput.value, this.seatInput.value, gender.value)); 
        this.tableInput.value = '';
        this.seatInput.value = ''; 
        this.handleFormToggle();
    }

    handleFormToggle(){
        this.setState({formDisplayed: !this.state.formDisplayed})
    }
    
    render() {
        if(this.state.formDisplayed){
            return (
                <div className="newPatronForm">
                    <form onSubmit={e => this.handleFormSubmit(e)} ref={form => this.form = form} > 
                        <input className="input" placeholder="Table" ref={input => this.tableInput = input} />
                        <input className="input" placeholder="Seat" ref={input => this.seatInput = input} />
                        <div className="radio-button-container">
                            <input type="radio" className="radio" name="gender" value="male" id="male" /><label htmlFor="male">Male</label>
                            <input type="radio" className="radio" name="gender" value="female" id="female" /><label htmlFor="female">Female</label>
                        </div>
                        <button className="button" type="submit">Add Patron</button>
                    </form>
                </div>
            )
        }
        return (
            <div className="newPatronToggleArea">
                <button className="button" onClick={() => this.handleFormToggle()}>Add New Patron</button>
            </div>
        )
    }
}

export const mapStateToProps = state => ({

}); 

export default connect(mapStateToProps)(NewCustomerForm); 