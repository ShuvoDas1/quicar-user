import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import Layout from '../../components/layout/Layout';
import { Divider, IconButton } from '@mui/material';
import ArrowBack from '@mui/icons-material/ArrowBack';
import { useSelector, useDispatch, connect } from "react-redux";
import { google_api_key } from '../../utils/constantValue';
import NewMaps from '../../components/map/NewMaps';
import moment from 'moment';
import { GoogleApiWrapper } from "google-maps-react"
// Geocode.setApiKey(google_api_key);
// Geocode.setLanguage("en");

import Slide from '@mui/material/Slide';
import CircularProgress from '@mui/material/CircularProgress';
import { requestApi } from '../../network/httpRequest';
import { RENTAL_REQUEST } from '../../network/urls';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});



const LoadingContainer = () => <div>Loading...</div>

const OverViewRideRequest = () => {


    const [showMap, setShowMap] = useState(false);
    const [isLoading, setLoading] = React.useState(false);
    const dispatch = useDispatch();
    let navigate = useNavigate()
    const [tripTypeName, setTripTypeName] = useState();
    const { selectedCarType, pickUpLocation, dropOffLocation, tripType, pickUpDate, returnDate, extraNote } = useSelector(state => state.rentalRequest)



    useEffect(() => {
        if (tripType == 0) {
            setTripTypeName("One Way")
        } else if (tripType == 1) {
            setTripTypeName("Round Trip")
        } else if (tripType == 2) {
            setTripTypeName("Body Rent")
        }
    }, [tripType]);


    useEffect(() => {
        if (!selectedCarType) {
            navigate("/main/home")
        }
    }, [selectedCarType]);




    const clickNext = async () => {
        setShowMap(true)
        setLoading(true)




        try {

            const body = {
                "carTypeId": selectedCarType.id,
                "pickUpLocation": pickUpLocation,
                "dropOffLocation": dropOffLocation,
                "duration": localStorage.getItem("takeTime"),
                "distance": localStorage.getItem("distance"),
                "tripType": tripType,
                "pickUpDate": pickUpDate,
                "returnDate": returnDate,
                "extraNote": extraNote
            }


            const { data } = await requestApi().request(RENTAL_REQUEST, {
                method: 'post',
                data: body
            })

            if (data) {
                if (data.status) {

                   const rideId = data.data.ride.id

                    navigate(`/car-rental/ride-success?rideId=${rideId}`)
                } else {
                    setShowMap(false)
                    setLoading(false)
                }

            } else {
                setShowMap(false)
                setLoading(false)
            }


        } catch (error) {
            console.log(error);
            setShowMap(false)
            setLoading(false)
        }





    }


    useEffect(() => {
        if (!selectedCarType) {
            navigate("/")
        }
    }, [selectedCarType]);



    const getMap = () => {
        // setShowMap(true)
        return !showMap ? <NewMaps /> : <div></div>
    }


    return (

        <Layout>

            {
                isLoading && <LoadingWrapper> <CircularProgress /> </LoadingWrapper>
            }



            <Page>



                <div className="wrap">

                    <div className='backBtn'>
                        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} style={{ marginLeft: '2px' }} onClick={() => navigate(-1)}>
                            <ArrowBack style={{ color: 'black' }} />
                        </IconButton>
                    </div>




                    <div className='mapView'>
                        {/* <NewMaps /> */}
                        {
                            getMap()
                        }

                    </div>




                    {/* car Type */}

                    {
                        selectedCarType && <div style={{ padding: '15px' }}>
                            <p style={{ paddingBottom: '10px' }}>Car Type</p>

                            <div style={{ display: 'flex' }}>
                                <img src={selectedCarType.image} alt="" style={{ height: '50px' }} />
                                <div style={{ paddingLeft: '10px' }}>
                                    <p style={{ fontWeight: '600' }}>{selectedCarType.name}</p>
                                    <p>{selectedCarType.minSeat}-{selectedCarType.maxSeat} Person</p>
                                </div>
                            </div>
                        </div>
                    }


                    <Divider />


                    {/* Location address */}

                    <div className='location'>

                        <p style={{ paddingLeft: '15px' }}>Trip Loaction </p>
                        <div className="location__Wrapper">


                            <div className="line">

                                <div className="shap_line">

                                    <svg className='top_shap' xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10">
                                        <circle id="Ellipse_776" cx="5" cy="5" r="5" fill="#4a4a4c" />
                                    </svg>


                                    <svg className='bottom_shap' xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10">
                                        <g id="Group_1533" transform="translate(-72 -181)">
                                            <circle id="Ellipse_777" cx="5" cy="5" r="5" transform="translate(72 181)" fill="#4a4a4c" />
                                            <circle id="Ellipse_778" cx="3" cy="3" r="3" transform="translate(74 183)" fill="#ffffff" />
                                        </g>
                                    </svg>
                                </div>
                            </div>

                            <div className="address">

                                <div className="pickup">
                                    <span className='title'>Pickup</span>
                                    {/* <input ref={ref} className='address__name' type="text" value={pickupLocation} onChange={e => pickupLocationInput(e.target)} placeholder='Enter pickup location' /> */}
                                    <span className='address__name'>{pickUpLocation.address}</span>

                                </div>
                                <div className='address_middle_line'></div>
                                <div className="dropoff">
                                    <span className='title'>DropOff</span>
                                    <span
                                        className='address__name' >
                                        {dropOffLocation.address}
                                    </span>


                                </div>
                            </div>

                        </div>
                        <div className='radiusStyle'></div>
                    </div>


                    <Divider />

                    <div style={{ padding: '15px' }}>
                        <span>Trip Type </span>
                        <p style={{ fontWeight: '600' }}>  {tripTypeName} </p>
                    </div>

                    <Divider />



                    <div style={{ padding: '15px' }}>
                        <span>Trip Date & Time</span>
                        <p style={{ fontWeight: '600' }}> {moment(pickUpDate).format("MM/DD/YYYY hh:mm A")} </p>
                    </div>

                    <Divider />


                    {
                        tripType == 1 || tripType == 2 ? <div>
                            <div style={{ padding: '15px' }}>
                                <span>Returning Date & Time</span>
                                <p style={{ fontWeight: '600' }}> {moment(returnDate).format("MM/DD/YYYY hh:mm A")} </p>
                            </div>

                            <Divider />
                        </div> : null
                    }


                    <div style={{ padding: '15px' }}>
                        <span>Extra Note</span>
                        <p style={{ fontWeight: '600' }}> {extraNote} </p>
                    </div>


                    {/* <div style={{ margin: '25px' }}> */}
                    {/* <TabTitle>Extra Note</TabTitle> */}
                    {/* <TextField
                            style={{ width: '100%' }}
                            id="outlined-multiline-static"
                            label="Extra Note"
                            value={extraNote}
                            multiline
                            rows={4}
                            contentEditable={false}
                            placeholder='Extra Note'
                            onChange={(e) => {
                                localStorage.setItem("extraNote", e.target.value)
                                dispatch(setRentalItem({ extraNote: e.target.value }))
                            }}
                        
                        /> */}
                    {/* </div> */}

                    <div className='others__info'>


                    </div>



                </div>



                <ButtonWrapper>
                    <button className={`active`} onClick={clickNext}>Confirm</button>
                </ButtonWrapper>



            </Page>
        </Layout>

    )
}


