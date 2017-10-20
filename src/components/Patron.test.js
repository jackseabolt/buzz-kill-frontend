import React from 'react'; 
import { Patron } from './Patron'; 
import { shallow, mount } from 'enzyme'; 

describe('<Patron />', () => {
    it('renders without crashing', () => {
        shallow(<Patron drinks={[]} />); 
    });
    it('dispatches addDrink when plus icon is clicked', () => {
        const spy = jest.fn(); 
        const wrapper = mount(<Patron drinks={[]} dispatch={spy} />); 
        wrapper.instance(); 
        const plus = wrapper.find('.fa-plus'); 
        plus.simulate('click'); 
        expect(spy).toHaveBeenCalled(); 
        expect(typeof spy.mock.calls[0][0]).toEqual('function');  
    }); 
    it('dispatches deletePatron when close icon is clicked', () => {
        const spy = jest.fn(); 
        const wrapper = mount(<Patron drinks={[]} dispatch={spy} />); 
        wrapper.instance(); 
        const plus = wrapper.find('.close'); 
        plus.simulate('click'); 
        expect(spy).toHaveBeenCalled(); 
        expect(typeof spy.mock.calls[0][0]).toEqual('function');  
    }); 
}); 