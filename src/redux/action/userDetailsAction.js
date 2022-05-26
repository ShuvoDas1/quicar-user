import { USER_INFO_REQUEST, USER_INFO_REQUEST_FAIL, USER_INFO_REQUEST_SUCCESS, } from "../accountType";


import { getUserInfo } from "../../utils/urls";
import {requestApi} from '../../httpRequest';

export const getUserDetail = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_INFO_REQUEST,
    });


    const request = requestApi()
    const {data} = await request(getUserInfo, {
      method:'get',
      params: {
        id: id
      }
    }).catch(error => console.log(error))


    if(data.tokenError){
      localStorage.removeItem("admin")
      localStorage.removeItem("accessToken")
      return
    }

      dispatch({
        type: USER_INFO_REQUEST_SUCCESS,
        
        payload: {
          user:data.user,
          carRental:data.carRental
        },
      });
    
  } catch (e) {

    console.log(e);
    dispatch({
      type: USER_INFO_REQUEST_FAIL,
      payload: e.message,
    });
  }
};