const LoadingWrapper = styled.div`
    width: 100%;
    height: 100%;
    background: #2b2b2bd4;
    top: 0;
    bottom: 0;
    display: flex;
    position: absolute;
    z-index: 999;
    justify-content:center;
    align-items: center;
`


const Page = styled.div`
  width: 100%;
  height: 100%;
  /* padding-bottom: 80px; */
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;

  .backBtn{
      display: flex;
      justify-content: center;
      align-items: center;
     
    width:40px;
    height:40px;
    border-radius: 20px;
    position: absolute;
    z-index:9999999;
    left: 4px;
    top: 5px;
    /* background-color: #CFCECED0; */
  }

  .wrap{
      flex: 1;
      overflow: scroll;
      -ms-overflow-style: none;
      scrollbar-width: none;
      /* padding-left: 20px;
      padding-right: 20px;
      padding-top: 20px; */
      
      padding-bottom: 80px;


      .mapView{
          height: 250px;
          background-color: grey;
          overflow: hidden;
      }
      
      .location{
          /* background-color: #4A4C4F; */
          padding-top: 15px;

          .location__Wrapper{
              display: flex;
              /* justify-content: center; */
              align-items: center;
              padding-left: 50px;
              /* padding-bottom: 15px; */
              padding-top: 5px;
              /* border-bottom: 1px solid #d8d8da; */
              
              padding-right: 10px;
              .line{
                  padding-right: 20px;
                  .shap_line{
                      height: 50px;
                      width: 2px;
                      background-color: #000000;
                      position: relative;

                      .top_shap{
                          position: absolute;
                          top: -5px;
                          left: -4px;
                      }
                      .bottom_shap{
                          position: absolute;
                          bottom: -5px;
                          left: -4px;
                      }
                  }
              }



              .address{
                  flex: 1;

                  .pickup{
                      padding-bottom: 8px;
                      
                      /* border-bottom: 1px solid #bbbbbb;
                      border-style:dashed; */
                      border-top: none;
                      border-left: none;
                      border-right: none;
                      span{
                          display: block;
                      }

                      .title{
                          font-size: 14px;
                          color: #000000;
                      }
                      .address__name{
                          width: 100%;
                          color:#000000;
                          /* font-weight: 600; */
                          background-color: transparent;
                          padding: 5px;
                          border: none;
                          outline: none !important;
                      }


                  }

                  .address_middle_line{
                      width: 80%;
                      height: 1px;
                      background-color: grey;
                  }
                  .dropoff{
                      padding-top: 7px;
                      span{
                          display: block;
                      }
                      .title{
                          font-size: 14px;
                          color: #000000;
                      }
                      .address__name{
                          width: 100%;
                          color:#000000;
                          /* font-weight: 600; */
                          background-color: transparent;
                          padding: 5px;
                          border: none;
                          outline: none !important;
                      }
                  }

                  
              }
          }

          .radiusStyle{
              width: 100%;
              height:20px;
              background-color:white;
              border-radius: 20px 20px 0px  0px;
          }

      }
      .others__info{

          
     
      }

  }

  .loading__Wrapper{
      flex: 1;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
  }

`

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 15px;
  background-color: transparent;
  button{
      width: 90%;
      padding: 10px 50px;
      cursor: pointer;
      background-color: #b1b1b1;
      border-radius: 10px;
      border: 0px;
      color: white;
      font-weight: 600;
      font-size: 16px;

      &.active{
          background-color: #28292b;
          color: white;
      }
      
  }
`


// export default connect(
//     null,
//     {}
// )(
//     GoogleApiWrapper({
//         apiKey: google_api_key,
//         LoadingContainer: LoadingContainer,
//         v: "3",
//     })(OverViewRideRequest)
// )


export default OverViewRideRequest