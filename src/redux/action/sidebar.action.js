import { SIDEBAR_HIDE, SIDEBAR_SHOW, SIDEBAR_VISIBLE } from "../accountType"
import { SIDEBAR_GONE } from './../accountType';

export const menuToggle = () => (dispatch, getState) => {
    const value = getState().menuToggle
    console.log(value);
    if (value) {
        dispatch({
            type: SIDEBAR_HIDE,
        })
    } else {
        dispatch({
            type: SIDEBAR_SHOW,
        })
    }
}

export const sidebarVisible = () => (dispatch, getState) => {
    // const value = getState().sidebar
    dispatch({
        type: SIDEBAR_VISIBLE,
    })
}


export const sidebarGone = () => (dispatch, getState) => {
    // const value = getState().sidebar
    dispatch({
        type: SIDEBAR_GONE,
    })
}