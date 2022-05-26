import {
    SELECT_CAR_TYPE,
    SELECT_CAR_RENTAL_ITEM,
    CLEAR_CAR_RENTAL_REQUEST_DATA_START
} from '../actionTypes';
import { clearAllStroageRentalData } from '../../utils/utils';



const initialState = {
    selectedCarType: JSON.parse(localStorage.getItem("selectedCarType")) ?? null,
    pickUpLocation: JSON.parse(localStorage.getItem("pickUpLocation")) ?? {
        address: "",
        latitute: null,
        longitute: null,
        locality: null,
        country: null,
        countryCode:null,
        placeId: null,
    },
    dropOffLocation: JSON.parse(localStorage.getItem("dropOffLocation")) ?? {
        address: "",
        latitute: null,
        longitute: null,
        locality: null,
        country: null,
        countryCode:null,
        placeId: null,
    },
    takeTime: null,
    distance: null,
    tripType: localStorage.getItem("tripType") ? parseInt(localStorage.getItem("tripType")) : 0,
    pickUpDate: localStorage.getItem("pickUpDate") ?? null,
    returnDate: localStorage.getItem("returnDate") ?? null,
    extraNote: localStorage.getItem("extraNote") ?? "",
    loading: false,
    error: null,
};


const rentalRequestReducer = (state = initialState, action) => {

    const { type, payload } = action

    switch (type) {
        case SELECT_CAR_TYPE:


            localStorage.setItem("selectedCarType", JSON.stringify(payload))


            return {
                ...state,
                selectedCarType: payload,
                error: null
            };

        case SELECT_CAR_RENTAL_ITEM:
            return {
                ...state,
                ...payload
            };
        case CLEAR_CAR_RENTAL_REQUEST_DATA_START:
            clearAllStroageRentalData();
            return {
                ...state,
                selectedCarType: JSON.parse(localStorage.getItem("selectedCarType")) ?? null,
                pickUpLocation:{
                    address: "",
                    latitute: null,
                    longitute: null,
                    locality: null,
                    country: null,
                    countryCode: null,
                    placeId: null,
                },
                dropOffLocation:{
                    address: "",
                    latitute: null,
                    longitute: null,
                    locality: null,
                    country: null,
                    placeId: null,
                },
                takeTime: null,
                distance: null,
                tripType:  0,
                pickUpDate: null,
                returnDate:  null,
                extraNote: "",
                loading: false,
                error: null,
            };

        default:
            return state;
    }
}


export default rentalRequestReducer;