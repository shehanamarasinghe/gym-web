import React, { useRef, useState } from 'react';
import './Rating.css';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios'; 
import { Link, useNavigate } from 'react-router-dom'; 
import { FaStar } from 'react-icons/fa';


const AddMeal = ({ onClose }) => {

  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [feedbacks, setFeedback] = useState('');

  const handleMouseOver = (index) => {
    setHoverRating(index);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const handleClick = (index) => {
    setRating(index);
  };

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     console.log('Rating:', rating);
//     console.log('Feedbacks:', feedbacks);
//     try {
//       const response = await axios.post('http://localhost:3001/api/submit', {
//         rating,
//         feedbacks,
//       });
//       console.log('Server Response:', response.data);
//       // Reset the rating and feedback input
//       setRating(0);
//       setFeedback('');
//     } catch (error) {
//       console.error('Error submitting feedback:', error);
//     }
//   };
  const [value, setValue] = useState('');
  const [editorValue, setEditorValue] = useState('');

  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  const [inputs, setInputs] = useState({
     MTitle: '',
    MDescription: '',
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
      await axios.post("/AddMemberMeal/meal", { ...inputs, MDescription: editorValue });
      navigate('/AMealPlan');
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div ref={modalRef} onClick={closeModal} className='Addmeals'>
      <div className="AMclosebtn">
        <CloseRoundedIcon className='addclosebtn' onClick={onClose}/>
        <div className="AMaddmealbody">
          <div className="write">
            <div className="AddMcontent">
            <div>
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        return (
          <FaStar
            key={index}
            size={24}
            style={{ marginRight: '5px', cursor: 'pointer' }}
            color={(hoverRating || rating) >= starValue ? '#ffc107' : '#e4e5e9'}
            onMouseOver={() => handleMouseOver(starValue)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(starValue)}
          />
        );
      })}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={feedbacks}
          onChange={handleFeedbackChange}
          placeholder="Enter your feedback"
          style={{ marginTop: '10px' }}
        />
        <button type="submit" style={{ marginTop: '10px' }}>
          Submit
        </button>
      </form>
    </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMeal;
