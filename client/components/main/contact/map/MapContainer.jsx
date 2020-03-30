import React, { Component } from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react'
import mapStyle from '../../../../constants/mapStyle.json'

const mapStyles = {
  width: '100%',
  height: '100%'
}

export class MapContainer extends Component {
  render() {
    console.log(mapStyle)
    return (
      <Map
        google={this.props.google}
        zoom={12}
        style={mapStyles}
        styles={mapStyle}
        initialCenter={{
         lat: -44.6817276,
         lng: 169.1866108
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyD8s6I_ltlHwAiNFSJe5U2K6jd0cpH6ehA'
})(MapContainer)