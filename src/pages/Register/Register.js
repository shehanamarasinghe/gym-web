import React from 'react';
import './Register.css';
import bgimage from'../../Images/Image1.jpeg';
import bgimage2 from'../../Images/Image3.jpeg';
import { Link } from 'react-router-dom';

const Register = () =>{
    return (
        <div className='background'>
            <div className='wrapper'>
                <div className='containers'>
                <div className='left-c'>
                    <div className='head-text'>
                        <h1 className='Text-H'> Turn Your ideas into reality</h1>
                        <p className='Text-p'>Start for free & get attractive offers from the community</p>
                </div>
                    <img src={bgimage} alt='' className='bgimage'/>
                    <img src={bgimage2} alt='' className='bgimage1'/>

                </div>
                <div className='right-c'>
                    <div className='form-c-H'>
                        <div className='form-c'>
                            <h3 className='head-form'>Register</h3>
                            <p className='form-p'>Welcome Back! Please Eneter your Details</p>

                        </div>
                        <div className='form-in'>
                            <label> Name</label> 
                            <div className='inputName'>
                             <input type='text' placeholder='Fname' className='inputf'/>
                             <input type='text' placeholder='Lname' className='inputf'/>   
                            </div>
                            <label> UserName </label>
          <input type='text' placeholder='UserName'className='input'/>
          <label> Address </label>
          <input type='text' placeholder='Address'className='input'/>
          <div className='inputName'>
          <label> Email </label> <label>Phone No </label>
          </div>
          <div className='inputName'>
          <input type='email' placeholder='Email' className='inputf'/>
          
          <input type='tel' placeholder='Phone no' className='inputf'/>
                    </div>
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
          <input type='password' placeholder='Password'className='input'/>
          <label> Re-Type Password </label>
          <input type='password' placeholder='Confirm Password'className='input'/>
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
                        </div>
                        <div className='bottom-form'>
                        <p>Do you have an account ? <Link to ="/Login" className='link-G'><span>Login</span> </Link></p> 
                        </div>
                    </div>
                    </div>
                </div>
            </div>
      
        
    );
};
export default Register;