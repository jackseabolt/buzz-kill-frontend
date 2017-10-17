import React from 'react'; 
import Patron from './Patron'; 
import { connect } from 'react-redux'; 
import { getPatrons } from '../actions'; 

export class Board extends React.Component {
    
    componentDidMount() {
        this.props.dispatch(getPatrons()); 
    }
    
    render() {
        const patronList = this.props.patrons.map((patron, idx) => (
            <Patron
                start={patron.start}
                table={patron.table}
                seat={patron.seat}
                bac={patron.bac}
                key={idx} />
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




