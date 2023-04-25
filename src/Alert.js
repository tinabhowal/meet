import React, { Component } from 'react';

class Alert extends Component {
    constructor(props) {
        super(props);
        this.color = null;
        // this.state = {
        //     opacity: 0
        // };
    }

    getStyle = () => {
        return {
            color: this.color,
            fontFamily: "Arial",
            fontSize: "20px"
        };
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
    getStyle = () => {
        return {
            color: this.color,
            marginTop: "2rem",
        }
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

   
    // getStyle = () => {
    //     return {
    //         color: this.color,
    //         fontFamily: "Arial",
    //         fontSize: "20px",
    //         opacity: 1,
    //         transition: "opacity 2.5s ease-in-out",
    //         position: "fixed",
    //         top: "10%",
    //         left: "50%",
    //         transform: "translate(-50%, -50%)",
    //         textAlign: "center",
    //         width: "80%",
    //         maxWidth: "500px",
    //         backgroundColor: "white",
    //         padding: "20px",
    //         borderRadius: "10px",
    //         boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
    //         zIndex: '999'
    //     };
    //   }
  }

export { WarningAlert };