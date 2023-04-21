// import React, { Component } from "react";
// import { Card,Button } from 'react-bootstrap';
// import angularjs from './angularjs.svg';
// import javascript from './javascript.svg';
// import nodejs from './nodejs.svg';
// import jquery from './jquery.svg';
// import react from './react.svg';

// class Event extends Component {
//   state = {
//     showDetails: false,
//   };

//   handleShowDetailsClick = () => {
//     this.setState({ showDetails: !this.state.showDetails });
//   };
  

//   render() {
//     const {event} = this.props;
    
//       const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];
//       const isGenre = genres.some(genre => event.summary.includes(genre));
      
//       // const getGenreImage = (genre) => {
//       //   console.log('getGenreImage called with genre:', genre);
//       //   switch(genre) {
//       //     case 'React':
//       //       return <img src={react} alt="React" width="50" />;
//       //     case 'JavaScript':
//       //       return <img src={javascript} alt="JavaScript" width="50" />;
//       //     case 'Node':
//       //       return <img src={nodejs} alt="Node" width="50" />;
//       //     case 'jQuery':
//       //       return <img src={jquery} alt="jQuery" width="50" />;
//       //     case 'AngularJS':
//       //       return <img src={angularjs} alt="AngularJS" width="50" />;
//       //     default:
//       //       return null;
//       //   }
//       // }
        
//       const getGenreImage = (genre) => {
//         console.log('getGenreImage called with genre:', genre);
//         switch(genre) {
//           case 'React':
//             const ReactIcon = require('./react.svg').default;
//             console.log('reacticon:', ReactIcon);
//             return <img src={ReactIcon} alt="React" width="50" />;
//           case 'JavaScript':
//             const JavaScriptIcon = require('./javascript.svg').default;
//             return <img src={JavaScriptIcon} alt="JavaScript" width="50" />;
//           case 'Node':
//             const NodeIcon = require('./nodejs.svg').default;
//             return <img src={NodeIcon} alt="Node" width="50" />;
//           case 'jQuery':
//             const jQueryIcon = require('./jquery.svg').default;
//             return <img src={jQueryIcon} alt="jQuery" width="50" />;
//           case 'AngularJS':
//             const AngularJSIcon = require('./angularjs.svg').default;
//             return <img src={AngularJSIcon} alt="AngularJS" width="50" />;
//           default:
//             return null;
//         }
//       }
      

//     return (
//     <Card key={event.id} className="my-3">
//         <Card.Header className="bg-primary text-white">{event.summary}</Card.Header>
//         <Card.Body>
//           {isGenre && getGenreImage(event.summary)}
//           <Card.Text>
//             <strong>Start:</strong> {event.start.dateTime}
//             <br />
//             <strong>Location:</strong> {event.location}
//           </Card.Text>
//           <Button
//             className="btn btn-primary"
//             onClick={this.handleShowDetailsClick}
//           >
//             {this.state.showDetails ? "Hide details" : "Show Details"}
//           </Button>
//           {this.state.showDetails && (
//             <Card.Text>
//               <h4 className="about-event">About Event</h4>
//               <a href={event.htmlLink} className="about-event-link">
//                 See details in Google Calendar
//               </a>
//               <p className="event-description">{event.description}</p>
//             </Card.Text>
//             )}
//             </Card.Body>
//           </Card>
//     );
//   }
// }
// export default Event;

import React, { Component } from "react";
import { Card,Button } from 'react-bootstrap';
import angularjs from './angularjs.png';
import javascript from './javascript.png';
import nodejs from './nodejs.png';
import jquery from './jquery.png';
import react from './react.png';

class Event extends Component {
  state = {
    showDetails: false,
    imagesLoaded: false // new state variable to indicate when images are ready
  };

  // new function to preload images
  preloadImages = () => {
    const images = [{angularjs}, {javascript}, {nodejs}, {jquery}, {react}];
    const promises = [];
    images.forEach(image => {
      promises.push(
        new Promise(resolve => {
          const img = new Image();
          img.onload = () => resolve();
          img.src = image;
        })
      );
    });
    Promise.all(promises).then(() => {
      this.setState({ imagesLoaded: true });
    });
  }

  componentDidMount() {
    this.preloadImages();
  }

  handleShowDetailsClick = () => {
    this.setState({ showDetails: !this.state.showDetails });
  };
  
  // updated getGenreImage function to use the imported images directly
  // getGenreImage = (genre) => {
  //   switch(genre) {
  //     case 'React':
  //       return <img src={react} onLoad={() => console.log('Image loaded successfully!')} onError={() => console.log('Error loading image!')} alt="React" width="50" />;
  //     case 'JavaScript':
  //       return <img src={javascript} alt="JavaScript" width="50" />;
  //     case 'Node':
  //       return <img src={nodejs} alt="Node" width="50" />;
  //     case 'jQuery':
  //       return <img src={jquery} alt="jQuery" width="50" />;
  //     case 'AngularJS':
  //       return <img src={angularjs} alt="AngularJS" width="50" />;
  //     default:
  //       return null;
  //   }
  // }
        
  render() {
    const {event} = this.props;
    // const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];
    // const isGenre = genres.some(genre => event.summary.toLowerCase().includes(genre.toLowerCase()));
    // console.log('genre', isGenre);
    
    // let genreImage;
    // if (isGenre) {
    //   const genreName = genres.find(genre => event.summary.toLowerCase().includes(genre.toLowerCase()));
    //   const genreImage = this.getGenreImage(genreName);
    //   console.log('genreImage', genreImage);
   
    return (
      // only render the component if images are ready
      this.state.imagesLoaded && 
      <Card key={event.id} className="my-3">
        <Card.Header className="bg-primary text-white">{event.summary}</Card.Header>
        <Card.Body>
          {/* {isGenre && this.getGenreImage(event.summary)} */}
          {/* {isGenre && genreImage} */}
          {event.summary.includes('React') && <img src={react} alt="react icon"></img>} 
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
