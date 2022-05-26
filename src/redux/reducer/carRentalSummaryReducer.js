import { CAR_RENTAL_REQUEST, CAR_RENTAL_REQUEST_FAIL, CAR_RENTAL_REQUEST_SUCCESS, } from "../accountType";

const initialState = {
    loading:false,
    error:null,
    summaryCarRental:null,
    currentMonthCarRentalStatistics:null,
    fullYearlyCarRentalStatictics:[],
    barChatDatasetForYearly:{
        completed:[0,0],
        unAccepted:[0,0],
        canceled:[0,0]
    }
}


const carRentalSummaryReducer = (state = initialState, action) => {

    const { type, payload } = action

    switch (type) {
        case CAR_RENTAL_REQUEST:
            return {
                ...state,
                loading: true
            };
        case CAR_RENTAL_REQUEST_SUCCESS:
            const { summaryCarRental,currentMonthCarRentalStatistics,fullYearlyCarRentalStatictics,barChatDatasetForYearly } = payload;

            return {
                ...state,
                loading: false,
                summaryCarRental:summaryCarRental,
                currentMonthCarRentalStatistics:currentMonthCarRentalStatistics,
                fullYearlyCarRentalStatictics:fullYearlyCarRentalStatictics,
                barChatDatasetForYearly:barChatDatasetForYearly
            };


        case CAR_RENTAL_REQUEST_FAIL:
            return {
                ...state,
                loading: false,
                error:payload
            };

        default:
            return state;
    }

}


export default carRentalSummaryReducer;