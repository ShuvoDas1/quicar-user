import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components'
import CarTypeItem from '../../components/CarTypeItem';
import Layout from '../../components/layout/Layout';
import { Box, CircularProgress } from '@mui/material';
import { Typography } from '@mui/material';
import { IconButton } from '@mui/material';
import { Toolbar } from '@mui/material';
import { AppBar } from '@mui/material';
import ArrowBack from '@mui/icons-material/ArrowBack';
import { useSelector, useDispatch } from "react-redux";
import { getCarTypeList } from '../../redux/action/carTypeAction';
const CarTypeList = () => {

    let navigate = useNavigate()

    const { selectedCarType } = useSelector(state => state.rentalRequest)

    const { loading, carTypes, error } = useSelector(state => state.carTypes)

    const dispatch = useDispatch()



    useEffect(() => {
        if(carTypes.length==0){
            localStorage.removeItem("pickUpLocation")
            localStorage.removeItem("dropOffLocation")
            localStorage.removeItem("pickUpDate")
            dispatch(getCarTypeList())
        }
        
    }, []);

    const clickNext = () => {
        if (selectedCarType) {
            // window.location = "/car-rental/input-address"
            navigate('input-address')
        } else {

        }
    }

    return (
        <Layout>
            <Page>
                <AppBar position="static" style={{ background: 'white' }} elevation={0}>
                    <Toolbar>
                        <Typography
                            noWrap
                            component="div"
                            sx={{ display: { xs: 'block', sm: 'block' } }}
                        >
                            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={() => navigate('/main/home')}>
                                <ArrowBack style={{ color: 'black' }} />
                            </IconButton>
                        </Typography>

                        <h3 style={{ color: 'black' }}>{"Car Rantal"}</h3>
                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ display: { xs: 'flex', md: 'flex' } }}>


                        </Box>
                    </Toolbar>
                </AppBar>

                {
                    !loading ? (
                        <div className="wrap">
                            {
                                !loading && carTypes.map((item, index) => (
                                    <CarTypeItem key={index} item={item} />
                                ))
                            }
                        </div>
                    ) : (
                        <div className="loading__Wrapper">
                        <CircularProgress size={25} />
                        </div>
                    )
                }


                <ButtonWrapper>
                    <button className={`${selectedCarType ? 'active' : ''}`} onClick={clickNext} disabled={selectedCarType ? false : false}>Next</button>
                </ButtonWrapper>

            </Page>
        </Layout>
    )
}

const Title = styled.span`
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 10px;
    color: #F79520;
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
        padding-left: 10px;
        padding-right: 10px;
        padding-bottom: 80px;
    }

    .loading__Wrapper{
        flex: 1;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-bottom: 100px;
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







export default CarTypeList
