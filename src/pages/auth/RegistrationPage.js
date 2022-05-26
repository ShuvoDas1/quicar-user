import {
  Box,
  Button,
  Input,
  InputAdornment,
  MenuItem,
  TextField,
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import './login.scss'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'
import { requestApi } from '../../network/httpRequest'
import { REGISTRATION, SEND_LOGIN_OTP, VERIFY_OTP } from '../../network/urls'
import CircularProgress from '@mui/material/CircularProgress'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { log_in, update_user } from '../../redux/user/userAction'
import PageLayout from '../../components/layout/PageLayout'
import PageLayoutLoginCheckNon from '../../components/layout/PageLayoutLoginCheckNon'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import MobileDatePicker from '@mui/lab/MobileDatePicker'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import Stack from '@mui/material/Stack'
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation'
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera'

import moment from 'moment'

import AccountCircle from '@mui/icons-material/AccountCircle'
import GlobalLoader from '../../components/loading/GlobalLoader'

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

const RegistrationPage = () => {
  const [open, setOpen] = React.useState(false)
  const [errorMessage, setErrorMessage] = React.useState('')
  const [isLoading, setisLoading] = useState(false)
  const navigate = useNavigate()
  const params = useParams()
  const dispatch = useDispatch()

  const [age, setAge] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [profileImage, setProfileImage] = useState(null)

  const { accessToken, user } = useSelector((state) => state.usereducer)

  // useEffect(()=>{

  //    if(accessToken && user.name){
  //     navigate(`/main/home`)
  //    }

  //    if(accessToken && !user.name){
  //     navigate(`/register`)
  //    }

  // },[user,accessToken]);

  useEffect(() => {
    if (accessToken && user && user.name) {
      navigate('/home')
    }

    if (!accessToken || !user) {
      navigate('/login')
    }
  }, [accessToken, user])

  const onSubmit = async () => {
    if (name == '' || !name) {
      setErrorMessage('Enter a name please')
      setOpen(true)
      return
    }

    if (age == '' || !age) {
      setErrorMessage('Select your Date of Birth')
      setOpen(true)
      return
    }

    if (profileImage == '' || !profileImage) {
      setErrorMessage('Select a Profile Picture')
      setOpen(true)
      return
    }

    setisLoading(true)

  console.log('given data', {name, profileImage, dob: moment(age).format('MM/DD/YYYY')})

    try {
      const data  = await requestApi().request(REGISTRATION, {
        method: 'POST',
        data: {
          name,
          profileImage,
          dob: moment(age).format('MM/DD/YYYY'),
          email 
        },
      })

      console.log({data})

      if (data) {
        if (data.status) {
          dispatch(
            update_user({
              name: name,
              img: profileImage,
            }),
          )

          navigate('/home')
        } else {
          setErrorMessage(data.error)
          setOpen(true)
        }
      }
    } catch (error) {
      setisLoading(false)
      console.log(error)
      setErrorMessage(error.message)
      setOpen(true)
    }
  }

  const onImageChange = async (event) => {
    if (event.target.files && event.target.files[0]) {
      const selectedFiles = event.target.files
      const formData = new FormData()

      formData.append('folderPath', 'user_profile_picture')

      for (const key of Object.keys(selectedFiles)) {
        formData.append('images', selectedFiles[key])
      }

      const result = await fetch(
        'https://ftp.codepadding.com/api/upload/image/multitples',
        {
          method: 'POST',
          body: formData,
        },
      )

      const response = await result.json()

      if (!response.status) {
        setErrorMessage(response.error)
        setOpen(true)
        return
      }

      console.log('response', response)

      if (response.status) {
        const image = response.data.imageList[0]
        setProfileImage(image.path)
      } else {
        setErrorMessage(response.error)
        setOpen(true)
        return
      }
    }
  }

  return (
    <div>
      <PageLayoutLoginCheckNon appbar={false}>
        <Wrapper>
          <ContentWrapper>
            <h4> Final Registration </h4>{' '}
            {/* <p className="color_grey">Enter your OTP Verification</p> */}
            <ImageWrapper>
              <img
                style={{
                  height: '80px',
                  width: '80px',
                  borderRadius: '40px',
                  border: '2px solid #F79520',
                }}
                src={`${
                  profileImage
                    ? profileImage
                    : '/images/local/login_screen_image.svg'
                }`}
                alt=''
              />
              <div className="circle_shap">
                <PhotoCameraIcon style={{ color: '#F79520', zIndex: '1' }} />{' '}
                <input
                  type="file"
                  className="imageSelect"
                  accept="image/*"
                  onChange={(e) => onImageChange(e)}
                />{' '}
              </div>{' '}
            </ImageWrapper>
            <Box height={30} />
            <Input
              id="input-with-icon-adornment"
              placeholder="Enter your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
            />
            <Box height={20} />
            <Input
              id="input-with-icon-adornment"
              placeholder="Enter your Email (Optional)"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              startAdornment={
                <InputAdornment position="start">
                  <MailOutlineIcon />
                </InputAdornment>
              }
            />
            <Box height={20} />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Stack spacing={3}>
                <MobileDatePicker
                  value={age}
                  onChange={(newValue) => {
                    setAge(newValue)
                    console.log(newValue)
                  }}
                  renderInput={(params) => (
                    <Input
                      contentEditable={false}
                      // value={}
                      id="input-with-icon-adornment"
                      placeholder="Date of Birth"
                      startAdornment={
                        <InputAdornment position="start">
                          <InsertInvitationIcon />
                        </InputAdornment>
                      }
                      {...params}
                    />
                  )}
                />
              </Stack>{' '}
            </LocalizationProvider>
            <Snackbar
              open={open}
              autoHideDuration={6000}
              onClose={() => setOpen(false)}
              anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
            >
              <Alert
                onClose={() => setOpen(false)}
                severity="error"
                sx={{ width: '100%' }}
              >
                {' '}
                {errorMessage}{' '}
              </Alert>{' '}
            </Snackbar>{' '}
            <div style={{ height: '30px' }}> </div>{' '}
            <div>
              <Button
                disabled={isLoading}
                onClick={onSubmit}
                style={{
                  height: '40px',
                  backgroundColor: isLoading ? '#B9B9B8' : '#F79520',
                  minWidth: '200px',
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
                variant="contained"
              >
                <span> </span> <span> Register </span>
                {isLoading ? (
                  <CircularProgress size={18} color="inherit" />
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                  >
                    <g
                      id="Group_6412"
                      dataName="Group 6412"
                      transform="translate(-277 -762)"
                    >
                      <circle
                        id="Ellipse_822"
                        dataName="Ellipse 822"
                        cx="11"
                        cy="11"
                        r="11"
                        transform="translate(277 762)"
                        fill="#fff"
                        opacity="0.27"
                      />
                      <path
                        id="Icon_ionic-ios-arrow-back"
                        dataName="Icon ionic-ios-arrow-back"
                        d="M12.665,10.3l3.106-3.1a.587.587,0,1,0-.831-.828L11.421,9.882a.586.586,0,0,0-.017.809l3.534,3.541a.587.587,0,0,0,.831-.829Z"
                        transform="translate(301.597 783.298) rotate(180)"
                        fill="#fff"
                      />{' '}
                    </g>{' '}
                  </svg>
                )}
              </Button>
            </div>
            <div style={{ height: '30px' }}> </div>{' '}
          </ContentWrapper>{' '}
        </Wrapper>{' '}
      </PageLayoutLoginCheckNon>
    </div>
  )
}

const Wrapper = styled.div`
  padding: 10px;
`

const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  position: relative;
  width: 80px;

  .circle_shap {
    width: 30px;
    height: 30px;
    background-color: white;
    position: absolute;
    right: -10px;
    top: 30%;
    border-radius: 50%;
    box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.23);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    overflow: hidden;

    .imageSelect {
      width: 30px;
      height: 80px;
      border-radius: 50%;
      color: transparent;
      z-index: 99999;
      position: absolute;
    }
  }
`

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  flex-direction: column;
  text-align: center;

  .color_grey {
    color: gray;
  }
`

export default RegistrationPage
