//frontend AddMeal.js
import React, { useRef, useState } from 'react'
import './AddMeal.css'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios'; 
import { Link, useNavigate } from 'react-router-dom' 

const AddMeal = ({onClose}) => {
    const [value, setvalue] = useState('');
    console.log(value)
  
    const modalRef = useRef();
    const closeModal = (e) => {
      if(modalRef.current === e.target){
        onClose();
      }
    }

    const [inputs,setInputs] = useState({
        MID: "",
       
        
      })
    
      const [err,setError] = useState(null)
      const navigate = useNavigate()
    
      const handleChange = e =>{
        setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
    
      }
    
      const handleSubmit = async e =>{
        e.preventDefault()
        try{
          await axios.post("/AddMemberMeal/meal", inputs)
          navigate('/AMealPlan');
    
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
                <label className='AmealLable'>Enter the Meal ID</label>
                <input type='text' placeholder='Meal ID' name='MID'  onChange={handleChange}/>
                <label className='AmealLable'>Enter the Meal Name</label>
                <input type='text' placeholder='Meal Name' name='MTitle'  onChange={handleChange}/>
                <label className='AmealLable'>Enter the Meal Discription</label>
                <div className="editorcontainor">
                  <ReactQuill className='editor' theme="snow" />
                </div>
                <div className="uploadeimg">
                <input step={{display:"none"}} type='file' id='file' name=''/>
                <label className='AMfile' htmlFor='file'>Upload Image</label>
                </div>
                <div className="AddMbuttons">
                    <button className='AddMbutton1'>Save as a Draft</button>
                    <button onClick={handleSubmit}  className='AddMbutton2'>Add Meal</button>
                  </div>
                </div>
            </div>
                
        </div>
            
            
            
            
            </div>
      
    </div>
  )
}

export default AddMeal
