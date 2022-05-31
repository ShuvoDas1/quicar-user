import { GET_TUTORIAL_LIST } from "../../network/urls";
import * as actionTypes from "../actionTypes";
import { requestApi } from "./../../network/httpRequest";

export const getAllTutorial = () => async (dispatch, getState) => {
  const { tutorials } = getState().tutorialReducer;

  if (tutorials.length < 1) {
    try {
      dispatch({
        type: actionTypes.TUTORIAL_LIST_REQUEST_SEND,
      });

      const {
        data: { status, error, data },
      } = await requestApi().request(GET_TUTORIAL_LIST);

      console.log({ data });

      if (status) {
        dispatch({
          type: actionTypes.TUTORIAL_LIST_REQUEST_SUCCESS,
          payload: data.tutorials,
        });
      } else {
        dispatch({
          type: actionTypes.TUTORIAL_LIST_REQUEST_FAIL,
          payload: error,
        });
      }
    } catch (error) {
      dispatch({
        type: actionTypes.TUTORIAL_LIST_REQUEST_FAIL,
        payload: error.message,
      });
    }
  }
};
