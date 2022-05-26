import * as actionTypes from '../actionTypes'

const initialState = {
    loading: false,
    error: null,
    banners: localStorage.getItem("banners") ? JSON.parse(localStorage.getItem("banners")) : [],
    carRentalStatus: localStorage.getItem("carRentalStatus") ? localStorage.getItem("carRentalStatus") : "close",
}


const homeReducer = (state = initialState, action) => {

    const { type, payload } = action

    switch (type) {
        case actionTypes.HOME_DATA_REQUEST_SEND:
            return {
                ...state,
                loading: true
            };
        case actionTypes.HOME_DATA_REQUEST_SUCCESS:

            localStorage.setItem("banners",JSON.stringify(payload.banners ? payload.banners : []))
            localStorage.setItem("carRentalStatus",payload.carRentalStatus ? payload.carRentalStatus  : "close")

            return {
                ...state,
                loading: false,
                error: null,
                banners:payload.banners,
                carRentalStatus:payload.carRentalStatus ? payload.carRentalStatus : "close"
            };

        case actionTypes.HOME_DATA_REQUEST_FAIL:
            return {
                ...state,
                loading: false,
                error: payload
            };

        default:
            return state;
    }

}


export default homeReducer;