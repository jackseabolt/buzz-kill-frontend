import React from 'react';
import NewPatronForm from './NewPatronForm';  
import Board from './Board'; 
import Welcome from './Welcome'; 
import { Transition } from 'react-transition-group'; 
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      welcome: true
    }
  }

  handleWelcome() {
    this.setState({ welcome: false})
  }

  render() {
    // transition styles 
    const duration = 500;
    const defaultStyle = {
        opacity: 0,
        transition: `opacity ${duration}ms ease-in-out`
    }
    const transitionStyles = {
        entering: { opacity: 0 },
        entered: { opacity: 1 }
    }

    let display; 
    if(this.state.welcome) {
      display = <Welcome onHandleWelcome={() => this.handleWelcome()}/>; 
    } 
    else {
      display =  <div><NewPatronForm /><Board /></div>
    }
    return (
      <Transition in={true} timeout={duration} appear={true}>
      {(state) => (
          <div className="App" style={{
              ...defaultStyle,
              ...transitionStyles[state]
          }}>
            <img className="logo" src={require('../logo.jpg')} alt="logo" />
            {display}
          </div>
        )}
      </Transition>
    );
  }
}

export default App;
