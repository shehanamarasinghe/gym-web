import React from 'react'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import NightsStayRoundedIcon from '@mui/icons-material/NightsStayRounded';
import QrCode2RoundedIcon from '@mui/icons-material/QrCode2Rounded';
import NotificationsActiveRoundedIcon from '@mui/icons-material/NotificationsActiveRounded';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import Profile from "../../../Images/Profile.jpeg"
import "./Navbar.css"
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='wrapper'>
            <div className='search'>
                <input type='text' placeholder='Search...'/>
                <SearchRoundedIcon/>
            </div>
            <div className='items'>
                <div className='item'>
                    <LanguageRoundedIcon className='icon1'/>English
                </div>
                <div className='item'>
                    <NightsStayRoundedIcon className='icon1'/>
                </div>
                <div className='item'>
                    <QrCode2RoundedIcon className='icon1'/>
                    
                </div>
                <div className='item'>    
                <NotificationsActiveRoundedIcon className='icon1'/>
                    <div className='counter'>1</div>
                </div>
                <div className='item'>
                    <ChatBubbleOutlineRoundedIcon className='icon1'/> 
                    <div className='counter'>2</div>
                </div>
                <div className='item5'>
                    <img src={Profile} alt='' className='avatar'/>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Navbar


