import React from 'react';
import { shallow } from 'enzyme';
import EventList from '../EventList';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<EventList /> component', () => {
  // test('render correct number of events', () => {
  //   const EventListWrapper = shallow(<EventList events={ mockData }/>);
  //   expect(EventListWrapper.find(Event)).toHaveLength(mockData.length);
  // });

  test('render correct number of events', () => {
    const numEvents = 3;  
    const EventListWrapper = shallow(<EventList events={mockData} numEvents={numEvents} />);
    expect(EventListWrapper.find(Event)).toHaveLength(numEvents);
  });
  
});