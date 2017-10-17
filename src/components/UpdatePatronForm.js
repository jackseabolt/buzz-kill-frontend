import React from 'react'; 

export default class UpdatePatronForm extends React.Component {
    handleForm(event){
        event.preventDefault(); 
        this.props.handleFormToggle(); 
    }
   
    render() {
        return (
            <div className="updatePatronForm">
                <form> 
                    <input placeholder="Table" />
                    <input placeholder="Seat" />
                    <button type="submit">Update Record</button>
                    <button onClick={event => this.handleForm(event)} >Back</button>
                </form>
            </div>
        )
    }
}