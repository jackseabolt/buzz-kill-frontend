import React from 'react'; 
import { connect } from 'react-redux'; 
import { addDrink } from '../actions'; 


export class UpdatePatronForm extends React.Component {
    handleForm(event) {
        event.preventDefault(); 
        this.props.handleFormToggle(); 
    }
   
    handleFormSubmit(event) {
        event.preventDefault(); 
        const quantity = this.input.value;
        const id = this.props.patronId;
        this.props.dispatch(addDrink(quantity, id))
    }
    render() {
        return (
            <div className="updatePatronForm">
                <form onSubmit={event => this.handleFormSubmit(event)}> 
                    <p>The id is {this.props.patronId}</p>
                    <select ref={input => this.input = input}>
                        <option value="1">1</option>
                        <option value="1.5">1.5</option>
                        <option value="2">2</option>
                        <option value="2.5">2.5</option>
                        <option value="3">3</option>
                    </select>
                    <button type="submit">Update Record</button>
                    <button onClick={event => this.handleForm(event)} >Back</button>
                </form>
            </div>
        )
    }
}
export const mapStateToProps = state => ({

}); 

export default connect(mapStateToProps)(UpdatePatronForm); 