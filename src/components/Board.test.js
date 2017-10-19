import React from 'react'; 
import { Board } from './Board'; 
import Patron from './Patron'; 
import { shallow, mount } from 'enzyme'; 
import { Provider } from 'react-redux'; 
import store from '../store'; 
import { getPatron } from '../actions'; 

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
        expect(wrapper.find(Patron).length).toEqual(1);
    }); 
    it('dispatches getPatrons when the component renders', () => {
        const spy = jest.fn(); 
        const wrapper = mount(<Board patrons={[]} dispatch={spy} />);
        expect(spy).toHaveBeenCalledWith(getPatron())
    }); 
}); 
