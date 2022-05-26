import * as actionTypes from "../actionTypes";
import { requestApi } from '../../network/httpRequest';
import * as api from '../../network/urls'

export const homeAction = () => async (dispatch, getState) => {
    try {

        // const {value} = getState().reducerName

        dispatch({
            type: actionTypes.HOME_DATA_REQUEST_SEND,
        });

        const { data } = await requestApi().request(api.HOME_API, {
            method: 'get'
        });

        console.log(data);

        if (data.status) {
            const {slider:banners,carRentalStatus} = data.data;
            dispatch({
                type: actionTypes.HOME_DATA_REQUEST_SUCCESS,
                payload: {
                    banners: banners,
                    carRentalStatus: carRentalStatus
                },
            });
        } else {
            dispatch({
                type: actionTypes.HOME_DATA_REQUEST_FAIL,
                payload: data.error,
            });
        }



    } catch (e) {
        console.log(e);
        dispatch({
            type: actionTypes.HOME_DATA_REQUEST_FAIL,
            payload: e.message,
        });
    }
};