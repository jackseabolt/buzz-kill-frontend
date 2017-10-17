import React from 'react'; 
import Patron from './Patron'; 
import { connect } from 'react-redux'; 
import { getPatrons } from '../actions'; 

export class Board extends React.Component {
    
    componentDidMount() {
        this.props.dispatch(getPatrons()); 
    }
    
    render() {
        const patronList = this.props.patrons.map(patron => (
            <Patron
                key={patron.id} 
                timeOnSite={patron.timeOnSite}
                table={patron.table}
                seat={patron.seat}
                bac={patron.bac}
                id={patron.id}
                drinks={patron.drinks} />
        )); 

        return (
            <div className="board">
                {patronList}
            </div>
        )
    }
}

export const mapStateToProps = state => ({
    patrons: state.patrons
}); 

export default connect(mapStateToProps)(Board); 




