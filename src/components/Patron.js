import React from 'react'; 
import UpdatePatronForm from './UpdatePatronForm';
import { connect } from 'react-redux'; 
import { addDrink } from '../actions'; 
import './Patron.css'; 

export class Patron extends React.Component {
    constructor(props){
        super(props); 
        this.state = {
           formDisplayed: false
        }
    }

    handleFormSubmit(event) {
        event.preventDefault(); 
        const quantity = 1;
        const id = this.props.id;
        console.log(`Here is the id: ${id}`)
        this.playSound(); 
        this.props.dispatch(addDrink(quantity, id))
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

        const drinkDisplay = this.props.drinks.map((drink, idx) => (
            <i className="fa fa-beer" key={idx} aria-hidden="true"></i>
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
                <h1>{this.props.bac}%</h1>
                <h4>TIME SINCE START: {this.props.timeOnSite}</h4>
                <p>TABLE: {this.props.table}</p>
                <p>SEAT: {this.props.seat}</p>
                {drinkDisplay}
                {/* <i className="fa fa-plus" onClick={() => this.handleFormToggle()} aria-hidden="true"></i> */}
                <i className="fa fa-plus" onClick={event => this.handleFormSubmit(event)} aria-hidden="true"></i>
            </div>
        )
    }
} 

export const mapStateToProps = state => ({

}); 
    
export default connect(mapStateToProps)(Patron); 