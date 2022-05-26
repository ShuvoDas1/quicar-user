import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/header/header'
import MaterialBottomNavigation from '../../components/navigation/MaterialBottomNavigation'
import './mainopage.scss';
import GlobalWrapper from '../../components/GlobalWrapper';
import { useDispatch } from 'react-redux';
import { clearAllCarRentalData } from '../../redux/action/carRentalAction';


const MainPage = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(clearAllCarRentalData())
    }, [])

    return (

        <GlobalWrapper>
            <div className="main__page">
                <div className="app__wrapper">
                    <Header />
                    <div className="content">
                        <Outlet />
                    </div>
                    <MaterialBottomNavigation />
                </div>
            </div>
        </GlobalWrapper>

    )
}

export default MainPage
