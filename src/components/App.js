import React from 'react';
import NewCustomerForm from './NewCustomerForm';  
import UpdateCustomerForm from './UpdateCustomerForm'; 
import Board from './Board'; 
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Board />
        <NewCustomerForm />
        <UpdateCustomerForm />
      </div>
    );
  }
}

export default App;
