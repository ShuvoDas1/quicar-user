import { USER_INFO_REQUEST, USER_INFO_REQUEST_FAIL, USER_INFO_REQUEST_SUCCESS, } from "../accountType";

const initialState = {
    user:null,
    loading:false,
    error:null,
    carRental:null
}


const userInfo = (state = initialState, action) => {

    const { type, payload } = action

    switch (type) {
        case USER_INFO_REQUEST:
            return {
                ...state,
                loading: true
            };
        case USER_INFO_REQUEST_SUCCESS:
            const { user,carRental } = payload;

            return {
                ...state,
                loading: false,
                user:user,
                carRental:carRental
            };


        case USER_INFO_REQUEST_FAIL:
            return {
                ...state,
                loading: false,
                error:payload
            };

        default:
            return state;
    }

}


export default userInfo;