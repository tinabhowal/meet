import React, { Component } from 'react';
import './nprogress.css';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';
class App extends Component {
  state = {
    events: [],
    locations: [],
    numEvents: 32
  }

updateEvents = (location) => {
  getEvents().then((events) => {
    const locationEvents = (location === "all")?events:events.filter((event) => event.location === location);
    this.setState({
      events: locationEvents.slice(0, this.state.numEvents)
    })
  })
}

updateNumEvents = (event) => {
  const value = event.target.value;
  this.setState({
    numEvents: value,
    events: this.state.events.slice(0, value) // limit to numEvents
  });
}

componentDidMount() {
  this.mounted = true;
  getEvents().then((events) => {
    if(this.mounted){
    this.setState({ events: events.slice(0, this.state.numEvents), locations: extractLocations(events) });
    }
  });
}

componentWillUnmount(){
  this.mounted = false;
}

  render() {
    return (
      <div className="App">
        <CitySearch locations={this.state.locations} updateEvents = {this.updateEvents}/>
        <EventList events={this.state.events} numEvents={this.state.numEvents}/>
        <NumberOfEvents numEvents={this.state.numEvents} updateNumEvents={this.updateNumEvents} />
      </div>
    );
  }
}

export default App;