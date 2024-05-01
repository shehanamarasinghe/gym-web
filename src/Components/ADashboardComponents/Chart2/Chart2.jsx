import React from 'react';
import "./Chart2.css";
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import { Line } from "react-chartjs-2"; 
import revenueData from "./revenueData.json";

const Charts = () => {
  return (
    <div className='Charts'>
      <div className="top-C">
        <h1 className="title-C">Line Chart</h1> 
        <MoreVertRoundedIcon fontSize='small'/>
      </div>
      <div className="bottom-C">
        <Line 
          data={{
            labels: revenueData.map((data) => data.label),
            datasets: [
              {
                label: "Members",
                data: revenueData.map((data) => data.crowd),
                backgroundColor: "rgba(6, 79, 240, 0.2)",
                borderColor: "#064FF0",
                borderWidth: 2,
                pointBackgroundColor: "#064FF0",
                pointBorderColor: "#ffffff",
                pointBorderWidth: 2,
                pointRadius: 5,
                pointHoverBackgroundColor: "#ffffff",
                pointHoverBorderColor: "#064FF0",
                pointHoverBorderWidth: 2,
                tension: 0.4, // Adjust curvature here
              },
            ],
          }}
          options={{
            responsive: true,
            maintainAspectRatio: false, 
            plugins: {
              legend: {
                display: true,
                position: 'bottom', 
              },
            },
            scales: {
              y: {
                beginAtZero: true,
                ticks: {
                  stepSize: 1, // Set the step size to 1
                  max: 7 // Set the maximum value to extend the y-axis
                }
              }
            }
          }}
        />
      </div>
    </div>
  );
};

export default Charts;
