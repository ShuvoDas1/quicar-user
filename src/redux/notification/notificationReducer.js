import * as actionTypes from "../actionTypes";

const initialState = {
  loading: false,
  error: null,
  notifications: [],
  status: false,
  badge: 0,
};

const notificationReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.NOTIFICATION_LIST_REQUEST_SEND:
      return {
        ...state,
        loading: true,
        error: null,
        status: false,
      };

    case actionTypes.NOTIFICATION_LIST_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        status: true,
        notifications: payload.notifications,
      };

    case actionTypes.NOTIFICATION_LIST_REQUEST_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

      case actionTypes.NOTIFICATION_BADGE_REQUEST_SEND:
      return {
        ...state,
        loading: true,
        error: null,
        status: false,
      };

    case actionTypes.NOTIFICATION_BADGE_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        badge: payload
        
      };

    case actionTypes.NOTIFICATION_BADGE_REQUEST_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };


    default:
      return state;
  }
};

export default notificationReducer;
