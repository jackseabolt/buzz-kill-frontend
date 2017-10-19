import React from 'react'; 
import { NewPatronForm } from './NewPatronForm'; 
import { shallow, mount } from 'enzyme'; 

describe('<NewPatronForm />', () => {
    it('renders without crashing', () => {
        shallow(<NewPatronForm />); 
    }); 
    it('displays buttons when formDisplayed is false', () => {
        const wrapper = shallow(<NewPatronForm />); 
        expect(wrapper.find('.button_blue')).toEqual(true)
    }); 

}); 