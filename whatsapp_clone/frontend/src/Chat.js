import React from 'react';
import { IconButton, Avatar } from '@mui/material';
import { SearchOutlined, AttachFile, InsertEmoticon } from '@mui/icons-material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MicIcon from '@mui/icons-material/Mic';
import './chat.css';


function Chat({input, sendMessage}) {


    const setInput = (e) => {

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

                <p className='chat-message'>

                    <span className="chat-name">
                        Arcane Master
                    </span>

                    iam a amfo messange

                    <span className="chat-timestamp">
                        {new Date().toUTCString()}  
                    </span>
                
                </p>

                <p className='chat-message chat-reciever'>
                
                    <span className="chat-name">
                        Arcane Master
                    </span>

                    iam a amfo messange

                    <span className="chat-timestamp">
                        {new Date().toUTCString()}  
                    </span>
                
                </p>

                <p className='chat-message'>
                
                    <span className="chat-name">
                        Arcane Master
                    </span>

                    iam a amfo messange

                    <span className="chat-timestamp">
                        {new Date().toUTCString()}  
                    </span>
                
                </p>

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
