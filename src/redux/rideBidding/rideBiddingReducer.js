
import * as actionTypes from '../actionTypes';


const initialState = {
    loading: false,
    biddings: [],
    error: null
}


const rideBiddingsReducer = (state = initialState, action) => {

    const { type, payload } = action

    switch (type) {
        case actionTypes.RIDE_BIDDING_LIST_REQUEST_SEND:
            return {
                ...state,
                loading: true,
                error: null
            };
        case actionTypes.RIDE_BIDDING_LIST_REQUEST_SUCCESS:

            return {
                ...state,
                loading: false,
                biddings: payload,
                error: null,
            };


        case actionTypes.RIDE_BIDDING_LIST_REQUEST_FAIL:
            return {
                ...state,
                loading: false,
                error: payload
            };
        default:
            return state;
    }

}


export default rideBiddingsReducer;