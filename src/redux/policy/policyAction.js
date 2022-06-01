import { requestApi } from "../../network/httpRequest";
import { GET_POLICY } from "../../network/urls";
import * as actionTypes from "../actionTypes";

export const getPolicy = (type) => async dispatch => {

    try {
        dispatch({
            type: actionTypes.POLICY_REQUEST_SEND,
        });
        
        const {data: {status, error, data}} = await requestApi().request(GET_POLICY,{
            params: {
                type
            }
        })

        // console.log(data.policies[type])
        if(status){
            dispatch({
                type: actionTypes.POLICY_REQUEST_SUCCESS,
                payload: data.policies[type]

            });
        }else{
            dispatch({
                type: actionTypes.POLICY_REQUEST_FAIL,
                payload: error
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.POLICY_REQUEST_FAIL,
            payload: error.message
        });
    }
}