/*global google*/
import React, { Component } from "react";
import {
    withGoogleMap,
    withScriptjs,
    GoogleMap,
    DirectionsRenderer
} from "react-google-maps";
class Map extends Component {
    state = {
        directions: null,
    };






    componentDidMount() {
        const directionsService = new google.maps.DirectionsService();


        
        const pickUpLocation = JSON.parse(localStorage.getItem('pickUpLocation'))
        const dropOffLocation = JSON.parse(localStorage.getItem('dropOffLocation'))


        const locationPoint = [
            { lat: pickUpLocation.latitute, lng: pickUpLocation.longitute },
            { lat: dropOffLocation.latitute, lng: dropOffLocation.longitute }
        ]

        const origin = locationPoint[0];
        const destination = locationPoint[1];


        if (directionsService) {
            directionsService.route({
                origin: origin,
                destination: destination,
                travelMode: google.maps.TravelMode.DRIVING
            },
                (result, status) => {
                    if (status === google.maps.DirectionsStatus.OK) {
                        const route = result.routes[0];
                        const distance = route.legs[0].distance.value
                        const second = route.legs[0].duration.value;

                        console.log("distance =>",distance)
                        console.log("duration =>",second)
                        
                        // console.log(route.legs[0].distance.value);
                        // console.log(route.legs[0].duration.text);
                        // console.log(route.legs[0].start_address);
                        // console.log(route.legs[0].end_address);
                        // console.log(route.legs[0].steps);
                        this.setState({
                            directions: result
                        });
                    } else {
                        console.error(`error fetching directions ${result}`);
                    }
                }
            ).catch((e) => window.alert("Directions request failed due to " + e.message));
        }


    }

    render() {
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
}

export default Map;
