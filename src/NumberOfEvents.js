import React, { Component } from 'react';

class NumberOfEvents extends Component {
    state = {
        numEvents:32,
    } 

    handlenumEventsChanged = (event) => {
        const value = parseInt(event.target.value);
        this.setState({numEvents:value});
        this.props.updateNumEvents(event);
    }

    handleKeyDown = (event) => {
      if (event.keyCode === 13) {
        const value = parseInt(event.target.value);
        this.props.updateNumEvents(event);
        this.setState({
          numEvents: value
        });
      }
    };
  
  render() {
    return (
      <div className="NumberOfEvents">
        <label htmlFor="num-events">Number of Events:</label>
        <input
            type="number"
            className="num-events"
            value={this.state.numEvents}
            onChange={this.handlenumEventsChanged}
            onKeyDown={this.handleKeyDown}
        />
      </div>
    );
  }
}

export default NumberOfEvents;