import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import "./Contact";

const mapStyles = {
  width: '75%',
  height: '25%',
  border: "solid red 2px",
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: 53.3695745473653,
            lng: -2.5761292316348854
          }
        }
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBfSf1NfHORZXrHySVD8khuiE7c94FqG2E'
})(MapContainer);
