import React, { useEffect, useState } from 'react';
import Navbar from '../../Components/ADashboardComponents/Navbar/Navbar';
import Slidebar from '../../Components/ADashboardComponents/SlideBar/Slidebar';
import './WorkoutPlan.css';
import addimage from '../../Images/Addmore.png';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import WUserShedule from './WUserSedule.jsx';
import Workouts from './Workouts.jsx';
import AddWorkout from './AddWorkout.jsx'

function WorkoutPlan() {
  const [ShowModalfirst, setShowModalfirst] = useState(false);
  const [ShowModalSecond, setShowModalSecond] = useState(false);
  const [ShowModal, setShowModal] = useState({ show: false, Workoutid: null });
  const [Workouts, setWorkots] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const WorkoutPerPage = 3; 

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('/workouts/workoutcard');
      setWorkots(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const pageCount = Math.ceil(Workouts.length / WorkoutPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const removeTags = (html) => {
    return html.replace(/<[^>]*>?/gm, '');
  };

  const displayWorkouts = Workouts
    .slice(pageNumber * WorkoutPerPage, (pageNumber + 1) * WorkoutPerPage)
    .map((plan, index) => (
      <div key={index} className='cardone'>
        <div className='cardonedetail'>
          <p className='cardtitle'>{plan.Title}</p>
          <p className='carddis'>{removeTags(plan.Discription)}</p>
          <button className='cardbutton'>Read more</button>
          <button className='cardbutton' onClick={() => setShowModal({ show: true, Workoutid: plan.Workoutid })}>Send to User</button>
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
                {displayWorkouts}
                <div className='cardone1'>
                  <img src={addimage} alt='' className='cardicon' onClick={() => setShowModalfirst(true)} />
                  <p className='Adddp'>Add More Meal Plans for Cardio users</p>
                  <div className='addbuton'>
                  <button className='mealbuton' onClick={()=> setShowModalSecond(true)}>Add Workout</button>
                  <button className='mealbuton' onClick={()=> setShowModalfirst(true)}>Workout Plan</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {ShowModalfirst && <AddWorkout onClose={() => setShowModalfirst(false)} />}
      {ShowModalSecond && <Workouts onClose={() => setShowModalSecond(false)} />}
      {ShowModal.show && <WUserShedule mealPlanId={ShowModal.Workoutid} onClose={() => setShowModal({ show: false, Workoutid: null })} />}

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

export default WorkoutPlan;














          