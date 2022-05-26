import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import Layout from '../../components/layout/Layout';
import { Box, Snackbar } from '@mui/material';
import { Typography } from '@mui/material';
import { IconButton } from '@mui/material';
import { Toolbar } from '@mui/material';
import { AppBar } from '@mui/material';
import ArrowBack from '@mui/icons-material/ArrowBack';
import { useSelector, useDispatch } from "react-redux";
import { google_api_key } from '../../utils/constantValue';
import axios from 'axios'
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import MobileDateTimePicker from '@mui/lab/MobileDateTimePicker';
import DesktopDateTimePicker from '@mui/lab/DesktopDateTimePicker';
import Stack from '@mui/material/Stack';
import { usePlacesWidget } from "react-google-autocomplete";
import Autocomplete from "react-google-autocomplete";
import PlacesAutocomplete from "react-places-autocomplete";
import MuiAlert from '@mui/material/Alert';
import Geocode from "react-geocode";
import { setRentalItem } from '../../redux/action/carRentalAction';

Geocode.setApiKey(google_api_key);
Geocode.setLanguage("en");

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const InputAddress = () => {

    const { selectedCarType, pickUpLocation, dropOffLocation, tripType, pickUpDate, returnDate, extraNote } = useSelector(state => state.rentalRequest)

    const dispatch = useDispatch();
    let navigate = useNavigate()


    const [toast, setToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("");


    const clickNext = () => {

        if (pickUpLocation.address == "" || !pickUpLocation.latitute) {
            setToast(true)
            setToastMessage("Enter a pickup location")
            return;
        }


        if (dropOffLocation.address == "" || !dropOffLocation.latitute) {
            setToast(true)
            setToastMessage("Enter a DropUp location")
            return;
        }



        if (!pickUpDate) {
            setToast(true)
            setToastMessage("Enter a PickUp Date")
            return

        }


        if (tripType == 1 || tripType == 2) {
            if (!returnDate) {
                setToast(true)
                setToastMessage("Enter a Return Date")
                return
            }
        }





        window.location = "/car-rental/final-check"

        // navigate('/car-rental/final-check')
    }


    useEffect(() => {
        if (!selectedCarType) {
            navigate('/car-rental')
        }

    }, [selectedCarType]);


    const selectAddressAutoComplete = (place, type) => {
        // console.log("autocompleteRef", autocompleteRef);

        const { geometry: { location }, formatted_address, address_components, place_id } = place;

        var country_long_name;
        var country_short_name;
        var locality_long_name;
        var sub_locality_long_name;

        address_components.forEach(address_component => {
            if (address_component.types.includes("country")) {
                country_long_name = address_component.long_name
                country_short_name = address_component.short_name
            } else if (address_component.types.includes("locality")) {
                locality_long_name = address_component.long_name
            }
            else if (address_component.types.includes("sublocality")) {
                sub_locality_long_name = address_component.long_name
            }
        });

        const latlng = location.toJSON();
        var itemAdds = {
            address: formatted_address,
            placeId: place_id,
            latitute: latlng.lat,
            longitute: latlng.lng,
            locality: locality_long_name,
            subLocality: sub_locality_long_name,
            country: country_long_name,
            countryCode: country_short_name,
        }

        if (type == "pickup") {

            localStorage.setItem("pickUpLocation", JSON.stringify(itemAdds))
            dispatch(setRentalItem({
                pickUpLocation: {
                    ...itemAdds
                },
            }))
        } else {
            localStorage.setItem("dropOffLocation", JSON.stringify(itemAdds))
            dispatch(setRentalItem({
                dropOffLocation: {
                    ...itemAdds
                }
            }))
        }
    }


    return (

        <Layout>
            <Page>
                <AppBar position="static" style={{ background: '#4A4C4F' }} elevation={0}>
                    <Toolbar style={{ padding: '0px' }}>
                        <Typography
                            noWrap
                            component="div"
                            sx={{ display: { xs: 'white', sm: 'white' } }}
                        >
                            <IconButton edge="start" color="inherit" aria-label="menu" style={{ marginLeft: '2px', marginRight: '2px' }} onClick={() => navigate("/car-rental")}>
                                <ArrowBack style={{ color: 'white' }} />
                            </IconButton>
                        </Typography>

                        <h3 style={{ color: 'white' }}>{"Car Rantal"}</h3>
                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ display: { xs: 'flex', md: 'flex' } }}>


                        </Box>
                    </Toolbar>
                </AppBar>



                <div className="wrap">

                    <div className='location'>
                        <div className="location__Wrapper">

                            <Snackbar
                                open={toast}
                                autoHideDuration={6000}
                                onClose={() => setToast(false)}
                                anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                            >
                                <Alert onClose={() => setToast(false)} severity="error" sx={{ width: '100%' }}>
                                    {toastMessage}
                                </Alert>
                            </Snackbar>


                            <div className="line">

                                <div className="shap_line">

                                    <svg className='top_shap' xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10">
                                        <circle id="Ellipse_776" cx="5" cy="5" r="5" fill="#ffffff" />
                                    </svg>


                                    <svg className='bottom_shap' xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10">
                                        <g id="Group_1533" transform="translate(-72 -181)">
                                            <circle id="Ellipse_777" cx="5" cy="5" r="5" transform="translate(72 181)" fill="#ffffff" />
                                            <circle id="Ellipse_778" cx="3" cy="3" r="3" transform="translate(74 183)" fill="#4a4a4c" />
                                        </g>
                                    </svg>



                                </div>


                            </div>

                            <div className="address">

                                <div className="pickup">
                                    <span className='title'>Pickup Point</span>
                                    {/* <input ref={ref} className='address__name' type="text" value={pickupLocation} onChange={e => pickupLocationInput(e.target)} placeholder='Enter pickup location' /> */}
                                    <Autocomplete
                                        apiKey={google_api_key}
                                        onPlaceSelected={(place, inputRef, autocomplete) => {
                                            selectAddressAutoComplete(place, "pickup")
                                        }}
                                        options={{
                                            types: [],
                                        }}
                                        defaultValue={pickUpLocation.address}
                                        className='address__name'
                                        placeholder='Enter pickup location' />

                                </div>
                                <div className='address_middle_line'></div>
                                <div className="dropoff">
                                    <span className='title'>DropOff Point</span>
                                    <Autocomplete
                                        apiKey={google_api_key}
                                        onPlaceSelected={(place, inputRef, autocomplete) => {
                                            selectAddressAutoComplete(place, "dropOff")
                                        }}
                                        options={{
                                            types: [],
                                        }}
                                        defaultValue={dropOffLocation.address}
                                        className='address__name'
                                        // type="text" 
                                        // value={dropOffLocation} 
                                        // onChange={e => dropOffLocationInput(e.target)} 
                                        placeholder='Enter DropOff location' />
                                </div>
                            </div>

                        </div>
                        <div className='radiusStyle'></div>
                    </div>

                    <div className='others__info'>

                        <Title>Trip Type</Title>

                        <TabLayout>
                            <div className={`tab ${tripType === 0 ? 'active' : ''}`} onClick={() => {
                                localStorage.setItem("tripType", 0)
                                dispatch(setRentalItem({ tripType: 0, }))
                            }}>One Way</div>
                            <div className={`tab ${tripType === 1 ? 'active' : ''}`} onClick={() => {
                                localStorage.setItem("tripType", 1)
                                dispatch(setRentalItem({ tripType: 1, }))
                            }}>Round Trip</div>
                            <div className={`tab ${tripType === 2 ? 'active' : ''}`} onClick={() => {
                                localStorage.setItem("tripType", 2)
                                dispatch(setRentalItem({ tripType: 2, }))
                            }}>Body Rent</div>
                        </TabLayout>



                        <TabView>



                            <LocalizationProvider dateAdapter={AdapterDateFns}>

                                <Stack spacing={3}>


                                    {/* <TabTitle>Pick up Date & Time</TabTitle> */}
                                    <MobileDateTimePicker
                                        label="Pick up Date & Time"
                                        value={pickUpDate}
                                        onChange={(newValue) => {

                                            localStorage.setItem("pickUpDate", newValue);
                                            dispatch(setRentalItem({
                                                pickUpDate: newValue
                                            }))
                                            // setPickUpDate(newValue);
                                        }}
                                        renderInput={(params) => <TextField {...params} />}
                                        minDateTime={new Date()}
                                    />


                                    {/* <TabTitle>Return Date & Time</TabTitle> */}

                                    {(tripType === 1 || tripType === 2) &&

                                        <MobileDateTimePicker
                                            label="Return Date & Time"
                                            value={returnDate}
                                            onChange={(newValue) => {
                                                localStorage.setItem("returnDate", newValue);
                                                dispatch(setRentalItem({
                                                    returnDate: newValue
                                                }))
                                            }}
                                            renderInput={(params) => <TextField {...params} />}
                                            minDateTime={new Date()}
                                        />
                                    }

                                </Stack>

                            </LocalizationProvider>


                            <div style={{ marginTop: '25px' }}>
                                {/* <TabTitle>Extra Note</TabTitle> */}
                                <TextField
                                    style={{ width: '100%' }}
                                    id="outlined-multiline-static"
                                    label="Extra Note"
                                    value={extraNote}
                                    multiline
                                    rows={4}
                                    placeholder='Extra Note'
                                    onChange={(e) => {
                                        localStorage.setItem("extraNote", e.target.value)
                                        dispatch(setRentalItem({ extraNote: e.target.value }))
                                    }}
                                // defaultValue="Extra Note"
                                />
                            </div>

                        </TabView>


                        <div className='wrapper'>

                        </div>


                    </div>



                </div>

                <ButtonWrapper>
                    <button className={`active`} onClick={clickNext} disabled={selectedCarType ? false : false}>Next</button>
                </ButtonWrapper>

            </Page>
        </Layout>

    )
}





