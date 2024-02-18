import React from 'react'
 import './MDashboard.css'

 import Navbar from '../../Components/MDashboardComponent/Navbar/Navbar'
 import Widget from '../../Components/MDashboardComponent/Widget/Widget'
 import Welcome from'../../Components/MDashboardComponent/Welcome/Welcome'
 import Slidebar from '../../Components/MDashboardComponent/SlideBar/SlideBar'

const MDashboard = () => {
  return (
    <div className='Mdashboard'>
      <Slidebar/>
      <div className='Dash-Container'>
        <Navbar/>
        <div className='Welcome'>
          <Welcome/>
        </div>
        <div className='widgets'>
          <Widget type="user"/>
          <Widget type="bloodpressure"/>
          <Widget type="Heart"/>
          <Widget type="Steps"/>

        </div>
        <div className='chartM'>
          
          
        </div>
      </div>
        
      
    </div>
  )
}

export default MDashboard
