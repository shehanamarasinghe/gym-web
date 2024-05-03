import React, { useContext, useEffect, useState } from 'react'
import './MemberMeal.css'
import Slidebar from "../../Components/MDashboardComponents/SlideBar/Slidebar"
import Navbar from '../../Components/MDashboardComponents/Navbar/Navbar'
import  { AuthContext } from "../../Context/authContext"
import './MemberMeal.css'
import axios from 'axios'
import Rating from '../Rating/Rating.jsx'

function MemberMeal() {

  const [showModal, setShowModal] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const [mealPlans, setMealPlans] = useState([]);

  const removeTags = (html) => {
    return html.replace(/<[^>]*>?/gm, '');
  };

  useEffect(() => {
    if (currentUser) {
      axios.get(`/AddMemberMeal/Memberassign/24`)
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
    <div className="MMwrapper">
    {mealPlans.map((plan, index) => (
            <div className="MMcontainer">
            
                <input type="radio" name="slide" id="c1" defaultChecked />
               
                <label htmlFor="c1" className="MMcard">         
                    <div className="check123">
                      <h1>{plan.MealTitle}</h1>
                      <p>{removeTags(plan.MealDesc)}</p>
                    <div className="MMTable">
                  <div className="MMTWeekdays">
                    <h1>Weekdays</h1>
                    <p>SunDay</p>
                    <p>MonDay</p>
                    <p>TuesDay</p>
                    <p>WensDay</p>
                    <p>ThursDay</p>
                    <p>FriDay</p>
                    <p>SaturDay</p>

                  </div>

                  <div className="MMBreakfast">
                  <div className="MMTWeekdays">
                    <h1>Breakfast</h1>
                    <p>{plan.sunb}</p>
                    <p>{plan.monb}</p>
                    <p>{plan.tueb}</p>
                    <p>{plan.wenb}</p>
                    <p>{plan.thub}</p>
                    <p>{plan.frib}</p>
                    <p>{plan.satb}</p>

                  </div>
                  </div>
                  <div className="MMBreakfast">
                  <div className="MMTWeekdays">
                    <h1>Lunch</h1>
                    <p>{plan.sunl}</p>
                    <p>{plan.monl}</p>
                    <p>{plan.tuel}</p>
                    <p>{plan.wenl}</p>
                    <p>{plan.thul}</p>
                    <p>{plan.fril}</p>
                    <p>{plan.satl}</p>

                  </div>
                  </div>
                  <div className="MMBreakfast">
                  <div className="MMTWeekdays">
                    <h1>Dinner</h1>
                    <p>{plan.sund}</p>
                    <p>{plan.mond}</p>
                    <p>{plan.tued}</p>
                    <p>{plan.wend}</p>
                    <p>{plan.thud}</p>
                    <p>{plan.frid}</p>
                    <p>{plan.satd}</p>

                  </div>

                  </div>
              </div>
                    <div className="MMrow">
                        <div className="MMicon">1</div>
                        <div className="MMdescription"><button className='Memberfeed' onClick={() => setShowModal(true)}>Reviwe</button>
                        </div>
                    </div>
                    </div>
                </label>
                <input type="radio" name="slide" id="c2" />
                <label htmlFor="c2" className="MMcard">
                <div className="check123">
                      <h1>Title</h1>
                      <p>ddddd</p>
                    <div className="MMTable">
                  <div className="MMTWeekdays">
                    <h1>Weekdays</h1>
                    <p>SunDay</p>
                    <p>MonDay</p>
                    <p>TuesDay</p>
                    <p>WensDay</p>
                    <p>ThursDay</p>
                    <p>FriDay</p>
                    <p>SaturDay</p>

                  </div>

                  <div className="MMBreakfast">
                  <div className="MMTWeekdays">
                    <h1>Breakfast</h1>
                    <p>Meal 1</p>
                    <p>Meal 2</p>
                    <p>Meal 3</p>
                    <p>Meal 4</p>
                    <p>Meal 5</p>
                    <p>Meal 6</p>
                    <p>Meal 7</p>

                  </div>
                  </div>
                  <div className="MMBreakfast">
                  <div className="MMTWeekdays">
                    <h1>Lunch</h1>
                    <p>Meal 1</p>
                    <p>Meal 2</p>
                    <p>Meal 3</p>
                    <p>Meal 4</p>
                    <p>Meal 5</p>
                    <p>Meal 6</p>
                    <p>Meal 7</p>

                  </div>
                  </div>
                  <div className="MMBreakfast">
                  <div className="MMTWeekdays">
                    <h1>Dinner</h1>
                    <p>Meal 1</p>
                    <p>Meal 2</p>
                    <p>Meal 3</p>
                    <p>Meal 4</p>
                    <p>Meal 5</p>
                    <p>Meal 6</p>
                    <p>Meal 7</p>

                  </div>
                  

                  </div>
                
              </div>
                    <div className="MMrow">
                        <div className="MMicon">2</div>
                        <div className="MMdescription">  <button className='Memberfeed'>Reviwe</button>
                        </div>
                    </div>
                    </div>
                </label>
                <input type="radio" name="slide" id="c4" />
                <label htmlFor="c4" className="MMcard">
                <div className="check123">
                      <h1>Title</h1>
                      <p>What is a good meal plan?A healthy eating plan: Emphasizes 
                        vegetables, fruits, whole grains, and fat-free or low-fat dairy products.</p>
                    <div className="MMTable">
                  <div className="MMTWeekdays">
                    <h1>Weekdays</h1>
                    <p>SunDay</p>
                    <p>MonDay</p>
                    <p>TuesDay</p>
                    <p>WensDay</p>
                    <p>ThursDay</p>
                    <p>FriDay</p>
                    <p>SaturDay</p>

                  </div>

                  <div className="MMBreakfast">
                  <div className="MMTWeekdays">
                    <h1>Breakfast</h1>
                    <p>Meal 1</p>
                    <p>Meal 2</p>
                    <p>Meal 3</p>
                    <p>Meal 4</p>
                    <p>Meal 5</p>
                    <p>Meal 6</p>
                    <p>Meal 7</p>

                  </div>
                  </div>
                  <div className="MMBreakfast">
                  <div className="MMTWeekdays">
                    <h1>Lunch</h1>
                    <p>Meal 1</p>
                    <p>Meal 2</p>
                    <p>Meal 3</p>
                    <p>Meal 4</p>
                    <p>Meal 5</p>
                    <p>Meal 6</p>
                    <p>Meal 7</p>

                  </div>
                  </div>
                  <div className="MMBreakfast">
                  <div className="MMTWeekdays">
                    <h1>Dinner</h1>
                    <p>Meal 1</p>
                    <p>Meal 2</p>
                    <p>Meal 3</p>
                    <p>Meal 4</p>
                    <p>Meal 5</p>
                    <p>Meal 6</p>
                    <p>Meal 7</p>

                  </div>

                  </div>
              </div>
                    <div className="MMrow">
                        <div className="MMicon">3</div>
                        <div className="MMdescription"><button className='Memberfeed'>Reviwe</button>
                        </div>
                    </div>
                    </div>
                </label>
                <input type="radio" name="slide" id="c5" />
                <label htmlFor="c5" className="MMcard">
                <div className="check123">
                      <h1>Title</h1>
                      <p>What is a good meal plan?A healthy eating plan: Emphasizes 
                        vegetables, fruits, whole grains, and fat-free or low-fat dairy products.</p>
                    <div className="MMTable">
                  <div className="MMTWeekdays">
                    <h1>Weekdays</h1>
                    <p>SunDay</p>
                    <p>MonDay</p>
                    <p>TuesDay</p>
                    <p>WensDay</p>
                    <p>ThursDay</p>
                    <p>FriDay</p>
                    <p>SaturDay</p>

                  </div>

                  <div className="MMBreakfast">
                  <div className="MMTWeekdays">
                    <h1>Breakfast</h1>
                    <p>Meal 1</p>
                    <p>Meal 2</p>
                    <p>Meal 3</p>
                    <p>Meal 4</p>
                    <p>Meal 5</p>
                    <p>Meal 6</p>
                    <p>Meal 7</p>

                  </div>
                  </div>
                  <div className="MMBreakfast">
                  <div className="MMTWeekdays">
                    <h1>Lunch</h1>
                    <p>Meal 1</p>
                    <p>Meal 2</p>
                    <p>Meal 3</p>
                    <p>Meal 4</p>
                    <p>Meal 5</p>
                    <p>Meal 6</p>
                    <p>Meal 7</p>

                  </div>
                  </div>
                  <div className="MMBreakfast">
                  <div className="MMTWeekdays">
                    <h1>Dinner</h1>
                    <p>Meal 1</p>
                    <p>Meal 2</p>
                    <p>Meal 3</p>
                    <p>Meal 4</p>
                    <p>Meal 5</p>
                    <p>Meal 6</p>
                    <p>Meal 7</p>

                  </div>

                  </div>
              </div>
                    <div className="MMrow">
                        <div className="MMicon">4</div>
                        <div className="MMdescription"><button className='Memberfeed' onClick={() => setShowModal(true)}>Reviwe</button>
                        </div>
                    </div>
                    </div>
                </label>
            </div>
            ))}
        </div>


    </div>
    {showModal && <Rating onClose={() => setShowModal(false)} />}
    </div>
  )
}

export default MemberMeal
