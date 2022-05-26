import { Box, Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PageLayoutLoginCheckNon from '../../components/layout/PageLayoutLoginCheckNon'
import './login.scss'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { requestApi } from '../../network/httpRequest'
import { SEND_LOGIN_OTP, VERIFY_OTP } from '../../network/urls'
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { log_in } from '../../redux/user/userAction';


const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const VerifyOtpPage = () => {

    const [otp, setOtp] = useState("");
    const [number, setnumber] = useState("");
    const [open, setOpen] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState("");
    const [isLoading, setisLoading] = useState(false);
    const navigate = useNavigate();
    const params = useParams()
    const dispatch = useDispatch()

    const [newUser, setNewUser] = useState("true");


    const { accessToken, user } = useSelector(state => state.usereducer);


    useEffect(() => {
        if (accessToken && user.name) {
            navigate(`/main/home`)
        }
        if (accessToken && !user.name) {
            navigate(`/register`)
        }
    }, [user, accessToken]);


    useEffect(() => {
        setNewUser(params.newUser)
        setnumber(params.phone)
    }, []);;

    const onSubmit = async () => {

        if (otp) {
            setisLoading(true);
            const { data } = await requestApi().request(VERIFY_OTP, {
                method: "POST",
                data: {
                    phone: number,
                    otp: otp
                }
            })

            setisLoading(false);

            if (data.status) {
                if (newUser) {
                    dispatch(log_in(data.user, data.user.token))
                } else {
                    dispatch(log_in(data.user, data.user.token))
                }
            } else {
                setErrorMessage(data.error)
                setOpen(true)
            }



        } else {
            setErrorMessage("Enter a otp please")
            setOpen(true)



        }

    }


    return (
        <div>

            <PageLayoutLoginCheckNon appbar={false}>
                <Wrapper >

                    <ImageWrapper><img style={{ height: '180px' }} src='/images/local/login_screen_image.svg' /></ImageWrapper>
                    <ContentWrapper>
                        <h4>Verify Your Mobile Number</h4>
                        <p className="color_grey">Enter your OTP Verification</p>

                        <div style={{ height: '30px' }}></div>

                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>

                            <TextField value={otp} onChange={e => setOtp(e.target.value)} id="input-with-sx" placeholder='Enter your otp ' variant="standard" />
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
                                <span>VERIFY</span>


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





export default VerifyOtpPage
