import {RIDE_LIST_REQUEST, RIDE_LIST_REQUEST_SUCCESS_PENDING, RIDE_LIST_REQUEST_SUCCESS_WAITING_FOR_BID,RIDE_LIST_REQUEST_SUCCESS_UPCOMING, RIDE_LIST_REQUEST_SUCCESS_WAITING_FOR_DRIVER,RIDE_LIST_REQUEST_SUCCESS_UN_ACCEPTED, RIDE_LIST_REQUEST_SUCCESS_COMPLETED, RIDE_LIST_REQUEST_SUCCESS_CANCELED,RIDE_LIST_REQUEST_FAIL} from "../accountType";

const initialState = {
    loading: false,
    error: null,
    nextPage: 1,
    hasNextPage: true,
    totalHave: 0,
    total: 0,
    limit: 100,
    pendingList: [],
    waitingForBidList: [],
    upcomingList: [],
    waitingForDriverList: [],
    unAcceptedList: [],
    completedList: [],
    canceledList: [],
}



const rideListReducer = (state = initialState, action) => {

    const { type, payload } = action

    switch (type) {
        case USER_LIST_REQUEST:
            return {
                ...state,
                loading: true
            };
        case USER_LIST_REQUEST_SUCCESS:
            const { userList, nextPage, hasNextPage, totalUser, total, resetAll } = payload;

            console.log("reducer", userList);

            return {
                ...state,
                loading: false,
                userList: !resetAll ? [...state.userList, ...userList] : userList,
                hasNextPage: hasNextPage,
                nextPage: nextPage,
                totalUser: totalUser,
                total: total
            };


        case USER_LIST_REQUEST_FAIL:
            return {
                ...state,
                loading: false
            };

        default:
            return state;
    }

}


export default rideListReducer;