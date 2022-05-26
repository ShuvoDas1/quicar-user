import React, { useEffect, useState } from 'react'
import PageLayout from '../../components/layout/PageLayout'
import { useNavigate, useSearchParams } from 'react-router-dom'
import GlobalWrapper from '../../components/GlobalWrapper'
import styled from 'styled-components'
import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import { IconButton } from '@mui/material';
import { Toolbar } from '@mui/material';
import { AppBar } from '@mui/material';
import ArrowBack from '@mui/icons-material/ArrowBack';
import { useSelector, useDispatch } from 'react-redux'
import { rideBiddings } from '../../redux/rideBidding/rideBiddingAction'
import { CircularProgress } from '@mui/material';
import HistoryIcon from '@mui/icons-material/History';
import toolbar_background from '../../assets/toolbar_background.svg'
import { Divider } from '@mui/material';

const RideBiddingPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  let [searchParams, setSearchParams] = useSearchParams();
  const [rideId, setRideId] = useState("");
  const { biddings, loading } = useSelector(state => state.rideBiddingsReducer)

  useEffect(() => {
    const id = searchParams.get('rideId')
    if (id) {
      setRideId(id)
      dispatch(rideBiddings(id))

    } else {
      navigate('/main/home', {
        replace: true,
      })
    }
  }, [])



  const BiddingPageLayout = (children) => {
    return <GlobalWrapper>
      <Page>
        <div className="wrapper">

          <AppBar position="static" style={{ background: 'white' }} elevation={0}>
            <Toolbar>
              <Typography
                noWrap
                component="div"
                sx={{ display: { xs: 'block', sm: 'block' } }}
              >
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={() => {

                  // navigate(`/ride-details?rideId=${rideId}`);
                  navigate(`/main/ride`);

                }}>
                  <ArrowBack style={{ color: 'black' }} />
                </IconButton>
              </Typography>

              <h3 style={{ color: 'black' }}>Ride Bidding</h3>
              <Box sx={{ flexGrow: 1 }} />
              <Box sx={{ display: { xs: 'flex', md: 'flex' } }}>


              </Box>
            </Toolbar>
          </AppBar>

          <div className="content">




            {children}

          </div>
        </div>
      </Page>
    </GlobalWrapper>
  }


  return (

    BiddingPageLayout(<div style={{ height: '100%', backgroundColor: '#F1F1F1' }}>

      <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="100%" height="124" viewBox="0 0 365 124">
        <defs>
          <filter id="Subtraction_2" x="0" y="0" width="365" height="124" filterUnits="userSpaceOnUse">
            <feOffset dy="3" input="SourceAlpha" />
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feFlood flood-opacity="0.161" />
            <feComposite operator="in" in2="blur" />
            <feComposite in="SourceGraphic" />
          </filter>
          <clipPath id="clip-path">
            <rect width="4" height="101" fill="none" />
          </clipPath>
        </defs>
        <g id="Group_6417" data-name="Group 6417" transform="translate(-12 -60)">
          <g transform="matrix(1, 0, 0, 1, 12, 60)" filter="url(#Subtraction_2)">
            <path id="Subtraction_2-2" data-name="Subtraction 2" d="M-3113,158h-333a7.008,7.008,0,0,1-7-7V110a5.006,5.006,0,0,0,5-5,5.006,5.006,0,0,0-5-5V59a7.008,7.008,0,0,1,7-7h333a7.008,7.008,0,0,1,7,7v41a5.006,5.006,0,0,0-5,5,5.006,5.006,0,0,0,5,5v41A7.008,7.008,0,0,1-3113,158Z" transform="translate(3462 -46)" fill="#fff" />
          </g>
          <rect id="Rectangle_623" data-name="Rectangle 623" width="78" height="20" rx="5" transform="translate(269 143)" fill="#f79520" />
          <path id="Subtraction_3" data-name="Subtraction 3" d="M-3413,158h-33a7.008,7.008,0,0,1-7-7V110a5.006,5.006,0,0,0,5-5,5.006,5.006,0,0,0-5-5V59a7.008,7.008,0,0,1,7-7h33V158Z" transform="translate(3474 14)" fill="#f79520" />
          <text id="Discount" transform="translate(44 119) rotate(-90)" fill="#fff" font-size="10" font-family="OpenSans-Semibold, Open Sans" font-weight="600" letter-spacing="0.32em"><tspan x="-36.705" y="0">DISCOUNT</tspan></text>
          <text id="Expires" transform="translate(75 148)" font-size="10" font-family="OpenSans-Regular, Open Sans" opacity="0.85"><tspan x="0" y="0">Expires</tspan></text>
          <text id="_30_Jul_2020" data-name="30 Jul 2020" transform="translate(75 161)" font-size="10" font-family="OpenSans-Extrabold, Open Sans" font-weight="800"><tspan x="0" y="0">30 Jul 2020</tspan></text>
          <text id="Copy" transform="translate(295 157)" fill="#fff" font-size="10" font-family="OpenSans-Bold, Open Sans" font-weight="700"><tspan x="0" y="0">COPY</tspan></text>
          <text id="Book_your_first_Car_And_Get_50_Discount_" data-name="Book your first Car And Get 50 % 
Discount!" transform="translate(195 116)" font-size="10" font-family="SegoeUI, Segoe UI" letter-spacing="0.2em"><tspan x="-106.014" y="0">Book your first Car And Get 50 % </tspan><tspan x="-28.852" y="15"></tspan></text>
          <g id="Repeat_Grid_1" data-name="Repeat Grid 1" transform="translate(59 69)" clip-path="url(#clip-path)">
            <g transform="translate(-55 -72)">
              <circle id="Ellipse_751" data-name="Ellipse 751" cx="2" cy="2" r="2" transform="translate(55 72)" fill="#fff" />
            </g>
            <g transform="translate(-55 -66)">
              <circle id="Ellipse_751-2" data-name="Ellipse 751" cx="2" cy="2" r="2" transform="translate(55 72)" fill="#fff" />
            </g>
            <g transform="translate(-55 -60)">
              <circle id="Ellipse_751-3" data-name="Ellipse 751" cx="2" cy="2" r="2" transform="translate(55 72)" fill="#fff" />
            </g>
            <g transform="translate(-55 -54)">
              <circle id="Ellipse_751-4" data-name="Ellipse 751" cx="2" cy="2" r="2" transform="translate(55 72)" fill="#fff" />
            </g>
            <g transform="translate(-55 -48)">
              <circle id="Ellipse_751-5" data-name="Ellipse 751" cx="2" cy="2" r="2" transform="translate(55 72)" fill="#fff" />
            </g>
            <g transform="translate(-55 -42)">
              <circle id="Ellipse_751-6" data-name="Ellipse 751" cx="2" cy="2" r="2" transform="translate(55 72)" fill="#fff" />
            </g>
            <g transform="translate(-55 -36)">
              <circle id="Ellipse_751-7" data-name="Ellipse 751" cx="2" cy="2" r="2" transform="translate(55 72)" fill="#fff" />
            </g>
            <g transform="translate(-55 -30)">
              <circle id="Ellipse_751-8" data-name="Ellipse 751" cx="2" cy="2" r="2" transform="translate(55 72)" fill="#fff" />
            </g>
            <g transform="translate(-55 -24)">
              <circle id="Ellipse_751-9" data-name="Ellipse 751" cx="2" cy="2" r="2" transform="translate(55 72)" fill="#fff" />
            </g>
            <g transform="translate(-55 -18)">
              <circle id="Ellipse_751-10" data-name="Ellipse 751" cx="2" cy="2" r="2" transform="translate(55 72)" fill="#fff" />
            </g>
            <g transform="translate(-55 -12)">
              <circle id="Ellipse_751-11" data-name="Ellipse 751" cx="2" cy="2" r="2" transform="translate(55 72)" fill="#fff" />
            </g>
            <g transform="translate(-55 -6)">
              <circle id="Ellipse_751-12" data-name="Ellipse 751" cx="2" cy="2" r="2" transform="translate(55 72)" fill="#fff" />
            </g>
            <g transform="translate(-55)">
              <circle id="Ellipse_751-13" data-name="Ellipse 751" cx="2" cy="2" r="2" transform="translate(55 72)" fill="#fff" />
            </g>
            <g transform="translate(-55 6)">
              <circle id="Ellipse_751-14" data-name="Ellipse 751" cx="2" cy="2" r="2" transform="translate(55 72)" fill="#fff" />
            </g>
            <g transform="translate(-55 12)">
              <circle id="Ellipse_751-15" data-name="Ellipse 751" cx="2" cy="2" r="2" transform="translate(55 72)" fill="#fff" />
            </g>
            <g transform="translate(-55 18)">
              <circle id="Ellipse_751-16" data-name="Ellipse 751" cx="2" cy="2" r="2" transform="translate(55 72)" fill="#fff" />
            </g>
            <g transform="translate(-55 24)">
              <circle id="Ellipse_751-17" data-name="Ellipse 751" cx="2" cy="2" r="2" transform="translate(55 72)" fill="#fff" />
            </g>
          </g>
          <g id="Group_6416" data-name="Group 6416" transform="translate(-3537.566 646.294)">
            <g id="Group_6415" data-name="Group 6415" transform="translate(3700.566 -577.294)">
              <g id="Group_6414" data-name="Group 6414" transform="translate(0 0)">
                <g id="Group_6413" data-name="Group 6413">
                  <g id="Group_6412" data-name="Group 6412" transform="translate(0 0)">
                    <g id="Group_2568" data-name="Group 2568" transform="translate(0 0)">
                      <path id="Path_15460" data-name="Path 15460" d="M66.895,66c-.173-1.2-.188-2.236-.427-3.24a6.66,6.66,0,0,0-6.694-5.282,9.38,9.38,0,1,1,7.146-3.9c-.282.366-.475.42-.854.191-.519-.316-1.348-.467-1.529-.9-.188-.451.467-1.041.751-1.571a6.829,6.829,0,1,0-5.847,3.557,9.605,9.605,0,0,1,7.943,3.744,4.717,4.717,0,0,1,.492,5.595C67.578,64.74,67.279,65.291,66.895,66Z" transform="translate(-49.884 -38.707)" fill="#4a4c4f" />
                      <path id="Path_15461" data-name="Path 15461" d="M135.561,69.4c0,.591-.034,1.183.006,1.773.2,2.943-2.14,4.59-4.687,4.5a4.03,4.03,0,0,1-4.1-2.935,3.778,3.778,0,0,1-.136-.935c-.013-1.626,0-3.251-.014-4.877,0-.356.1-.484.464-.467.611.027,1.227.027,1.839,0,.357-.016.471.09.465.458-.021,1.266-.006,2.533-.009,3.8a2.676,2.676,0,0,0,.363,1.45,1.5,1.5,0,0,0,2.619.076,2.607,2.607,0,0,0,.425-1.56c0-1.245.017-2.491-.01-3.736-.008-.4.106-.509.5-.488a14.893,14.893,0,0,0,1.775,0c.438-.028.532.143.519.541C135.542,67.793,135.561,68.6,135.561,69.4Z" transform="translate(-105.707 -58.884)" fill="#4a4c4f" />
                      <path id="Path_15462" data-name="Path 15462" d="M194.353,71.829c0,.829-.01,1.588.006,2.346a.465.465,0,0,1-.3.482,4.762,4.762,0,0,1-6.134-1.681,4.989,4.989,0,0,1,1.042-6.356,5.1,5.1,0,0,1,5.168-.389c.218.1.247.244.244.449-.008.716,0,1.432,0,2.2a12.678,12.678,0,0,0-1.721-.5,2.006,2.006,0,0,0-2.332,2.7,2.038,2.038,0,0,0,2.62,1.16C193.39,72.132,193.829,71.981,194.353,71.829Z" transform="translate(-149.779 -58.35)" fill="#4a4c4f" />
                      <path id="Path_15463" data-name="Path 15463" d="M265.076,67.291c.607-.663,1.038-1.253,1.832-1.341.432-.048.665.042.63.559-.045.649-.021,1.307-.006,1.96.006.293-.021.442-.4.443a1.738,1.738,0,0,0-2,1.952c-.038,1.243-.025,2.488,0,3.731.007.4-.082.565-.519.54-.632-.038-1.267-.02-1.9,0-.267.006-.366-.073-.366-.354q.013-4.174,0-8.349c0-.25.038-.394.339-.387.675.016,1.352.013,2.028,0,.272,0,.386.1.371.368C265.065,66.653,265.076,66.9,265.076,67.291Z" transform="translate(-204.426 -58.512)" fill="#4a4c4f" />
                      <path id="Path_15464" data-name="Path 15464" d="M171.726,70.876c0,1.349-.011,2.7.007,4.045,0,.349-.084.48-.452.462-.611-.029-1.224-.019-1.836,0-.3.008-.46-.043-.458-.405q.019-4.141,0-8.28c0-.3.1-.412.4-.4.633.016,1.268.027,1.9,0,.387-.019.446.145.442.48C171.717,68.137,171.726,69.506,171.726,70.876Z" transform="translate(-136.521 -58.765)" fill="#4a4c4f" />
                      <path id="Path_15465" data-name="Path 15465" d="M169.54,47.979a1.7,1.7,0,1,1,.01,3.4,1.679,1.679,0,0,1-1.689-1.732,1.646,1.646,0,0,1,1.679-1.667Z" transform="translate(-135.701 -45.449)" fill="#4a4c4f" />
                      <path id="Path_15466" data-name="Path 15466" d="M163.426,104.8c-.231-.231-.522-.114-.783-.114q-20.488-.01-40.976-.006h-.876a1.233,1.233,0,0,1,.834-.143q20.52-.007,41.04-.01c.256,0,.549.125.77-.128l-.261-.964a10.989,10.989,0,0,0,2.106,1.16l-2.069,1.041C163.305,105.268,163.366,105.034,163.426,104.8Z" transform="translate(-101.462 -85.786)" fill="#f79520" />
                      <path id="Path_15467" data-name="Path 15467" d="M73.2,61.811a2.894,2.894,0,0,1,1,.492c.788.438,1.5,1,2.334,1.367a.878.878,0,0,1,.512.989.9.9,0,0,1-.7.8.8.8,0,0,1-.962-.4C74.688,64.009,73.979,62.969,73.2,61.811Z" transform="translate(-66.844 -55.51)" fill="#f79520" />
                      <path id="Path_15468" data-name="Path 15468" d="M227.878,67.642c0-.561.25-1.307-.117-1.63-.313-.277-1.042-.092-1.588-.1-.971-.007-.97,0-1,.98,0,.027-.047.054-.093.1-.091-.081-.183-.16-.273-.243a3.333,3.333,0,0,0-4.994.136,5.339,5.339,0,0,0-.311,6.8,3.434,3.434,0,0,0,3.456,1.369,3.894,3.894,0,0,0,2.223-1.626,6.961,6.961,0,0,1-.007.916c-.083.528.161.64.632.6a9.488,9.488,0,0,1,1.457,0c.476.038.646-.085.638-.606C227.864,72.114,227.891,69.878,227.878,67.642Zm-4.82,5a1.868,1.868,0,0,1-1.717-2.1,1.953,1.953,0,0,1,1.957-2.1,2,2,0,0,1,1.793,2.135A2.046,2.046,0,0,1,223.058,72.643Z" transform="translate(-172.481 -58.337)" fill="#4a4c4f" />
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>


      {
        biddings.map((item, index) => {
          return (
            <ItemBidding >

              <div style={{ display: 'flex', justifyContent: 'space-between' }}>

                <div style={{ display: 'flex' }}>
                  <div>
                    <img width="50" height="50" style={{ objectFit: 'cover', borderRadius: '10px' }} src="data:image/jpeg;base64,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" />
                  </div>

                  <div style={{ paddingLeft: '10px' }}>
                    <p style={{ fontWeight: '600', fontSize: '18px' }}>Kanny Sabastian</p>
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="10.052" height="9.788" viewBox="0 0 10.052 9.788">
                        <path id="Icon_ionic-md-star" data-name="Icon ionic-md-star" d="M8.823,12.368l3.106,1.92-.822-3.621,2.742-2.435-3.614-.318L8.823,4.5,7.411,7.914,3.8,8.232l2.742,2.435-.822,3.621Z" transform="translate(-3.797 -4.5)" fill="#f79520" />
                      </svg>
                      <span style={{ paddingLeft: '5px' }}>4.9</span>
                    </div>
                  </div>


                </div>
                <div>
                  <p>Biding Price</p>
                  <p>TK 2500</p>
                </div>


              </div>


              <div style={{ padding: '5px 0px' }}>
                <Divider />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>

                <div style={{ display: 'flex' }}>
                  <div>
                    <img
                      width="50"
                      height="50"
                      style={{ objectFit: 'cover', borderRadius: '10px' }}
                      src="https://toyota-cms-media.s3.amazonaws.com/wp-content/uploads/2019/03/Corolla_Hybrid_013_E8752A42C66E156C23136C861E7A6BAF9B59801D-1500x900.jpg" />
                  </div>

                  <div style={{ paddingLeft: '10px' }}>
                    <p>Kanny Sabastian</p>
                    <div>

                      <span>2018</span>
                    </div>
                  </div>


                </div>
                <div style={{ display: 'flex', alignItems: 'end', cursor: 'pointer' }}>
                  <p style={{ paddingLeft: '10px', color: '#F79520', fontWeight: 'bold' }}
                    onClick={() => { }}
                  >View Details <span style={{ fontWeight: 'bold' }}>{`>`}</span> </p>

                </div>


              </div>

            </ItemBidding>
          )
        })
      }

      {
        loading && <CenterDiv>
          <CircularProgress size={25} />
        </CenterDiv>
      }

      {
        biddings.length < 1 && !loading && < CenterVertical>
          <HistoryIcon style={{ width: '50px', height: '50px', fill: 'grey' }}></HistoryIcon>
        </CenterVertical>
      }


    </div>)

  )
}



