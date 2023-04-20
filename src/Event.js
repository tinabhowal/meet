import React, { Component } from "react";
import { Card,Button } from 'react-bootstrap';
import angularjs from './angularjs.svg';
import javascript from './javascript.svg';
import nodejs from './nodejs.svg';
import jquery from './jquery.svg';
import react from './react.svg';

class Event extends Component {
  state = {
    showDetails: false,
  };

  handleShowDetailsClick = () => {
    this.setState({ showDetails: !this.state.showDetails });
  };
  

  render() {
    const {event} = this.props;
    
      const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];
      const isGenre = genres.some(genre => event.summary.includes(genre));
      
      const getGenreImage = (genre) => {
        console.log(genre);
        switch(genre) {
          // case 'React':
          //   return <img src={react} alt="React" width="50" />;
          // case 'JavaScript':
          //   return <img src={javascript} alt="JavaScript" width="50" />;
          case 'React':
            const reactImage = <img src={react} alt="React" width="50" />;
            console.log(reactImage);
            return reactImage;
          case 'JavaScript':
            const javascriptImage = <img src={javascript} alt="JavaScript" width="50" />;
            console.log(javascriptImage);
            return javascriptImage;
            case 'Node':
            return <img src={nodejs} alt="Node" width="50" />;
          case 'jQuery':
            return <img src={jquery} alt="jQuery" width="50" />;
          case 'AngularJS':
            return <img src={angularjs} alt="AngularJS" width="50" />;
          default:
            return null;
        }
      }
      
      
      
     
    return (
    

    <Card key={event.id} className="my-3">
        <Card.Header className="bg-primary text-white">{event.summary}</Card.Header>
        <Card.Body>
          {isGenre && (getGenreImage(event.summary))}
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