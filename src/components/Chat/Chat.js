import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";

import TextContainer from '../TextContainer/TextContainer';
import Messages from '../Messages/Messages';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';

import './Chat.css';

const ENDPOINT = 'http://192.168.0.170:5000';

let socket;

const Chat = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  // useEffect(() => {
  //   // const { name, room } = queryString.parse(location.search);
  //   // const { name, room } = queryString.parse(location.search);
  //   let name = "user " + Math.random()
  //   let room = "red"

  //   socket = io(ENDPOINT);

  //   setRoom(room);
  //   setName(name)


  //   socket.emit('join', { name, room });
  //   socket.emit('online_on', { token: localStorage.getItem('accessToken'), type: "user", platform: "web" });


  //   // socket.emit('join', { name, room }, (error) => {
  //   //   if(error) {
  //   //     alert(error);
  //   //   }
  //   // });
  // }, [ENDPOINT]);

  // useEffect(() => {
  //   socket.on('message', (message) => {
  //     console.log("message received" + message)
  //     setMessages(messages => [...messages, message]);
  //   });

  //   socket.on("roomData", ({ users }) => {
  //     setUsers(users);
  //   });
  // }, []);

  const sendMessage = (event) => {

    console.log(message);
    event.preventDefault();

    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
      <TextContainer users={users} />
    </div>
  );
}

export default Chat;
