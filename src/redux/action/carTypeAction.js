import {
    CAR_TYPE_REQUEST_SEND,
    CAR_TYPE_REQUEST_SUCCESS,
    CAR_TYPE_REQUEST_FAIL,
} from "../actionTypes";

import { GET_CAR_TYPE } from "../../network/urls";
import { requestApi } from '../../network/httpRequest';

export const getCarTypeList = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: CAR_TYPE_REQUEST_SEND,
        });

        
        const request = requestApi()
        const { data } = await request(GET_CAR_TYPE);


        if (data.status) {
            dispatch({
                type: CAR_TYPE_REQUEST_SUCCESS,
                payload: data.data.cartypes,
            });
        } else {
            dispatch({
                type: CAR_TYPE_REQUEST_FAIL,
                payload: data.error,
            });
        }


    } catch (e) {
        console.log(e);
        dispatch({
            type: CAR_TYPE_REQUEST_FAIL,
            payload: e.message,
        });
    }
};