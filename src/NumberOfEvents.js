import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
    state = {
        numEvents:32,
        errorText: '',
        
  
    } 


    handlenumEventsChanged = (event) => {
      const value = parseInt(event.target.value);
      if (isNaN(value) || value < 1 || value > 100) {
        this.setState({
          numEvents: '',
          errorText: 'Please specify a number between 1-100',
          
        });
      } else {
        this.props.updateNumEvents(event);
        this.setState({
          numEvents: value,
          errorText: ''
        }); 
             
  }
}
    

    handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        const value = parseInt(event.target.value);
        if (isNaN(value) || value < 1 || value > 100) {
          this.setState({
            numEvents: value,
            errorText: 'Please specify a number between 1-100',
            
          });
        } else {
          
          this.setState({
          numEvents: value,
          errorText: '',
          
        })
          this.props.updateNumEvents(event);
       };
      }
    };
  
  render() {
    return (
      <div className="NumberOfEvents">
        <ErrorAlert 
          text={this.state.errorText}
          
          />
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