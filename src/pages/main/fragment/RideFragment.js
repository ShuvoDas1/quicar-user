import React, { useState } from 'react'
import styled from 'styled-components'
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import { Outlet, Route, Routes } from 'react-router-dom';
import HomeFragment from './HomeFragment';
import MoreFragment from './MoreFragment';
import { useNavigate } from "react-router-dom";
import RequestPage from '../../ridehistory/RequestPage'
import UpComingPage from '../../ridehistory/UpComingPage'
import CancelPage from '../../ridehistory/CancelPage'
import CompletedPage from '../../ridehistory/CompletedPage'
import ExpirePage from '../../ridehistory/ExpirePage';
const RideFragment = () => {

  let navigate = useNavigate();

  const [value, setValue] = useState(0);

  const handleChangeIndex = (index, path) => {
    setValue(index);
    navigate(path)
  };


  const tabActiveDesign = {
    // fontSize: '10px',
    backgroundColor: '#F79520',
    color: 'white',
    borderRadius: '7px'
  }


  return (
    <Page>

      <TabLayout>

        <Tab onClick={() => handleChangeIndex(0, "")} style={value === 0 ? tabActiveDesign : {}}>Request</Tab>
        <Tab onClick={() => handleChangeIndex(1, "upcoming")} style={value === 1 ? tabActiveDesign : {}}>Upcoming</Tab>
        <Tab onClick={() => handleChangeIndex(2, "completed")} style={value === 2 ? tabActiveDesign : {}}>Completed</Tab>
        <Tab onClick={() => handleChangeIndex(3, "cancel")} style={value === 3 ? tabActiveDesign : {}}>Cancelled</Tab>
        <Tab onClick={() => handleChangeIndex(4, "expire")} style={value === 4 ? tabActiveDesign : {}}>Expeire</Tab>

      </TabLayout>

      <View>

        <Outlet />

      </View>


    </Page>
  )
}

const Page = styled.div`
    /* background-color: red; */
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
`



const TabLayout = styled.div`
    width: 100%;
    height: 40px;
    padding: 0px 10px;
    display: flex;
    overflow: hidden;
    /* background-color: yellow; */
    font-size: 14px;

    @media (max-width: 400px){
      height: 30px;
      font-size: 12px;
  }


`
const Tab = styled.div`
  height: 100%;
  flex:1;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 1s;
  /* font-size: 14px; */
`

const View = styled.div`
    flex: 1;
    overflow: scroll;
    overflow-x: hidden;

    -ms-overflow-style: none;
    scrollbar-width: none; /* Firefox */


`



export default RideFragment
