import React from 'react';
import { mount } from 'enzyme';
import App from './App';

describe('App', () => {
    let app = mount(<App />);
    
    it('renders the title', () => {
        expect(app.find('h2').text()).toEqual('Note to Self');
    });
});