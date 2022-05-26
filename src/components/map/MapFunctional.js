/*global google*/
import moment from "moment";
import React, { useState, useEffect } from "react";
import {
    withGoogleMap,
    withScriptjs,
    GoogleMap,
    DirectionsRenderer
} from "react-google-maps";
import { useDispatch, useSelector } from "react-redux";
import { setRentalItem } from "../../redux/action/carRentalAction";
const MapFunctional = () => {

    const dispatch = useDispatch()

    const [directions, setDirections] = useState(null);
    const [directionsService, setDirectionsService] = useState(null);


    const { pickUpLocation, dropOffLocation } = useSelector(state => state.rentalRequest)



    // useEffect(() => {

    //     if (directions) {
    //         const route = directions.routes[0];
    //         const distanceInMeter = route.legs[0].distance.value
    //         const second = route.legs[0].duration.value;


    //         console.log("distance =>", distanceInMeter)
    //         console.log("duration =>", second)

    //         dispatch(setRentalItem({
    //             distance: distanceInMeter,
    //             takeTime: second,
    //         }))

    //     }

    // }, [directions]);


    useEffect(() => {



        if (directionsService) {


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
                            const distanceInMeter = route.legs[0].distance.value
                            const second = route.legs[0].duration.value;

                            // const dd = moment.duration(second*1000).humanize(true,{})
                            // var duration = moment.duration({
                            //     seconds:second
                            // });
                            // console.log(dd.humanize()); 

                            console.log("distance =>", distanceInMeter)
                            console.log("duration =>", second)

                            console.log(route.legs[0].distance.text);
                            console.log(route.legs[0].duration.text);
                            // console.log(route.legs[0].distance.value);
                            // console.log(route.legs[0].duration.text);
                            // console.log(route.legs[0].start_address);
                            // console.log(route.legs[0].end_address);
                            // console.log(route.legs[0].steps);


                            localStorage.setItem("takeTime",second);
                            localStorage.setItem("distance",distanceInMeter);


                            // dispatch(setRentalItem({
                            //     distance: distanceInMeter,
                            //     takeTime: second,
                            // }))


                            setDirections(result)


                            

                           



                        } else {
                            console.error(`error fetching directions ${result}`);
                        }
                    }
                ).catch((e) => window.alert("Directions request failed due to " + e.message));
            }




        } else {
            setDirectionsService(new google.maps.DirectionsService())
        }






    }, [directionsService]);


    const GoogleMapExample = withGoogleMap(props => (
        <GoogleMap
            defaultVisible={false}
            defaultOptions={{ mapTypeControl: false }}
            defaultCenter={{ lat: 22.328127, lng: 91.805502 }}
            defaultZoom={13}

        >
            <DirectionsRenderer
                directions={directions}
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

export default MapFunctional;
