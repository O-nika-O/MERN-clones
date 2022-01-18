import React from 'react'
import SidebarChat from './SidebarChat.js';
import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton, Avatar } from '@mui/material';
import './sidebar.css'
import { SearchOutlined } from '@mui/icons-material';

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar-header'>
                <Avatar src='https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80' />
                <div className='sidebar-header-right'>
                    <IconButton>
                        <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                        <ChatIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>

            <div className='sidebar-search'>
                <div className='sidebar-search-container'>
                    <SearchOutlined />
                    <input type="text" placeholder='Serch or start a new chat' />
                </div>
            </div>

            <div className='sidebar-chats'>
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
            
        </div>
    )
}

export default Sidebar

