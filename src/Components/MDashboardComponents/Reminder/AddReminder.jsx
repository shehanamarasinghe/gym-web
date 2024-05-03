import React, { useRef, useState } from 'react'
import './AddReminder.css'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import AddTaskRoundedIcon from '@mui/icons-material/AddTaskRounded';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddReminder = ({ onClose }) => {

  const AddRef = useRef();

  const closeAdd = (e) => {
    if(AddRef.current === e.target){
      onClose();
    }
  }

  const [value, setValue] = useState('');
  const [editorValue, setEditorValue] = useState('');


  const [inputs, setInputs] = useState({
    Title: '',
    Discription: '',
    DateTime: '',
  });

  const [err, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/reminder", { ...inputs});
      navigate('/Mdashboard');
    } catch (err) {
      setError(err.response.data);
    }
  };

  
  return (
    <div ref={AddRef} onClick={closeAdd} className='Reminder-Main'>
      <div className="Reminder-head">
        <button onClick={onClose} className='addR-btn'><CloseRoundedIcon/></button>
        <div className='re-form' >
          <h1>Add Reminder</h1>
          <form>
            <div className='form-element'>
              <input type='text'
                     placeholder='Enter the Title' name='Title' onChange={handleChange}
                     required/>

              <input type='text'
                     placeholder='Enter the Discription' name='Discription' onChange={handleChange}
                     required/>

              <input type='datetime-local' name='DateTime' onChange={handleChange}
                     required/>

              <button><AddTaskRoundedIcon className='rebuton' onClick={handleSubmit} />Create</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddReminder
