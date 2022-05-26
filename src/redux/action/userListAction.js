import {
  USER_LIST_REQUEST,
  USER_LIST_REQUEST_FAIL,
  USER_LIST_REQUEST_SUCCESS,
} from "../accountType";

import { getUserList } from "../../utils/urls";
import {requestApi} from '../../httpRequest';

export const getuserList = (searchOptionFilter,search) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_LIST_REQUEST,
    });

    let page = getState().userList.nextPage;

    if(search==="search"){
      page = 1;
    }
    
    let limit = getState().userList.limit;

    const request = requestApi()
    const {data} = await request(getUserList, {
      params: {
        page: page,
        limitData: limit,
        searchOptionFilter
      }
    }).catch(error => console.log(error))


    if(data.tokenError){
      localStorage.removeItem("admin")
      localStorage.removeItem("accessToken")
      return
    }


    if (!data.status) {
      dispatch({
        type: USER_LIST_REQUEST_FAIL,
        payload: data.message,
      });
    } else {

      dispatch({
        type: USER_LIST_REQUEST_SUCCESS,
        
        payload: {
          resetAll:search==="search"?true:false,
          userList: data.userList,
          nextPage: data.nextPage,
          hasNextPage: data.hasNextPage,
          totalUser:data.totalUser,
          total:data.total
        },
      });
    }
  } catch (e) {

    console.log(e);
    dispatch({
      type: USER_LIST_REQUEST_FAIL,
      payload: e.message,
    });
  }
};