import React, { Component } from 'react';
import './nprogress.css';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations,  checkToken, getAccessToken  } from './api';
import { Container, Row, Col } from 'react-bootstrap';
import { WarningAlert } from './Alert';
import WelcomeScreen from './WelcomeScreen';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numEvents: 32,
    offline: false,
    showWelcomeScreen: undefined
    
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
  getEvents().then((events) => {
  this.setState({
    numEvents: value,
    //events: this.state.events.slice(0, value) // limit to numEvents
    events: events.slice(0, value) // limit to numEvents  
  });
});
}

async componentDidMount() {
  
  // Add event listener for 'offline' event
  window.addEventListener('offline', () => {
    this.setState({ offline: true });
  });

  // Add event listener for 'online' event
  window.addEventListener('online', () => {
    this.setState({ offline: false });
  });

  this.mounted = true;
  const accessToken = localStorage.getItem('access_token');
  const isTokenValid = (await checkToken(accessToken)).error ? false :
  true;
  const searchParams = new URLSearchParams(window.location.search);
  const code = searchParams.get("code");
  this.setState({ showWelcomeScreen: !(code || isTokenValid) });
  if ((code || isTokenValid) && this.mounted) {

  getEvents().then((events) => {
    if(this.mounted){
    this.setState({ events: events.slice(0, this.state.numEvents), locations: extractLocations(events) });
    }
  });
 } 
}

componentWillUnmount(){
  this.mounted = false;
}

getData = () => {
  const {locations, events} = this.state;
  const data = locations.map((location)=>{
    const number = events.filter((event) => event.location === location).length
    const city = location.split(', ').shift()
    return {city, number};
  })
  return data;
};

  render() {
    console.log('offline:', this.state.offline);
    if (this.state.showWelcomeScreen === undefined)
    return <div className="App" />
    return (
      <div className="App">
        {this.state.offline && <WarningAlert text="Your network connection is offline." />}
        <Container>
          <Row text-center>
            <Col>
              <CitySearch locations={this.state.locations} updateEvents = {this.updateEvents}/>
            </Col>
          </Row>

          <Row>
            <Col>
              <EventList events={this.state.events} numEvents={this.state.numEvents}/>
            </Col>
          </Row>   

          <Row>
            <Col>   
              <NumberOfEvents numEvents={this.state.numEvents} updateNumEvents={this.updateNumEvents} />
            </Col> 
          </Row>

          <Row>
            <Col>   
            <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen}
getAccessToken={() => { getAccessToken() }} />
            </Col> 
          </Row>
        </Container>    
      </div>
    );
  }
}

export default App;