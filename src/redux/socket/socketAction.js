import { SOCKET_CONNECTION } from "../../network/urls";
import * as TYPES from "../actionTypes"
import io from "socket.io-client";

export const socketConnect = () => async (dispatch, getState) => {


    const oldSocket = getState().socketReducer.socket


    if (!oldSocket) {

        const socket = io(SOCKET_CONNECTION, {
            transports: ["websocket"],
            query: {
                authorization: "authorization",
                token: localStorage.getItem('accessToken'),
                type: "user",
                platform: "web"
            },
        });

        socket.on("connect", () => {
            console.log("socket connected");
            dispatch({
                type: TYPES.SOCKET_REQUEST_SUCCESS,
                payload: socket
            })

            socket.emit("online", {
                token: "b",
                type: "user",
                platform: "web",
            });
            

        });




    }



}