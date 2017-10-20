import React from 'react'; 
import { NewPatronForm } from './NewPatronForm'; 
import { shallow, mount } from 'enzyme'; 

describe('<NewPatronForm />', () => {
    it('renders without crashing', () => {
        shallow(<NewPatronForm />); 
    }); 
    it('contains buttons that can toggle formDisplayed using handleFormToggle', () => {
        const wrapper = mount(<NewPatronForm />); 
        wrapper.instance(); 
        const button = wrapper.find('.button_blue'); 
        button.simulate('click'); 
        expect(wrapper.state('formDisplayed')).toEqual(true)
    });
    it('contains a form when formDisplay is toggled true', () => {
        const wrapper = mount(<NewPatronForm />); 
        wrapper.instance(); 
        const button = wrapper.find('.button_blue'); 
        button.simulate('click'); 
        expect(wrapper.containsMatchingElement(<button className="button_blue" type="submit">Add Patron</button>))
    }); 
    it('contains a button to toggle formDisplay to false when formDisplay is true', () => {
        const wrapper = mount(<NewPatronForm />); 
        wrapper.instance(); 
        const button = wrapper.find('.button_blue'); 
        button.simulate('click'); 
        const button2 = wrapper.find('.button_red');
        button2.simulate('click'); 
        expect(wrapper.state('formDisplayed')).toEqual(false); 
    }); 
    it('contains a button that triggers handleDeleteAll method', () => {
        const spy = jest.fn()
        const wrapper = mount(<NewPatronForm dispatch={spy} />); 
        wrapper.instance(); 
        const button = wrapper.find('.button_red'); 
        button.simulate('click'); 
        expect(spy).toHaveBeenCalled(); 
        expect(typeof spy.mock.calls[0][0]).toEqual('function');  
    });  
    
}); 