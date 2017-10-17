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

        const drinkDisplay = this.props.drinks.map(drink => (
            <i className="fa fa-beer" aria-hidden="true"></i>
        ))


        if(this.state.formDisplayed){
            return (
                <div className={color}>
                    <UpdatePatronForm patronId={this.props.id} handleFormToggle={() => this.handleFormToggle()}/>
                </div>
            )
        }
        return (
            <div className={color}>
                <p>BAC: {this.props.bac}</p>
                <h4>TIME ON SITE: {this.props.timeOnSite}</h4>
                <p>TABLE: {this.props.table}</p>
                <p>SEAT: {this.props.seat}</p>
                {drinkDisplay}
                <i className="fa fa-plus-circle" onClick={() => this.handleFormToggle()} aria-hidden="true"></i>
            </div>
        )
    }
} 