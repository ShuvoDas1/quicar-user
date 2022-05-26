import { MESSAGE_REQUEST, MESSAGE_REQUEST_SUCCESS, MESSAGE_REQUEST_FAIL, MESSAGE_REQUEST_REFRESH_SHOW,MESSAGE_REQUEST_SUCCESS_REFRESH  } from "../accountType";


import axios from 'axios';

export const getMessage = (start) => async (dispatch, getState) => {
    try {
        dispatch({
            type: MESSAGE_REQUEST,
        })


        if (start) {

            const list = getState().anonymousMessageList.messageList

            if (list.length > 0) {



                dispatch({
                    type: MESSAGE_REQUEST_REFRESH_SHOW
                })


                dispatch({
                    type: MESSAGE_REQUEST_SUCCESS,
                    payload: {
                        messageList: [],
                        matatags: {
                            hasNextPage: getState().anonymousMessageList.hasNextPage,
                            nextPage: getState().anonymousMessageList.nextPage
                        }
                    },
                })

            } else {
                const { username } = JSON.parse(localStorage.getItem("user"));

                const { data } = await axios({
                    method: 'post',
                    url: '/api/v1/anonymous/getMessage',
                    data: {
                        username: username,
                        page: getState().anonymousMessageList.nextPage
                    }
                }).catch(error => console.log(error))




                const info = data.data

                const matatags = info.matatags


                dispatch({
                    type: MESSAGE_REQUEST_SUCCESS,
                    payload: {
                        messageList: info.messageList,
                        matatags: {
                            hasNextPage: matatags.hasNextPage,
                            nextPage: matatags.nextPage.page
                        }
                    },
                })
            }

        } else {

            const list = getState().anonymousMessageList.messageList

            const { username } = JSON.parse(localStorage.getItem("user"));

            const { data } = await axios({
                method: 'post',
                url: '/api/v1/anonymous/getMessage',
                data: {
                    username: username,
                    page: getState().anonymousMessageList.nextPage
                }
            }).catch(error => console.log(error))

            const info = data.data

            const matatags = info.matatags


            dispatch({
                type: MESSAGE_REQUEST_SUCCESS,
                payload: {
                    messageList: [...list,...info.messageList],
                    matatags: {
                        hasNextPage: matatags.hasNextPage,
                        nextPage: matatags.nextPage.page
                    }
                },
            })

        }


    } catch (error) {
        console.log(error.message)
        dispatch({
            type: MESSAGE_REQUEST_FAIL,
            // payload: data.message,
        })
    }
}

export const getMessageReFresh = (start) => async (dispatch, getState) => {
    try {
        dispatch({
            type: MESSAGE_REQUEST,
        })


        const { username } = JSON.parse(localStorage.getItem("user"));

        const { data } = await axios({
            method: 'post',
            url: '/api/v1/anonymous/getMessage',
            data: {
                username: username,
                page: 1
            }
        }).catch(error => console.log(error))

        const info = data.data

        const matatags = info.matatags


        dispatch({
            type: MESSAGE_REQUEST_SUCCESS_REFRESH,
            payload: {
                messageList: info.messageList,
                matatags: {
                    hasNextPage: matatags.hasNextPage,
                    nextPage: matatags.nextPage.page
                }
            },
        })




    } catch (error) {
        console.log(error.message)
        dispatch({
            type: MESSAGE_REQUEST_FAIL,
            // payload: data.message,
        })
    }
}
