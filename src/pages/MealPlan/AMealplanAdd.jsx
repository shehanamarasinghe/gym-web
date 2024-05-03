import React, { useEffect, useRef, useState } from 'react';
import './AMealplanAdd.css';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AMealplanAdd({ onClose }) {
  const [mealNames, setMealNames] = useState([]);

  const [inputs, setInputs] = useState({
    MTitle: '', MDescription: '', SunBreak:'',
    MonBreak:'',
    TueBreak:'',
    WenBreak:'',
    ThuBreak:'',
    FriBreak:'',
    SatBreak:'',
    SunLun:'',
    MonLun:'',
    TueLun:'',
    WenLun:'',
    ThuLun:'',
    FriLun:'',
    SatLun:'',
    SunDinner:'',
    MonDinner:'',
    TueDinner:'',
    WenDinner:'',
    ThuDinner:'',
    FriDinner:'',
    SatDinner:'',
    Userc:'',

  });
  const [error, setError] = useState(null);
  const modalRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMealNames = async () => {
      try {
        const response = await axios.get('/AddMemberMeal');
        setMealNames(response.data.map(meal => meal.MealName));
      } catch (error) {
        console.error('Error fetching meal names:', error);
        setError('Error fetching meal names');
      }
    };

    fetchMealNames();
  }, []);

  const handleChange = (e) => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleEditorChange = (content) => {
    setInputs(prev => ({ ...prev, MDescription: content }));
  };

  const handleMealSelect = (e) => {
      setInputs(prev => ({...prev, [e.target.name]: e.target.value}));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/AddMemberMeal/mealplan", { ...inputs });
      navigate('/AMealPlan');
    } catch (err) {
      setError(err.response.data.error);
    }
  };
  const closeModal = e => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  return (
    <div ref={modalRef} onClick={closeModal} className='MainAddmeal'>
      <div className="AMclosebtn">
        <CloseRoundedIcon className='addclosebtn' onClick={onClose} />
        <div className="AMaddmealbody">
          <div className="write">
            <div className="AMcontent">
              <input type='text' placeholder='Title' name='MTitle' onChange={handleChange} />
              <div className="editorcontainer">
                <ReactQuill className='editor' theme="snow" onChange={handleEditorChange} />
              </div>
              <div className="AMTable">
                <div className="AMTWeekdays">
                  <h1>Weekdays</h1>
                  <p>SunDay</p>
                  <p>MonDay</p>
                  <p>TuesDay</p>
                  <p>WensDay</p>
                  <p>ThursDay</p>
                  <p>FriDay</p>
                  <p>SaturDay</p>
                </div>
                <div className="AMBreakfast">
                  <h1>Breakfast</h1>
                  <select className='dropdownlist' name='SunBreak' onChange= {handleMealSelect}>
                  <option value="">Select Meal</option>
                  {mealNames.map((mealName, index) => (
                    <option key={index} value={mealName}>{mealName}</option>
                  ))}
                </select>

                <select className='dropdownlist' name='MonBreak' onChange= {handleMealSelect}>
                  <option value="">Select Meal</option>
                  {mealNames.map((mealName, index) => (
                    <option key={index} value={mealName}>{mealName}</option>
                  ))}
                </select>


                <select className='dropdownlist' name='TueBreak' onChange= {handleMealSelect}>
                  <option value="">Select Meal</option>
                  {mealNames.map((mealName, index) => (
                    <option key={index} value={mealName}>{mealName}</option>
                  ))}
                </select>


                <select className='dropdownlist' name='WenBreak' onChange= {handleMealSelect}>
                  <option value="">Select Meal</option>
                  {mealNames.map((mealName, index) => (
                    <option key={index} value={mealName}>{mealName}</option>
                  ))}
                </select>


                <select className='dropdownlist' name='ThuBreak' onChange= {handleMealSelect}>
                  <option value="">Select Meal</option>
                  {mealNames.map((mealName, index) => (
                    <option key={index} value={mealName}>{mealName}</option>
                  ))}
                </select>


                <select className='dropdownlist' name='FriBreak' onChange= {handleMealSelect}>
                  <option value="">Select Meal</option>
                  {mealNames.map((mealName, index) => (
                    <option key={index} value={mealName}>{mealName}</option>
                  ))}
                </select>


                <select className='dropdownlist' name='SatBreak' onChange= {handleMealSelect}>
                  <option value="">Select Meal</option>
                  {mealNames.map((mealName, index) => (
                    <option key={index} value={mealName}>{mealName}</option>
                  ))}
                </select>

                </div>
                <div className="AMBreakfast">
                  <h1>Lunch</h1>
                  <select className='dropdownlist' name='SunLun' onChange= {handleMealSelect}>
                  <option value="">Select Meal</option>
                  {mealNames.map((mealName, index) => (
                    <option key={index} value={mealName}>{mealName}</option>
                  ))}
                </select>


                <select className='dropdownlist' name='MonLun' onChange= {handleMealSelect}>
                  <option value="">Select Meal</option>
                  {mealNames.map((mealName, index) => (
                    <option key={index} value={mealName}>{mealName}</option>
                  ))}
                </select>


                <select className='dropdownlist' name='TueLun' onChange= {handleMealSelect}>
                  <option value="">Select Meal</option>
                  {mealNames.map((mealName, index) => (
                    <option key={index} value={mealName}>{mealName}</option>
                  ))}
                </select>


                <select className='dropdownlist' name='WenLun' onChange= {handleMealSelect}>
                  <option value="">Select Meal</option>
                  {mealNames.map((mealName, index) => (
                    <option key={index} value={mealName}>{mealName}</option>
                  ))}
                </select>


                <select className='dropdownlist' name='ThuLun' onChange= {handleMealSelect}>
                  <option value="">Select Meal</option>
                  {mealNames.map((mealName, index) => (
                    <option key={index} value={mealName}>{mealName}</option>
                  ))}
                </select>


                <select className='dropdownlist' name='FriLun' onChange= {handleMealSelect}>
                  <option value="">Select Meal</option>
                  {mealNames.map((mealName, index) => (
                    <option key={index} value={mealName}>{mealName}</option>
                  ))}
                </select>


                <select className='dropdownlist' name='SatLun' onChange= {handleMealSelect}>
                  <option value="">Select Meal</option>
                  {mealNames.map((mealName, index) => (
                    <option key={index} value={mealName}>{mealName}</option>
                  ))}
                </select>

                </div>
                <div className="AMBreakfast">
                  <h1>Dinner</h1>
                  <select className='dropdownlist' name='SunDinner' onChange= {handleMealSelect}>
                  <option value="">Select Meal</option>
                  {mealNames.map((mealName, index) => (
                    <option key={index} value={mealName}>{mealName}</option>
                  ))}
                </select>


                <select className='dropdownlist' name='MonDinner' onChange= {handleMealSelect}>
                  <option value="">Select Meal</option>
                  {mealNames.map((mealName, index) => (
                    <option key={index} value={mealName}>{mealName}</option>
                  ))}
                </select>


                <select className='dropdownlist' name='TueDinner' onChange= {handleMealSelect}>
                  <option value="">Select Meal</option>
                  {mealNames.map((mealName, index) => (
                    <option key={index} value={mealName}>{mealName}</option>
                  ))}
                </select>


                <select className='dropdownlist' name='WenDinner' onChange= {handleMealSelect}>
                  <option value="">Select Meal</option>
                  {mealNames.map((mealName, index) => (
                    <option key={index} value={mealName}>{mealName}</option>
                  ))}
                </select>


                <select className='dropdownlist' name='ThuDinner' onChange= {handleMealSelect}>
                  <option value="">Select Meal</option>
                  {mealNames.map((mealName, index) => (
                    <option key={index} value={mealName}>{mealName}</option>
                  ))}
                </select>


                <select className='dropdownlist' name='FriDinner' onChange= {handleMealSelect}>
                  <option value="">Select Meal</option>
                  {mealNames.map((mealName, index) => (
                    <option key={index} value={mealName}>{mealName}</option>
                  ))}
                </select>


                <select className='dropdownlist' name='SatDinner' onChange= {handleMealSelect}>
                  <option value="">Select Meal</option>
                  {mealNames.map((mealName, index) => (
                    <option key={index} value={mealName}>{mealName}</option>
                  ))}
                </select>

                </div>
              </div>
            </div>
            <div className="AMmenu">
              <div className="AMitem">
                <h1>Publish</h1>
                <span>
                  <b>Status: </b> Draft
                </span>
                <span>
                  <b>Visibility: </b> Public
                </span>
                <input type='file'/>
                <label className='AMfile' htmlFor='file'>Upload Image</label>
                <div className="AMbuttons">
                  <button className='AMbutton1'>Save as Draft</button>
                  <button onClick={handleSubmit} className='AMbutton2'>Update</button>
                </div>
              </div>
              <div className="AMitem">
                <h1>User Category</h1>
                <div className="AMuserc">
                  <input type='radio' name='Userc' value="Cardio" id='users' onChange={handleChange} />
                  <label htmlFor='users'>Cardio</label>
                  <input type='radio' name='Userc' value="cardio1" id='users' onChange={handleChange} />
                  <label htmlFor='users'>Cardio</label>
                  <input type='radio' name='Userc' value="Cardio2" id='users' onChange={handleChange} />
                  <label htmlFor='users'>Cardio</label>
                  <input type='radio' name='Userc' value="Cardio3" id='users' onChange={handleChange} />
                  <label htmlFor='users'>Cardio</label>
                </div>
              </div>
              {/* <div className="useridget">
                <h1>User Search</h1>
                <input type="text" placeholder="Enter username" name='username' onChange={handleChange} />
                <button>Search</button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AMealplanAdd;