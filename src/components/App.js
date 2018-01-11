import React from 'react';
import NewPatronForm from './NewPatronForm';  
import Board from './Board'; 
import Welcome from './Welcome'; 
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      welcome: true
    }
  }
  render() {
    let display; 
    if(this.state.welcome) {
      display = <Welcome />; 
    } 
    else {
      display =  <div><NewPatronForm /><Board /></div>
    }
    return (
      <div className="App">
        <img className="logo" src={require('../logo.jpg')} alt="logo" />
        {display}
      </div>
    );
  }
}

export default App;
