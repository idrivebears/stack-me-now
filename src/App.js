import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const SearchResults = ({ content }) => {
  
  return(
    <div>{ content }</div>
  );
};

class SearchComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    
  }

  handleChange = (event) => {
    this.setState({value: event.target.value})
  }
  
  render() {
    return(
      <div>
        <input type="text" value={this.state.value} onChange={this.handleChange}></input>
        <SearchResults content={this.state.value}></SearchResults>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults : [],
      searchMade: false
    };
  }
  render() {
    return (
      <div className="App">
        <form>
          <h3>Search Stack Overflow</h3>
          <SearchComponent id='search' onChange={() => this.setState({searchMade: true})}></SearchComponent>
          
        </form>
      </div>
    );
  }
}

export default App;
