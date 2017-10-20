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
    it('dispatches clearError action on every form submit', () => {
        const spy = jest.fn(); 
        let wrapper = mount(<NewPatronForm dispatch={spy} />); 
        wrapper.instance();
        expect(wrapper.containsMatchingElement(<button className="button_blue testing-submit" type="submit">Add Patron</button>)).toEqual(false); 
        expect(wrapper.state('formDisplayed')).toEqual(false);
        const button = wrapper.find('.button_blue'); 
        button.simulate('click'); 
        expect(wrapper.state('formDisplayed')).toEqual(true); 
        expect(wrapper.containsMatchingElement(<button className="button_blue testing-submit" type="submit">Add Patron</button>)).toEqual(true); 
        const form = wrapper.find('.form'); 
        form.simulate('submit');
        expect(spy).toHaveBeenCalled();
    }); 
    it('dispatches addPatron on submit', () => {
        const spy = jest.fn(); 
        const wrapper = mount(<NewPatronForm dispatch={spy} />); 
        wrapper.instance(); 
        const button = wrapper.find('.button_blue'); 
        button.simulate('click'); 
        expect(wrapper.state('formDisplayed')).toEqual(true)
        expect(wrapper.containsMatchingElement(<button className="button_blue testing-submit" type="submit">Add Patron</button>)).toEqual(true); 
        // const submitBtn = wrapper.find('.testing-submit'); 
        // submitBtn.simulate('click');
        // expect(spy).toHaveBeenCalled();
    }); 
    it('clears input values when given appropriate input', () => {
        const spy = jest.fn(); 
        const wrapper = mount(<NewPatronForm dispatch={spy} />); 
        wrapper.instance(); 
        const button = wrapper.find('.button_blue'); 
        button.simulate('click'); 
        expect(wrapper.state('formDisplayed')).toEqual(true)
        expect(wrapper.containsMatchingElement(<button className="button_blue testing-submit" type="submit">Add Patron</button>)).toEqual(true); 
        // const submitBtn = wrapper.find('.testing-submit'); 
        // submitBtn.simulate('click');
        // expect(spy).toHaveBeenCalled();
    }); 
    it('displays error when given letters instead of numbers', () => {
        const spy = jest.fn(); 
        const wrapper = mount(<NewPatronForm dispatch={spy} />); 
        wrapper.instance(); 
        const button = wrapper.find('.button_blue'); 
        button.simulate('click'); 
        expect(wrapper.state('formDisplayed')).toEqual(true)
        expect(wrapper.containsMatchingElement(<button className="button_blue testing-submit" type="submit">Add Patron</button>)).toEqual(true); 
        // const submitBtn = wrapper.find('.testing-submit'); 
        // submitBtn.simulate('click');
        // expect(spy).toHaveBeenCalled();  
    }); 
    it('displays error when missing input', () => {
        const spy = jest.fn(); 
        const wrapper = mount(<NewPatronForm dispatch={spy} />); 
        wrapper.instance(); 
        const button = wrapper.find('.button_blue'); 
        button.simulate('click'); 
        expect(wrapper.state('formDisplayed')).toEqual(true)
        expect(wrapper.containsMatchingElement(<button className="button_blue testing-submit" type="submit">Add Patron</button>)).toEqual(true); 
        // const submitBtn = wrapper.find('.testing-submit'); 
        // submitBtn.simulate('click');
        // expect(spy).toHaveBeenCalled();
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