import React from 'react'
import './Welcome.css'
import welcome from "../../../Images/Welcome.jpeg"



const Welcome = () => {

  let Udata;
  Udata = {
    username : "Shehan"
  };


  return (
    <div className='WelcomePost'>
        <div className='welcomeimg'> <img src ={welcome} alt=""className='welcomeimage'/>
        </div>
        <div className='welcometext'>
            <span className='head'>Welcome {Udata.username}</span>
            <span className='para'>Make yourself stronger than your excuses </span>
        </div>
      
    </div>
  )
}

export default Welcome
