
import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import GlobalWrapper from '../../components/GlobalWrapper'
import styled from 'styled-components'
import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import { IconButton } from '@mui/material';
import { Toolbar } from '@mui/material';
import { AppBar } from '@mui/material';
import ArrowBack from '@mui/icons-material/ArrowBack';
const RideDetailsPage = () => {

  const navigate = useNavigate()
  let [searchParams, setSearchParams] = useSearchParams();
  const [rideId, setRideId] = useState("");

  useEffect(() => {
    const id = searchParams.get('rideId')
    if (id) {
      setRideId(id)

      // api call

    } else {
      navigate('/main/home', {
        replace: true,
      })
    }
  })


  const Layout = (children) => {
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

                  navigate(`/main/ride`);

                }}>
                  <ArrowBack style={{ color: 'black' }} />
                </IconButton>
              </Typography>

              <h3 style={{ color: 'black' }}>Ride Details</h3>
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
    Layout(<div>

Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae incidunt similique vero unde maiores quod tempore, ex commodi, fugit dolorum illo at inventore ut in iure harum itaque a veritatis?

<h1>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor unde in praesentium quas repellat laborum reprehenderit quam ipsa. Tempora soluta pariatur molestias, rem minus cum illo voluptatem quae. Temporibus, explicabo!
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor unde in praesentium quas repellat laborum reprehenderit quam ipsa. Tempora soluta pariatur molestias, rem minus cum illo voluptatem quae. Temporibus, explicabo!
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor unde in praesentium quas repellat laborum reprehenderit quam ipsa. Tempora soluta pariatur molestias, rem minus cum illo voluptatem quae. Temporibus, explicabo!
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor unde in praesentium quas repellat laborum reprehenderit quam ipsa. Tempora soluta pariatur molestias, rem minus cum illo voluptatem quae. Temporibus, explicabo!
</h1>

    </div>)
  )
}

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


export default RideDetailsPage