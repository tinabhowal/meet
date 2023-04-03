import React from 'react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { shallow, mount } from 'enzyme';
import App from '../App';
import Event from '../Event';
import NumberOfEvents from '../NumberOfEvents';
import { mockData } from '../mock-data';


const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {

    test('When user hasn’t specified the number of events to display, 32 events are displayed by default.', ({ given, when, then }) => {
        let AppWrapper;
        let NumberOfEventsWrapper;
        AppWrapper = mount(<App />);
        NumberOfEventsWrapper = mount(<NumberOfEvents numEvents={32} updateNumEvents={() => {}} />)
        given('user hasn’t specified the number of events to display', () => {

        });

        when('the user opens the app', () => {
            AppWrapper.update();
            NumberOfEventsWrapper.update();
        });

        then(/^(\d+) events are displayed by default.$/, (arg0) => {
            expect(NumberOfEventsWrapper.state('numEvents')).toBe(32);
          });
        });


    test('User can increase or decrease the number of events to be displayed by using the increase or decrease arrows.', ({ given, when, then }) => {
        let AppWrapper;
        let NumberOfEventsWrapper;
        given(/^(\d+) events are displayed by default$/, (arg0) => {
             AppWrapper = mount(<App />);
             NumberOfEventsWrapper = mount(<NumberOfEvents numEvents={32} updateNumEvents={() => {}} />)

        });

        when('the user increases or decreases the number of events using the increase or decrease arrow', () => {
            NumberOfEventsWrapper.find('.NumberOfEvents .num-events').simulate('change', { target: { value: 2 } });
        });
        

        then('the number of events displayed are the same as the input value of number of events.', () => {
            expect(NumberOfEventsWrapper.state('numEvents')).toBe(2);
        });
    });


    test('User can choose to type the required number of events to be displayed and hit enter.', ({ given, when, then }) => {        
        let AppWrapper;
        let NumberOfEventsWrapper;
        given(/^(\d+) events are displayed by default$/, (arg0) => {
            AppWrapper = mount(<App />);
            NumberOfEventsWrapper = mount(<NumberOfEvents numEvents={32} updateNumEvents={() => {}} />)
        });

        when('the user chooses to type the required number instead of using the increase or decrease arrow', () => {
            NumberOfEventsWrapper.find('.NumberOfEvents .num-events').simulate('change', { target: { value: 3 } });
            NumberOfEventsWrapper.find('.NumberOfEvents .num-events').simulate('keyDown', { keyCode: 13 });
        });

        then('the number of events displayed are the same as the input value of number of events.', () => {
            expect(NumberOfEventsWrapper.state('numEvents')).toBe(3);
        });
    });
});