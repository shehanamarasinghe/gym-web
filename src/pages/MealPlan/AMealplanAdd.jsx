import React, { useEffect, useRef, useState } from 'react';
import './AMealplanAdd.css';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AMealplanAdd({ onClose }) {
  const [value, setValue] = useState('');
  const modalRef = useRef();
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    Mtitle: "",
    Desce: "",
    sunb: "",
    monb: "",
    tueb: "",
    wenb: "",
    thub: "",
    frib: "",
    satb: "",
    sunl: "",
    monl: "",
    tuel: "",
    wenl: "",
    thul: "",
    fril: "",
    satl: "",
    sund: "",
    mond: "",
    tued: "",
    wend: "",
    thud: "",
    frid: "",
    satd: "",
    username: "",
    Userc: ""
  });

  const [mealOptions, setMealOptions] = useState([]);
  const [err, setError] = useState(null);

  useEffect(() => {
    const fetchMealNames = async () => {
      try {
        const response = await axios.get("/AddMemberMeal");
        const mealNames = response.data;
        setMealOptions(mealNames);
      } catch (error) {
        console.error("Error fetching meal names:", error);
        setError("Error fetching meal names");
      }
    };
  
    fetchMealNames();
  }, []);

  const handleChange = e => {
    const { name, value } = e.target;
    setInputs(prevInputs => ({ ...prevInputs, [name]: value }));
  };

  const handleFile = e => {
    const file = e.target.files[0];
    setInputs(prevInputs => ({ ...prevInputs, MImage: file }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const formdata = new FormData();
      formdata.append('MImage', inputs.MImage);
      await axios.post("/AddMemberMeal", inputs);
      await axios.post("/AddMemberMeal/upload", formdata);
      navigate('/AMealPlan');
    } catch (err) {
      setError(err.response.data);
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
              <input type='text' placeholder='Title' name='Mtitle' onChange={handleChange} />
              <div className="editorcontainer">
                <ReactQuill className='editor' theme="snow" value={value} onChange={setValue} />
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
                  <select name="sunb1" className='dropdownlist' onChange={handleChange}>
                    <option value="">Select</option>
                    {mealOptions.map((meal, index) => (
                      <option key={index} value={meal}>{meal}</option>
                    ))}
                  </select>

                  <select name="sunb2" className='dropdownlist' onChange={handleChange}>
                      <option value="">Select</option>
                      {mealOptions.map((meal, index) => (
                        <option key={index} value={meal}>{meal}</option>
                      ))}
                    </select>

                    <select name="sunb3" className='dropdownlist' onChange={handleChange}>
                      <option value="">Select</option>
                      {mealOptions.map((meal, index) => (
                        <option key={index} value={meal}>{meal}</option>
                      ))}
                    </select>

                    <select name="sunb4" className='dropdownlist' onChange={handleChange}>
                      <option value="">Select</option>
                      {mealOptions.map((meal, index) => (
                        <option key={index} value={meal}>{meal}</option>
                      ))}
                    </select>

                     <select name="sunb21" className='dropdownlist' onChange={handleChange}>
                      <option value="">Select</option>
                      {mealOptions.map((meal, index) => (
                        <option key={index} value={meal}>{meal}</option>
                      ))}
                    </select>

                    <select name="sunb5" className='dropdownlist' onChange={handleChange}>
                      <option value="">Select</option>
                      {mealOptions.map((meal, index) => (
                        <option key={index} value={meal}>{meal}</option>
                      ))}
                    </select>

                    <select name="sunb6" className='dropdownlist' onChange={handleChange}>
                      <option value="">Select</option>
                      {mealOptions.map((meal, index) => (
                        <option key={index} value={meal}>{meal}</option>
                      ))}
                    </select>
                </div>
                <div className="AMBreakfast">
                  <h1>Lunch</h1>
                  <select name="sunb7" className='dropdownlist' onChange={handleChange}>
                      <option value="">Select</option>
                      {mealOptions.map((meal, index) => (
                        <option key={index} value={meal}>{meal}</option>
                      ))}
                    </select>

                    <select name="sunb8" className='dropdownlist' onChange={handleChange}>
                      <option value="">Select</option>
                      {mealOptions.map((meal, index) => (
                        <option key={index} value={meal}>{meal}</option>
                      ))}
                    </select>

                    <select name="sunb9" className='dropdownlist' onChange={handleChange}>
                      <option value="">Select</option>
                      {mealOptions.map((meal, index) => (
                        <option key={index} value={meal}>{meal}</option>
                      ))}
                    </select>

                    <select name="sunb10" className='dropdownlist' onChange={handleChange}>
                      <option value="">Select</option>
                      {mealOptions.map((meal, index) => (
                        <option key={index} value={meal}>{meal}</option>
                      ))}
                    </select>

                    <select name="sunb11" className='dropdownlist' onChange={handleChange}>
                      <option value="">Select</option>
                      {mealOptions.map((meal, index) => (
                        <option key={index} value={meal}>{meal}</option>
                      ))}
                    </select>

                    <select name="sunb12" className='dropdownlist' onChange={handleChange}>
                      <option value="">Select</option>
                      {mealOptions.map((meal, index) => (
                        <option key={index} value={meal}>{meal}</option>
                      ))}
                    </select>

                    <select name="sunb13" className='dropdownlist' onChange={handleChange}>
                      <option value="">Select</option>
                      {mealOptions.map((meal, index) => (
                        <option key={index} value={meal}>{meal}</option>
                      ))}
                    </select>
                </div>
                <div className="AMBreakfast">
                  <h1>Dinner</h1>
                  <select name="sunb14" className='dropdownlist' onChange={handleChange}>
                      <option value="">Select</option>
                      {mealOptions.map((meal, index) => (
                        <option key={index} value={meal}>{meal}</option>
                      ))}
                    </select>

                    <select name="sunb15" className='dropdownlist' onChange={handleChange}>
                      <option value="">Select</option>
                      {mealOptions.map((meal, index) => (
                        <option key={index} value={meal}>{meal}</option>
                      ))}
                    </select>

                    <select name="sunb16" className='dropdownlist' onChange={handleChange}>
                      <option value="">Select</option>
                      {mealOptions.map((meal, index) => (
                        <option key={index} value={meal}>{meal}</option>
                      ))}
                    </select>

                                    <select name="sunb17" className='dropdownlist' onChange={handleChange}>
                      <option value="">Select</option>
                      {mealOptions.map((meal, index) => (
                        <option key={index} value={meal}>{meal}</option>
                      ))}
                    </select>

                    <select name="sunb18" className='dropdownlist' onChange={handleChange}>
                      <option value="">Select</option>
                      {mealOptions.map((meal, index) => (
                        <option key={index} value={meal}>{meal}</option>
                      ))}
                    </select>

                    <select name="sunb19" className='dropdownlist' onChange={handleChange}>
                      <option value="">Select</option>
                      {mealOptions.map((meal, index) => (
                        <option key={index} value={meal}>{meal}</option>
                      ))}
                    </select>

                    <select name="sunb20" className='dropdownlist' onChange={handleChange}>
                      <option value="">Select</option>
                      {mealOptions.map((meal, index) => (
                        <option key={index} value={meal}>{meal}</option>
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
                <input type='file' onChange={handleFile} />
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
                </div>
              </div>
              <div className="useridget">
                <h1>User Search</h1>
                <input type="text" placeholder="Enter username" name='username' onChange={handleChange} />
                <button>Search</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AMealplanAdd;