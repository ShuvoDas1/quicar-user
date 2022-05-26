import * as TYPES from "../actionTypes";



const initialState = {
    socket: null,
    message: ""
};


const socketReducer = (state = initialState, action) => {

    const { type, payload } = action

    switch (type) {
        case TYPES.SOCKET_REQUEST_SEND:

            return {
                ...state,
                message: "try to connect"
            };
        case TYPES.SOCKET_REQUEST_SUCCESS:
            return {
                ...state,
                socket: payload
            };


        default:
            return state;
    }
}


export default socketReducer;