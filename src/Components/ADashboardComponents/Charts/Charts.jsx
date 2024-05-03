import React, { useEffect, useState } from 'react';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

const Charts = () => {
  
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const [checkinsByWeekday, setCheckinsByWeekday] = useState([]);

  useEffect(() => {
    axios.get('/store-data/days') 
      .then(response => {
        setCheckinsByWeekday(response.data);
      })
      .catch(error => {
        console.error('Error fetching check-ins by weekday:', error);
      });
  }, []);

  
  const values = daysOfWeek.map(day => {
    const checkinData = checkinsByWeekday.find(data => data.weekday === day);
    return checkinData ? checkinData.total_checkins : 0;
  });

  return (
    <div className='ACharts'>
      <div className="Atop-C">
        <h1 className="Atitle-C">Chart</h1>
        <MoreVertRoundedIcon fontSize='small'/>
      </div>
      <div className="Abottom-C">
        <Bar
          data={{
            labels: daysOfWeek, 
            datasets: [
              {
                label: "Members",
                data: values,
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
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: true,
                position: 'top',
              },
            },
            layout: {
              padding: {
                left: 50,
                right: 50,
                top: 0,
                bottom: 0
              }
            },
            scales: {
              x: {
                grid: {
                  display: false,
                },
              },
              y: {
                beginAtZero: true,
                grid: {
                  display: true,
                },
              },
            },
          }}
          width={700} 
          height={260} 
        />
      </div>
    </div>
  );
};

export default Charts;
