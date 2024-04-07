import React, { useState } from 'react';
import Navbar from '../../Components/ADashboardComponents/Navbar/Navbar';
import Slidebar from '../../Components/ADashboardComponents/SlideBar/Slidebar';

import './AMealPlan.css';
import addimage from '../../Images/Addmore.png'
import AMealplanAdd from './AMealplanAdd.jsx'
import AddMeal from './AddMeal.jsx';
import image1 from '../../Images/m08.jpg';
import image2 from '../../Images/m07.jpg';
import image3 from '../../Images/m06.jpg';

function AMealPlan() {

  const [ShowModalfirst, setShowModalfirst] = useState(false)
  const [ShowModal, setShowModal] = useState(false)

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
                {data.map((d, index) => (
                  <div key={index} className='cardone'>
                    <div className='cardonemini'>
                      <img src={d.img} alt='' className='cardoneimage' />
                    </div>
                    <div className='cardonedetail'>
                      <p className='cardtitle'>{d.name}</p>
                      <p className='carddis'>{d.Discription}</p>
                      <button className='cardbutton'>Read more</button>
                    </div>
                  </div>
                ))}
                 <div className='cardone1'>

                  <img src={addimage} alt='' className='cardicon' onClick={()=> setShowModalfirst(true)}/>
                  <p className='Adddp'>Add More Meal Plans for Cardio users</p>
                  <div className='addbuton'>
                  <button className='mealbuton' onClick={()=> setShowModal(true)}>Add Meal</button>
                  <button className='mealbuton' onClick={()=> setShowModalfirst(true)}>Meal Plan</button>
                  </div>
                  
        
                  </div>
              
            </div>
          </div>
          </div>
          <div className='card2'>
          <span className='cardspan'>Cardio</span>
          <div className='minicard'>
             
             {data.map((d, index) => (
               <div key={index} className='cardone'>
                 <div className='cardonemini'>
                   <img src={d.img} alt='' className='cardoneimage' />
                 </div>
                 <div className='cardonedetail'>
                   <p className='cardtitle'>{d.name}</p>
                   <p className='carddis'>{d.Discription}</p>
                   <button className='cardbutton'>Read more</button>
                 </div>
               </div>
             ))}
               <div className='cardone1'>

<img src={addimage} alt='' className='cardicon' onClick={()=> setShowModalfirst(true)}/>
<p className='Adddp'>Add More Meal Plans for Cardio users</p>
<div className='addbuton'>
<button className='mealbuton' onClick={()=> setShowModal(true)}>Add Meal</button>
<button className='mealbuton' onClick={()=> setShowModalfirst(true)}>Meal Plan</button>
</div>


</div>
           
         </div>
          </div>
          <div className='card3'>
          <span className='cardspan'>Cardio</span>
          <div className='minicard'>
             
             {data.map((d, index) => (
               <div key={index} className='cardone'>
                 <div className='cardonemini'>
                   <img src={d.img} alt='' className='cardoneimage' />
                 </div>
                 <div className='cardonedetail'>
                   <p className='cardtitle'>{d.name}</p>
                   <p className='carddis'>{d.Discription}</p>
                   <button className='cardbutton'>Read more</button>
                   
                 </div>
               </div>
             ))}
               <div className='cardone1'>

<img src={addimage} alt='' className='cardicon' onClick={()=> setShowModalfirst(true)}/>
<p className='Adddp'>Add More Meal Plans for Cardio users</p>
<div className='addbuton'>
<button className='mealbuton' onClick={()=> setShowModal(true)}>Add Meal</button>
<button className='mealbuton' onClick={()=> setShowModalfirst(true)}>Meal Plan</button>
</div>


</div>

           
         </div>
         
          </div>
          
        </div>
        
      </div>
      {ShowModalfirst && <AMealplanAdd onClose = {()=> setShowModalfirst(false)}/>}
      {ShowModal && <AddMeal onClose = {()=> setShowModal(false)}/>}
    
    </div>
    
  );
}

const data = [
  {
    name: 'Cardio Meal',
    img: image1,
    Discription: 'Is the action of deciding meals in advance using your schedule, preferences, foods on hand, seasonal produce, sale items, etc'
  },
  {
    name: 'Cardio Meal',
    img: image1,
    Discription: 'Is the action of deciding meals in advance using your schedule, preferences, foods on hand, seasonal produce, sale items, etc'
  },
  {
    name: 'Cardio Meal',
    img: image1,
    Discription: 'Is the action of deciding meals in advance using your schedule, preferences, foods on hand, seasonal produce, sale items, etc'
  },
 
];

export default AMealPlan;
