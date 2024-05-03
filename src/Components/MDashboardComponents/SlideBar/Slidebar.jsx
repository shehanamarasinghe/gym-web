import React, { useState,useContext } from 'react'
import "./Slidebar.css"
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
import { Link } from 'react-router-dom';
import DirectionsWalkRoundedIcon from '@mui/icons-material/DirectionsWalkRounded';

const Slidebar = () => {

  const { logout } = useContext(AuthContext);
  
  return (
    <div className='Slidebar'>
        <div className="Dheader"><img src = {Logo} alt ="" className='logo'/>
        </div>
        <hr/>
        <div className="List">
            <ul>
            <Link to="/Mdashboard" className='LinkDeco'><li><DashboardCustomizeRoundedIcon className='icon'/><span>Dashboard</span></li></Link>
            <Link to="/Mdashboard" className='LinkDeco'><li><CalendarMonthRoundedIcon className='icon'/><span>Time Schedule</span></li></Link>
            <Link to="/MemberMeal" className='LinkDeco'><li><FastfoodRoundedIcon className='icon'/><span>Meal Plan</span></li></Link>
            <Link to="/Memberworkout" className='LinkDeco'><li><FitnessCenterRoundedIcon className='icon'/><span>Workouts</span></li></Link>
            <Link to="/Mdashboard" className='LinkDeco'><li><DirectionsWalkRoundedIcon className='icon'/><span>exercise</span></li></Link>
            <Link to="/Mdashboard" className='LinkDeco'><li><AddchartRoundedIcon className='icon'/><span>Stats</span></li></Link>
            <Link to="/MemberPayments" className='LinkDeco'><li><PaidRoundedIcon className='icon'/><span>Payments</span></li></Link>
            <Link to="/Mdashboard" className='LinkDeco'><li><NotificationsActiveRoundedIcon className='icon'/><span>Notifications</span></li></Link>
            <Link to="/Mdashboard" className='LinkDeco'><li><SettingsSuggestRoundedIcon className='icon'/><span>Settings</span></li></Link>
            <Link to="/Profile" className='LinkDeco'><li><AccountBoxRoundedIcon className='icon'/><span>Profile</span></li></Link>
            <Link to="/Mdashboard" className='LinkDeco'><li onClick={logout}><LogoutRoundedIcon className='icon'/><span>Logout</span></li></Link>
            </ul>
        </div>
        
    </div>
  )
}

export default Slidebar
