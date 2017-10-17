import React from 'react';
import NewPatronForm from './NewPatronForm';  
import Board from './Board'; 
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1 className="title">Buzz Kill</h1>
        <NewPatronForm />
        <Board />
      </div>
    );
  }
}

export default App;
