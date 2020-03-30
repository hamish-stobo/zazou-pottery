import React, { Component, useState, useEffect } from 'react'
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react'
import mapStyle from '../../../../constants/mapStyle.json'

const mapStyles = {
  width: '100%',
  height: '100%',
  top: 0,
  left: 0
}

const MapContainer = (props) => {
    const [state, setState] = useState({
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
    })

    const onMarkerClick = (props, marker, e) =>
        setState({
        ...state,
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: !state.showingInfoWindow
    })

    const onMapClicked = (props) => {
        if (state.showingInfoWindow) {
          setState({
            ...state,
            showingInfoWindow: false,
            activeMarker: null
          })
        }
      }

    useEffect( () => {
        if(state.showingInfoWindow) {
        const infoWindow = document.querySelector(".gm-ui-hover-effect")
            infoWindow.addEventListener("click", () => {
            console.log('btn clicked')
            setState({
                ...state,
                showingInfoWindow: false,
                activeMarker: null
              })
            })
        }
    }
    )

    const {street, suburb, city, postCode} = props.address 

    return (
      <Map
        className="mapcomponent"
        google={props.google}
        onClick={onMapClicked}
        zoom={12}
        style={mapStyles}
        styles={mapStyle}
        initialCenter={{
         lat: -44.6817276,
         lng: 169.1866108
        }}
      >
          <Marker onClick={onMarkerClick} name={'Current location'} />
                
          <InfoWindow
           marker={state.activeMarker}
           visible={state.showingInfoWindow}>
             <ul>
               <li>{street}</li>
               <li>{suburb}</li>
               <li>{city}</li>
               <li>{postCode}</li>
             </ul>
         </InfoWindow>
     </Map>
    )
  
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyD8s6I_ltlHwAiNFSJe5U2K6jd0cpH6ehA'
})(MapContainer)