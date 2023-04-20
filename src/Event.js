import React, { Component } from "react";
import { Card,Button } from 'react-bootstrap';

class Event extends Component {
  state = {
    showDetails: false,
  };

  handleShowDetailsClick = () => {
    this.setState({ showDetails: !this.state.showDetails });
  };
  

  render() {
    const {event} = this.props;
    return (
    

    <Card key={event.id} className="my-3">
        <Card.Header className="bg-primary text-white">{event.summary}</Card.Header>
        <Card.Body>
          <Card.Text>
            <strong>Start:</strong> {event.start.dateTime}
            <br />
            <strong>Location:</strong> {event.location}
          </Card.Text>
          <Button
            className="btn btn-primary"
            onClick={this.handleShowDetailsClick}
          >
            {this.state.showDetails ? "Hide details" : "Show Details"}
          </Button>
          {this.state.showDetails && (
            <Card.Text>
              <h4 className="about-event">About Event</h4>
              <a href={event.htmlLink} className="about-event-link">
                See details in Google Calendar
              </a>
              <p className="event-description">{event.description}</p>
            </Card.Text>
            )}
            </Card.Body>
          </Card>
    );
  }
}
export default Event;