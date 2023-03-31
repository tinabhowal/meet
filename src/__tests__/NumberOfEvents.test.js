import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('< NumberOfEvents/> component', () => {
    let NumberOfEventsWrapper;
    let numEvents = 32;
    beforeAll(() => {

      NumberOfEventsWrapper = shallow(<NumberOfEvents numEvents = {numEvents} updateNumEvents={() => {}} />);
  });

    test('render textbox element', () => {
    expect(NumberOfEventsWrapper.find('.num-events')).toHaveLength(1);
  });

  test('change number of events in the input field', () => {
    const eventObject = {target: { value:2 }};
    NumberOfEventsWrapper.find('.num-events').simulate('change', eventObject);
    expect(NumberOfEventsWrapper.state('numEvents')).toBe(2);
  });

  test('call updateNumEvents function when Enter key is pressed', () => {
    const updateNumEventsMock = jest.fn();
    const eventObject = { target: { value: 2 }, keyCode: 13 };
    const NumberOfEventsWrapper = shallow(
      <NumberOfEvents updateNumEvents={updateNumEventsMock} />
    );
  
    NumberOfEventsWrapper.find('.num-events').simulate('keydown', eventObject);
    expect(updateNumEventsMock).toHaveBeenCalledWith(eventObject)
  });
  

});