import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

import "./Contact";
import { googleMapsKey } from "../../Util-Functions/config"

const mapStyles = {
  width: '100%',
  height: '100%',
  border: "solid red 2px",
  margin:"0 0 0 0"
};

const containerStyle = {
  height: "250px",
  width: "250px",
  border: "solid red 2px",
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
            lat: 53.3695745473653,
            lng: -2.5761292316348854
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
