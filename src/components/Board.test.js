import React from 'react'; 
import { Board } from './Board'; 
import Patron from './Patron'; 
import { Patron } from './Patron'; 
import { shallow, mount } from 'enzyme'; 
import { Provider } from 'react-redux'; 
import store from '../store'; 

describe('<Board />', () => {
    it('renders without crashing', () => {
        shallow(<Board patrons={[]} dispatch={() => {}}/>);
    }); 
    it('renders no Patron component when not passed patron data', () => {
        const wrapper = shallow(<Board patrons={[]} dispatch={() => {}} />);
        expect(wrapper.contains(<Patron />)).toEqual(false);
    });
    it('renders Patron component when provided patron data', () => {
        const wrapper = shallow(<Board patrons={[{}]} dispatch={() => {}} />);
        expect(wrapper.contains(<Patron />)).toEqual(true);
        expect(wrapper.find(Patron)).to.have.length(1) 
    }); 
}); 
