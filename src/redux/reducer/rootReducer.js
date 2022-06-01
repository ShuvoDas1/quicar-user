import { combineReducers } from 'redux';
import { CURRENT_PATH, SIDEBAR_SHOW, SIDEBAR_VISIBLE } from '../accountType';
import { SIDEBAR_HIDE, SIDEBAR_GONE } from './../accountType';
import adminReducer from './adminReducer';
import rentalRequestReducer from './carRentalReducer';
import carRentalSummaryReducer from './carRentalSummaryReducer';
import userInfo from './userInfoReducer';
import userListReducer from './userListReducer';
import carTypesReducer from './carTypesReducer';
import usereducer from '../user/userReducer';
import homeReducer from '../home/homeReducer';
import rideReducer from '../ride/rideReducer';
import rideBiddingsReducer from '../rideBidding/rideBiddingReducer';
import socketReducer from '../socket/socketReducer';
import notificationReducer from "../notification/notificationReducer";
import tutorialReducer from "../tutorial/tutorialReducer";
import policyReducer from "../policy/policyReducer";

const sidebarShowReducer = (state = true, { type }) => {
    switch (type) {
        case SIDEBAR_VISIBLE:
            return true
        case SIDEBAR_GONE:
            return false
        default:
            return state
    }
}

const menuToggleReducer = (state = true, { type }) => {
    switch (type) {
        case SIDEBAR_SHOW:
            return true
        case SIDEBAR_HIDE:
            return false
        default:
            return state
    }
}


const currentPathReducer = (state = sessionStorage.getItem(CURRENT_PATH), { type,path }) => {
    if(type===CURRENT_PATH){
        return path
    }else{
        return state;
    }
}




const rootReducer = combineReducers({
    sidebar:sidebarShowReducer,
    menuToggle:menuToggleReducer,
    currentPath:currentPathReducer,
    userInfo:userInfo,
    rentalRequest:rentalRequestReducer,
    carTypes:carTypesReducer,
    usereducer,
    homeReducer,
    rideReducer:rideReducer,
    rideBiddingsReducer:rideBiddingsReducer,
    socketReducer:socketReducer,
    notificationReducer,
    tutorialReducer,
    policyReducer
})

export default rootReducer