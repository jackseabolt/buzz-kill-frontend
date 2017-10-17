import React from 'react'; 
import UpdatePatronForm from './UpdatePatronForm'; 
import './Patron.css'; 

export default class Patron extends React.Component {
    constructor(props){
        super(props); 
        this.state = {
           formDisplayed: false
        }
    }

    handleFormToggle(){
        this.setState({formDisplayed: !this.state.formDisplayed})
    }
    
    render(){
        let patronBac = this.props.bac; 
        let color; 
        if(patronBac <= 3) {
            color='level1 patron'; 
        }
        else if ( patronBac > 3 && patronBac <= 6) {
            color='level2 patron'; 
        }
        else if ( patronBac > 6 && patronBac <= 9 ) {
            color='level3 patron'; 
        }
        else if ( patronBac > 9 && patronBac <= 12 ) {
            color='level4 patron';
        }
        else {
            color='level5 patron';
        }

        if(this.state.formDisplayed){
            return (
                <div className={color}>
                    <UpdatePatronForm handleFormToggle={() => this.handleFormToggle()}/>
                </div>
            )
        }
        return (
            <div className={color}>
                <p>BAC: {this.props.bac}</p>
                <p>START: {this.props.start}</p>
                <p>TABLE: {this.props.table}</p>
                <p>SEAT: {this.props.seat}</p>
                <button onClick={() => this.handleFormToggle()} >Add Drink</button>
            </div>
        )
    }
} 