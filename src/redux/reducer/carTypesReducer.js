
import {
    CAR_TYPE_REQUEST_SEND,
    CAR_TYPE_REQUEST_SUCCESS,
    CAR_TYPE_REQUEST_FAIL
} from '../actionTypes';


const initialState = {
    loading: false,
    carTypes: [],
    error: null
}


const carTypesReducer = (state = initialState, action) => {

    const { type, payload } = action

    switch (type) {
        case CAR_TYPE_REQUEST_SEND:
            return {
                ...state,
                loading: true,
                error: null
            };
        case CAR_TYPE_REQUEST_SUCCESS:

            return {
                ...state,
                loading: false,
                carTypes: payload,
                error: null
            };


        case CAR_TYPE_REQUEST_FAIL:
            return {
                ...state,
                loading: false,
                error: payload
            };

        default:
            return state;
    }

}


export default carTypesReducer;