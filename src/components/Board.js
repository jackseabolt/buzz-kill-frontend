import React from 'react'; 
import Customer from './Customer'; 
import { connect } from 'react-redux'; 

export class Board extends React.Component {
    render() {
        const customerList = this.props.customers.map((customer, idx) => (
            <Customer 
                timeIn={customer.timeIn}
                table={customer.table}
                seat={customer.seat}
                bac={customer.bac}
                key={idx} />
        )); 

        return (
            <div className="board">
                {customerList}
            </div>
        )
    }
}

export const mapStateToProps = state => ({
    customers: state.customers
})

export default connect(mapStateToProps)(Board); 




