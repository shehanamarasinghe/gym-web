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
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import { AuthContext } from '../../../Context/authContext';
import { Link } from 'react-router-dom';

const Slidebar = () => {

  const { logout } = useContext(AuthContext);
  
  return (
    <div className='Slidebar'>
        <div className="Dheader"><img src = {Logo} alt ="" className='logo'/>
        </div>
        <hr/>
        <div className="List">
            <ul>
                <Link to="/ADashboard" className='LinkDeco'><li><DashboardCustomizeRoundedIcon className='icon'/><span>Dashboard</span></li></Link>
                <Link to="/" className='LinkDeco'><li><CalendarMonthRoundedIcon className='icon'/><span>Time Schedule</span></li></Link>
                <Link to="/AMealPlan" className='LinkDeco'><li><FastfoodRoundedIcon className='icon'/><span>Meal Plan</span></li></Link>
                <Link to="/AWorkoutPlan" className='LinkDeco'><li><FitnessCenterRoundedIcon className='icon'/><span>Workouts</span></li></Link>
                <Link to="/ADashboard" className='LinkDeco'><li><AddchartRoundedIcon className='icon'/><span>Stats</span></li></Link>
                <Link to="/ADashboard" className='LinkDeco'><li><PaidRoundedIcon className='icon'/><span>Payments</span></li></Link>
                <Link to="/Users" className='LinkDeco'><li><GroupRoundedIcon className='icon'/><span>Users</span></li></Link>
                <Link to="/ADashboard" className='LinkDeco'><li><NotificationsActiveRoundedIcon className='icon'/><span>Notifications</span></li></Link> 
                <Link to="/ADashboard" className='LinkDeco'><li><SettingsSuggestRoundedIcon className='icon'/><span>Settings</span></li></Link>
                <Link to="/ADashboard" className='LinkDeco'><li><AccountBoxRoundedIcon className='icon'/><span>Profile</span></li></Link>
                <Link to="/ADashboard" className='LinkDeco'><li onClick={logout}><LogoutRoundedIcon className='icon'/><span>Logout</span></li></Link>
            </ul>
        </div>
        
      
    </div>
  )
}

export default Slidebar
