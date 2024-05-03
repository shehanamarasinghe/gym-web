import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios'; 
import "./MemberPayment.css"; 
import Slidebar from "../../Components/MDashboardComponents/SlideBar/Slidebar"
import Navbar from '../../Components/MDashboardComponents/Navbar/Navbar'
import  { AuthContext } from "../../Context/authContext"

const PaymentDetails = () => {
  const { currentUser } = useContext(AuthContext);
  const [mealPlans, setMealPlans] = useState([]);

  const removeTags = (html) => {
    return html.replace(/<[^>]*>?/gm, '');
  };

  useEffect(() => {
    if (currentUser) {
      axios.get(`/users/memberPayments/28`)
        .then(response => {
          console.log(response.data);
          setMealPlans(response.data);
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
          setMealPlans([]);
        });
    }
  }, [currentUser]);

  return (
    <div className='Mdashboard'>
    <Slidebar/>
    <div className="Dash-Container">
    <Navbar/>
    <div className="payment-details-container">
      <h1>Payment Details</h1>
      <table>
        <thead>
          <tr>
            <th>Amount</th>
            <th>Date</th>
            <th>Month</th>
          </tr>
        </thead>
        <tbody>
        {mealPlans.map((plan, index) => (
          
            <tr key={plan.Paymentid}>
              <td>{plan.Amount}</td>
              <td>{plan.PaymentDate}</td>
              <td>{plan.Month}</td>
            </tr>
             ))}
          
        </tbody>
      </table>
    </div>
    </div>
    </div>
  );
};

export default PaymentDetails;