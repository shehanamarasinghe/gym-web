import React, { useRef, useState } from 'react'
import './Workouts.css'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios'; 
import { Link, useNavigate } from 'react-router-dom' 


const Workouts = ({onClose}) => {

    const [value, setvalue] = useState('');
    console.log(value)
  
    const modalRef = useRef();
    const closeModal = (e) => {
      if(modalRef.current === e.target){
        onClose();
      }
    }

    const [inputs,setInputs] = useState({
        MSID: "",
        MSTitle: "",
        WSUser: "",
        
        
      })
    
      const [err,setError] = useState(null)
      const navigate = useNavigate()
    
      const handleChange = e =>{
        setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
    
      }
    
      const handleSubmit = async e =>{
        e.preventDefault()
        try{
          await axios.post("/AddMemberMeal", inputs)
          navigate('/AddMemberMeal');
    
        }catch(err){
          setError(err.response.data)
    
        }
        
      }
  return (
    <div  ref={modalRef} onClick={closeModal} className='Addmeals'>
    <div className="AMclosebtn">
       <CloseRoundedIcon className='addclosebtn' onClick={onClose}/>
       <div className="AMaddmealbody">
       <div className="write">
         <div className="AddMcontent">
           <label className='AmealLable'>Enter the Workout ID</label>
           <input type='text' placeholder='Meal ID' name='MSID'  onChange={handleChange}/>
           <label className='AmealLable'>Enter the Workout Name</label>
           <input type='text' placeholder='Meal Name' name='MSTitle'  onChange={handleChange}/>
           <label className='AmealLable'>Enter the Workout Discription</label>
           <div className="editorcontainor">
             <ReactQuill className='editor' theme="snow" name='Desce' value={value} />
           </div>
          

           <div className="AddMitem">
                  <h1>User Category</h1>
                  <div className="AddMuserc">
                  <input type='radio' name='WSUser' value="Cardio" id='users'/>
                  <label htmlFor='users'>Cardio</label>

                  </div>
                  <div className="AddMuserc">
                  <input type='radio' name='WSUser' value="Cardio" id='users'/>
                  <label htmlFor='users'>Cardio</label>

                  </div>
                  <div className="AddMuserc">
                  <input type='radio' name='WSUser' value="Cardio" id='users'/>
                  <label htmlFor='users'>Cardio</label>

                  </div>
                  <div className="AddMuserc">
                  <input type='radio' name='WSUser' value="Cardio" id='users'/>
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
