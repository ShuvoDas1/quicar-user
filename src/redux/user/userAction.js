import { USER_LOGIN, USER_LOGOUT, USER_UPDATE_REDUX } from "../actionTypes"

export const log_in = (user, accessToken) => async dispatch => {

    dispatch({
        type: USER_LOGIN,
        payload: { accessToken, user }
    })


}

export const update_user = (user) => async dispatch => {

    dispatch({
        type: USER_UPDATE_REDUX,
        payload: user
    })


}
export const log_out = () => async dispatch => {
    dispatch({
        type: USER_LOGOUT,
    })
}
