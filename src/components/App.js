import React from 'react';
import NewPatronForm from './NewPatronForm';  
import UpdateCustomerForm from './UpdateCustomerForm'; 
import Board from './Board'; 
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1 className="title">Buzz Kill</h1>
        <NewPatronForm />
        <Board />
        <UpdateCustomerForm />
      </div>
    );
  }
}

export default App;
