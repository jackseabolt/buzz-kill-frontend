import React from 'react';
import NewPatronForm from './NewPatronForm';  
import Board from './Board'; 
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <img className="logo" src={require('../logo.jpg')} alt="logo" />
        {/* <h1 className="title">Buzz Kill</h1> */}
        <NewPatronForm />
        <Board />
      </div>
    );
  }
}

export default App;