const ItemBidding = styled.div`
    margin:10px;
    padding:10px;
    background-color:#FFFFFF;
    box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.20);
    border-radius: 5px;
`


const Page = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(197, 197, 197);
    .wrapper {
      height: 100vh;
      width: 100%;
      /* box-shadow: -1px -1px 5px 2px rgba(238, 238, 238, 0.842);
      -webkit-box-shadow: -1px -1px 5px 2px rgba(238, 238, 238, 0.842);
      -moz-box-shadow: -1px -1px 5px 2px rgba(238, 238, 238, 0.842); */
      display: flex;
      flex-direction: column;
      overflow: hidden;
  
      @media (min-width:767.98px) {
        width: 440px;
        height: calc(100vh - 60px);
        border-radius: 20px;
        
      }
  
      .content{
        width:100%;
        flex:1;
        background-color:#ffffff;
        overflow: auto;
        -ms-overflow-style: none;
        scrollbar-width: none; /* Firefox */
        }
    }
`
const CenterDiv = styled.div`
    flex: 1;
    overflow: hidden;
    display: flex;
    width:100%;
    height:100%;
    justify-content: center;
    align-items: center;
`
const CenterVertical = styled.div`
    flex: 1;
    overflow: hidden;
    display: flex;
    width:100%;
    height:80vh;
    justify-content: center;
    align-items: center;
`
export default RideBiddingPage