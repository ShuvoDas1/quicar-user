/*global google*/
import React, { Component, useEffect, useState } from "react";
import {
    withGoogleMap,
    withScriptjs,
    GoogleMap,
    DirectionsRenderer
} from "react-google-maps";


const MyMap = () =>{
     // const MapLoader = withScriptjs(Map);
     const MapLoader = withScriptjs(MyMapFunction);

     return (
         <MapLoader
             googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDw_W4hc3p3O7R7nOPlHdEYbuSFzOxKbx4"
             loadingElement={<>Loading..</>}
         />
     )
}

export default MyMap;

const MyMapFunction = () => {

    const [directions, setdirections] = useState(null)

 

    useEffect(() => {
      
            const directionsService = new google.maps.DirectionsService();
    
    
            const dropOffLocation = JSON.parse(localStorage.getItem('dropOffLocation'))
            const pickUpLocation = JSON.parse(localStorage.getItem('pickUpLocation'))
    
    
            const locationPoint = [
                { lat: 22.328127, lng: 91.805502 },
                { lat: 22.333903, lng: 91.820458 }
            ]
    
            const origin = locationPoint[0];
            const destination = locationPoint[1];
    
            directionsService.route({
                origin: origin,
                destination: destination,
                travelMode: google.maps.TravelMode.DRIVING
            },
                (result, status) => {
                    if (status === google.maps.DirectionsStatus.OK) {
                        const route = result.routes[0];
                        const miter = route.legs[0].distance.value
                        const second = route.legs[0].duration.value;
                        // console.log(route.legs[0].distance.value);
                        // console.log(route.legs[0].duration.text);
                        // console.log(route.legs[0].start_address);
                        // console.log(route.legs[0].end_address);
                        // console.log(route.legs[0].steps);
                        setdirections(result)
                    } else {
                        console.error(`error fetching directions ${result}`);
                    }
                }
            ).catch((e) => window.alert("Directions request failed due to " + e.message));
        
    }, [])

    
        const GoogleMapExample = withGoogleMap(props => (
            <GoogleMap
                defaultCenter={{ lat: 22.328127, lng: 91.805502 }}
                defaultZoom={13}
            >
                <DirectionsRenderer
                    directions={this.state.directions}
                />
            </GoogleMap>
        ));

        return (
            <div>
                <GoogleMapExample
                    containerElement={<div style={{ height: `250px`, width: "100%" }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
        );
    
}


