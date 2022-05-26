import React, { useState, useEffect, useRef } from 'react'
import { Wrapper, Status } from "@googlemaps/react-wrapper";



const render = (status) => {
    return <h1>{status}</h1>;
};


const MapDemo = () => {





    return (
        <div>
            <div style={{ display: "flex", height: "100%" }}>
                <Wrapper apiKey={"AIzaSyDw_W4hc3p3O7R7nOPlHdEYbuSFzOxKbx4"} render={render}>
                    <Map></Map>
                </Wrapper>
            </div>
        </div>
    )
}

export default MapDemo


const Map = ({ zoom = 12 }) => {
    const mapRef = useRef()
    const startRef = useRef()
    const endRef = useRef()
    const [map, setMap] = useState();
    const [mapZoom, setZoom] = useState(zoom);
    const [latlog, setLatlog] = useState({ lat: 22.328127, lng: 91.805502 });

    const [directionsService, serDirectionsService] = useState();
    const [directionsRenderer, serDirectionsRenderer] = useState();

    

    useEffect(() => {
        const directionsService = new window.google.maps.DirectionsService();
        const directionsRenderer = new window.google.maps.DirectionsRenderer();

        serDirectionsService(directionsService)
        serDirectionsRenderer(directionsRenderer)

        const newMap = new window.google.maps.Map(mapRef.current, {
            center: latlog,
            zoom: mapZoom,
            // mapTypeId: 'satellite',
            // heading: 90,
            // tilt: 45,
        });
        setMap(newMap)
        console.log("newMap",newMap);


        // mapTypeId: 'satellite'
        // newMap.setMapTypeId('terrain');
        // newMap.setMapTypeId('satellite')
        // newMap.setTilt(45);

        directionsRenderer.setMap(newMap);





    }, []);


    const onChangeHandler = function () {

        calculateAndDisplayRoute(directionsService, directionsRenderer);
      };


      function calculateAndDisplayRoute(directionsService, directionsRenderer) {
        directionsService
          .route({
            origin: {
              query: startRef.current.value,
            },
            destination: {
              query: endRef.current.value,
            },
            travelMode: window.google.maps.TravelMode.DRIVING,
          })
          .then((response) => {
            directionsRenderer.setDirections(response);
          })
          .catch((e) => window.alert("Directions request failed due to " ));
      }
      

    function addDestinationMarker() {
        var marker = new window.google.maps.Marker({
            position: { lat: 22.333903, lng: 91.820458 },
            title: "Hello World!"
        })

        marker.setMap(map);
    }


    useEffect(() => {

        if (map) {
            const locationPoint = [
                { lat: 22.328127, lng: 91.805502 },
                { lat: 22.333903, lng: 91.820458 }
            ]
            const markerIcon =
                "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
            locationPoint.map(item => {
                var marker = new window.google.maps.Marker({
                    position: item,
                    // title: "Hello World!",
                    icon: null, //markerIcon
                    label: {
                        text: "Q",
                        fontFamily: "Material Icons",
                        color: "#ffffff",
                        fontSize: "18px",
                    },
                    title: "Material Icon Font Marker",
                    // draggable: true,
                })
                marker.setMap(map);
                // console.log(marker.getPosition());
            })
        }

        // if (map) {
        //     new google.maps.Marker({
        //         position: latlog,
        //         map,
        //         title: "Hello World!",
        //     });

        //     addDestinationMarker()
        // }
    }, [map]);


    useEffect(() => {
        if (map) {
            console.log(map);
        }
    }, [map]);



    const zoomClick = () => {
        setZoom(mapZoom + 1);
        map.setZoom(mapZoom + 1)
        // map.initialZoom = false;
    }

    useEffect(() => {
        console.log(mapZoom);
    }, [mapZoom]);


    function rotate90() {

        if (map) {
            const heading = map.getHeading() || 0;
            console.log(heading);
            map.setHeading(heading + 90);
        }
    }


    function autoRotate() {
        // Determine if we're showing aerial imagery.
        if (map.getTilt() !== 0) {
            window.setInterval(rotate90, 3000);
        }
    }



    return (
        <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
            <div ref={mapRef} style={{ width: '100%', height: '100vh' }}></div>


            <div onClick={zoomClick} style={{ position: 'absolute', top: '5px', left: '50%', height: '50px', width: '50px', backgroundColor: 'white', border: '3px solid blue', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '50px', cursor: 'pointer' }}> + </div>

            <div onClick={rotate90} style={{ position: 'absolute', top: '5px', left: '20%', height: '50px', backgroundColor: 'white', border: '3px solid blue', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '20px', cursor: 'pointer' }}> Rotate </div>



    <div  style={{position:'absolute',bottom:'0',left:'50%'}}>
      <b>Start: </b>
      <select id="start" ref={startRef} onChange={onChangeHandler}>
        <option value="chicago, il">Chicago</option>
        <option value="st louis, mo">St Louis</option>
        <option value="joplin, mo">Joplin, MO</option>
        <option value="oklahoma city, ok">Oklahoma City</option>
        <option value="amarillo, tx">Amarillo</option>
        <option value="gallup, nm">Gallup, NM</option>
        <option value="flagstaff, az">Flagstaff, AZ</option>
        <option value="winona, az">Winona</option>
        <option value="kingman, az">Kingman</option>
        <option value="barstow, ca">Barstow</option>
        <option value="san bernardino, ca">San Bernardino</option>
        <option value="los angeles, ca">Los Angeles</option>
      </select>
      <b>End: </b>
      <select id="end" ref={endRef} onChange={onChangeHandler}>
        <option value="chicago, il">Chicago</option>
        <option value="st louis, mo">St Louis</option>
        <option value="joplin, mo">Joplin, MO</option>
        <option value="oklahoma city, ok">Oklahoma City</option>
        <option value="amarillo, tx">Amarillo</option>
        <option value="gallup, nm">Gallup, NM</option>
        <option value="flagstaff, az">Flagstaff, AZ</option>
        <option value="winona, az">Winona</option>
        <option value="kingman, az">Kingman</option>
        <option value="barstow, ca">Barstow</option>
        <option value="san bernardino, ca">San Bernardino</option>
        <option value="los angeles, ca">Los Angeles</option>
      </select>
    </div>

        </div>
    )
}