import React, { useContext, useState } from 'react'
import "./Login.css"
import bgimage from '../../Images/Image1.jpeg'
import Gicon from '../../Images/Google-icon.png'
import { Link, useNavigate } from 'react-router-dom' 
//import validation from '../../Validations/LoginValidation';
import axios from 'axios'; 
import { AuthContext } from '../../Context/authContext'

const Login = () => {
  
  const [inputs,setInputs] = useState({
    username: "",
    password: "",
    
  })

  const [err,setError] = useState(null)
  const navigate = useNavigate();

  const {login} = useContext(AuthContext);


  const handleChange = e =>{
    setInputs(prev=>({...prev, [e.target.name]: e.target.value}))

  }

  const handleSubmit = async e =>{
    e.preventDefault()
    try{
      await login(inputs)
      navigate('/Mdashboard');
      

    }catch(err){
      setError(err.response.data)

    }
    
  };


 /* const[values, setValues] = useState({
    email:'',
    password:''
  })

  const navigate = useNavigate()

  const [errors, setErrors] = useState({})

  const handleInput = (event) =>{
    setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
  }

  const handleSubmit =(event) => {
    event.preventDefault();
    setErrors(validation(values));

    if(errors.email === "" && errors.password === ""){
      axios.post('http://localhost:8081/Login', values)

      .then(res => {
        if(res.data === 'Success'){
          const { username } = res.data;
          localStorage.setItem('username', username);
          navigate('/Mdashboard');
        }
        else{
          alert("No Recode Found");
        }

      })
      .catch(err => console.log(err));

    }
  }*/


  return (
    
    <div className='login'>
        <div className="loginsection">
            <div className="leftlogin">
                <div className="img-section">
            <div className='head-text'>
             <h1 className='Text-H'>Turn Your ideas <br/>into reality</h1>
             <p className='Text-p'>Start for free and get attractive offers<br/> from the community</p>
            </div>
            <img src={bgimage} alt='' className='bgimage' />
            </div>
            </div>
            <div className="rightlogin">
            <div className='form-c-H'>
        <div className='form-c'>
          <h3 className='head-form'>Login</h3>
          <p className='form-p'>Welcome Back! Please Enter Your Details. </p>
        </div>

        <form action="">

        <div className='form-in'>
          <input type='text' placeholder='User_Name' name='username' onChange={handleChange}/>
    
          <input type='password' placeholder='Password' name='password' onChange={handleChange}/>
          

        </div>
        <div className='Fogot-c'>
          <div className='F-text'>
            <input type='checkbox'></input>
            <p>Remember Me for 30 days</p>
          </div>
          

          <p className='F-link'>Fogot Password ?</p>
        </div>
        {err&&<span className='error-span'>{err}</span>}

        <div className='Log-button'>
          <button onClick={handleSubmit} className='Log-b'>Log in</button>
          <button className='Log-s'>Register</button>

        </div>

        <div className='or-f'>
          <div className='or-f-s'></div>
          <p className='or-f-p'>or</p>
        </div>
        <div>
        <button className='Log-s'>
          <img src={Gicon} alt=''/>
          Sign In with Google
          </button>
          </div>
          </form>
        </div>
        <div className='bottom-form'>
          <p>
            Don't have an account ? <Link to="/Register" className='links'><span>Signup</span></Link>
          </p>  
          
        </div>
            </div>
        </div>
      
    </div>
   
  )
}

export default Login
