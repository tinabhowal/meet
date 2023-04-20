import React, { Component } from 'react';
import Event from './Event';
import { Container, Row, Col, Card} from 'react-bootstrap';

class EventList extends Component {
  render() {
    const { events, numEvents } = this.props;
    const displayedEvents = events.slice(0, numEvents);
    return (
      <Container>
        <Row xs={1} md={2} lg={3} className="g-4">
          
              {/* <ul className="EventList text-center"> */}
                  {displayedEvents.map((event) => (
                      <Col key={event.id}>
                        <Card>
                         <Card.Body>
                           <Event  event={event} numEvents={numEvents}/>
                         </Card.Body>
                        </Card>
                      </Col>  
                  ))}
            </Row>
      </Container>      
    );
  }
}

export default EventList;