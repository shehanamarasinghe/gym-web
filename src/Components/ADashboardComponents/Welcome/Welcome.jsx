import React, { useContext } from 'react'
import "./Welcome.css"
import welcome from "../../../Images/Welcome.png"
import { AuthContext } from '../../../Context/authContext'

const Welcome = () => {

  const {currentUser} = useContext(AuthContext);

  return (
    <div className='Welcomepost'>
      <div className="welcomeimg"><img src = {welcome} alt = "" className='welcomeimage'/></div>
      <div className="welcometext">
        <span className="head">Welcome Admin</span>
        <span className="para">Make yourself stronger than your excuses. </span>
      </div>

    </div>
  )
}

export default Welcome
