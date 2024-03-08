//MDashboard.js frontend

import React from 'react'
import Slidebar from "../../Components/ADashboardComponent/SlideBar/SlideBar"
import "./ADashboard.css"
import Navbar from '../../Components/ADashboardComponent/Navbar/Navbar'
import Widget from '../../Components/ADashboardComponent/Widget/Widget'
import Welcome from '../../Components/ADashboardComponent/Welcome/Welcome'
import Charts from '../../Components/ADashboardComponent/Charts/Charts'
import Chart2 from '../../Components/ADashboardComponent/Chart2/Chart2'


const ADashboard = () => {


  return (
    <div className='Adashboard'>
    <Slidebar/>
    <div className="Dash-Container">
    <Navbar/>
    <div className='Welcome'>
      <Welcome/>
    </div>
    <div className="widgets">
      <Widget type = "user"/>
      <Widget type = "bloodpressure"/>
      <Widget type = "Heart"/>
      <Widget type = "Steps"/>

    </div>
    <div className="chartM">
      <Charts/>
      <Chart2/>

    </div>
    </div>
    
    </div>
  )
}

export default ADashboard