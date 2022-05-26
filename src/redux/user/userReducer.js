import { GET_USER_INFO_REQUEST, GET_USER_INFO_REQUEST_FAIL, GET_USER_INFO_REQUEST_SUCCESS, USER_UPDATE_REDUX } from "../actionTypes";
import { USER_LOGIN, USER_LOGOUT } from "../actionTypes";



const initialState = {
    accessToken: localStorage.getItem('accessToken') ? localStorage.getItem('accessToken') : null,
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
    loading: false,
    error: "",
};


const usereducer = (state = initialState, action) => {

    const { type, payload } = action

    switch (type) {
        case GET_USER_INFO_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case GET_USER_INFO_REQUEST_SUCCESS:
            const { user, accessToken } = payload;

            localStorage.setItem("user", JSON.stringify(user))

            return {
                ...state,
                loading: false,
                user: user,
                accessToken: accessToken,
                error: null
            };

        case GET_USER_INFO_REQUEST_FAIL:
            return {
                ...state,
                loading: false,
                error: payload
            };



        case USER_LOGIN:

            localStorage.setItem("accessToken", payload.accessToken)
            localStorage.setItem("user", JSON.stringify({ ...payload.user }))
            return {
                ...state,
                accessToken: payload.accessToken,
                user: payload.user
            };

        case USER_UPDATE_REDUX:


            var storeUser = JSON.parse(localStorage.getItem("user"));

            storeUser = {
                ...storeUser,
                ...payload
            }

            localStorage.setItem("user", JSON.stringify(storeUser))

            return {
                ...state,
                user: {
                    ...state.user,
                    ...payload
                }
            };

        case USER_LOGOUT:

            localStorage.removeItem("accessToken")
            return {
                ...state,
                accessToken: null,
                user: null
            };




        default:
            return state;
    }
}


export default usereducer;