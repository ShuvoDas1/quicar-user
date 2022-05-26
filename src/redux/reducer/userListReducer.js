import {
    USER_LIST_REQUEST,
    USER_LIST_REQUEST_FAIL,
    USER_LIST_REQUEST_SUCCESS,
  } from "../accountType";

const initialState = {
    userList: [],
    loading: false,
    nextPage: 1,
    hasNextPage: true,
    totalUser:0,
    total:0,
    limit:100
}


const userListReducer = (state = initialState, action) => {

    const { type, payload } = action

    switch (type) {
        case USER_LIST_REQUEST:
            return {
                ...state,
                loading: true
            };
        case USER_LIST_REQUEST_SUCCESS:
            const { userList, nextPage , hasNextPage,totalUser,total,resetAll } = payload;

            console.log("reducer",userList);

            return {
                ...state,
                loading: false,
                userList: !resetAll?[...state.userList, ...userList]:userList,
                hasNextPage: hasNextPage,
                nextPage: nextPage,
                totalUser:totalUser,
                total:total
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


export default userListReducer;