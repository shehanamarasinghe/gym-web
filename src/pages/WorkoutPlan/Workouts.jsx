import React, { useRef, useState } from 'react'
import './Workouts.css'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios'; 
import { Link, useNavigate } from 'react-router-dom' 


const Workouts = ({onClose}) => {

  const [value, setValue] = useState('');
  const [editorValue, setEditorValue] = useState('');

  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  const [inputs, setInputs] = useState({
    MSTitle: '',
    MDescription: '',
    WSUser:'',
  });

  const [err, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleEditorChange = (content, delta, source, editor) => {
    setEditorValue(content);
    setInputs(prev => ({ ...prev, MDescription: content }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/workouts", { ...inputs, MDescription: editorValue });
      navigate('/AWorkoutPlan');
    } catch (err) {
      setError(err.response.data);
    }
  };
  return (
    <div  ref={modalRef} onClick={closeModal} className='Addmeals'>
    <div className="AMclosebtn">
       <CloseRoundedIcon className='addclosebtn' onClick={onClose}/>
       <div className="AMaddmealbody">
       <div className="write">
         <div className="AddMcontent">
           <label className='AmealLable'>Enter the Workout Name</label>
           <input type='text' placeholder='Meal Name' name='MSTitle'  onChange={handleChange}/>
           <label className='AmealLable'>Enter the Workout Discription</label>
           <div className="editorcontainor">
             <ReactQuill className='editor' theme="snow" onChange={handleEditorChange} />
           </div>          

           <div className="AddMitem">
                  <h1>User Category</h1>
                  <div className="AddMuserc">
                  <input type='radio' name='WSUser' value="Cardio" id='users' onChange={handleChange}/>
                  <label htmlFor='users'>Cardio</label>

                  </div>
                  <div className="AddMuserc">
                  <input type='radio' name='WSUser' value="Cardio" id='users' onChange={handleChange}/>
                  <label htmlFor='users'>Cardio</label>

                  </div>
                  <div className="AddMuserc">
                  <input type='radio' name='WSUser' value="Cardio" id='users' onChange={handleChange}/>
                  <label htmlFor='users'>Cardio</label>

                  </div>
                  <div className="AddMuserc">
                  <input type='radio' name='WSUser' value="Cardio" id='users' onChange={handleChange}/>
                  <label htmlFor='users'>Cardio</label>

                  </div>
                  
  
                </div>
                <div className="uploadeimg">
           <input step={{display:"none"}} type='file' id='file' name=''/>
           <label className='AMfile' htmlFor='file'>Upload Image</label>
           </div>
           
           <div className="AddMbuttons">
               <button className='AddMbutton1'>Save as a Draft</button>
               <button onClick={handleSubmit}  className='AddMbutton2'>Add Workout</button>
             </div>
           </div>
       </div>
           
   </div>

</div>
 
</div>
)
}


export default Workouts
