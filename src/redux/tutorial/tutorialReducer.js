import * as actionTypes from "../actionTypes";

const initialState = {
  tutorials: [],
  loading: false,
  error: null,
};
const tutorialReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.TUTORIAL_LIST_REQUEST_SEND:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.TUTORIAL_LIST_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        tutorials: payload,
      };
    case actionTypes.TUTORIAL_LIST_REQUEST_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export default tutorialReducer;
