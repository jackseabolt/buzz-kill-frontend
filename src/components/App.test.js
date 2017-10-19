import React from 'react';
import App from './App';
import NewPatronForm from './NewPatronForm'; 
import Board from './Board'; 
import { shallow } from 'enzyme'; 

describe('<App />', () => {
  it('renders without crashing', () => {
    shallow(<App />)
  });
  it('renders NewPatronForm component', () => {
    const wrapper = shallow(<App />); 
    expect(wrapper.contains(<NewPatronForm />)).toEqual(true)
  });
  it('renders Board component', () => {
    const wrapper = shallow(<App />); 
    expect(wrapper.contains(<Board />)).toEqual(true)
  }); 
  it('renders logo image', () => {
    const wrapper = shallow(<App />); 
    expect(wrapper.contains(<img className="logo" src={require('../logo.jpg')} alt="logo" />)).toEqual(true)
  }) 
}); 

