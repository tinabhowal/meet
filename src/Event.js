import React, { Component } from "react";
import { Card, ListGroup,Button } from 'react-bootstrap';

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
    <div className="event">
    {/* <h2 className="summary">{event.summary}</h2>
    <h4 className="time">{event.start.dateTime}</h4>
    <h4 className="location">{event.location}</h4>
    <button className="show-details" onClick={this.handleShowDetailsClick}>
    {this.state.showDetails ? "Hide details" : "Show details"}
    </button>
    {this.state.showDetails && (
          <div className="event-details">
            <h4 className="about-event">About Event</h4>
            <a href={event.htmlLink} className="about-event-link"> See details in Google Calendar</a>
            <p className="event-description">{event.description}</p> */}
            {/* <button className="hide-details" onClick={this.handleShowDetailsClick}>
             Hide details
             </button> */}
             {/* </div> */}
             <Card key={event.id} className="my-3">
             <Card.Header className="bg-primary text-white">{event.summary}</Card.Header>
             <ListGroup variant="flush">
              <ListGroup.Item><strong>Start:</strong> {event.start.dateTime}</ListGroup.Item>
              <ListGroup.Item><strong>Location:</strong> {event.location}</ListGroup.Item>
            </ListGroup>
            <Card.Footer>
              <Button className="btn btn-primary" onClick={this.handleShowDetailsClick}>
                {this.state.showDetails? "Hide details" : "Show Details"}
              </Button>
            </Card.Footer>
            {this.state.showDetails && (
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h4 className="about-event">About Event</h4>
                  <a href={event.htmlLink} className="about-event-link"> See details in Google Calendar</a>
                  <p className="event-description">{event.description}</p>
                </ListGroup.Item>
              </ListGroup>
            )}
          </Card>
    </div>
    );
  }
}
export default Event;