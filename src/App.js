import React, { Component } from 'react';
import './nprogress.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations,  checkToken, getAccessToken  } from './api';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { WarningAlert } from './Alert';
import WelcomeScreen from './WelcomeScreen';
import EventGenre from './EventGenre';
import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numEvents: 32,
    offline: false,
    showWelcomeScreen: undefined,
    chartType: "EventGenre"
    
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
  AOS.init({
    duration: 1200,
    easing: 'ease-in-out',
    once: false
  });

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

toggleChartType = () => {
  const chartType = this.state.chartType === "EventGenre" ? "ScatterChart" : "EventGenre";
  this.setState({chartType});
}

  render() {
    console.log('offline:', this.state.offline);
    if (this.state.showWelcomeScreen === undefined)
    return <div className="App" style={{ padding: "0", margin: "0" }}/>
    
    const data = this.getData();

    
    
    return (
      <div className="App"  style={{ padding: "0", margin: "0" }}>
        {this.state.offline && <WarningAlert text="Your network connection is offline." />}
        <Container>
          <Row data-aos="fade-up">
            <Col>
              <h1>Meet App</h1>
              {/* <h4>Choose your nearest city</h4> */}
              <CitySearch locations={this.state.locations} updateEvents = {this.updateEvents} />
            </Col>
          </Row>

          <Row data-aos="fade-up">
            <Col style={{textAlign:"center"}}>
              <h6>Events in each city</h6>
            </Col>
          </Row>

          <Row data-aos="fade-up">  
            <Col className='data-vis-wrapper'>
              {this.state.events === 0? 
              <p>Loading...</p>
              :
              this.state.chartType === "EventGenre"?
              <EventGenre events={this.state.events} />
              :
              <ResponsiveContainer width={800} >
                <ScatterChart
                margin={{
                  top: 20, right: 20, bottom: 20, left: 20,
                }}
                
                >
                <CartesianGrid />
                <XAxis type="category" dataKey="city" name="city" label={{ fontSize: 12 }} tick={{ fontSize: 10 }}  />
                <YAxis type="number" dataKey="number" name="number of events" allowDecimals={false} label={{ fontSize: 12 }} tick={{ fontSize: 10 }}  />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Scatter name="" data={data} fill="#8884d8" />
                </ScatterChart>
              </ResponsiveContainer>
              }
            </Col>
          </Row>

          <Row data-aos="fade-up">
           <Col>
             <Button data-aos="fade-up" onClick={this.toggleChartType}>{this.state.chartType === "EventGenre" ? "ScatterChart" : "EventGenre"}</Button>
           </Col>
          </Row>

          

          <Row data-aos="fade-up">
            <Col> 
              <EventList events={this.state.events} numEvents={this.state.numEvents}/>
            </Col>
          </Row>   

          <Row data-aos="fade-up">
            <Col>   
              <NumberOfEvents  data-aos="fade-up" numEvents={this.state.numEvents} updateNumEvents={this.updateNumEvents} />
            </Col> 
          </Row>
          </Container>
          
            <div style={{padding:'0', margin:'0'}}>
            <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen}
            getAccessToken={() => { getAccessToken() }}  />
            </div>
      </div>
    );
  }
}

export default App;