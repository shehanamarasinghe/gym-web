import React,{useEffect,useRef, useState} from 'react'
import './AMealplanAdd.css'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios'; 
import {Link, useNavigate } from 'react-router-dom' 

function AMealplanAdd({onClose}) {

  const [value, setvalue] = useState('');
  console.log(value)

  const modalRef = useRef();
  const closeModal = (e) => {
    if(modalRef.current === e.target){
      onClose();
    }
  }


  const [inputs,setInputs] = useState({
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
    Userc: "",
    
  })

  const [err,setError] = useState(null)
  const navigate = useNavigate()

  const handleChange = e =>{
    setInputs(prev=>({...prev, [e.target.name]: e.target.value}))

  }

  const handleSubmit = async e =>{
    e.preventDefault()
    try{
      await axios.post("/auth/MemberMeal", inputs)
      navigate('/Memberworkout');

    }catch(err){
      setError(err.response.data)

    }
    
  }

  return (
    <div ref={modalRef} onClick={closeModal} className='MainAddmeal'>
        <div className="AMclosebtn">
            <CloseRoundedIcon className='addclosebtn' onClick={onClose}/>
            <div className="AMaddmealbody">
            <div className="write">
              <div className="AMcontent">
                <input type='text' placeholder='Title' name='Mtitle' onChange={handleChange}/>
                <div className="editorcontainor">
                  <ReactQuill className='editor' theme="snow" value={value} name='Desce' onChange={handleChange}/>
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
                  <input type='text' placeholder='Meal' name='sunb' onChange={handleChange}/>
                  <input type='text' placeholder='Meal' name='monb' onChange={handleChange}/>
                  <input type='text' placeholder='Meal' name='tueb' onChange={handleChange}/>
                  <input type='text' placeholder='Meal' name='wenb' onChange={handleChange}/>
                  <input type='text' placeholder='Meal' name='thub' onChange={handleChange}/>
                  <input type='text' placeholder='Meal' name='frib' onChange={handleChange}/>
                  <input type='text' placeholder='Meal' name='satb' onChange={handleChange}/>

                  </div>
                  <div className="AMBreakfast">
                  <h1>Lunch</h1>
                  <input type='text' placeholder='Meal'  name='sunl' onChange={handleChange}/>
                  <input type='text' placeholder='Meal'  name='monl' onChange={handleChange}/>
                  <input type='text' placeholder='Meal'  name='tuel' onChange={handleChange}/>
                  <input type='text' placeholder='Meal'  name='wenl' onChange={handleChange}/>
                  <input type='text' placeholder='Meal'  name='thul' onChange={handleChange}/>
                  <input type='text' placeholder='Meal'  name='fril' onChange={handleChange}/>
                  <input type='text' placeholder='Meal'  name='satl' onChange={handleChange}/>

                  </div>
                  <div className="AMBreakfast">
                  <h1>Dinner</h1>
                  <input type='text' placeholder='Meal' name='sund' onChange={handleChange}/>
                  <input type='text' placeholder='Meal' name='mond' onChange={handleChange}/>
                  <input type='text' placeholder='Meal' name='tued' onChange={handleChange}/>
                  <input type='text' placeholder='Meal' name='wend' onChange={handleChange}/>
                  <input type='text' placeholder='Meal' name='thud' onChange={handleChange}/>
                  <input type='text' placeholder='Meal' name='frid' onChange={handleChange}/>
                  <input type='text' placeholder='Meal' name='satd' onChange={handleChange}/>

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
                    <button onClick={handleSubmit}  className='AMbutton2'>Update</button>
                  </div>
                </div>
                <div className="AMitem">
                  <h1>User Category</h1>
                  <div className="AMuserc">
                  <input type='radio' name='Userc' value="Cardio" id='users' onChange={handleChange}/>
                  <label htmlFor='users'>Cardio</label>

                  </div>
                  <div className="AMuserc">
                  <input type='radio' name='Userc' value="Cardio" id='users' onChange={handleChange}/>
                  <label htmlFor='users'>Cardio</label>

                  </div>
                  <div className="AMuserc">
                  <input type='radio' name='Userc' value="Cardio" id='users' onChange={handleChange}/>
                  <label htmlFor='users'>Cardio</label>

                  </div>
                  <div className="AMuserc">
                  <input type='radio' name='Userc' value="Cardio" id='users' onChange={handleChange}/>
                  <label htmlFor='users'>Cardio</label>

                  </div>

                 
                  
  
                </div>
                <div className="useridget">
                <h1>User Search</h1>
      <input
        type="text"
        placeholder="Enter username" name='username' onChange={handleChange} />
      <button>Search</button>
                  </div>
              </div>
            </div>

            </div>
        </div>
    
    </div>
  )
}

export default AMealplanAdd
