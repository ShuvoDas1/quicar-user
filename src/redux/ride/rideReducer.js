
import * as actionTypes from '../actionTypes';


const initialState = {
    loading: false,
    rides: [],
    paginate: null,
    type: "send",
    nextPage: 1,
    previousPage: 1,
    currentPage: 1,
    hasNextPage: true,
    hasPreviousPage: false,
    paging: [],
    pageSize: 2,
    error: null
}


const rideReducer = (state = initialState, action) => {

    const { type, payload } = action

    switch (type) {
        case actionTypes.RIDE_LIST_REQUEST_SEND:
            return {
                ...state,
                loading: true,
                error: null
            };
        case actionTypes.RIDE_LIST_REQUEST_SUCCESS:

            return {
                ...state,
                loading: false,
                rides: payload.start ? payload.rides :[...state.rides,...payload.rides],
                error: null,
                message: null,
                paginate: payload.paginate,
                paging: payload.paginate.metadata.paging,
                hasNextPage: payload.paginate.metadata.hasNextPage,
                hasPreviousPage: payload.paginate.metadata.hasPreviousPage,
                currentPage: payload.paginate.metadata.page.currentPage,
                nextPage: payload.paginate.metadata.page.nextPage,
                previousPage: payload.paginate.metadata.page.previousPage,
            };


        case actionTypes.RIDE_LIST_REQUEST_FAIL:
            return {
                ...state,
                loading: false,
                error: payload
            };

        case actionTypes.RIDE_LIST_REQUEST_TYPE_CHANGE:
            return {
                ...state,
                loading: false,
                type: payload
            };

        default:
            return state;
    }

}


export default rideReducer;