import HomePage from '../pages/HomePage';
import MorePage from '../pages/MorePage';
import RidePage from '../pages/RidePage';
import RideDetails from '../pages/RideDetails';
export const pages = [

    {
        name: "Home Page",
        page: "/home",
        component: HomePage,
        bottomNavigation: true
    },
    {
        name: "Ride Page",
        page: "/ride",
        component: RidePage,
        bottomNavigation: true
    },
    {
        name: "More Page",
        page: "/more",
        component: MorePage,
        bottomNavigation: true
    },
    {
        name: "Ride details Page",
        page: "/ride-details",
        component: RideDetails,
        bottomNavigation: true
    },

]