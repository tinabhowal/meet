import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event /> component', () => {
    let event, EventWrapper;
  beforeAll(() => {
    event = mockData[0];
    EventWrapper = shallow(<Event event={event} />);
  });

    test('event has basic details', () => {
    expect(EventWrapper.find('.summary')).toHaveLength(1);
    expect(EventWrapper.find('.summary').text()).toBe(event.summary);
    expect(EventWrapper.find('.time')).toHaveLength(1);
    expect(EventWrapper.find('.time').text()).toBe(event.start.dateTime);
    expect(EventWrapper.find('.location')).toHaveLength(1);
    expect(EventWrapper.find('.location').text()).toBe(event.location);
    expect(EventWrapper.find('.show-details')).toHaveLength(1);
  });

  test('toggle show-details/hide-details button when clicked', () => {
    EventWrapper.setState({showDetails: false});
    EventWrapper.find('.show-details').simulate('click');
    expect (EventWrapper.state('showDetails')).toBe(true);
    expect(EventWrapper.find('.about-event')).toHaveLength(1);
    expect(EventWrapper.find('.about-event').text()).toBe('About Event');
    expect(EventWrapper.find('.about-event-link')).toHaveLength(1);
    expect(EventWrapper.find('.about-event-link').html()).toContain(event.htmlLink);
    expect(EventWrapper.find('.event-description')).toHaveLength(1);
    expect(EventWrapper.find('.event-description').text()).toBe(event.description);
    EventWrapper.find('.hide-details').simulate('click'); 
    expect (EventWrapper.state('showDetails')).toBe(false);  

  });

});