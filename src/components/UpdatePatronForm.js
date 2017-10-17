import React from 'react'; 

export default class UpdatePatronForm extends React.Component {
    handleForm(event) {
        event.preventDefault(); 
        this.props.handleFormToggle(); 
    }
   
    handleFormSubmit(event) {
        event.preventDefault(); 

    }
    render() {
        return (
            <div className="updatePatronForm">
                <form onSubmit={event => this.handleFormSubmit(event)}> 
                    <p>The id is {this.props.id}</p>
                    <select>
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