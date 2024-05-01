import React from 'react'
import "./Charts.css"
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import {Chart as ChartJS} from "chart.js/auto";
import {Bar} from "react-chartjs-2";
import revenueData from "./revenueData.json"

const Charts = () => {
  return (
    <div className='ACharts'>
       <div className="Atop-C">
        <h1 className="Atitle-C">Chart</h1>
        <MoreVertRoundedIcon fontSize='small'/>
      </div>
      <div className="Abottom-C">
      <Bar
          data={{
            labels: revenueData.map((data) => data.label),
            datasets: [
              {
                label: "Members",
                data: revenueData.map((data) => data.crowd),
                backgroundColor: "#064FF0",
                borderColor: "#064FF0",
              },
            ],
          }}
          options={{
            elements: {
              bar: {
                tension: 0.5,
              },
            },
          }}
    
        />
      </div>
    </div>
  )
}

export default Charts