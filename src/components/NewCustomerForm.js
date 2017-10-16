import React from 'react'; 

export default class NewCustomerForm extends React.Component {
    handleFormSubmit(event) {
        event.preventDefault(); 
        console.log("handleFormSubmit ran"); 
        const { gender } = this.form; 
        console.log(gender.value)
        this.nameInput.value = ''; 
        this.tableInput.value = '';
        this.seatInput.value = ''; 
    }
    
    render() {
        return (
            <div className="newCustomerForm">
                <form onSubmit={e => this.handleFormSubmit(e)} ref={form => this.form = form} > 
                    <input placeholder="name" ref={input => this.nameInput = input} />
                    <input placeholder="Table" ref={input => this.tableInput = input} />
                    <input placeholder="Seat" ref={input => this.seatInput = input} />
                    <input type="radio" name="gender" value="male" id="male" /><label htmlFor="male">Male</label>
                    <input type="radio" name="gender" value="female" id="female" /><label htmlFor="female">Female</label>
                    <button type="submit">Create Record</button>
                </form>
            </div>
        )
    }
}