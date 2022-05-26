import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { useEffect, useRef, useState } from 'react';

const KEY = "AIzaSyDw_W4hc3p3O7R7nOPlHdEYbuSFzOxKbx4";

const MapContainer = (props) => {

  const onInfoWindowClose = () => {

  }


  const onMarkerClick = () => {
    console.log("marker click");
  }

  const containerStyle = {
    // position: 'relative',
    width: '100%',
    height: '100%'
  }


  const ref = useRef()
  const [bounds, setbounds] = useState()

  useEffect(() => {
    if (ref.current) {
      var points = [
        { lat: 42.02, lng: -77.01 },
        { lat: 42.03, lng: -77.02 },
        { lat: 41.03, lng: -77.04 },
        { lat: 42.05, lng: -77.02 }
      ]
      var boundss = new props.google.maps.LatLngBounds();
      setbounds(boundss)
      for (var i = 0; i < points.length; i++) {
        bounds.extend(points[i]);
      }
    }
  }, [ref])


  return (
    <Map
      ref={ref}
      google={props.google} zoom={14}

      containerStyle={containerStyle}

      initialCenter={{
        lat: 40.854885,
        lng: -88.081807
      }}
      zoom={9}
      // bounds={bounds}
    >

      <Marker onClick={onMarkerClick}
        name={'Current location'} />

      <InfoWindow onClose={onInfoWindowClose}>
        <div>
          {/* <h1>{this.state.selectedPlace.name}</h1> */}
        </div>
      </InfoWindow>
    </Map>
  );
}

const LoadingContainer = (props) => (
  <div>Fancy loading container!</div>
)

export default GoogleApiWrapper({
  apiKey: (KEY),
  LoadingContainer: LoadingContainer
})(MapContainer)