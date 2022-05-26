import { CAR_RENTAL_REQUEST, CAR_RENTAL_REQUEST_FAIL, CAR_RENTAL_REQUEST_SUCCESS, } from "../accountType";


import { carRentalSummary } from "../../utils/urls";
import {requestApi} from '../../httpRequest';

export const getCarRentalSummeryAction = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: CAR_RENTAL_REQUEST,
    });


    const request = requestApi()
    const {data} = await request(carRentalSummary, {
      method:'get'    
    }).catch(error => console.log(error))


    if(data.tokenError){
      localStorage.removeItem("admin")
      localStorage.removeItem("accessToken")
      return
    }

      dispatch({
        type: CAR_RENTAL_REQUEST_SUCCESS,
        
        payload: {
          summaryCarRental:data.totalCarRentalStatistics,
          currentMonthCarRentalStatistics:data.currentMonthCarRentalStatistics,
          fullYearlyCarRentalStatictics:data.fullYearlyCarRentalStatictics,
          barChatDatasetForYearly:data.barChatDatasetForYearly
        },
      });
    
  } catch (e) {

    console.log(e);
    dispatch({
      type: CAR_RENTAL_REQUEST_FAIL,
      payload: e.message,
    });
  }
};