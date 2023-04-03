import React, { Component } from 'react';
import Event from './Event';
import { Container, Row, Col } from 'react-bootstrap'; 
class EventList extends Component {
  render() {
    const { events, numEvents } = this.props;
    const displayedEvents = events.slice(0, numEvents);
    return (
      <Container>
        <Row>
          <Col>
              <ul className="EventList text-center">
                  {displayedEvents.map(event => 
                      <li key={event.id} >
                          <Event event={event} numEvents={numEvents}/>
                      </li>
                  )}
              </ul>
          </Col>
        </Row>
      </Container>      
    );
  }
}

export default EventList;