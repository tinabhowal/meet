import React from 'react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { shallow, mount } from 'enzyme';
import App from '../App';
import Event from '../Event';
import { mockData } from '../mock-data';


const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {

    test('An event element is collapsed by default.', ({ given, when, then }) => {
        given('the user has opened the app', () => {

        });
        let AppWrapper;
        let EventWrapper;
        when('the user goes through the events that the app loads by default', () => {
            AppWrapper = mount(<App />);
            EventWrapper = mount(<Event event={mockData[0]}/>)
        });

        then('the event details are hidden by default.', () => {
            AppWrapper.update();
            EventWrapper.update();
            expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
            expect(EventWrapper.find('.show-details')).toHaveLength(1);
        });
    });


    test('User can expand an event to see its details.', ({ given, when, then }) => {
        let EventWrapper;
        given('the app has loaded all the events by default', () => {
             EventWrapper = shallow(<Event event={mockData[0]} />)
        });

        when('the user clicks on the Show details button', () => {
             EventWrapper.find('.show-details').simulate('click')
        });

        then('the event expands to show the event details.', () => {
            expect(EventWrapper.find('.event-details')).toHaveLength(1);
        });
    });

    test('User can collapse an event to hide its details.', ({ given, when, then }) => {
        let EventWrapper;
        given('the user has expanded the event to check the event details', () => {
            EventWrapper = shallow(<Event event={mockData[0]} />)
            EventWrapper.setState({ showDetails: true });
        });

        when('the user clicks on the Hide details buttonThen the event details get hidden.', () => {
            EventWrapper.find('.hide-details').simulate('click')
        });

        then('the event details get hidden.', () => {
            expect(EventWrapper.state('showDetails')).toEqual(false); // check if state has changed to false
        });
    });
})