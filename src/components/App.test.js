import React from 'react';
import { mount } from 'enzyme';
import App from './App';

describe('App', () => {
    let app = mount(<App />);
    
    it('renders the title', () => {
        expect(app.find('h2').text()).toEqual('Note to Self');
    });

    it('renders the clear button', () => {
        expect(app.find('.btn').at(1).text()).toEqual('Delete all Notes');
    });
    
    describe('when rendering the form', () => {
        it('renders a Form component', () => {
            expect(app.find('Form').exists()).toBe(true);
        });

        it('renders a FormControl component', () => {
            expect(app.find('FormControl').exists()).toBe(true);
        });

        it('renders a submit button', () => {
            expect(app.find('.btn').at(0).text()).toEqual('Submit');
        });
    });
});

