import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import "./Header.css";
import Avatar from "@material-ui/core/Avatar"

function Header() {
    return (
        <div className="header">

            <div className="header_left">
                <MenuIcon  />
                <img 
                className="header_logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1920px-YouTube_Logo_2017.svg.png" 
                alt="Logo"  
                />            
            </div>
            
            <div className="header_input">
                <input 
                type="text" 
                placeholder="Search"
                className="header_inputText"  

                />
                <SearchIcon className="header_innputButton" />
            </div>

            <div className="header_icons">
                <VideoCallIcon className="header_icon" />
                <AppsIcon className="header_icon"  />
                <NotificationsIcon className="header_icon" />
                
                <Avatar 
                    alt="Tenkorang Daniel"
                    src="https://scontent.facc5-1.fna.fbcdn.net/v/t1.0-9/115505286_986566811786018_8447295320547340530_o.jpg?_nc_cat=108&_nc_sid=5b7eaf&_nc_eui2=AeEEho7uJY0y8NQ7fkqpFkJbOYAYb6cB5s85gBhvpwHmz-YeOBBBGaqJY9Acc-PV4E3ml5lhb6V5V4Efj2sqvfLt&_nc_ohc=VoMUbk2r46MAX_h7kBC&_nc_ht=scontent.facc5-1.fna&oh=c97c2165102b2a1a3c0eb90ddd3bbc84&oe=5F5ABC18"
                />
            </div>

        </div>
    )
}

export default Header
