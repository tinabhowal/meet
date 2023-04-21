import React, { Component } from 'react';
import { InfoAlert } from './Alert';
import search from './search.png'

class CitySearch extends Component {
    state = {
        query: '',
        suggestions: [],
        showSuggestions: undefined,
        infoText: ''
      }
    componentDidMount() {
      window.addEventListener('click',this.handleClickOutside);
    }

    componentWillUnmount(){
      window.removeEventListener('click',this.handleClickOutside);
    }

    handleClickOutside = (event) => {
      if (this.state.showSuggestions && !this.node.contains(event.target)) {
        this.setState({showSuggestions: false});
      }
    }

    handleInputChanged = (event) => {
      const value = event.target.value;
      this.setState({showSuggestions:true});
      const suggestions = this.props.locations.filter((location) => {
        return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
      });
      if (suggestions.length === 0) {
        this.setState({
          query: value,
          infoText: 'We can not find the city you are looking for. Please try another city',
        });
      } else {
        return this.setState({
          query: value,
          suggestions,
          infoText:''
        });
      }
    };

      handleItemClicked = (suggestion) => {
        this.setState({
          query: suggestion,
          showSuggestions: false,
          suggestions: [],
          infoText: ''
        });

        this.props.updateEvents(suggestion);
      }

      handleImageClicked = () => {
        this.setState({ showSuggestions: true });
      }

  render() {
    return (
      <div className="CitySearch"  ref={node => this.node = node}>
        <InfoAlert text={this.state.infoText} />
        <div className='search-container'>
        <img
           src={search}
           alt="Search"
           className="search-icon"
           onClick={this.handleImageClicked}
        />
        <input
            type="text"
            // className="city"
            className={`city ${this.state.showSuggestions ? 'show-suggestions' : ''}`}
            value={this.state.query}
            placeholder='Search events by city'
            onChange={this.handleInputChanged}
            onFocus={() => { this.setState({ showSuggestions: true }) }}
            style={{ textAlign:"center"}}
        />
        </div>
      <ul className="suggestions" style={this.state.showSuggestions ? {}: { display: 'none' }}>
      {this.state.suggestions.map((suggestion) => (
      <li key={suggestion}
          onClick={() => this.handleItemClicked(suggestion)}>
          {suggestion}
          </li>
      ))}
        <li key='all'
            onClick={() => this.handleItemClicked("all")}>
         <b>See all cities</b>
        </li>
      </ul>
      </div>
    );
  }
}

export default CitySearch;