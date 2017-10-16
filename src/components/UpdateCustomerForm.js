import React from 'react'; 

export default class UpdateCustomerForm extends React.Component {
    render() {
        return (
            <div className="updateCustomerForm">
                <form> 
                    <input placeholder="Table" />
                    <input placeholder="Seat" />
                    <button type="submit">Update Record</button>
                </form>
            </div>
        )
    }
}