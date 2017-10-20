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
    it('adds .level1 class to patron elements with a below above 3', () => {
        const wrapper = mount(<Patron drinks={[]} bac={2} />); 
        wrapper.instance(); 
        expect(wrapper.find('.patron').hasClass('level1')).toEqual(true);
    }); 
    it('adds .level2 class to patron elements with a bac above 3 and below 6', () => {
        const wrapper = mount(<Patron drinks={[]} bac={5} />); 
        wrapper.instance(); 
        expect(wrapper.find('.patron').hasClass('level2')).toEqual(true);
    }); 
    it('adds .level3 class to patron elements with a bac above 6 and below 9', () => {
        const wrapper = mount(<Patron drinks={[]} bac={7} />); 
        wrapper.instance(); 
        expect(wrapper.find('.patron').hasClass('level3')).toEqual(true);
    }); 
    it('adds .level4 class to patron elements with a bac above 9 and below 14', () => {
        const wrapper = mount(<Patron drinks={[]} bac={10} />); 
        wrapper.instance(); 
        expect(wrapper.find('.patron').hasClass('level4')).toEqual(true);
    }); 
    it('adds .level5 class to patron elements with a bac above 12', () => {
        const wrapper = mount(<Patron drinks={[]} bac={15} />); 
        wrapper.instance(); 
        expect(wrapper.find('.patron').hasClass('level5')).toEqual(true);
    }); 
    it('contains call taxi button is patron has bac above 12', () => {
        const wrapper = mount(<Patron drinks={[]} bac={15} />); 
        wrapper.instance(); 
        expect(wrapper.containsMatchingElement(<button className='button_red_patron'>Call Taxi <i className="fa fa-taxi" aria-hidden="true"></i></button>)).toEqual(true);
    }); 
    it('displays the patron time on site', () => {
        const wrapper = mount(<Patron drinks={[]} timeOnSite={'1:00'} />); 
        wrapper.instance(); 
        expect(wrapper.containsMatchingElement(<h4>TIME SINCE START: 1:00</h4>)).toEqual(true);
    }); 
}); 