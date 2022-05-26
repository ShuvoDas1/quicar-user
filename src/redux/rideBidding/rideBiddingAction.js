import { requestApi } from "../../network/httpRequest";
import { GET_BIDDING_LIST } from "../../network/urls";
import * as actionType from "../actionTypes";


export const rideBiddings = (rideId) => async (dispatch, getState) => {
    try {
        
        dispatch({
            type: actionType.RIDE_BIDDING_LIST_REQUEST_SEND
        });

      
        const { data } = await requestApi().request(GET_BIDDING_LIST, {
            params: {
                rideId: rideId,
            }
        });

        if (data.status) {
            dispatch({
                type: actionType.RIDE_BIDDING_LIST_REQUEST_SUCCESS,
                payload: data.data.biddings
            });
        } else {
            dispatch({
                type: actionType.RIDE_BIDDING_LIST_REQUEST_FAIL,
                payload: data.error
            });
        }



    } catch (error) {
        dispatch({
            type: actionType.RIDE_BIDDING_LIST_REQUEST_FAIL,
            payload: error.message
        });
    }
};