import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

import "./Contact";
import { googleMapsKey } from "../../Util-Functions/config"

const mapStyles = {
  width: '100%',
  height: '100%',
  margin:"0 0 0 0"
};

const containerStyle = {
  height: "300px",
  width: "300px",
  position: "relative",
  margin: "10% 10% 10% 10%"
}

class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        initialCenter={
          {
            lat: 53.30172893563856,
            lng: -60.32535760248681
          }
        }
        zoom={14}
        style={mapStyles}
        containerStyle={containerStyle}>
          <Marker 
          position={
            {
              lat: 53.36841549207105,
              lng: -2.576250108505739
            
          }}
          name={"Hodge's Hounds"}
          />
        </Map>
    );
  }
}

export const GoogleMaps = GoogleApiWrapper({
  apiKey: googleMapsKey
})(MapContainer);
