import { GET_NOTIFICATION_BADGE, GET_NOTIFICATION_LIST } from '../../network/urls';
import * as actionTypes from '../actionTypes';
import { requestApi } from './../../network/httpRequest';


export const getAllNotifications = () => async (dispatch, getState) => {

    const {notifications} = getState().notificationReducer;

    if(notifications.length < 1){
        try {
            dispatch({
                type: actionTypes.NOTIFICATION_LIST_REQUEST_SEND
            })
    
            const {data} = await requestApi().request(GET_NOTIFICATION_LIST)
    
            console.log({data})
    
            if (data.status) {
                dispatch({
                    type: actionTypes.NOTIFICATION_LIST_REQUEST_SUCCESS,
                    payload:  data.data,
                    
                })
            }else{
                dispatch({
                    type: actionTypes.NOTIFICATION_LIST_REQUEST_FAIL,
                    payload: data.error,
                })
            }
    
        } catch (error) {
            dispatch({
                type: actionTypes.NOTIFICATION_LIST_REQUEST_FAIL,
                payload: error.message,
            })
        }
    }
}

export const getNotificationBadge = () => async (dispatch, getState) => {

    try {
        dispatch({
            type: actionTypes.NOTIFICATION_BADGE_REQUEST_SEND
        })

        const {data} = await requestApi().request(GET_NOTIFICATION_BADGE)

        console.log({data})

        if (data.status) {
            dispatch({
                type: actionTypes.NOTIFICATION_BADGE_REQUEST_SUCCESS,
                payload:  data.data.badge,
                
            })
        }else{
            dispatch({
                type: actionTypes.NOTIFICATION_BADGE_REQUEST_FAIL,
                payload: data.error,
            })
        }

    } catch (error) {
        dispatch({
            type: actionTypes.NOTIFICATION_LIST_REQUEST_FAIL,
            payload: error.message,
        })
    }

}