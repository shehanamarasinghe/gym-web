import React,{useEffect,useRef, useState} from 'react'
import './AddWorkout.css'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddWorkout({onClose}) {
  const [WorkoutNames, setWorkoutNames] = useState([]);

  const [inputs, setInputs] = useState({
    MTitle: '', MDescription: '',DoneA1: '',DoneA2: '',DoneA3: '',DoneA4: '',DoneA5: '',DoneL1: '',DoneL2: '',DoneL3: '',DoneL4: '',DoneL5: '',
    DtwoA1: '',DtwoA2: '',DtwoA3: '',DtwoA4: '',DtwoA5: '',DtwoL1: '',DtwoL2: '',DtwoL3: '',DtwoL4: '',DtwoL5: ''

  });
  const [error, setError] = useState(null);
  const modalRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchWorkoutNames = async () => {
      try {
        const response = await axios.get('/workouts/SW');
        setWorkoutNames(response.data.map(Workout => Workout.WorkoutName));
      } catch (error) {
        console.error('Error fetching workout names:', error);
        setError('Error fetching workout names');
      }
    };

    fetchWorkoutNames();
  }, []);

  const handleChange = (e) => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleEditorChange = (content) => {
    setInputs(prev => ({ ...prev, MDescription: content }));
  };

  const handleWorkoutSelect = (e) => {
      setInputs(prev => ({...prev, [e.target.name]: e.target.value}));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/workouts/Works", { ...inputs });
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
            <CloseRoundedIcon className='addclosebtn' onClick={onClose}/>
            <div className="AMaddmealbody">
            <div className="write">
              <div className="AMcontent">
                <input type='text' placeholder='Title' name='MTitle' onChange={handleChange}/>
                <div className="editorcontainor">
                  <ReactQuill className='editor' theme="snow" onChange={handleEditorChange} />
                </div>
                
                <div className="AWTable">
                <div className="mainMM">

                  <h1>Day One</h1>
                  <div className="AWTWeekdays">
                    
                  <div className="AMBreakfast">
                  <h1>Arms</h1>
                  <select className='dropdownlist' name='DoneA1' onChange= {handleWorkoutSelect}>
                  <option value="">Select Workout</option>
                  {WorkoutNames.map((WorkoutName, index) => (
                    <option key={index} value={WorkoutName}>{WorkoutName}</option>
                  ))}
                </select>
                <select className='dropdownlist' name='DoneA2' onChange= {handleWorkoutSelect}>
                  <option value="">Select Workout</option>
                  {WorkoutNames.map((WorkoutName, index) => (
                    <option key={index} value={WorkoutName}>{WorkoutName}</option>
                  ))}
                </select>
                <select className='dropdownlist' name='DoneA3' onChange= {handleWorkoutSelect}>
                  <option value="">Select Workout</option>
                  {WorkoutNames.map((WorkoutName, index) => (
                    <option key={index} value={WorkoutName}>{WorkoutName}</option>
                  ))}
                </select>
                <select className='dropdownlist' name='DoneA4' onChange= {handleWorkoutSelect}>
                  <option value="">Select Workout</option>
                  {WorkoutNames.map((WorkoutName, index) => (
                    <option key={index} value={WorkoutName}>{WorkoutName}</option>
                  ))}
                </select>
                <select className='dropdownlist' name='DoneA5' onChange= {handleWorkoutSelect}>
                  <option value="">Select Workout</option>
                  {WorkoutNames.map((WorkoutName, index) => (
                    <option key={index} value={WorkoutName}>{WorkoutName}</option>
                  ))}
                </select>
                 

                  </div>

                       
                  <div className="AMBreakfast">
                  <h1>Legs</h1>
                  <select className='dropdownlist' name='DoneL1' onChange= {handleWorkoutSelect}>
                  <option value="">Select Workout</option>
                  {WorkoutNames.map((WorkoutName, index) => (
                    <option key={index} value={WorkoutName}>{WorkoutName}</option>
                  ))}
                </select>
                <select className='dropdownlist' name='DoneL2' onChange= {handleWorkoutSelect}>
                  <option value="">Select Workout</option>
                  {WorkoutNames.map((WorkoutName, index) => (
                    <option key={index} value={WorkoutName}>{WorkoutName}</option>
                  ))}
                </select>
                <select className='dropdownlist' name='DoneL3' onChange= {handleWorkoutSelect}>
                  <option value="">Select Workout</option>
                  {WorkoutNames.map((WorkoutName, index) => (
                    <option key={index} value={WorkoutName}>{WorkoutName}</option>
                  ))}
                </select>
                <select className='dropdownlist' name='DoneL4' onChange= {handleWorkoutSelect}>
                  <option value="">Select Workout</option>
                  {WorkoutNames.map((WorkoutName, index) => (
                    <option key={index} value={WorkoutName}>{WorkoutName}</option>
                  ))}
                </select>
                <select className='dropdownlist' name='DoneL5' onChange= {handleWorkoutSelect}>
                  <option value="">Select Workout</option>
                  {WorkoutNames.map((WorkoutName, index) => (
                    <option key={index} value={WorkoutName}>{WorkoutName}</option>
                  ))}
                </select>
                  
                  </div>
                  </div>
                  </div>
                  <div className="mainMM">
                    <h1>Day Two</h1>
                  <div className="AWTWeekdays">
                    <div className="AMBreakfast">
                    <h1>Arms</h1>
                    <select className='dropdownlist' name='DtwoA1' onChange= {handleWorkoutSelect}>
                  <option value="">Select Workout</option>
                  {WorkoutNames.map((WorkoutName, index) => (
                    <option key={index} value={WorkoutName}>{WorkoutName}</option>
                  ))}
                </select>
                <select className='dropdownlist' name='DtwoA2' onChange= {handleWorkoutSelect}>
                  <option value="">Select Workout</option>
                  {WorkoutNames.map((WorkoutName, index) => (
                    <option key={index} value={WorkoutName}>{WorkoutName}</option>
                  ))}
                </select>
                <select className='dropdownlist' name='DtwoA3' onChange= {handleWorkoutSelect}>
                  <option value="">Select Workout</option>
                  {WorkoutNames.map((WorkoutName, index) => (
                    <option key={index} value={WorkoutName}>{WorkoutName}</option>
                  ))}
                </select>
                <select className='dropdownlist' name='DtwoA4' onChange= {handleWorkoutSelect}>
                  <option value="">Select Workout</option>
                  {WorkoutNames.map((WorkoutName, index) => (
                    <option key={index} value={WorkoutName}>{WorkoutName}</option>
                  ))}
                </select>
                <select className='dropdownlist' name='DtwoA5' onChange= {handleWorkoutSelect}>
                  <option value="">Select Workout</option>
                  {WorkoutNames.map((WorkoutName, index) => (
                    <option key={index} value={WorkoutName}>{WorkoutName}</option>
                  ))}
                </select>
               

                  </div>

                       
                  <div className="AMBreakfast">
                  <h1>Legs</h1>
                  <select className='dropdownlist' name='DtwoL1' onChange= {handleWorkoutSelect}>
                  <option value="">Select Workout</option>
                  {WorkoutNames.map((WorkoutName, index) => (
                    <option key={index} value={WorkoutName}>{WorkoutName}</option>
                  ))}
                </select>
                <select className='dropdownlist' name='DtwoL2' onChange= {handleWorkoutSelect}>
                  <option value="">Select Workout</option>
                  {WorkoutNames.map((WorkoutName, index) => (
                    <option key={index} value={WorkoutName}>{WorkoutName}</option>
                  ))}
                </select>
                <select className='dropdownlist' name='DtwoL3' onChange= {handleWorkoutSelect}>
                  <option value="">Select Workout</option>
                  {WorkoutNames.map((WorkoutName, index) => (
                    <option key={index} value={WorkoutName}>{WorkoutName}</option>
                  ))}
                </select>
                <select className='dropdownlist' name='DtwoL4' onChange= {handleWorkoutSelect}>
                  <option value="">Select Workout</option>
                  {WorkoutNames.map((WorkoutName, index) => (
                    <option key={index} value={WorkoutName}>{WorkoutName}</option>
                  ))}
                </select>
                <select className='dropdownlist' name='DtwoL5' onChange= {handleWorkoutSelect}>
                  <option value="">Select Workout</option>
                  {WorkoutNames.map((WorkoutName, index) => (
                    <option key={index} value={WorkoutName}>{WorkoutName}</option>
                  ))}
                </select>
              

                  </div>

                
                  </div>
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
                    <b>visibiity: </b> Public
                  </span>
                  <input step={{display:"none"}} type='file' id='file' name=''/>
                  <label className='AMfile' htmlFor='file'>Upload Image</label>
                  <div className="AMbuttons">
                    <button className='AMbutton1'>Save as a Draft</button>
                    <button onClick={handleSubmit} className='AMbutton2'>Update</button>
                  </div>
                </div>
                <div className="AMitem">
                  <h1>User Category</h1>
                  <div className="AMuserc">
                  <input type='radio' name='User' value="Cardio" id='users'/>
                  <label htmlFor='users'>Cardio</label>

                  </div>
                  <div className="AMuserc">
                  <input type='radio' name='User' value="Cardio" id='users'/>
                  <label htmlFor='users'>Cardio</label>

                  </div>
                  <div className="AMuserc">
                  <input type='radio' name='User' value="Cardio" id='users'/>
                  <label htmlFor='users'>Cardio</label>

                  </div>
                  <div className="AMuserc">
                  <input type='radio' name='User' value="Cardio" id='users'/>
                  <label htmlFor='users'>Cardio</label>

                  </div>
                  
  
                </div>

                <div className="useridget">
                <h1>User Search</h1>
      <input
        type="text"
        placeholder="Enter username"
        
      />
      <button>Search</button>
                  </div>
              </div>
            </div>

            </div>
        </div>
    </div>

  )
}

export default AddWorkout
