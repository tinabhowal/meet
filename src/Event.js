import React, { Component } from "react";

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
    <h2 className="summary">{event.summary}</h2>
    <h4 className="time">{event.start.dateTime}</h4>
    <h4 className="location">{event.location}</h4>
    <button className="show-details" onClick={this.handleShowDetailsClick}>
    {this.state.showDetails ? "Hide details" : "Show details"}
    </button>
    {this.state.showDetails && (
          <div className="event-details">
            <h4 className="about-event">About Event</h4>
            <a href={event.htmlLink} className="about-event-link"> See details in Google Calendar</a>
            <p className="event-description">{event.description}</p>
            {/* <button className="hide-details" onClick={this.handleShowDetailsClick}>
             Hide details
             </button> */}
          </div>
        )}
    </div>
    );
  }
}
export default Event;