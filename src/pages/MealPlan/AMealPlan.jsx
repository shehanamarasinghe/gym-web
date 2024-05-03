// AMealPlan.jsx
import React, { useEffect, useState } from 'react';
import Navbar from '../../Components/ADashboardComponents/Navbar/Navbar';
import Slidebar from '../../Components/ADashboardComponents/SlideBar/Slidebar';
import './AMealPlan.css';
import addimage from '../../Images/Addmore.png';
import AMealplanAdd from './AMealplanAdd.jsx';
import AddMeal from './AddMeal.jsx';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import UserShedule from "./UserSedule.jsx";

function AMealPlan() {
  const [ShowModalfirst, setShowModalfirst] = useState(false);
  const [ShowModalSecond, setShowModalSecond] = useState(false);
  const [ShowModal, setShowModal] = useState({ show: false, mealPlanId: null });
  const [mealPlans, setMealPlans] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const mealsPerPage = 3; 

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('/AddMemberMeal/Mealcard');
      setMealPlans(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const pageCount = Math.ceil(mealPlans.length / mealsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const removeTags = (html) => {
    return html.replace(/<[^>]*>?/gm, '');
  };

  const displayMeals = mealPlans
    .slice(pageNumber * mealsPerPage, (pageNumber + 1) * mealsPerPage)
    .map((plan, index) => (
      <div key={index} className='cardone'>
        <div className='cardonedetail'>
          <p className='cardtitle'>{plan.MealTitle}</p>
          <p className='carddis'>{removeTags(plan.MealDesc)}</p>
          <button className='cardbutton'>Read more</button>
          <button className='cardbutton' onClick={() => setShowModal({ show: true, mealPlanId: plan.MealPlanid })}>Send to User</button>
        </div>
      </div>
    ));

  return (
    <div className='AMealplan'>
      <div className='Adashboard'>
        <Slidebar />
        <div className='ADash-Container'>
          <Navbar />
          <div className="maincard">
            <div className='card1'>
              <span className='cardspan'>Cardio</span>
              <div className='minicard'>
                {displayMeals}
                <div className='cardone1'>
                  <img src={addimage} alt='' className='cardicon' onClick={() => setShowModalfirst(true)} />
                  <p className='Adddp'>Add More Meal Plans for Cardio users</p>
                  <div className='addbuton'>
                    <button className='mealbuton' onClick={() => setShowModalSecond(true)}>Add Meal</button>
                    <button className='mealbuton' onClick={() => setShowModalfirst(true)}>Meal Plan</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {ShowModalfirst && <AMealplanAdd onClose={() => setShowModalfirst(false)} />}
      {ShowModalSecond && <AddMeal onClose={() => setShowModalSecond(false)} />}
      {ShowModal.show && <UserShedule mealPlanId={ShowModal.mealPlanId} onClose={() => setShowModal({ show: false, mealPlanId: null })} />}

      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={'pagination'}
        previousLinkClassName={'pagination__link'}
        nextLinkClassName={'pagination__link'}
        disabledClassName={'pagination__link--disabled'}
        activeClassName={'pagination__link--active'}
      />
    </div>
  );
}

export default AMealPlan;
