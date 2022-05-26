import './App.scss';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet
} from "react-router-dom";
import LoginPage from './pages/auth/LoginPage';
import MainPage from './pages/main/MainPage';
import Notification from './pages/notification/Notification';
import NotificationDetails from './pages/notification/NotificationDetails';
import HomeFragment from './pages/main/fragment/HomeFragment';
import RideFragment from './pages/main/fragment/RideFragment';
import MoreFragment from './pages/main/fragment/MoreFragment';
import RequestPage from './pages/ridehistory/RequestPage';
import UpComingPage from './pages/ridehistory/UpComingPage';
import CompletedPage from './pages/ridehistory/CompletedPage';
import CancelPage from './pages/ridehistory/CancelPage';
import ExpirePage from './pages/ridehistory/ExpirePage';
import CarTypeList from './pages/ride/CarTypeList';
import InputAddress from './pages/ride/InputAddress';
import OverViewRideRequest from './pages/ride/OverViewRideRequest';
import Distances from './pages/Directions';
import MapDemo from './pages/MapDemo';
import NewMaps from './components/map/NewMaps';
import MyMap from './components/map/MyMap';
import VerifyOtpPage from './pages/auth/VerifyOtpPage';
import RegistrationPage from './pages/auth/RegistrationPage';
import BannerDetails from './pages/banner/BannerDetails';
import SuccessPage from './pages/ride/SuccessPage';
import RideHistoryPage from './pages/ridehistory/RideHistoryPage';
import RideBiddingPage from './pages/ridehistory/RideBiddingPage';
import RideDetailsPage from './pages/ridehistory/RideDetailsPage';
import Chat from './components/Chat/Chat';
import Join from './components/Join/Join';

import io from "socket.io-client";
import { SOCKET_CONNECTION } from './network/urls';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { socketConnect } from './redux/socket/socketAction';

function App() {

  const dispatch = useDispatch()
  // const {socket} = useSelector(state => state.socketReducer)
  useEffect(() => {
    dispatch(socketConnect())
  }, []);


  // useEffect(() => {
  //   if(socket){
  //     socket.emit("online", {
  //       token: "b",
  //       type: "user",
  //       platform: "web",
  //     });
  //   }
  // },[socket])


  return (

    <div>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Navigate replace to={`/main/${localStorage.getItem('mainPage') ? localStorage.getItem('mainPage') : 'home'}`} />} />
          <Route path="/main/*" element={<MainPage />}>
            <Route index path="home" element={<HomeFragment />} />
            {/* <Route path="ride/*" element={<RideFragment />} >
              <Route index path="" element={<RequestPage />} />
              <Route path="upcoming" element={<UpComingPage />} />
              <Route path="completed" element={<CompletedPage />} />
              <Route path="cancel" element={<CancelPage />} />
              <Route path="expire" element={<ExpirePage />} />
            </Route> */}
            <Route index path="ride/*" element={<RideHistoryPage />} />
            <Route path="more" element={<MoreFragment />} />
          </Route>

          <Route index path="/ride-bidding/*" element={<RideBiddingPage />} />
          <Route index path="/ride-details/*" element={<RideDetailsPage />} />

          <Route path="/car-rental/*" lement={<div><Outlet /></div>} >
            <Route index path="" element={<CarTypeList />} />
            <Route path="input-address" element={<InputAddress />} />
            <Route path="final-check" element={<OverViewRideRequest />} />
            <Route path="ride-success/*" element={<SuccessPage />} />
          </Route>

          <Route path="/notification" element={<Notification />} />
          <Route path="/notification/:id" element={<NotificationDetails />} />
          <Route path="/banner/:id" element={<BannerDetails />} />

          <Route path="/login" element={<LoginPage />} />
          <Route path="/verify-otp/:newUser/:phone" element={<VerifyOtpPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/distances" element={<Distances />} />
          <Route path="/map" element={<NewMaps />} />


          <Route path="/message" element={<Join />} />
          <Route path="/chat/*" element={<Chat />} />

          <Route path="*" element={<Navigate replace to={`/main/home`} />} />


        </Routes>
      </BrowserRouter>

    </div>


    // <Layout />
  );
}

export default App;
