import React, { useEffect } from 'react'
import ImageSlider from '../../../components/imageSlider/ImageSlider';
import HomePageCategory from '../../../components/homepaveCategory/HomePageCategory';
import HomeOfferShow from '../../../components/homeOfferShow/HomeOfferShow';
import GlobalWrapper from '../../../components/GlobalWrapper';
import { useDispatch } from 'react-redux';
import { homeAction } from '../../../redux/home/homeAction';
import { clearAllCarRentalData } from '../../../redux/action/carRentalAction';

const HomeFragment = () => {

   const dispatch =  useDispatch()

    useEffect(() => {
        dispatch(homeAction())
    }, []);


    return (
        <GlobalWrapper>
            <ImageSlider/>
            <HomePageCategory/>
            <HomeOfferShow/>
        </GlobalWrapper>
    )
}

export default HomeFragment
