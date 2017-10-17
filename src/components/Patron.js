import React from 'react'; 
import './Patron.css'; 

export default class Patron extends React.Component {
    constructor(props){
        super(props) 
    }
    
    render(){
        let patronBac = Math.floor(this.props.bac); 
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
        return (
            <div className={color}>
                <p>{this.props.bac}</p>
                <p>{this.props.start}</p>
                <p>{this.props.table}</p>
                <p>{this.props.seat}</p>
            </div>
        )
    }
} 