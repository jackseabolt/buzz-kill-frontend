import React from 'react'; 
import './Customer.css'; 

export default class Customer extends React.Component {
    constructor(props){
        super(props)
       
    }
    
    render(){
        return (
            <div className="customer">
                <p>{this.props.bac}</p>
                <p>{this.props.timeIn}</p>
                <p>{this.props.table}</p>
                <p>{this.props.seat}</p>
            </div>
        )
    }
} 