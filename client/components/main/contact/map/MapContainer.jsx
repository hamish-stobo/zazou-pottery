import React, { Component, useState, useEffect } from 'react'
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react'
import mapStyle from '../../../../constants/mapStyle.json'

const mapStyles = {
  width: '100%',
  height: '100%',
  transform: 'TranslateX(0)'
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
             <ul className="info-window">
               <li>{street}</li>
               <li>{suburb}</li>
               <li>{city}</li>
               <li>{postCode}</li>
               <li>
                 <a target="_blank" href="https://www.google.com/maps/place/Zazou+Pottery+Studio/@-44.6816788,169.1853172,17z/data=!4m5!3m4!1s0xa9d54ef0473d6495:0xf91d702e82f43f86!8m2!3d-44.6817286!4d169.1866046">
                 View in larger map</a>
                </li>
             </ul>
         </InfoWindow>
     </Map>
    )
  
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyD8s6I_ltlHwAiNFSJe5U2K6jd0cpH6ehA'
})(MapContainer)