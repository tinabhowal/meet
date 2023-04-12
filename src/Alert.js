import React, { Component } from 'react';

class Alert extends Component {
    constructor(props) {
        super(props);
        this.color = null;
        this.state = {
            opacity: 0
        };
    }

    getStyle = () => {
        return {
            color: this.color,
            fontFamily: "Arial",
            fontSize: "20px",
            opacity: this.state.opacity,
            transition: "opacity 2.5s ease-in-out"
        };
    }
   
    componentDidMount() {
        window.addEventListener("offline", this.handleOffline);
      }
    
      componentWillUnmount() {
        window.removeEventListener("offline", this.handleOffline);
      }
    
      handleOffline = () => {
        this.color = 'orange';
        this.setState({ opacity: 1 });
      }
   

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.text !== this.props.text) {
            this.setState({ opacity: 1 });
            setTimeout(() => {
                this.setState({ opacity: 0 });
            }, 7000);
        }
    }

    render() {
        return (
            <div className='Alert'>
                <p style={this.getStyle()}>{this.props.text}</p>
            </div> 
        );
    }
}

class InfoAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = 'blue';
    }
}

export { InfoAlert };

class ErrorAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = 'red';
    }
}

export { ErrorAlert };

class WarningAlert extends Alert {
    constructor(props) {
      super(props);
      this.color = 'orange';
    }
  }

export { WarningAlert };
