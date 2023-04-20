import React, { Component } from 'react';
import Event from './Event';
import { Container, Row, Col, CardColumns} from 'react-bootstrap';
 
class EventList extends Component {
  render() {
    const { events, numEvents } = this.props;
    const displayedEvents = events.slice(0, numEvents);
    return (
      <Container>
        <Row>
          <Col>
           <CardColumns>
              {/* <ul className="EventList text-center"> */}
                  {displayedEvents.map(event => 
                      // <li key={event.id} >
                          <Event key={event.id} event={event} numEvents={numEvents}/>
                      // </li>
                  )}
              {/* </ul> */}
              </CardColumns>
          </Col>
        </Row>
      </Container>      
    );
  }
}

export default EventList;