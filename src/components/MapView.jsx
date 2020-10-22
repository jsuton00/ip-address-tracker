import { Map, TileLayer } from 'react-leaflet';
import React, { Component } from 'react';
import PinLocation from './PinLocation';

export default class MapView extends Component {
  state = {
    myLocation: '',
    zoom: 17,
    mapUrl: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    attribution:
      '&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors',
  };

  getPosition = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

  updatePosition = () => {
    const { searchResultsLocation } = this.props;

    return this.setState({
      myLocation: {
        lat: searchResultsLocation.lat,
        lng: searchResultsLocation.lng,
      },
    });
  };

  componentDidMount() {
    this.timerInitial = setTimeout(() => {
      this.getPosition()
        .then((position) => {
          console.log('position', position);

          const locationInfo = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          this.setState({
            myLocation: locationInfo,
          });
        })
        .catch((error) => console.log(error.message));
    }, 500);
  }

  componentDidUpdate() {
    this.timerUpdate = setTimeout(() => {
      const { searchResultsLocation } = this.props;
      searchResultsLocation && this.updatePosition();
    }, 500);
  }

  componentWillUnmount() {
    clearTimeout(this.timerInitial);
    clearTimeout(this.timerUpdate);
  }

  render() {
    return (
      <Map center={this.state.myLocation} zoom={this.state.zoom}>
        <TileLayer
          url={this.state.mapUrl}
          attribution={this.state.attribution}
        />
        <PinLocation pinLocation={this.state.myLocation} />
      </Map>
    );
  }
}
