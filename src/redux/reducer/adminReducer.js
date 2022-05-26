import {GET_ADMIN_INFO_REQUEST, GET_ADMIN_INFO_REQUEST_FAIL, GET_ADMIN_INFO_REQUEST_SUCCESS } from "../accountType";



const initialState = {
    accessToken: localStorage.getItem('accessToken')? localStorage.getItem('accessToken'):null,
    admin: localStorage.getItem('admin')? JSON.parse(localStorage.getItem('admin')):null,
    loading: false,
    error:"",
  };
  

const adminReducer = (state = initialState, action) => {

    const { type, payload } = action

    switch (type) {
        case GET_ADMIN_INFO_REQUEST:
            return {
                ...state,
                loading: true
            };
        case GET_ADMIN_INFO_REQUEST_SUCCESS:
            const { admin, accessToken } = payload;

            localStorage.setItem("accessToken",accessToken)
            localStorage.setItem("admin",JSON.stringify(admin))

            return {
                ...state,
                loading: false,
                admin: admin,
                accessToken: accessToken,
                error:null
            };

        case GET_ADMIN_INFO_REQUEST_FAIL:
            return {
                ...state,
                loading: false,
                error:payload
            };

        default:
            return state;
    }
}


export default adminReducer;