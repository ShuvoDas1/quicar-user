import React, { useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import { google_api_key } from '../../utils/constantValue';

const AnyReactComponent = ({ text }) => <div>{text}</div>;


const SimpleMap = () => {


  const defaultProps = {
    center: {
      lat: 22.411328,
      lng: 91.778449
    },
    zoom: 100
  };

  useEffect(() => {
    initMap()
  }, []);


  return (
    <div>

    <div id='map'></div>

      {/* <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: google_api_key }}
          defaultCenter={defaultProps.center}
          defaultZoom={15}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => {
            
            console.log("map",map)
            console.log(maps)
          }}
        >
        <img src="https://icons-for-free.com/iconfiles/png/512/map+marker-131994967946047346.png" width={50}/>
         
        </GoogleMapReact>
      </div>
     */}
    </div>
  )
}


// function initMap() {
//   const map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 3,
//     center: { lat: 0, lng: -180 },
//     mapTypeId: "terrain",
//   });
//   const flightPlanCoordinates = [
//     { lat: 37.772, lng: -122.214 },
//     { lat: 21.291, lng: -157.821 },
//     { lat: -18.142, lng: 178.431 },
//     { lat: -27.467, lng: 153.027 },
//   ];
//   const flightPath = new google.maps.Polyline({
//     path: flightPlanCoordinates,
//     geodesic: true,
//     strokeColor: "#FF0000",
//     strokeOpacity: 1.0,
//     strokeWeight: 2,
//   });

//   flightPath.setMap(map);
// }

export default SimpleMap