import { GET_ADMIN_INFO_REQUEST, GET_ADMIN_INFO_REQUEST_FAIL, GET_ADMIN_INFO_REQUEST_SUCCESS } from "../accountType";

import axios from 'axios';
import { login } from "../../utils/urls";


export const adminLogin = (loginInfo) => async (dispatch, getState) => {
    try {
        dispatch({
            type: GET_ADMIN_INFO_REQUEST,
        })

        
        

        const { data } = await axios({
            method: 'post',
            url: login,
            data: {
                ...loginInfo
            }
        }).catch(error => console.log(error))

        console.log("data",data);

        if (data.status) {
            dispatch({
                type: GET_ADMIN_INFO_REQUEST_SUCCESS,
                payload: {
                    admin: data.admin,
                    accessToken: data.accessToken
                },
            })
        } else {
            dispatch({
                type: GET_ADMIN_INFO_REQUEST_FAIL,
                payload: data.message,
            })

        }
 







    } catch (error) {
        dispatch({
            type: GET_ADMIN_INFO_REQUEST_FAIL,
            payload: error.message,
        })
    }
}

