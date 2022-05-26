import { Box, Button, Input, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PageLayout from '../../components/layout/PageLayout'
import './login.scss'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { requestApi } from '../../network/httpRequest'
import { SEND_LOGIN_OTP } from '../../network/urls'
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom'
import PageLayoutLoginCheckNon from '../../components/layout/PageLayoutLoginCheckNon'
import { useSelector } from 'react-redux'


const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const LoginPage = () => {

    const [number, setNumber] = useState("");
    const [open, setOpen] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState("");
    const [isLoading, setisLoading] = useState(false);
    const navigate = useNavigate();

    const { accessToken, user } = useSelector(state => state.usereducer);
    useEffect(() => {
        if (accessToken && user) {
            navigate('/home')
        }
    }, [accessToken,user]);


    const onSubmit = async () => {

        if (number) {

            if (number.length == 10) {

                setisLoading(true);

                const { data } = await requestApi().request(SEND_LOGIN_OTP, {
                    method: "POST",
                    data: {
                        phone: "0" + number
                    }
                })


                setisLoading(false);

                if (data.status) {

                    navigate(`/verify-otp/${data.newUser}/0${number}`)

                } else {
                    setErrorMessage(data.error)
                    setOpen(true)
                }

            } else {
                setErrorMessage("Enter a valid number")
                setOpen(true)
            }


        } else {
            setErrorMessage("Enter a number please")
            setOpen(true)



        }

    }


    return (
        <div>

            <PageLayoutLoginCheckNon appbar={false}>
                <Wrapper >
                   <div style={{paddingTop:'20px'}}>
                   <h3>Welcome Back!</h3>
                    <p>Login  to continue</p>
                   </div>
                    <ImageWrapper><img style={{ height: '180px' }} src='./images/local/login_screen_image.svg' /></ImageWrapper>
                    <ContentWrapper>
                        <h4>Verify Your Mobile Number</h4>
                        <p className="color_grey">Please enter your number to <br />
                            verify your account</p>

                        <div style={{ height: '30px' }}></div>

                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <p sx={{ color: 'action.active', mr: 1 }} style={{ marginBottom: '6px', fontSize: '17px', marginRight: '2px' }}> +880</p>
                            <TextField value={number} onChange={e => setNumber(e.target.value)} id="input-with-sx" placeholder='Enter your phone number' variant="standard" />

                            {/* <Input
                                id="input-with-icon-adornment"
                                value={number} onChange={e => setNumber(e.target.value)}
                                placeholder='Enter your phone number'
                                startAdornment={
                                    <p sx={{ color: 'action.active', mr: 1 }} style={{ marginBottom: '6px', fontSize: '17px', marginRight: '2px' }}> +8801</p>
                                }
                            /> */}

                        </Box>

                        <Snackbar
                            open={open}
                            autoHideDuration={6000}
                            onClose={() => setOpen(false)}
                            anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                        >
                            <Alert onClose={() => setOpen(false)} severity="error" sx={{ width: '100%' }}>
                                {errorMessage}
                            </Alert>
                        </Snackbar>
                        <div style={{ height: '30px' }}></div>
                        <div>
                            <Button
                                disabled={isLoading}
                                onClick={onSubmit}
                                style={{ height: '40px', backgroundColor: isLoading ? '#B9B9B8' : '#F79520', minWidth: '200px', display: 'flex', justifyContent: 'space-between' }}
                                variant="contained" >
                                <span></span>
                                <span>Send</span>


                                {
                                    isLoading ? <CircularProgress size={18} color="inherit" /> : <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
                                        <g id="Group_6412" data-name="Group 6412" transform="translate(-277 -762)">
                                            <circle id="Ellipse_822" data-name="Ellipse 822" cx="11" cy="11" r="11" transform="translate(277 762)" fill="#fff" opacity="0.27" />
                                            <path id="Icon_ionic-ios-arrow-back" data-name="Icon ionic-ios-arrow-back" d="M12.665,10.3l3.106-3.1a.587.587,0,1,0-.831-.828L11.421,9.882a.586.586,0,0,0-.017.809l3.534,3.541a.587.587,0,0,0,.831-.829Z" transform="translate(301.597 783.298) rotate(180)" fill="#fff" />
                                        </g>
                                    </svg>
                                }





                            </Button>
                        </div>
                        <div style={{ height: '30px' }}></div>
                    </ContentWrapper>
                </Wrapper>
            </PageLayoutLoginCheckNon>

        </div>
    )
}


const Wrapper = styled.div`
    padding: 10px;
`

const ImageWrapper = styled.div`
    width:100%;
    display: flex;
    justify-content: center;
    margin-top: 20px;
`


const ContentWrapper = styled.div`
    width:100%;
    display: flex;
    justify-content: center;
    align-items:center;
    margin-top: 20px;
    flex-direction: column;
    text-align: center;

    .color_grey{
        color: gray;
    }

    
`





export default LoginPage
