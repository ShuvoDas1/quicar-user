import {
    SELECT_CAR_RENTAL_ITEM,
    SELECT_CAR_TYPE,
    SELECT_CAR_TYPE_FAIL,
    CLEAR_CAR_RENTAL_REQUEST_DATA_START
} from '../actionTypes';

export const setCarType = (carType) => async (dispatch, getState) => {
    try {
        dispatch({
            type: SELECT_CAR_TYPE,
            payload: carType
        })


    } catch (error) {
        dispatch({
            type: SELECT_CAR_TYPE_FAIL,
            error: error.message,
        })
    }
}

export const setRentalItem = (item) => async (dispatch, getState) => {
    try {
        dispatch({
            type: SELECT_CAR_RENTAL_ITEM,
            payload: item,
        })


    } catch (error) {
        dispatch({
            type: SELECT_CAR_TYPE_FAIL,
            error: error.message,
        })
    }
}

export const clearAllCarRentalData = () => async dispatch => {
    
        dispatch({
            type: CLEAR_CAR_RENTAL_REQUEST_DATA_START
        })
}