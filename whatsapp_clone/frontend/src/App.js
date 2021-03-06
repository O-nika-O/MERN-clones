import React, { useEffect, useState } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Pusher from 'pusher-js';
import instance from './axios.js';

function App() {

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    instance.get('/messages/sync')
    .then(response => {
      setMessages(response.data);
    })
  }, [])

  useEffect(() => {
    const pusher = new Pusher('', {
      cluster: 'us3'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      setMessages([...messages, newMessage]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };

  }, [messages])

  console.log(messages);

  
  return (
    <div className="app">
      <div className='app-body'>

      <Sidebar />
      <Chat messages={messages} />
      </div>
    </div>
  );
}

export default App;
