import React, { Component } from 'react';
import Event from './Event';
class EventList extends Component {
  render() {
    const { events, numEvents } = this.props;
    const displayedEvents = events.slice(0, numEvents);
    return (
        <ul className="EventList">
            {displayedEvents.map(event => 
                <li key={event.id}>
                    <Event event={event} numEvents={numEvents}/>
                </li>
            )}
        </ul>
    );
  }
}

export default EventList;