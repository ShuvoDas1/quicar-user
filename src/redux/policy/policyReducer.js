import * as actionTypes from "../actionTypes";

const init = {
  loading: false,
  error: null,
  policy: null,
};

const policyReducer = (state = init, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.POLICY_REQUEST_SEND:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.POLICY_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        policy: payload,
      };

    case actionTypes.POLICY_REQUEST_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export default policyReducer;
