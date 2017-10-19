import React from 'react'; 
import { NewPatronForm } from './NewPatronForm'; 
import { shallow, mount } from 'enzyme'; 

describe('<NewPatronForm />', () => {
    it('renders without crashing', () => {
        shallow(<NewPatronForm />); 
    }); 
}); 