const Title = styled.span`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
  padding-left: 20px;
`

const TabTitle = styled.span`
  font-size: 16px;
  font-weight: 600;
`

const Page = styled.div`
  width: 100%;
  height: 100%;
  /* padding-bottom: 80px; */
  overflow: hidden;
  display: flex;
  flex-direction: column;

  .wrap{
      flex: 1;
      overflow: scroll;
      -ms-overflow-style: none;
      scrollbar-width: none;
      
      padding-bottom: 80px;
      
      .location{
          background-color: #4A4C4F;

          .location__Wrapper{
              display: flex;
              /* justify-content: center; */
              align-items: center;
              padding-left: 50px;
              padding-bottom: 15px;
              padding-top: 10px;
              /* border-bottom: 1px solid #d8d8da; */
              
              padding-right: 10px;
              .line{
                  padding-right: 20px;
                  .shap_line{
                      height: 50px;
                      width: 2px;
                      background-color: #ffffff;
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
                          color: #f8f8f8;
                      }
                      .address__name{
                          width: 100%;
                          color:#ffffff;
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
                          color: #f8f8f8;
                      }
                      .address__name{
                          width: 100%;
                          color:#ffffff;
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

const TabLayout = styled.div`
      display: flex;
      justify-content: space-evenly;
      padding: 10px 2px;

      .tab{
          padding: 7px 15px;
          box-shadow: 0 0 2px #9d9d9d;
          border-radius: 20px;
          cursor: pointer;

          &.active{
              background-color: #F79520;
              color:white;
          }
      }      

`

const TabView = styled.div`
  padding:20px;
`



export default InputAddress