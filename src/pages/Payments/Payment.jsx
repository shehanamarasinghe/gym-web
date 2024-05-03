import React, { useRef, useState } from 'react';
import Sidebar from "../../Components/ADashboardComponents/SlideBar/Slidebar.jsx";
import Navbar from "../../Components/ADashboardComponents/Navbar/Navbar.jsx";
import "./Payment.css";
import UserPayment from './UserPayment.jsx';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ManualPaymentForm = () => {

  const [showModal, setShowModal] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);


  const [value, setValue] = useState('');
  const [editorValue, setEditorValue] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const handlevalue = (e) => {
    setSelectedMonth(e.target.value);
  };

  const modalRef = useRef();
 

  const [inputs, setInputs] = useState({
    Amount: '',
   
  });

  const [err, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/users/Payments", {
        userID: selectedUserId,
        Amount: inputs.Amount,
        Month: selectedMonth 
      });
      navigate('/Payments');
    } catch (err) {
      setError(err.response.data);
    }
  };
  

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Manual Payment</h1>
        </div>
        <div className="bottom">
          <div className="left">
            {selectedUserId && <p>User ID: {selectedUserId}</p>}
          </div>
          <div className="right">
            <form >
              <div className="formInput">
                <label>
                  Amount:
                  <input
                    type="text"
                    placeholder="Enter amount"
                    name='Amount'
                    onChange={handleChange}
                  />
                </label>
                <label>
                  User ID:
                  <input
                    type="text"
                    readOnly
                    value={selectedUserId || ''}
                  />
                </label>

                <label>Select Month:</label>
      <select value={selectedMonth} onChange={handlevalue}>
        <option value="">Select Month</option>
        {months.map((month, index) => (
          <option key={index} value={month}>{month}</option>
        ))}
      </select>
              </div>
              <button type="button" onClick={() => setShowModal(true)}>Add Member</button>
              <button type="submit" onClick={handleSubmit}>Submit Payment</button>
            </form>
          </div>
        </div>
      </div>
      {showModal && <UserPayment onClose={() => setShowModal(false)} onSelectUser={(userId) => setSelectedUserId(userId)} />}
    </div>

  );
};

export default ManualPaymentForm;
