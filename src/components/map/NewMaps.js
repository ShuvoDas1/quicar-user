// import React, { Component } from 'react';
// import { withGoogleMap, GoogleMap, DirectionsRenderer } from 'react-google-maps';
// class NewMaps extends Component {
//     render() {
//         const GoogleMapExample = withGoogleMap(props => (
//             <GoogleMap
//                 defaultCenter={{ lat: 40.756795, lng: -73.954298 }}
//                 defaultZoom={13}
//             >

//                 <DirectionsRenderer origin={{ lat: 40.756795, lng: -73.954298 }} destination={{ lat: 41.756795, lng: -78.954298 }} />
//             </GoogleMap>
//         ));
//         return (
//             <div>
//                 <GoogleMapExample
//                     containerElement={<div style={{ height: `500px`, width: '100%' }} />}
//                     mapElement={<div style={{ height: `100%` }} />}
//                 />
//             </div>
//         );
//     }
// };
// export default NewMaps;




import React from 'react'
import { withScriptjs } from "react-google-maps";
import { google_api_key } from '../../utils/constantValue';
import Map from './Map';
import MyMap from './MyMap';
import MapFunctional from './MapFunctional';



const NewMaps = () => {

    // const MapLoader = withScriptjs(Map);
    // const MapLoader = withScriptjs(Map);
    const MapLoader = withScriptjs(MapFunctional);

    return (
        <MapLoader
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${google_api_key}`}
            loadingElement={<>Loading..</>}
        />
    )
}

export default NewMaps
