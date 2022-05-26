import { requestApi } from "../../network/httpRequest";
import { GET_RIDE_LIST } from "../../network/urls";
import * as actionType from "../actionTypes";


export const getRideList = (start) => async (dispatch, getState) => {
    try {
        const { rides, hasNextPage, nextPage, type, pageSize } = getState().rideReducer;


        dispatch({
            type: actionType.RIDE_LIST_REQUEST_SEND
        });

        const { data } = await requestApi().request(GET_RIDE_LIST, {
            params: {
                type: type,
                page: start ? 1 : nextPage,
                pageSize: pageSize
            }
        });

        if (data.status) {
            dispatch({
                type: actionType.RIDE_LIST_REQUEST_SUCCESS,
                payload: {
                    start:start,
                    rides:data.data.rides,
                    paginate:data.data.paginate
                }
            });
        } else {
            dispatch({
                type: actionType.RIDE_LIST_REQUEST_FAIL,
                payload: data.error
            });
        }



    } catch (error) {
        dispatch({
            type: actionType.RIDE_LIST_REQUEST_FAIL,
            payload: error.message
        });
    }
};

export const changeGetRideListType = (type) => async (dispatch, getState) => {
    dispatch({
        type: actionType.RIDE_LIST_REQUEST_TYPE_CHANGE,
        payload: type
    });

}