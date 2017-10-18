import React from 'react'; 
import UpdatePatronForm from './UpdatePatronForm';
import { connect } from 'react-redux'; 
import { addDrink } from '../actions'; 
import { deletePatron } from '../actions'; 
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
        this.props.dispatch(addDrink(quantity, id))
        const audio = this.audioPlayer; 
        audio.play();
    }

    handleFormToggle(){
        this.setState({formDisplayed: !this.state.formDisplayed})
    }

    handleDeletePatron() {
        this.props.dispatch(deletePatron(this.props.id))
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

        let callTaxi; 
        if(this.props.bac > 12.1) {
            callTaxi = (
                <a href="tel:+15105934577">
                    <button className='button_red'>Call Taxi <i class="fa fa-taxi" aria-hidden="true"></i></button>
                </a>
            )
        }
        return (
            <div className={color}>
                <div className="left">
                    <h1>{this.props.bac}%</h1>
                    { callTaxi }
                </div>
                <div className="right">
                    <i className="fa fa-times close" onClick={event => this.handleDeletePatron()} aria-hidden="true"></i>
                    <h4>TIME SINCE START: {this.props.timeOnSite}</h4>
                    <p>{this.props.seatString}</p>
                    {/* <p>TABLE: {this.props.table}</p> */}
                    {/* <p>SEAT: {this.props.seat}</p> */}
                    {drinkDisplay}
                    {/* <i className="fa fa-plus" onClick={() => this.handleFormToggle()} aria-hidden="true"></i> */}
                    <i className="fa fa-plus" onClick={event => this.handleFormSubmit(event)} aria-hidden="true"></i>
                </div>
                <div className="clear"></div>
                <audio ref={audio => this.audioPlayer = audio} >
                    <source src="./sounds/pour.m4a" type="audio/mp4" />
                </audio>
            </div>
        )
    }
} 

export const mapStateToProps = state => ({

}); 
    
export default connect(mapStateToProps)(Patron); 