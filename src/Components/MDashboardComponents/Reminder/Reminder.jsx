import React, { useState } from 'react';
import "./Reminder.css";
import NotificationsActiveRoundedIcon from '@mui/icons-material/NotificationsActiveRounded';
import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded';
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import AddReminder from './AddReminder';

const Reminder = () => {
  const [showAddReminder, setShowAddReminder] = useState(false);

  return (
    <div className='Reminders'>
      <div className="top-R">
        <h1 className="title-R">Reminders</h1>
        <NotificationsActiveRoundedIcon fontSize='small'/>
      </div>
      <div className="bottom-R">
        <div className="notifications">
          <div className="n-icon">
            <VolumeUpRoundedIcon/>
          </div>
          <div className="n-content">
            <div className="n-info">
              <h3 className="n-header">Workshop</h3>
              <small className="text_muted">
                08:00 AM - 12:00 PM
              </small>
            </div>
            <MoreVertRoundedIcon/>
          </div>
        </div>

        <div className="notifications deactive">
          <div className="n-icon">
            <CreateRoundedIcon/>
          </div>
          <div className="n-content">
            <div className="n-info">
              <h3 className="n-header">Workshop</h3>
              <small className="text_muted">
                08:00 AM - 12:00 PM
              </small>
            </div>
            <MoreVertRoundedIcon/>
          </div>
        </div>

        <div className="notifications deactive">
          <div className="n-icon">
            <CreateRoundedIcon/>
          </div>
          <div className="n-content">
            <div className="n-info">
              <h3 className="n-header">Payments</h3>
              <small className="text_muted">
                08:00 AM - 12:00 PM
              </small>
            </div>
            <MoreVertRoundedIcon/>
          </div>
        </div>

        <div className="notifications add-reminder">
          <div onClick={() => setShowAddReminder(true)} className="add-icon">
            <AddRoundedIcon/>
            <h3 className='add-reminder'>Add Reminder</h3>
          </div>
        </div>
      </div>
      {showAddReminder && <AddReminder onClose={() => setShowAddReminder(false)} />}
    </div>
  );
}

export default Reminder;
