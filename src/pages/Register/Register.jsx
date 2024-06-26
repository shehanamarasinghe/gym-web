//Register.jsx frontend

import React, { useState } from 'react'
import "./Register.css"
import bgimage from '../../Images/Image1.jpeg';
import bgimage2 from '../../Images/Image3.jpeg';
import { Link, useNavigate } from 'react-router-dom' 
//import validation from '../../Validations/RegisterValidation';
import axios from 'axios'; 

function Register() {

  const [inputs,setInputs] = useState({
    firstname: "",
    lastname: "",
    username: "",
    address: "",
    email: "",
    phoneNo: "",
    gender: "",
    age: "",
    weight: "",
    height: "",
    password: "",
    confirmPassword: "",
    
  })

  const [err,setError] = useState(null)
  const navigate = useNavigate()

  const handleChange = e =>{
    setInputs(prev=>({...prev, [e.target.name]: e.target.value}))

  }

  const handleSubmit = async e =>{
    e.preventDefault()
    try{
      await axios.post("/auth/Register", inputs)
      navigate('/Login');

    }catch(err){
      setError(err.response.data)

    }
    
  }

 /* const[values, setValues] = useState({
    firstname: '',
    lastname: '',
    username: '',
    address: '',
    email: '',
    phoneNo: '',
    gender: '',
    age: '',
    weight: '',
    height: '',
    password: '',
    confirmPassword: ''
  })

  const navigate = useNavigate()
  const [errors, setErrors] = useState({})

  const handleInput = (event) =>{
    setValues(prev => ({...prev, [event.target.name]: [event.target.value]}));

  }

  const handleSubmit =(event) => {
    event.preventDefault();
    setErrors(validation(values));
    if(errors.email === "" && errors.password === ""){
      axios.post('http://localhost:8081/Register', values)

      .then(res => {
        navigate('/Login');

      })
      .catch(err => console.log(err));

    }
  }
*/

  return (

    <div className="Register-N">
    <div className='Register-New'>
        
        <div className="left-R">
            <div className="img-R">
            <img src={bgimage} alt='' className='leftimg'/>
            <img src={bgimage2} alt='' className='left-img'/>
            </div>

        </div>

        <div className="Right-R">
            <div className="form-r">
            <div className='form-c'>
             <h3 className='head-form'>Register</h3>
             <p className='form-p'>Welcome Back! Please Enter Your Details. </p>
            </div>
            <form action="" >

            <div className='form-in'>
          <label> Name </label> <div className='inputName'>
          <input type='text' placeholder='FName' name='firstname' onChange={handleChange} className='inputf'/>
          <input type='text' placeholder='LName' name='lastname' onChange={handleChange}  className='inputf'/></div> 
          <label> UserName </label>
          <input type='text' placeholder='UserName' name='username' onChange={handleChange} className='input-in'/>
          <label> Address </label>
          <input type='text' placeholder='Address' name='address' onChange={handleChange} className='input-in'/>
          <div className='inputName'>
          <label> Email </label> <label>Phone No </label></div>
          <div className='inputName'>
          <input type='email' placeholder='Email' name='email' onChange={handleChange} className='inputf'/>
          
          
          <input type='tel' placeholder='Phone no' name='phoneNo' onChange={handleChange} className='inputf'/></div>
          
          
           
           <label className='radio'> Gender </label>
            <div className='input-R-B'>
          <label className='radio-l'>
          <input type="radio" value="male" name="gender" onChange={handleChange} className='radio-s' />
          Male
        </label>
        <label className='radio-l'>
          <input type="radio" value="female" name="gender" onChange={handleChange} className='radio-s'/>
          Female
        </label>
        <label className='radio-l'>
          <input type="radio" value="other" name="gender" onChange={handleChange} className='radio-s'/>
          Other
        </label>
        </div>


        <div className='inputName'>

          <label> Age </label> <label>Weight </label><label>Height</label></div>
          <div className='inputName'>
          <input type='text' placeholder='Age' name='age' onChange={handleChange} className='inputf-A'/>
          <input type='tel' placeholder='Weight' name='weight' onChange={handleChange} className='inputf-A'/>
          <input type='tel' placeholder='Height' name='height' onChange={handleChange} className='inputf-A'/></div>
          <label> Password </label>
          <input type='password' placeholder='Password' name='password' onChange={handleChange} className='input-in'/>
          
          <label> Re-Type Password </label>
          <input type='password' placeholder='Confirm Password' name='confirmPassword' onChange={handleChange} className='input-in'/>
         
        

        </div>
        <div className='Fogot-c'> 
          <div className='F-text'>
            <input type='checkbox'></input>
            <p>I agree to the Terms of User</p>
          </div>

          <p className='F-link'>Terms & Conditions</p>
        </div>

        <div className='Log-button'>
          <button onClick={handleSubmit} className='Log-s'>Register</button>

        </div>
        {err&&<span className='error-span'>{err}</span>}

       
        <div className='bottom-form'>
          <p>
            Do you have an account ? <Link to="/Login" className='link-G'><span>Login</span></Link>
          </p>  
        </div>
        </form>

            </div>
           
        
      </div>
    </div>
    </div>
  )
}

export default Register
