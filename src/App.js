import React, { Component } from 'react';
import Header from './components/Header';
import MapView from './components/MapView';
import axios from 'axios';
require('dotenv').config();

const API_KEY = process.env.REACT_APP_API_KEY;

class App extends Component {
  state = {
    searchTerm: '',
    searchResults: '',
    isLoading: false,
    isError: false,
  };

  fetchByIPAddress = async () => {
    try {
      this.setState({ isLoading: true });
      const url = `https://geo.ipify.org/api/v1?apiKey=${API_KEY}&ipAddres=${this.state.searchTerm}`;
      const results = await axios.get(url);
      console.log('data', results.data);
      this.setState({
        isLoading: false,
        isError: false,
        searchResults: results.data,
      });
    } catch (error) {
      console.error('An error has occurred!', error);
      this.setState({
        isError: true,
        isLoading: false,
      });
    }
  };

  setSearchTerm = (newSearchTerm) => {
    this.setState({ searchTerm: newSearchTerm });
  };

  fetchByDomain = async () => {
    try {
      this.setState({ isLoading: true });
      const url = `https://geo.ipify.org/api/v1?apiKey=${API_KEY}&domain=${this.state.searchTerm}`;
      const results = await axios.get(url);
      console.log('data', results.data);
      this.setState({
        isLoading: false,
        isError: false,
        searchResults: results.data,
      });
    } catch (error) {
      console.error('An error has occurred!', error);
      this.setState({
        isError: true,
        isLoading: false,
      });
    }
  };

  componentDidMount() {
    this.timer = setTimeout(() => {
      this.fetchByIPAddress();
      this.fetchByDomain();
    }, 500);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    return (
      <div id="app" className="app">
        <Header
          searchTerm={this.state.searchTerm}
          setSearchTerm={this.setSearchTerm}
          searchIPAddress={this.fetchByIPAddress}
          searchDomains={this.fetchByDomain}
          searchResults={this.state.searchResults}
        />
        <main id="app-content" className="app-content container-fluid">
          <MapView searchResultsLocation={this.state.searchResults.location} />
        </main>
      </div>
    );
  }
}

export default App;
