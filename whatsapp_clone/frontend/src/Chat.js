import React from 'react';
import { IconButton, Avatar } from '@mui/material';
import { SearchOutlined, AttachFile, InsertEmoticon } from '@mui/icons-material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MicIcon from '@mui/icons-material/Mic';
import instance from './axios.js';
import './chat.css';


function Chat({ messages }) {


    const [input, setInput] = React.useState('');

    //async it is important to use await
    const sendMessage = async (e) => {

        e.preventDefault();

        await instance.post('/messages/new', {
           message: input,
           name: 'nerd',
           timestamp: 'now',
           received: true
        })

        setInput('');

    }

    return (
        <div className='chat'>
            <div className='chat-header'>
                <Avatar />

                <div className='chat-header-info'>
                    <h3>Room name</h3>
                    <p>Last seen at...</p>
                </div>

                <div className='chat-header-right'>
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            <div className='chat-body'>
                {messages.map((message) => (
                    
                    <p className={`chat-message ${message.received && "chat-reciever"}`}>
                
                    <span className="chat-name">
                        {message.name}
                    </span>

                    {message.message}

                    <span className="chat-timestamp">
                        {message.timestamp}
                    </span>
                
                </p>
                    
                ))}
                
            </div>

            <div className='chat-footer'>
                <InsertEmoticon />
                <form>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder='Type a message'
                        type='text'
                    />
                    <button
                        onClick={sendMessage}
                        type='submit'
                    >
                        Send a message  
                    </button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat
