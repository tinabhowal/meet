import React, { Component } from 'react';

class NumberOfEvents extends Component {
    state = {
        numEvents:32,
    } 

    handlenumEventsChanged = (event) => {
        const value = event.target.value;
        this.setState({numEvents:value,});
    }

  render() {
    return (
      <div className="NumberOfEvents">
        <label htmlFor="num-events">Number of Events:</label>
        <input
            type="number"
            id="num-events"
            className="num-events"
            value={this.state.numEvents}
            onChange={this.handlenumEventsChanged}
        />
      </div>
    );
  }
}

export default NumberOfEvents;