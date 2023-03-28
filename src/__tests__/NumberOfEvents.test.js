import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('< NumberOfEvents/> component', () => {
    let NumberOfEventsWrapper;
    beforeAll(() => {

      NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

    test('render textbox element', () => {
    expect(NumberOfEventsWrapper.find('.num-events')).toHaveLength(1);
  });

  test('change number of events', () => {
    const eventObject = {target: { value:2 }};
    NumberOfEventsWrapper.find('.num-events').simulate('change', eventObject);
    expect(NumberOfEventsWrapper.state('numEvents')).toBe(2);
  });

});