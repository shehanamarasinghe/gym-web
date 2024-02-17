import React,{useState} from 'react'
import './Register.css';
import bgimage from'../../Images/Image1.jpeg';
import bgimage2 from'../../Images/Image3.jpeg';
import { Link } from 'react-router-dom';
import validation from'../../Validations/RegisterValidation';
const Register = () =>{


    const[values, setValues]=useState(
        {
            emali:'',
            password:''
        }
    )

    const[errors, setErrors] =useState({})

    const handleInput= (event) =>{
        setValues(prev =>({...prev,[event.target.name]: [event.target.value]}))
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        setErrors(validation(values));
    }



    return (
        <div className='Register-N'>
            <div className='Register-New'>
                <div className='left-R'>
                <div className='img-R'>
                <img src={bgimage} alt='' className='leftimg'/>
                <img src={bgimage2} alt='' className='left-img'/>
                </div>
                </div>
                <div className='Right-R'>
                    <div className='form-r'>
                        <div className='form-c'>
                            <h3 className='head-form'>Register</h3>
                            <p className='form-p'>Welcome Back! Please Eneter your Details</p>

                        </div>
                        <form action="" onSumbit={handleSubmit}> 
                        <div className='form-in'>
                            <label> Name</label> 
                            <div className='inputName'>
                             <input type='text' placeholder='FName' className='inputf'/>
                             <input type='text' placeholder='LName' className='inputf'/>   
                            </div>
                            <label> UserName </label>
          <input type='text' placeholder='UserName'className='input-in'/>
          <label> Address </label>
          <input type='text' placeholder='Address'className='input-in'/>
          <div className='inputName'>
          <label> Email </label> <label>Phone No </label>
          </div>
          <div className='inputName'>
          <input type='email' placeholder='Email' name='email' onChange={handleInput} className='inputf'/>
          
          <input type='tel' placeholder='Phone no' className='inputf'/> </div>
                    {errors.email && <span className='error-span'>{errors.email} </span>}

                    <label className='radio'> Gender </label>
                    <div className='input-R-B'>
                    <label className='radio-l'>
          <input type="radio" value="male" name="gender" className='radio-s' />
          Male
        </label>
        <label className='radio-l'>
          <input type="radio" value="female" name="gender" className='radio-s'/>
          Female
        </label>
        <label className='radio-l'>
          <input type="radio" value="other" name="gender" className='radio-s'/>
          Other
        </label>
                    </div>
                    <div className='inputName'>

          <label> Age </label> <label>Weight </label><label>Height</label> </div>

          <div className='inputName'>
          <input type='email' placeholder='Age' className='inputf-A'/>
          <input type='tel' placeholder='Weight' className='inputf-A'/>
          <input type='tel' placeholder='Height' className='inputf-A'/> </div>
          <label> Password </label>
          <input type='password' placeholder='Password' name='password' onChange={handleInput} className='input-in'/>
         {errors.password && <span className='error-span'>{errors.password} </span>}

          <label> Re-Type Password </label>
          <input type='password' placeholder='Confirm Password' name="password" onChange={handleInput} className='input-in'/>
          {errors.password && <span className='error-span'>{errors.password} </span>}  
                        </div>
                        <div className='Fogot-c'>
                        <div className='F-text'>
                        <input type='checkbox'></input>
            <p>I agree to the Terms of User</p>
                        </div>
                        <p className='F-link'>Terms & Conditions</p></div>
                        <div className='Log-button'>
                        <button className='Log-s'>Register</button>
                        </div>
                       
                        <div className='bottom-form'>
                        <p>Do you have an account ? <Link to ="/Login" className='link-G'><span>Login</span> </Link></p> 
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
      
        
    );
};
export default Register;