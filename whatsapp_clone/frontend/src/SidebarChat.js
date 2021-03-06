import React from 'react';
import { Avatar } from '@mui/material';
import './sidebarChat.css'

function SidebarChat() {
    return (
        <div className='sidebarChat'>
            <Avatar />
            <div className='sidebarChat-info'>
                <h2>Room name</h2>
                <p>This is the last message </p>
            </div>
        </div>
    )
}

export default SidebarChat
