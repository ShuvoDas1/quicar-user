import React, { useState } from 'react'
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';
import { useSelector } from 'react-redux';


const containerStyle = {
  width: '100%',
  height: '250px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const MapComponentAPi = () => {

  const [map_, setMap] = useState();
  const [directionsRenderer, setdirectionsRenderer] = useState();
  const [directionsService, setdirectionsService] = useState();
  const { selectedCarType, pickUpLocation, dropOffLocation, tripType, pickUpDate, returnDate, extraNote } = useSelector(state => state.rentalRequest)


  const [response, setResponse] = useState(null)

  function directionsCallback(response) {
    console.log(response)

    if (response !== null) {
      if (response.status === 'OK') {
        setResponse(response);
      } else {
        console.log('response: ', response)
      }
    }
  }

  const onChangeHandler = function () {
    calculateAndDisplayRoute(directionsService, directionsRenderer);
  };

  function calculateAndDisplayRoute(directionsService, directionsRenderer) {
    // const start = startRef.current.value;
    // const end = endRef.current.value;

    // console.log(start,end,directionsService,directionsRenderer);



    const locationPoint = [
      { lat: 22.328127, lng: 91.805502 },
      { lat: 22.333903, lng: 91.820458 }
    ]


    directionsService
      .route({
        origin: locationPoint[0],
        destination: locationPoint[1],
        // travelMode: window.google.maps.TravelMode.DRIVING,
        travelMode:'DRIVING'
      })
      .then((response) => {

        console.log(response);

        const route = response.routes[0];
        console.log("route", route);



        // console.log(route.legs[i].end_address);

        // console.log(route.legs[i].distance.text);

        directionsRenderer.setDirections(response);


        console.log(route.legs[0].distance.text);
        console.log(route.legs[0].duration.text);
        console.log(route.legs[0].start_address);
        console.log(route.legs[0].end_address);
        console.log(route.legs[0].steps);

        // var summaryPanel;
        // for (let i = 0; i < route.legs.length; i++) {
        //     const routeSegment = i + 1;

        //     summaryPanel +=
        //         "<b>Route Segment: " + routeSegment + "</b><br>";
        //         summaryPanel += route.legs[i].start_address + " to ";
        //         summaryPanel += route.legs[i].end_address + "<br>";
        //         summaryPanel += route.legs[i].distance.text + "<br><br>";
        // }


        // console.log(summaryPanel);

        console.log(directionsRenderer.getPanel());

      })
      .catch((e) => window.alert("Directions request failed due to " + e.message));



    // directionsService
    //   .route({
    //     origin: start,
    //     destination: end,
    //     travelMode: google.maps.TravelMode.DRIVING,
    //   })
    //   .then((response) => {

    //     console.log(response);

    //     directionsRenderer.setDirections(response);

    //     console.log(directionsRenderer.getPanel()); 

    //   })
    //   .catch((e) => window.alert("Directions request failed due to " + e.message));
  }

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyDw_W4hc3p3O7R7nOPlHdEYbuSFzOxKbx4"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={map => {
          console.log('DirectionsRenderer onLoad map: ', map)
          setMap(map)

          const directionsRenderer_ = new window.google.maps.DirectionsRenderer();
          const directionsService_ = new window.google.maps.DirectionsService();
          setdirectionsRenderer(directionsRenderer_)
          setdirectionsService(directionsService_)
          directionsRenderer_.setMap(map);


          if (directionsService_) {


            setTimeout(()=>{
              onChangeHandler()
            },3000)

            // onChangeHandler()
          }




        }}
        onUnmount={map => {
          console.log('DirectionsRenderer onUnmount map: ', map)
        }}
      >
        { /* Child components, such as markers, info windows, etc. */}
        {/* <DirectionsService
                  // required
                  options={{
                    destination: dropOffLocation.address,
                    origin: pickUpLocation.address,
                    travelMode: 'DRIVING'
                  }}
                  // required
                  callback={directionsCallback}
                  // optional
                  onLoad={directionsService => {
                    console.log('DirectionsService onLoad directionsService: ', directionsService)
                  }}
                  // optional
                  onUnmount={directionsService => {
                    console.log('DirectionsService onUnmount directionsService: ', directionsService)
                  }}
                /> */}


        {/* {
              response !== null && (
                <DirectionsRenderer
                  // required
                  options={{
                    directions: response
                  }}
                  // optional
                  onLoad={directionsRenderer => {
                    console.log('DirectionsRenderer onLoad directionsRenderer: ', directionsRenderer)
                  }}
                  // optional
                  onUnmount={directionsRenderer => {
                    console.log('DirectionsRenderer onUnmount directionsRenderer: ', directionsRenderer)
                  }}
                />
              )
            } */}

      </GoogleMap>
    </LoadScript>
  )
}

export default MapComponentAPi
