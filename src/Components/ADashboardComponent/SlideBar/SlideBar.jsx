import React, { useState,useContext } from 'react'
import "./SlideBar.css"
import Logo from '../../../Images/LogoBlack.png'
import DashboardCustomizeRoundedIcon from '@mui/icons-material/DashboardCustomizeRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import FastfoodRoundedIcon from '@mui/icons-material/FastfoodRounded';
import FitnessCenterRoundedIcon from '@mui/icons-material/FitnessCenterRounded';
import AddchartRoundedIcon from '@mui/icons-material/AddchartRounded';
import NotificationsActiveRoundedIcon from '@mui/icons-material/NotificationsActiveRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import PaidRoundedIcon from '@mui/icons-material/PaidRounded';
import { AuthContext } from '../../../Context/authContext';

const Slidebar = () => {

  const { logout } = useContext(AuthContext);
  
  return (
    <div className='Slidebar'>
        <div className="Dheader"><img src = {Logo} alt ="" className='logo'/>
        </div>
        <hr/>
        <div className="List">
            <ul>
                <li><DashboardCustomizeRoundedIcon className='icon'/><span>Dashboard</span></li>
                <li><CalendarMonthRoundedIcon className='icon'/><span>Time Schedule</span></li>
                <li><FastfoodRoundedIcon className='icon'/><span>Meal Plan</span></li>
                <li><FitnessCenterRoundedIcon className='icon'/><span>Workouts</span></li>
                <li><AddchartRoundedIcon className='icon'/><span>Stats</span></li>
                <li><PaidRoundedIcon className='icon'/><span>Payments</span></li>
                <li><NotificationsActiveRoundedIcon className='icon'/><span>Notifications</span></li>
                <li><SettingsSuggestRoundedIcon className='icon'/><span>Settings</span></li>
                <li><AccountBoxRoundedIcon className='icon'/><span>Profile</span></li>
                <li onClick={logout}><LogoutRoundedIcon className='icon'/><span>Logout</span></li>
            </ul>
        </div>
        <div className="Bottom">
          <div className="coloroption1"></div>
          <div className="coloroption2"></div>
        </div>
      
    </div>
  )
}

export default Slidebar