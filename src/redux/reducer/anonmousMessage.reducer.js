import { MESSAGE_REQUEST, MESSAGE_REQUEST_SUCCESS, MESSAGE_REQUEST_FAIL, MESSAGE_REQUEST_REFRESH_SHOW ,MESSAGE_REQUEST_SUCCESS_REFRESH} from "../accountType";


const initialState = {
    messageList: [],
    loading: false,
    nextPage: 1,
    hasNextPage: true,
    refreshShow: false
}




const userReducer = (state = initialState, action) => {

    const { type, payload } = action

    switch (type) {
        case MESSAGE_REQUEST:
            return {
                ...state,
                loading: true
            };
        case MESSAGE_REQUEST_SUCCESS:
            const { messageList, matatags } = payload;

            // console.log(messageList);



            // console.log(nextPage);
            return {
                ...state,
                loading: false,
                messageList: [...state.messageList, ...messageList],
                hasNextPage: matatags.hasNextPage,
                nextPage: matatags.nextPage
            };


        case MESSAGE_REQUEST_SUCCESS_REFRESH:



            return {
                ...state,
                loading: false,
                messageList: payload.messageList,
                hasNextPage: payload.matatags.hasNextPage,
                nextPage: payload.matatags.nextPage,
                refreshShow:false
            };




        case MESSAGE_REQUEST_FAIL:
            return {
                ...state,
                loading: false
            };

        case MESSAGE_REQUEST_REFRESH_SHOW:
            return {
                ...state,
                refreshShow: true
            };



        default:
            return state;
    }

}


export default userReducer;